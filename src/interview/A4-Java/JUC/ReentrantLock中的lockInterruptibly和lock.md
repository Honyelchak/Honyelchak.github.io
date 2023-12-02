# ReentrantLock中的lockInterruptibly、lock、tryLock

这篇文章的思路：

- 首先尝试着阅读Java文档(双语对照)
- 了解几个关键类之间的关系
- 通过源代码来了解lock和lockInterruptibly的流程
- 最后总结两者的区别

## Java文档(双语)

### lock

> 1. Acquires the lock unless the current thread is interrupted.
>
>    **获得锁，除非当前线程被中断。**
>
> 2. Acquires the lock if it is not held by another thread and returns immediately, setting the lock hold count to one.
>
>    **如果锁未被另一个线程持有，则获取该锁并立即返回，将锁持有计数设置为1。**
>
> 3. If the current thread already holds this lock then the hold count is incremented by one and the method returns immediately.
>
>    **如果当前线程已经持有此锁，则保持计数将增加1，并且方法将立即返回。**
>
> 4. If the lock is held by another thread then the current thread becomes disabled for thread scheduling purposes and lies dormant until the lock has been acquired, at which time the lock hold count is set to one.
>
>    **如果锁被另一个线程持有，则当前线程将因线程调度而禁用，并处于休眠状态，==直到获得锁为止，此时锁持有计数设置为1==。**



**PS：**注意高亮文字，下面要用。

------



### lockInterruptibly

> 1. Acquires the lock unless the current thread is interrupted.
>
>    **获得锁，除非当前线程被中断。**
>
> 2. Acquires the lock if it is not held by another thread and returns immediately, setting the lock hold count to one.
>
>    **如果锁未被另一个线程持有，则获取该锁并立即返回，将锁持有计数设置为1。**
>
> 3. If the current thread already holds this lock then the hold count is incremented by one and the method returns immediately.
>
>    **如果当前线程已经持有此锁，则保持计数将增加1，并且方法将立即返回。**
>
> 4. If the lock is held by another thread then the current thread becomes disabled for thread scheduling purposes and lies dormant until one of two things happens:
>
>    **如果锁被另一个线程持有，则当前线程将被禁用以进行线程调度，并处于休眠状态，直到发生以下两种情况之一：**
>
>    - The lock is acquired by the current thread; or
>
>      **锁由当前线程获取**
>
>    - Some other thread interrupts the current thread.
>
>      **其他线程中断当前线程**
>
> 5. If the lock is acquired by the current thread then the lock hold count is set to one.
>
>    **如果锁是由当前线程获取的，则锁保持计数设置为1。**
>
> 6. If the current thread:
>
>    **如果当前线程：**
>
>    - has its interrupted status set on entry to this method; or
>
>      **在进入此方法时设置了中断状态**
>
>    - is interrupted while acquiring the lock,
>
>      **或在获取锁时被中断**
>
>    then InterruptedException is thrown and the current thread's interrupted status is cleared.
>
>    **那么会抛出InterruptedException异常，并且会清除当前线程的中断状态。**
>
>    In this implementation, as this method is an explicit interruption point, preference is given to responding to the interrupt over normal or reentrant acquisition of the lock.
>
>    **在这个实现中，由于这个方法是一个显式的中断点，所以优先考虑响应中断，而不是对锁的正常获取或可重入获取。**



### tryLock

> 1. Acquires the lock only if it is not held by another thread at the time of invocation.
>
>    **只有在调用时另一个线程未持有锁时，才获取锁。**
>
> 2. Acquires the lock if it is not held by another thread and returns immediately with the value true, setting the lock hold count to one. Even when this lock has been set to use a fair ordering policy, a call to tryLock() will immediately acquire the lock if it is available, whether or not other threads are currently waiting for the lock. This "barging" behavior can be useful in certain circumstances, even though it breaks fairness. If you want to honor the fairness setting for this lock, then use tryLock(0, TimeUnit.SECONDS) which is almost equivalent (it also detects interruption).
>
>    **如果锁未被另一个线程持有，则获取该锁，并立即返回值true，将锁持有计数设置为1。即使此锁已设置为使用公平排序策略，对tryLock（）的调用也将立即获取该锁（如果该锁可用），无论其他线程当前是否在等待该锁。这种“讨价还价”行为在某些情况下是有用的，即使它破坏了公平。如果您想遵守这个锁的公平性设置，那么使用tryLock（0，TimeUnit.SECONDS），这几乎是等效的（它还检测到中断）。**
>
> 3. If the current thread already holds this lock then the hold count is incremented by one and the method returns true.
>
>    **如果当前线程已经持有此锁，则保持计数将增加1，并且方法返回true。**
>
> 4. If the lock is held by another thread then this method will return immediately with the value false.
>
>    **如果这个锁被另一个线程持有，那么这个方法会立即返回false。**



## 核心类之间的关系

可能看到上边官方文档写的有点晦涩。

说简单点就是：

- `lock`不会去相应中断。
- `lockInterruptibly`会相应中断。

**接下来我们看看源码：**

看源码之前，先了解一下几个关键类(`sync`、`ReentrantLock`、`FairSync`、`NonfairSync`)的关系。

- `sync`是`extends`AQS的抽象静态内部类。

- `Sync`、`NonfairSync`、`FairSync`都是`ReentrantLock`的内部类。
- `NonfairSync`、`FairSync`都继承`Sync`。

![image-20200314113919387](D:\Users\Desktop\image-20200314113919387.png)

<center>UML图</center>



## 阅读源码



知道了几个关键类的关系之后，我们就可以看`lock`、`lockInterruptibly`的源码了：

### Lock

`lock`的代码实现：

```java
// lock方法调用的是Sync实现类的lock方法(因为lock()方法在Sync中是抽象方法)
public void lock() {
    sync.lock();
}
```

由于Sync有两个实现类，`FairSync`和`NonfairSync`两个实现类(区别就是是否为公平锁)

由于需要照顾篇幅的缘故，在这里就拿`NonfairSync`来说，她是非公平锁，跟synchronized一样。

`NonfairSync`中的`lock()`先利用CAS尝试改变State的值，如果返回true，将当前线程设置为独占线程，如果返回false，则调用`acquire()`方法

```java

static final class NonfairSync extends Sync {
    
    final void lock() {
        // 1. 先介绍一下 compareAndSetState
        // 它利用CAS来改变state的值(state是在AQS中的，NonfairSync继承Sync继承AQS)
        // 简述CAS:(如果当前内存值等于期望值，那就更新值并返回true;如果不等,返回false)
        // 也就是说，如果state在内存中是0，那么就把他修改为1，并return true。
        // 否则，直接返回false。
        // 2. ReentrantLock中的state表示线程重入锁的次数。
        if (compareAndSetState(0, 1))
            // 将当前线程设置为独占线程。
            setExclusiveOwnerThread(Thread.currentThread());
        else
            // 以独占模式获取，忽略中断。通过调用至少一次tryAcquire来实现，成功时返回。否则线程将排队，可能会重复阻塞和解除阻塞，调用tryAcquire直到成功。
            acquire(1);
    }
    省略......
}
```





```java
public abstract class AbstractQueuedSynchronizer{   
    // 第一个参数为期望值
    // 第二个参数是如果期望值与内存中的值相等的话,需要设置的值。
    protected final boolean compareAndSetState(int expect, int update) {
        // See below for intrinsics setup to support this
        // 第一个参数是当前对象，第二个是state变量的内存偏移量，利用这两个参数可以找到内存中的值。
        // unsafe是一个底层操作类,有大量的native方法。
        return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
    }
    
    public final void acquire(int arg) {
        // 这是一个短路操作
        // 先调用tryAcquire看同步状态是否获取成功
        // 若成功，返回true，那么if中的整个表达式就是false，那么acquire方法就执行结束，
        // 若失败，返回false，接下来再执行addWaiter()、acquireQueued()方法
        if (!tryAcquire(arg) &&
            acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
            selfInterrupt();
    }
   	省略.....
}
```





因篇幅问题，这里只简单介绍AQS中的`addWaiter()`、`acquireQueued()`方法。

- `addWaiter()`将当前线程构造为一个`Node`结点，加入到AQS中的同步队列里。

- `acquireQueued()`

  > Acquires in exclusive uninterruptible mode for thread already in queue. Used by condition wait methods as well as acquire.
  >
  > 在队列中的线程会**以不间断、独占的模式去获取锁。**





总结一下`lock()`的方法的流程：

- 先用`compareAndSetState(int expect, int value)`去尝试修改同步状态(AQS.state)
  - 若修改成功(即获取到锁)，调用`setExclusiveOwnerThread(Thread t)`设置当前线程拥有独占式的访问全限，lock()方法执行结束。
  - 若修改失败(未获得锁)，调用`acquire()`方法

- `acquire()`方法会先调用`tryAcquire`看同步状态是否获取成功。
  - 若成功(即为拿到锁)，返回true。那么if中的整个表达式就是false，那么acquire方法就执行结束。
  - 若失败(未拿到锁)，返回false，接下来再执行`addWaiter()`、`acquireQueued()`方法。
- `addWaiter()`将当前线程构造为一个`Node`结点，加入到AQS中的同步队列里。
- `acquireQueued()`内部利用`for(;;;)`死循环去尝试获得锁，
  - 若获得到锁，那就把该Node从队列中移除，并返回false。那么`acquire()`调用就结束了
  - 若没有获得到锁，那就把节点状态改为`SIGNAL`，然后调用LookSupport.park方法使得当前线程阻塞。
    - 当AQS队列中前驱节点被释放他才会继续执行。



到此`Lock()`详解方法结束！(还不算是特别详细，想再深入的可以读读AQS的源码)

------

### lockInterruptibly

`lockInterruptibly`的代码实现：

```java
// ReentrantLock中的lockInterruptibly()方法
// 调用的是AQS的acquireInterruptibly()方法(因为Sync继承AQS)
public void lockInterruptibly() throws InterruptedException {
    sync.acquireInterruptibly(1);
}
```

```java
// AQS的节选代码
public abstract class AbstractQueuedSynchronizer{

    public final void acquireInterruptibly(int arg) throws InterruptedException {
        // 测试当前线程是否已中断，如果是则抛出异常
        if (Thread.interrupted())
            throw new InterruptedException();
        // 如果当前线程没有中断，尝试去获取同步状态，
        // 如果获取成功(拿到锁),方法调用结束
        // 如果获取失败(没有拿到锁),方法调用doAcquireInterruptibly()
        if (!tryAcquire(arg))
            doAcquireInterruptibly(arg);
	}
    
    // 该方法和上边的acquireQueued()类似
    private void doAcquireInterruptibly(int arg)
        throws InterruptedException {
        // 利用addWaiter()方法为当前线程创建一个结点，并添加到AQS的队列中
        final Node node = addWaiter(Node.EXCLUSIVE);
        boolean failed = true;
        try {
            // 死循环
            for (;;) {
                // 获取到当前线程结点的前驱节点
                final Node p = node.predecessor();
                // 如果p是头部节点的话，尝试获取锁
                if (p == head && tryAcquire(arg)) {
                    // p获取锁成功之后，把当前线程结点设置为头部节点。然后把p结点移除。
                    setHead(node);
                    // 把p结点设置为null，利用垃圾回收
                    p.next = null; // help GC
                    failed = false;
                    return;
                }
                // shouldParkAfterFailedAcquire()方法
                // 利用CAS将当前线程结点状态改为SIGNAL，表示当前线程堵塞。
                // 1.若修改状态成功，则会执行parkAndCheckInterrupt()使得当前线程堵塞。此时会
                // 抛出异常
                // 2.若修改状态失败，因短路，会继续循环(此时线程没有堵塞)。
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    throw new InterruptedException();
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }
    省略....
}
```



### tryLock

```java
// 只获取一次锁，成功则返回true，失败返回false
public boolean tryLock() {
    return sync.nonfairTryAcquire(1);
}
```



```java
abstract static class Sync extends AbstractQueuedSynchronizer {
    final boolean nonfairTryAcquire(int acquires) {
        final Thread current = Thread.currentThread();
        int c = getState();
        // 没有获取过锁
        if (c == 0) {
            // 尝试获取锁
            if (compareAndSetState(0, acquires)) {
                // 将当前线程设置为独占线程。
                setExclusiveOwnerThread(current);
                return true;
            }
        }
        // 判断当前线程是否就是setExclusiveOwnerThread()上次设置的线程
        // 判断是否为可重入锁
        else if (current == getExclusiveOwnerThread()) {
            int nextc = c + acquires;
            if (nextc < 0) // overflow
                throw new Error("Maximum lock count exceeded");
            setState(nextc);
            return true;
        }
        return false;
    }
}
```



## 三者的区别

**lockInterruptibly()测试：**

```java
public static void main(String[] args) {
    ReentrantLock lock = new ReentrantLock();
    Thread thread = new Thread(() -> {
        System.out.println("准备进入同步区");
        try {
            lock.lockInterruptibly();
            System.out.println("执行同步代码");
        } catch (InterruptedException e) {
            System.out.println("线程被中断！");
        }
    });
    // 让main线程获取锁，让thread线程获取锁失败。
    lock.lock();
    // 启动线程
    thread.start();
    // 中断线程
    thread.interrupt();
}
```

输出结果：

![image-20200314174849867](D:\Users\Desktop\文本\A-面试准备\ReentrantLock中的lockInterruptibly和lock.assets\image-20200314174849867.png)

<center>lockInterruptibly()方法优先相应中断</center>



如果在上边的例子中`debug`，会发现thread线程在`acquireInterruptibly()`抛出异常处。

![image-20200314174837868](D:\Users\Desktop\文本\A-面试准备\ReentrantLock中的lockInterruptibly和lock.assets\image-20200314174837868.png)





------

**lock测试：**

```java
public static void main(String[] args) throws InterruptedException {
    ReentrantLock lock = new ReentrantLock();
    Thread thread = new Thread(() -> {
        System.out.println("准备进入同步区");
        lock.lock();
        System.out.println("执行同步代码");
    });
    lock.lock();
    thread.start();
    thread.interrupt();
}
```

输出结果：

![image-20200314175824875](D:\Users\Desktop\文本\A-面试准备\ReentrantLock中的lockInterruptibly和lock.assets\image-20200314175824875.png)

<center>lock()方法不相应中断(会一直卡着)</center>

------

**tryLock测试：**

```java
public static void main(String[] args) throws InterruptedException {
    ReentrantLock lock = new ReentrantLock();
    Thread thread = new Thread(() -> {
        int i = 0;
        System.out.println("准备进入同步区");
        while(!lock.tryLock()){
            System.out.println("等待" + i++ + "次");
        }
        System.out.println(lock.isLocked());
        System.out.println("执行同步代码");
        lock.unlock();
    });
    lock.lock();
    thread.start();
    Thread.sleep(1);
    lock.unlock();
}
```

结果：

```java
准备进入同步区
等待0次
等待1次
    
.......//省略
    
等待52次
等待53次
true
执行同步代码
```



**总结：**

- `lockInterruptibly()`方法调用后一直阻塞到获得锁，但**优先响应中断信号。**
- `lock()`方法调用后一直阻塞直到获取锁。
- `tryLock()`尝试是否能获得锁，如果不能获得立即返回。

