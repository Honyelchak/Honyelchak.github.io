## 1. 面向对象和面向过程的区别

- 面向过程性能比面向对象高
  - Java性能差的主要原因并不是因为它是面向对象语言，而是Java是==半编译语言==，最终的执行代码并不是可以直接被CPU执行的二进制机械码。而面向过程语言大多都是==直接编译成机械码==在电脑上执行，并且其它一些面向过程的脚本语言性能也并不一定比Java好。
- 面向对象易维护、易复用、扩展、低耦合

## 2. Java语言有哪些特点？

- 简单易学
- 面向对象（封装，继承，多态）；
- 平台无关性（ Java 虚拟机实现平台无关性）；
- 可靠性；
- 安全性；
- 支持多线程

## 3. 关于 JVM JDK 和 JRE 最详细通俗的解答

Java虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。

**什么是字节码?采用字节码的好处是什么?**

> 在 Java 中，JVM可以理解的代码就叫做`字节码`（即扩展名为 `.class` 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java程序无须重新编译便可在多种不同操作系统的计算机上运行。

**Java 程序从源代码到运行一般有下面3步：**

[![Java程序运行过程](https://camo.githubusercontent.com/8f6eceddf64b5948c69a398d1a0e777c9c7f8e5b/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f4a6176612532302545372541382538422545352542412538462545382542462539302545382541312538432545382542462538372545372541382538422e706e67)](https://camo.githubusercontent.com/8f6eceddf64b5948c69a398d1a0e777c9c7f8e5b/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f4a6176612532302545372541382538422545352542412538462545382542462539302545382541312538432545382542462538372545372541382538422e706e67)

我们需要格外注意的是 .class->机器码 这一步。在这一步 JVM 类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对比较慢。而且，有些方法和代码块是经常需要被调用的(也就是所谓的热点代码)，所以后面引进了 JIT 编译器，而**JIT 属于运行时编译。当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。**而我们知道，机器码的运行效率肯定是高于 Java 解释器的。这也解释了我们为什么经常会说 Java 是编译与解释共存的语言。

> HotSpot采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是JIT所需要编译的部分。**JVM会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。**JDK 9引入了一种新的编译模式AOT(Ahead of Time Compilation)，它是直接将字节码编译成机器码，这样就避免了JIT预热等各方面的开销。JDK支持分层编译和AOT协作使用。但是 ，AOT 编译器的编译质量是肯定比不上 JIT 编译器的。

**总结：**

Java虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM 实现使 Java 语言“一次编译，随处可以运行”的关键所在。



### JDK 和 JRE

JDK是Java Development Kit，它是功能齐全的Java SDK。它拥有JRE所拥有的一切，还有编译器（javac）和工具（如javadoc和jdb）。**它能够创建和编译程序。**

JRE 是 Java运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，包括 Java虚拟机（JVM），Java类库，java命令和其他的一些基础构件。但是，**它不能用于创建新程序。**

如果你只是为了运行一下 Java 程序的话，那么你只需要安装 JRE 就可以了。如果你需要进行一些 Java 编程方面的工作，那么你就需要安装JDK了。但是，这不是绝对的。有时，即使您不打算在计算机上进行任何Java开发，仍然需要安装JDK。例如，如果要使用JSP部署Web应用程序，那么从技术上讲，您只是在应用程序服务器中运行Java程序。那你为什么需要JDK呢？因为应用程序服务器会将 **JSP 转换为 Java servlet，并且需要使用 JDK 来编译 servlet。**



## 4. Oracle JDK 和 OpenJDK 的对比

- OpenJDK 是一个参考模型并且是完全开源的，而Oracle JDK是OpenJDK的一个实现，并不是完全开源的；
- Oracle JDK 比 OpenJDK 更稳定。



## 5. Java和C++的区别?



- 都是面向对象的语言，都支持封装、继承和多态
- Java 不提供指针来直接访问内存，程序内存更加安全
- Java 的类是单继承的，C++ 支持多重继承；虽然 Java 的类不可以多继承，但是接口可以多继承。
- Java 有自动内存管理机制，不需要程序员手动释放无用内存
- **在 C 语言中，字符串或字符数组最后都会有一个额外的字符‘\0’来表示结束。但是，Java 语言中没有结束符这一概念。**

## 6. 什么是 Java 程序的主类 应用程序和小程序的主类有何不同?

一个程序中可以有多个类，但只能有一个类是主类。在 Java 应用程序中，这个主类是指包含 main（）方法的类。

## 7. 字符型常量和字符串常量的区别?

1. 形式上: 字符常量是单引号引起的一个字符; 字符串常量是双引号引起的若干个字符
2. 含义上: 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个**地址值**(==该字符串在内存中存放位置==)
3. 占内存大小 字符常量只占2个字节; 字符串常量占若干个字节 (**注意： char在Java中占==两个字节==**)



![img](https://camo.githubusercontent.com/d913ab9b3880feab7d326a0904caac5f5e285a56/687474703a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31382d392d31352f38363733353531392e6a7067)

## 8. 构造器 Constructor 是否可被 override?

Constructor 不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。

## 9. 重载和重写的区别

#### 重载

发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。

方法名和参数类型又叫做==方法签名==

#### 重写

重写是子类对父类的==允许访问的方法==的实现过程进行重新编写,发生在子类中，方法名、参数列表必须相同，返回值范围==小于等于==父类，抛出的异常范围小于等于父类，访问修饰符范围==大于等于==父类。另外，如果父类方法访问修饰符为 private 则子类就不能重写该方法。**也就是说方法提供的行为改变，而方法的外貌并没有改变。**

## 10. Java 面向对象编程三大特性: 封装 继承 多态

### 封装

封装==把一个对象的属性私有化，同时提供一些可以被外界访问的属性的方法，==如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。

典型的比如JavaBean

Model层或者实体entity层

### 继承

继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承我们能够非常方便地复用以前的代码。

**关于继承如下 3 点请记住：**

1. 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，**==只是拥有==**。
2. 子类可以拥有自己属性和方法，即子类可以对父类进行扩展。
3. 子类可以用自己的方式实现父类的方法。（以后介绍）。

### 多态

所谓多态就是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在编程时并不确定，而是在程序运行期间才确定，即**一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底是哪个类中实现的方法，必须在由程序运行期间才能决定。**

在Java中有两种形式可以实现多态：继承（多个子类对同一方法的重写）和接口（实现接口并覆盖接口中同一方法）。

## 11. String 、StringBuffer 和 StringBuilder 的区别是什么? String 为什么是不可变的?

**可变性**

简单的来说：String 类中使用 final 关键字修饰字符数组来保存字符串，`private　final　char　value[]`，所以 String 对象是不可变的。而StringBuilder 与 StringBuffer 都继承自 **AbstractStringBuilder** 类，在 AbstractStringBuilder 中也是使用字符数组保存字符串`char[]value` 但是没有用 final 关键字修饰，所以这两种对象都是可变的。

StringBuilder 与 StringBuffer 的构造方法都是调用父类构造方法也就是 AbstractStringBuilder 实现的，大家可以自行查阅源码。

AbstractStringBuilder.java

```
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    char[] value;
    int count;
    AbstractStringBuilder() {
    }
    AbstractStringBuilder(int capacity) {
        value = new char[capacity];
    }
```

**线程安全性**

String 中的对象是不可变的，也就可以理解为常量，线程安全。AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。　

**性能**

每次对 String 类型进行改变的时候，**都会生成一个新的 String 对象**，然后将指针指向新的 String 对象。StringBuffer 每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象并改变对象引用。**相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。**

**对于三者使用的总结：**

1. 操作少量的数据: 适用String
2. 单线程操作字符串缓冲区下操作大量数据: 适用StringBuilder
3. 多线程操作字符串缓冲区下操作大量数据: 适用StringBuffer

## 12. 自动装箱与拆箱

- **装箱**：将基本类型用它们对应的引用类型包装起来；
- **拆箱**：将包装类型转换为基本数据类型；

## 13. 在一个静态方法内调用一个非静态成员为什么是非法的?

由于静态方法可以==不通过对象进行调用==，因此在静态方法里，不能调用其他非静态变量，也不可以访问非静态变量成员。

## 14. 在 Java 中定义一个不做事且没有参数的构造方法的作用

Java 程序在执行子类的构造方法之前，如果没有用 `super() `来调用父类特定的构造方法，则会调用父类中“没有参数的构造方法”。**因此，如果父类中只定义了有参数的构造方法，而在子类的构造方法中又没有用 `super() `来调用父类中特定的构造方法，则编译时将发生错误**，因为 Java 程序在父类中找不到没有参数的构造方法可供执行。解决办法是在父类里加上一个不做事且没有参数的构造方法。 　

## 15. 接口和抽象类的区别是什么？

1. 接口的方法默认是 public，所有方法在接口中不能有实现(Java 8 开始接口方法可以有默认实现），而抽象类可以有非抽象的方法。
2. **接口中除了static、final变量**，不能有其他变量，而抽象类中则不一定。
3. 一个类可以实现多个接口，但只能实现一个抽象类。接口自己本身可以通过extends关键字扩展多个接口。
4. 接口方法默认修饰符是public，抽象方法可以有public、protected和default这些修饰符（抽象方法就是为了被重写所以不能使用private关键字修饰！）。
5. 从设计层面来说，**抽象是对类的抽象，是一种模板设计，而接口是对行为的抽象，是一种行为的规范。**



## 16. 成员变量与局部变量的区别有哪些？

1. 从语法形式上看:成员变量是属于类的，而局部变量是在方法中定义的变量或是方法的参数；成员变量可以被 public,private,static 等修饰符所修饰，而**局部变量不能被访问控制修饰符及 static 所修饰**；但是，成员变量和局部变量都能被 ==final== 所修饰。
2. 从变量在内存中的存储方式来看:如果成员变量是使用`static`修饰的，那么这个成员变量是属于类的，如果没有使用`static`修饰，这个成员变量是属于实例的。**而对象存在于堆内存，局部变量则存在于栈内存。**
3. 从变量在内存中的生存时间上看:成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动消失。
4. 成员变量如果没有被赋初值:则会自动以类型的默认值而赋值（一种情况例外:被 final 修饰的成员变量也必须显式地赋值），而局部变量则不会自动赋值。

## 17. 对象的相等与指向他们的引用相等,两者有什么不同?

对象的相等，比的是内存中存放的内容是否相等。而引用相等，比较的是他们指向的内存地址是否相等。

## 18. 在调用子类构造方法之前会先调用父类没有参数的构造方法,其目的是?

帮助子类做初始化工作。

## 19. == 与 equals(重要)

**==** : 它的作用是判断两个对象的地址是不是相等。即，判断两个对象是不是同一个对象(基本数据类型`==`比较的是值，引用数据类型`==`比较的是内存地址)。

**equals()** : 它的作用也是判断两个对象是否相等。但它一般有两种使用情况：

- 情况1：**类没有覆盖 equals() 方法**。则通过 equals() 比较该类的两个对象时，等价于通过“==”比较这两个对象。

  ```java
  public boolean equals(Object obj) {
       return (this == obj);
  }
  ```

  

- 情况2：类覆盖了 equals() 方法。一般，我们都覆盖 equals() 方法来比较两个对象的内容是否相等；若它们的内容相等，则返回 true (即，认为这两个对象相等)。

**举个例子：**

```
public class test1 {
    public static void main(String[] args) {
        String a = new String("ab"); // a 为一个引用
        String b = new String("ab"); // b为另一个引用,对象的内容一样
        String aa = "ab"; // 放在常量池中
        String bb = "ab"; // 从常量池中查找
        if (aa == bb) // true
            System.out.println("aa==bb");
        if (a == b) // false，非同一对象
            System.out.println("a==b");
        if (a.equals(b)) // true
            System.out.println("aEQb");
        if (42 == 42.0) { // true
            System.out.println("true");
        }
    }
}
```

**说明：**

- **String 中的 equals 方法是被重写过的**，因为 object 的 equals 方法是比较的对象的内存地址，而 String 的 equals 方法比较的是对象的值。
- 当创建 String 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 String 对象。

## 20. hashCode 与 equals (重要)

面试官可能会问你：“你重写过 hashcode 和 equals 么，为什么重写equals时必须重写hashCode方法？”

object中的实现：

```java
public native int hashCode();
```

### hashCode()介绍

hashCode() 的作用是获取哈希码，也称为散列码；它实际上是返回一个int整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。hashCode() 定义在JDK的Object.java中，**这就意味着Java中的任何类都包含有hashCode() 函数。**

散列表存储的是键值对(key-value)，它的特点是：能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）

### 为什么要有 hashCode

**我们先以“HashSet 如何检查重复”为例子来说明为什么要有 hashCode：** 当你把对象加入 HashSet 时，HashSet 会先计算对象的 hashcode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashcode 值作比较，如果没有相符的hashcode，HashSet会假设对象没有重复出现。但是如果发现有相同 hashcode 值的对象，这时会调用 `equals()`方法来检查 hashcode 相等的对象是否真的相同。如果两者相同，HashSet 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。（摘自我的Java启蒙书《Head first java》第二版）。这样我们就**大大减少了 equals 的次数，相应就大大提高了执行速度。**

通过我们可以看出：`hashCode()` 的作用就是**获取哈希码**，也称为散列码；它实际上是返回一个int整数。这个**哈希码的作用**是确定该对象在哈希表中的索引位置。**`hashCode() `在==散列表==中才有用，在其它情况下没用**。在散列表中hashCode() 的作用是获取对象的散列码，进而确定该对象在散列表中的位置。



### hashCode（）与equals（）的相关规定

1. 如果两个对象相等，则hashcode一定也是相同的
2. 两个对象相等,对两个对象分别调用equals方法都返回true
3. 两个对象有相同的hashcode值，它们也不一定是相等的
4. **因此，equals 方法被覆盖过，则 hashCode 方法也必须被覆盖**
5. hashCode() 的默认行为是对堆上的对象产生独特值。如果没有重写 hashCode()，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）

## 21. 为什么Java中只有值传递？



## 22. 简述线程、程序、进程的基本概念。以及他们之间关系是什么?

**线程**与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的**多个线程共享同一块内存空间和一组系统资源**，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。

**程序**是含有**指令和数据的文件，**被存储在磁盘或其他的数据存储设备中，也就是说程序是静态的代码。

**进程**是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。简单来说，一个进程就是一个执行中的程序，它在计算机中一个指令接着一个指令地执行着，同时，每个进程还占有某些系统资源如CPU时间，内存空间，文件，输入输出设备的使用权等等。换句话说，当程序在执行时，将会被操作系统载入内存中。 线程是进程划分成的更小的运行单位。线程和进程最大的不同在于**基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响**。从另一角度来说，进程属于操作系统的范畴，主要是同一段时间内，可以同时执行一个以上的程序，而线程则是在同一程序内几乎同时执行一个以上的程序段。



## 23. 线程有哪些基本状态?

Java 线程在运行的生命周期中的指定时刻只可能处于下面6种不同状态的其中一个状态（图源《Java 并发编程艺术》4.1.4节）。

[![Java线程的状态](https://camo.githubusercontent.com/bd21f0c6bf04fe410fa5397897cc47b9278ae5cb/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612545372542412542462545372541382538422545372539412538342545372538412542362545362538302538312e706e67)](https://camo.githubusercontent.com/bd21f0c6bf04fe410fa5397897cc47b9278ae5cb/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612545372542412542462545372541382538422545372539412538342545372538412542362545362538302538312e706e67)

线程在生命周期中并不是固定处于某一个状态而是随着代码的执行在不同状态之间切换。Java 线程状态变迁如下图所示（图源《Java 并发编程艺术》4.1.4节）：

[![Java线程状态变迁](https://camo.githubusercontent.com/88ca089de34d29350d6b72ee1b9e9c8f8f8691f2/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612532302545372542412542462545372541382538422545372538412542362545362538302538312545352538462539382545382542462538312e706e67)](https://camo.githubusercontent.com/88ca089de34d29350d6b72ee1b9e9c8f8f8691f2/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f31392d312d32392f4a6176612532302545372542412542462545372541382538422545372538412542362545362538302538312545352538462539382545382542462538312e706e67)

由上图可以看出：

线程创建之后它将处于 **NEW（新建）** 状态，调用 `start()` 方法后开始运行，线程这时候处于 **READY（可运行）** 状态。可运行状态的线程获得了 cpu 时间片（timeslice）后就处于 **RUNNING（运行）** 状态。

> 操作系统隐藏 Java虚拟机（JVM）中的 READY 和 RUNNING 状态，它只能看到 RUNNABLE 状态（图源：[HowToDoInJava](https://howtodoinjava.com/)：[Java Thread Life Cycle and Thread States](https://howtodoinjava.com/java/multi-threading/java-thread-life-cycle-and-thread-states/)），所以 Java 系统一般将这两个状态统称为 **RUNNABLE（运行中）** 状态 。

[![RUNNABLE-VS-RUNNING](https://camo.githubusercontent.com/916fefa029894b21921d3085f513b9a7f08ebad2/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d332f52554e4e41424c452d56532d52554e4e494e472e706e67)](https://camo.githubusercontent.com/916fefa029894b21921d3085f513b9a7f08ebad2/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d332f52554e4e41424c452d56532d52554e4e494e472e706e67)

当线程执行 `wait()`方法之后，线程进入 **WAITING（等待）**状态。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态，而 **TIME_WAITING(超时等待)** 状态相当于在等待状态的基础上增加了超时限制，比如通过 `sleep（long millis）`方法或 `wait（long millis）`方法可以将 Java 线程置于 TIMED WAITING 状态。当超时时间到达后 Java 线程将会返回到 RUNNABLE 状态。当线程调用同步方法时，在没有获取到锁的情况下，线程将会进入到 **BLOCKED（阻塞）** 状态。线程在执行 Runnable 的`run()`方法之后将会进入到 **TERMINATED（终止）** 状态。



## 24.关于 final 关键字的一些总结

final关键字主要用在三个地方：变量、方法、类。

1. 对于一个final变量，如果是基本数据类型的变量，则其数值一旦在初始化之后便不能更改；如果是引用类型的变量，则在对其初始化之后便不能再让其指向另一个对象。
2. 当用final修饰一个类时，表明这个类不能被继承。**final类中的所有成员方法都会被隐式地指定为final方法。**
3. 使用final方法的原因有两个。第一个原因是把方法锁定，以防任何继承类修改它的含义；第二个原因是效率。在早期的Java实现版本中，会将final方法转为内嵌调用。但是如果方法过于庞大，可能看不到内嵌调用带来的任何性能提升（现在的Java版本已经不需要使用final方法进行这些优化了）。**类中所有的private方法都隐式地指定为final。**

## 25 Java 中的异常处理

[![Java异常类层次结构图](https://camo.githubusercontent.com/27aa104d93ba0738be0f3d2e7d5b096c1619d12d/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d322f457863657074696f6e2e706e67)](https://camo.githubusercontent.com/27aa104d93ba0738be0f3d2e7d5b096c1619d12d/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d322f457863657074696f6e2e706e67)

在 Java 中，所有的异常都有一个共同的祖先java.lang包中的 **Throwable类**。Throwable： 有两个重要的子类：**Exception（异常）** 和 **Error（错误）** ，二者都是 Java 异常处理的重要子类，各自都包含大量子类。

**Error（错误）:是程序无法处理的错误**，表示运行应用程序中较严重问题。**大多数错误与代码编写者执行的操作无关**，而表示代码运行时 JVM（Java 虚拟机）出现的问题。例如，Java虚拟机运行错误（Virtual MachineError），当 JVM 不再有继续执行操作所需的内存资源时，将出现 OutOfMemoryError。这些异常发生时，Java虚拟机（JVM）一般会选择线程终止。

这些错误表示故障发生于虚拟机自身、或者发生在虚拟机试图执行应用时，如Java虚拟机运行错误（Virtual MachineError）、类定义错误（NoClassDefFoundError）等。这些错误是不可查的，因为它们在应用程序的控制和处理能力之 外，而且绝大多数是程序运行时不允许出现的状况。对于设计合理的应用程序来说，即使确实发生了错误，本质上也不应该试图去处理它所引起的异常状况。在 Java中，错误通过Error的子类描述。

**Exception（异常）:是程序本身可以处理的异常**。Exception 类有一个重要的子类 **RuntimeException**。RuntimeException 异常由Java虚拟机抛出。**NullPointerException**（要访问的变量没有引用任何对象时，抛出该异常）、**ArithmeticException**（算术运算异常，一个整数除以0时，抛出该异常）和 **ArrayIndexOutOfBoundsException** （下标越界异常）。

**注意：异常和错误的区别：异常能被程序本身处理，错误是无法处理。**

### Throwable类常用方法

- **public string getMessage()**:返回异常发生时的简要描述
- **public string toString()**:返回异常发生时的详细信息
- **public string getLocalizedMessage()**:返回异常对象的本地化信息。使用Throwable的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与getMessage（）返回的结果相同
- **public void printStackTrace()**:在控制台上打印Throwable对象封装的异常信息

### 异常处理总结

- **try 块：** 用于捕获异常。其后可接零个或多个catch块，如果没有catch块，则必须跟一个finally块。
- **catch 块：** 用于处理try捕获到的异常。
- **finally 块：** 无论是否捕获或处理异常，finally块里的语句都会被执行。当在try块或catch块中遇到return 语句时，finally语句块将在方法返回之前被执行。

**在以下4种特殊情况下，finally块不会被执行：**

1. 在finally语句块第一行发生了异常。 因为在其他行，finally块还是会得到执行
2. 在前面的代码中用了System.exit(int)已退出程序。 exit是带参函数 ；若该语句在异常语句之后，finally会执行
3. 程序所在的线程死亡。
4. 关闭CPU。

下面这部分内容来自issue:https://github.com/Snailclimb/JavaGuide/issues/190。

**注意：** 当try语句和finally语句中都有return语句时，在方法返回之前，finally语句的内容将被执行，并且finally语句的返回值将会覆盖原始的返回值。如下：

```
    public static int f(int value) {
        try {
            return value * value;
        } finally {
            if (value == 2) {
                return 0;
            }
        }
    }
```

如果调用 `f(2)`，返回值将是0，因为finally语句的返回值覆盖了try语句块的返回值。

### checked异常和unchecked异常

在Java中，有两种主要类型的异常：checked 异常（Checked Exception）和 unchecked 异常（Unchecked Exception）。

1. **Checked 异常（Checked Exception）**：

   - Checked 异常是 Java 异常体系中的一种，它继承自 `java.lang.Exception` 类或其子类，但不继承自 `java.lang.RuntimeException`。
   - Checked 异常通常表示在编程中可能发生的一些受检查的错误或异常情况，例如文件不存在、IO 错误等。
   - 编译器要求程序员必须显式地处理或声明（throws）这些异常，否则编译不会通过。

   示例：

   ```
   javaCopy codetry {
       FileInputStream file = new FileInputStream("file.txt");
       // 其他可能抛出 IOException 的代码
   } catch (IOException e) {
       // 处理或抛出异常
   }
   ```

2. **Unchecked 异常（Unchecked Exception）**：

   - Unchecked 异常是 Java 异常体系中的一种，它继承自 `java.lang.RuntimeException` 类或其子类。
   - Unchecked 异常通常表示编程错误或不可预测的异常情况，例如空指针异常、数组越界异常等。
   - 与 Checked 异常不同，编译器不会强制要求程序员显式地处理或声明这些异常，因此它们通常不需要在方法签名中使用 `throws` 关键字。

   示例：

   ```
   javaCopy codeString str = null;
   int length = str.length(); // 可能抛出 NullPointerException，无需显式处理
   ```

在异常处理中，Checked 异常需要在代码中显式处理或声明，而 Unchecked 异常通常由程序员在编码过程中避免，因为它们通常表示编程错误或不可恢复的异常情况。但是，如果需要捕获或处理 Unchecked 异常，仍然可以使用 try-catch 块来处理它们。



## 26 Java序列化中如果有些字段不想进行序列化，怎么办？

对于不想进行序列化的变量，使用`transient`关键字修饰。

transient关键字的作用是：阻止实例中那些用此关键字修饰的的变量序列化；当对象被反序列化时，被transient修饰的变量值不会被持久化和恢复。transient只能修饰变量，不能修饰类和方法。



## 27 获取用键盘输入常用的两种方法

方法1：通过 Scanner

```
Scanner input = new Scanner(System.in);
String s  = input.nextLine();
input.close();
```

方法2：通过 BufferedReader

```
BufferedReader input = new BufferedReader(new InputStreamReader(System.in)); 
String s = input.readLine(); 
```



## 28 Java 中 IO 流





## 29. 常见关键字总结:static,final,this,super

### static 关键字主要有以下四种使用场景

1. 修饰成员变量和成员方法
2. 静态代码块
3. 修饰类(只能修饰内部类)
4. 静态导包(用来导入类中的静态资源，1.5之后的新特性)

### 修饰成员变量和成员方法(常用)

被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享，可以并且建议通过类名调用。被static 声明的成员变量属于静态成员变量，静态变量 存放在 Java 内存区域的方法区。

方法区与 Java 堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。虽然Java虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做 Non-Heap（非堆），目的应该是与 Java 堆区分开来。

HotSpot 虚拟机中方法区也常被称为 “永久代”，本质上两者并不等价。仅仅是因为 HotSpot 虚拟机设计团队用永久代来实现方法区而已，这样 HotSpot 虚拟机的垃圾收集器就可以像管理 Java 堆一样管理这部分内存了。但是这并不是一个好主意，因为这样更容易遇到内存溢出问题。

调用格式：

- 类名.静态变量名
- 类名.静态方法名()

如果变量或者方法被 private 则代表该属性或者该方法只能在类的内部被访问而不能在类的外部被访问。

测试方法：

```
public class StaticBean {

    String name;
    静态变量
    static int age;

    public StaticBean(String name) {
        this.name = name;
    }
    静态方法
    static void SayHello() {
        System.out.println(Hello i am java);
    }
    @Override
    public String toString() {
        return StaticBean{ +
                name=' + name + ''' + age + age +
                '}';
    }
}
public class StaticDemo {

    public static void main(String[] args) {
        StaticBean staticBean = new StaticBean(1);
        StaticBean staticBean2 = new StaticBean(2);
        StaticBean staticBean3 = new StaticBean(3);
        StaticBean staticBean4 = new StaticBean(4);
        StaticBean.age = 33;
        StaticBean{name='1'age33} StaticBean{name='2'age33} StaticBean{name='3'age33} StaticBean{name='4'age33}
        System.out.println(staticBean+ +staticBean2+ +staticBean3+ +staticBean4);
        StaticBean.SayHello();Hello i am java
    }

}
```

### 静态代码块

静态代码块定义在类中方法外, 静态代码块在非静态代码块之前执行(静态代码块—非静态代码块—构造方法)。 该类不管创建多少对象，静态代码块只执行一次.



一个类中的静态代码块可以有多个，位置可以随便放，它不在任何的方法体内，JVM加载类时会执行这些静态的代码块，如果静态代码块有多个，JVM将按照它们在类中出现的先后顺序依次执行它们，每个代码块只会被执行一次。

![img](http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-14/88531075.jpg)

静态代码块对于定义在它之后的静态变量，可以赋值，但是不能访问。



###  静态内部类

静态内部类与非静态内部类之间存在一个最大的区别，我们知道非静态内部类在编译完成之后会隐含地保存着一个引用，该引用是指向创建它的外围类，但是静态内部类却没有。没有这个引用就意味着：

1. 它的创建是不需要依赖外围类的创建。
2. 它不能使用任何外围类的非static成员变量和方法。

Example（静态内部类实现单例模式）

```
public class Singleton {
    
    声明为 private 避免调用默认构造方法创建对象
    private Singleton() {
    }
    
    声明为 private 表明静态内部该类只能在该 Singleton 类中被访问
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getUniqueInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

当 Singleton 类加载时，静态内部类 SingletonHolder 没有被加载进内存。只有当调用 `getUniqueInstance() `方法从而触发 `SingletonHolder.INSTANCE` 时 SingletonHolder 才会被加载，**此时初始化 INSTANCE 实例，并且 JVM 能确保 INSTANCE 只被实例化一次。**

这种方式不仅具有延迟初始化的好处，而且由 JVM 提供了对线程安全的支持。

### 静态导包

格式为：import static

这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法

```
  Math. --- 将Math中的所有静态资源导入，这时候可以直接使用里面的静态方法，而不用通过类名进行调用
  如果只想导入单一某个静态方法，只需要将换成对应的方法名即可
 
import static java.lang.Math.;

  换成import static java.lang.Math.max;具有一样的效果
 
public class Demo {
  public static void main(String[] args) {
 
    int max = max(1,2);
    System.out.println(max);
  }
}
```

###  静态方法与非静态方法

静态方法属于类本身，非静态方法属于从该类生成的每个对象。 如果您的方法执行的操作不依赖于其类的各个变量和方法，请将其设置为静态（这将使程序的占用空间更小）。 否则，它应该是非静态的。

Example

```
class Foo {
    int i;
    public Foo(int i) { 
       this.i = i;
    }

    public static String method1() {
       return An example string that doesn't depend on i (an instance variable);
       
    }

    public int method2() {
       return this.i + 1;  Depends on i
    }

}
```

你可以像这样调用静态方法：`Foo.method1（）`。 如果您尝试使用这种方法调用 method2 将失败。 但这样可行：`Foo bar = new Foo（1）;bar.method2（）;`

总结：

- 在外部调用静态方法时，可以使用”类名.方法名”的方式，也可以使用”对象名.方法名”的方式。而实例方法只有后面这种方式。也就是说，调用静态方法可以无需创建对象。
- 静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），而不允许访问实例成员变量和实例方法；实例方法则无此限制

### static{}静态代码块与{}非静态代码块(构造代码块)

相同点： 都是在JVM加载类时且在构造方法执行之前执行，在类中都可以定义多个，定义多个时按定义的顺序执行，一般在代码块中对一些static变量进行赋值。

不同点： 静态代码块在非静态代码块之前执行(**静态代码块—非静态代码块—构造方法)**。静态代码块只在第一次new执行一次，之后不再执行，**而非静态代码块在每new一次就执行一次**。 非静态代码块可在普通方法中定义(不过作用不大)；而静态代码块不行。

一般情况下,如果有些代码比如一些项目最常用的变量或对象必须在项目启动的时候就执行的时候,需要使用静态代码块,这种代码是主动执行的。如果我们想要设计不需要创建对象就可以调用类中的方法，例如：Arrays类，Character类，String类等，就需要使用静态方法, 两者的区别是 静态代码块是自动执行的而静态方法是被调用的时候才执行的.

Example

```
public class Test {
    public Test() {
        System.out.print(默认构造方法！--);
    }

     非静态代码块
    {
        System.out.print(非静态代码块！--);
    }
     静态代码块
    static {
        System.out.print(静态代码块！--);
    }

    public static void test() {
        System.out.print(静态方法中的内容! --);
        {
            System.out.print(静态方法中的代码块！--);
        }

    }
    public static void main(String[] args) {

        Test test = new Test();   
        Test.test();静态代码块！--静态方法中的内容! --静态方法中的代码块！--
    }
```

当只执行 `Test.test();` 时输出：

```
静态代码块！--静态方法中的内容! --静态方法中的代码块！--
```

只执行 `Test test = new Test();` 时输出：

```
静态代码块！--非静态代码块！--默认构造方法！--
```

非静态代码块与构造函数的区别是： 非静态代码块是给所有对象进行统一初始化，而构造函数是给对应的对象初始化。





## 30. Collections 工具类和 Arrays 工具类常见方法总结



#### 1、Collection 与 Collections的区别

1. java.util.Collection 是一个**集合接口（集合类的一个顶级接口）**。它提供了对集合对象进行基本操作的通用接口方法。Collection接口在Java 类库中有很多具体的实现。Collection接口的意义是为各种具体的集合提供了最大化的统一操作方式，其直接继承接口有List与Set。

> Collection  
> ├List  
> │├LinkedList  
> │├ArrayList  
> │└Vector  
> │　└Stack  
> └Set

2. Collections则是集合类的一个工具类/帮助类，其中提供了一系列静态方法，用于对集合中元素进行排序、搜索以及线程安全等各种操作。

#### Collections

Collections 工具类常用方法:

1. 排序
2. 查找,替换操作
3. 同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合)

##### 排序操作

```java
void reverse(List list)//反转
void shuffle(List list)//随机排序
void sort(List list)//按自然排序的升序排序
void sort(List list, Comparator c)//定制排序，由Comparator控制排序逻辑
void swap(List list, int i , int j)//交换两个索引位置的元素
void rotate(List list, int distance)//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面。
```

##### 查找,替换操作

```java
int binarySearch(List list, Object key)//对List进行二分查找，返回索引，注意List必须是有序的
int max(Collection coll)//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)
int max(Collection coll, Comparator c)//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)
void fill(List list, Object obj)//用指定的元素代替指定list中的所有元素。
int frequency(Collection c, Object o)//统计元素出现次数
int indexOfSubList(List list, List target)//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target).
boolean replaceAll(List list, Object oldVal, Object newVal), 用新元素替换旧元素
```

##### 同步控制

Collections提供了多个`synchronizedXxx()`方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。

我们知道 HashSet，TreeSet，ArrayList,LinkedList,HashMap,TreeMap 都是线程不安全的。Collections提供了多个静态方法可以把他们包装成线程同步的集合。

**最好不要用下面这些方法，效率非常低，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合。**

##### Collections还可以设置不可变集合，提供了如下三类方法：

```
emptyXxx(): 返回一个空的、不可变的集合对象，此处的集合既可以是List，也可以是Set，还可以是Map。
singletonXxx(): 返回一个只包含指定对象（只有一个或一个元素）的不可变的集合对象，此处的集合可以是：List，Set，Map。
unmodifiableXxx(): 返回指定集合对象的不可变视图，此处的集合可以是：List，Set，Map。
上面三类方法的参数是原有的集合对象，返回值是该集合的”只读“版本。
```

#### Arrays类的常见操作

1. 排序 : `sort()`
2. 查找 : `binarySearch()`
3. 比较: `equals()`
4. 填充 : `fill()`
5. 转列表: `asList()`
6. 转字符串 : `toString()`
7. 复制: `cop`



### 31. 深拷贝 vs 浅拷贝

1. **浅拷贝**：对基本数据类型进行值传递，对引用数据类型进行引用传递般的拷贝，此为浅拷贝。
2. **深拷贝**：对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝。

[![deep and shallow copy](https://camo.githubusercontent.com/d6d8355e9c0cbde0bdf8a53d34b0e2b46bbaa5e7/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d372f6a6176612d646565702d616e642d7368616c6c6f772d636f70792e6a7067)](https://camo.githubusercontent.com/d6d8355e9c0cbde0bdf8a53d34b0e2b46bbaa5e7/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d372f6a6176612d646565702d616e642d7368616c6c6f772d636f70792e6a7067)





### 32. 为什么在Java中String是final的

1. 因为字符串对象被缓存在字符串池中。由于缓存的String字符串在多个客户端之间共享，所以为了避免一个客户端的操作影响所有其他客户端的。

2. 第二个就是让String缓存其hash值。

   1. ![img](https://img-blog.csdn.net/20151202231646607?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

      hash的值是保存在对象中

   2. ![img](https://img-blog.csdn.net/20151202231626561?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

      只有在第一次调用时产生hashCode，并保存在hash中

3. 线程安全，多个线程共享

## 31.内部类和静态内部类的区别？

**静态内部类相对与外部类是独立存在的**，在静态内部类中无法直接访问外部类中变量、方法。如果要访问的话，必须要new一个外部类的对象，使用new出来的对象来访问。**但是可以直接访问静态的变量、调用静态的方法；**

普通内部类作为外部类一个成员而存在，**在普通内部类中可以直接访问外部类属性，调用外部类的方法。**

如果外部类要访问内部类的属性或者调用内部类的方法，**必须要创建一个内部类的对象，使用该对象访问属性或者调用方法。**

如果其他的类要访问普通内部类的属性或者调用普通内部类的方法，必须要在外部类中创建一个普通内部类的对象作为一个属性，外同类可以通过该属性调用普通内部类的方法或者访问普通内部类的属性

如果其他的类要访问静态内部类的属性或者调用静态内部类的方法，直接创建一个静态内部类对象即可。



## 32. 关于String a=new String("abc")与String a="abc"的各创建了几个对象



两种创建方式如下所示：

![image-20200303140203469](.Java基础.assets\image-20200303140203469.png)

String a =new String(“abc”)实际上是创建了两个对象（假设之前String的常量池中没有创建任何对象），一个是“abc”，是new String()。“abc”创建后就会放入常量池中（下次创建 String对象时先查找常量池 有需要的就使用， 没有就重新创建并存入常量池），如果常量池中有的话，则就创建了一个new的对象，每new一次就创建一个对象。而String a=new String（“abc”）这是在堆里面创建了一个空白对象 ，并将a初始化(如图),在去查找常量池是否有“abc”。因之前已创建，所以就直接使用常量池中的“abc”的一份拷贝（副本）放人对应堆中地址（这两块内存中的内容是一眼的，用equals（）可以得出）。

所以正确的为一个或者两个。



![img](https://pic4.zhimg.com/80/8e743518809bd37723a4b0e8bf35f332_1440w.jpg)



## 33. 子类初始化执行父类的构造方法

- 若父类只定义了有参数的构造方法，而子类没有在构造方法中用super调用父类的构造方法，则会产生编译错误。
- 执行子类的构造方法时，如果没有用super()来调用父类特定的构造方法，则会调用父类中“没有参数的构造方法”。



## 34. 自定义注解

### 元注解

- @Retention

  - 什么时候使用该注解(定义该注解的生命周期)
  - RetentionPolicy.SOURCE
    - 在编译阶段丢失
  - RetentionPolicy.CLASS
    - 类加载的时候丢失(默认)
  - **RetentionPolicy.RUNTIME**
    - 始终不会丢失，运行时保留该注解，可以使用反射机制读取该注解的信息。

- @Target  **表示该注解用于什么地方。默认值为任何元素，表示该注解用于什么地方。**

   ● ElementType.CONSTRUCTOR: 用于描述构造器
   ● ElementType.FIELD: 成员变量、对象、属性（包括enum实例）
   ● ElementType.LOCAL_VARIABLE: 用于描述局部变量
   ● ElementType.METHOD: 用于描述方法
   ● ElementType.PACKAGE: 用于描述包
   ● ElementType.PARAMETER: 用于描述参数
   ● ElementType.TYPE: 用于描述类、接口(包括注解类型) 或enum声明

- @Documented – 一个简单的Annotations 标记注解，表示是否将注解信息添加在java 文档中。

- @Inherited – 定义该注释和子类的关系

  - @Inherited 元注解是一个标记注解，@Inherited 阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited 修饰的annotation 类型被用于一个class，则这个annotation 将被用于该class 的子类。

### 自定义注解

`Annotation`型定义为`@interface`

- 所有的Annotation 会**自动继承j**ava.lang.Annotation这一接口。

- 参数成员**只能用基本类型**byte、short、char、int、long、float、double、boolean八种基本数据类型和**String、Enum、Class、annotations**等数据类型，以及这一些类型的数组.

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD,ElementType.METHOD})
public @interface BeanNote {
		public String name() default "";
		public String format() default "";
}
```

反射获得注解：

- 先过去实体类的clas文件，
- 然后得到他的所有字段
- 判断该字段是否有beannote注解。
- 获取到该字段的get方法，也就是method对象，存储到一个list中
- 然后遍历用invoke执行，拿到属性值，然后setCell





## 35. String中的Intern()



```java
String a = new StringBuilder("hello").append("world").toString();
System.out.println(a);
System.out.println(a.intern());
System.out.println(a == a.intern());


String b = new StringBuilder("ja").append("va").toString();
System.out.println(b);
System.out.println(b.intern());
System.out.println(b == b.intern());
```

在`JDK1.6`中运行，会得到两个`false`，在`JDK·1.7`中会得到一个`true`和`false`.

产生差异的原因是：

- `JDK1.6`中,`intern()`方法会将首次遇到的**字符串实例**==复制==到永久代上，返回的也就是永久代中这个字符串实例的引用。而由`StringBuilder`创建的字符串实例在Java堆上，所以必然不是同一个引用。返回`false`。

- `JDK1.7`中，`intern()`方法**不会再复制**该字符串实例，只是在常量池中记录**首次出现的实例引用**，因此`intern()`方法返回的引用和由`StringBuilder`创建的字符串实例是同一个。至于字符串b返回`false`的原因是，字符串`“java”`在`StringBuilder`创建之前已经出现过，字符串常量池已经有它的引用了。所以两者不同，返回`false`。