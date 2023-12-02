# 1. 基础

## 1.1. 正确使用 equals 方法

Object的equals方法容易抛空指针异常，应**使用常量或确定有值的对象**来调用 equals。

举个例子：

```java
// 不能使用一个值为null的引用类型变量来调用非静态方法，否则会抛出异常
String str = null;
if (str.equals("SnailClimb")) {
  ...
} else {
  ..
}
```



我们看一下`java.util.Objects#equals`的源码就知道原因了。

```
public static boolean equals(Object a, Object b) {
        // 可以避免空指针异常。如果a==null的话此时a.equals(b)就不会得到执行，避免出现空指针异常。
        return (a == b) || (a != null && a.equals(b));
    }
```



- 可以使用 == 或者 != 操作来比较null值，但是不能使用其他算法或者逻辑操作。在Java中`null == null`将返回true。
- 不能使用一个值为null的引用类型变量来调用非静态方法，否则会抛出异常

## 1.2. 整型包装类值的比较

**所有整型包装类对象值的比较==必须使用equals方法。==**

先看下面这个例子：

```
Integer x = 3;
Integer y = 3;
System.out.println(x == y);// true
Integer a = new Integer(3);
Integer b = new Integer(3);
System.out.println(a == b);//false
System.out.println(a.equals(b));//true
```

当使用自动装箱方式创建一个Integer对象时，当数值在-128 ~127时，会将创建的 Integer 对象缓存起来，当下次再出现该数值时，直接从缓存中取出对应的Integer对象。所以上述代码中，x和y引用的是相同的Integer对象。

**注意：**如果你的IDE(IDEA/Eclipse)上安装了阿里巴巴的p3c插件，这个插件如果检测到你用 ==的话会报错提示，推荐安装一个这个插件，很不错。

### 1.3.1. BigDecimal 的用处

《阿里巴巴Java开发手册》中提到：**浮点数之间的等值判断，基本数据类型不能用==来比较，包装数据类型不能用 equals 来判断。** 具体原理和浮点数的编码方式有关，这里就不多提了，我们下面直接上实例：

```java
float a = 1.0f - 0.9f;
float b = 0.9f - 0.8f;
System.out.println(a);// 0.100000024
System.out.println(b);// 0.099999964
System.out.println(a == b);// false
```

具有基本数学知识的我们很清楚的知道输出并不是我们想要的结果（**精度丢失**），我们如何解决这个问题呢？一种很常用的方法是：**使用使用 BigDecimal 来定义浮点数的值，再进行浮点数的运算操作。**

```java
BigDecimal a = new BigDecimal("1.0");
BigDecimal b = new BigDecimal("0.9");
BigDecimal c = new BigDecimal("0.8");
BigDecimal x = a.subtract(b);// 0.1
BigDecimal y = b.subtract(c);// 0.1
System.out.println(x.equals(y));// true 
```

### 1.3.2. BigDecimal 的大小比较

`a.compareTo(b)` : 返回 -1 表示小于，0 表示 等于， 1表示 大于。

```java
BigDecimal a = new BigDecimal("1.0");
BigDecimal b = new BigDecimal("0.9");
System.out.println(a.compareTo(b));// 1
```

### 1.3.3. BigDecimal 保留几位小数

通过 `setScale`方法设置保留几位小数以及保留规则。保留规则有挺多种，不需要记，IDEA会提示。

```java
BigDecimal m = new BigDecimal("1.255433");
BigDecimal n = m.setScale(3,BigDecimal.ROUND_HALF_DOWN);
System.out.println(n);// 1.255
```

### 1.3.5. 总结

BigDecimal 主要用来操作（大）浮点数，BigInteger 主要用来操作大整数（超过 long 类型）。

BigDecimal 的实现利用到了 BigInteger, 所不同的是 BigDecimal 加入了小数位的概念

## 1.4. 基本数据类型与包装数据类型的使用标准

Reference:《阿里巴巴Java开发手册》

- 【强制】**所有的 POJO 类属性必须使用包装数据类型。**
- 【强制】**RPC 方法的返回值和参数必须使用包装数据类型。**
- 【推荐】**所有的局部变量使用基本数据类型。**

比如我们如果自定义了一个Student类,其中有一个属性是成绩score,如果用Integer而不用int定义,一次考试,学生可能没考,值是null,也可能考了,但考了0分,值是0,这两个表达的状态明显不一样.

**说明** :POJO 类属性没有初值是提醒使用者在需要使用时，必须自己显式地进行赋值，任何 NPE 问题，或者入库检查，都由使用者来保证。

**正例** : 数据库的查询结果可能是 null，因为自动拆箱，用基本数据类型接收有 NPE 风险。

**反例** : 比如显示成交总额涨跌情况，即正负 x%，x 为基本数据类型，调用的 RPC 服务，调用不成功时，返回的是默认值，页面显示为 0%，这是不合理的，应该显示成中划线。所以包装数据类型的 null 值，能够表示额外的信息，如:远程调用失败，异常退出。



# 2. 集合

## 2.1. Arrays.asList()使用指南



### 2.1.1. 简介

`Arrays.asList()`在平时开发中还是比较常见的，我们可以使用它**将一个数组转换为一个List集合。**

```java
String[] myArray = { "Apple", "Banana", "Orange" }； 
List<String> myList = Arrays.asList(myArray);
//上面两个语句等价于下面一条语句
List<String> myList = Arrays.asList("Apple","Banana", "Orange");
```

JDK 源码对于这个方法的说明：

```java
/**
 *返回由指定数组支持的固定大小的列表。此方法作为基于数组和基于集合的API之间的桥梁，与           Collection.toArray()结合使用。返回的List是可序列化并实现RandomAccess接口。
 */ 
public static <T> List<T> asList(T... a) {
    return new ArrayList<>(a);
}
```



### 2.1.2. 《阿里巴巴Java 开发手册》对其的描述

`Arrays.asList()`将数组转换为集合后,底层其实还是数组，《阿里巴巴Java 开发手册》对于这个方法有如下描述：

[![阿里巴巴Java开发手-Arrays.asList()方法](https://camo.githubusercontent.com/26b4048f6dd0109fcbb839ab6be16a088427a16d/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d362f2545392539382542462545392538372538432545352542372542342545352542372542344a6176612545352542432538302545352538462539312545362538392538422d4172726179732e61734c69737428292545362539362542392545362542332539352e706e67)](https://camo.githubusercontent.com/26b4048f6dd0109fcbb839ab6be16a088427a16d/68747470733a2f2f6d792d626c6f672d746f2d7573652e6f73732d636e2d6265696a696e672e616c6979756e63732e636f6d2f323031392d362f2545392539382542462545392538372538432545352542372542342545352542372542344a6176612545352542432538302545352538462539312545362538392538422d4172726179732e61734c69737428292545362539362542392545362542332539352e706e67)



### 2.1.3. 使用时的注意事项总结

**传递的数组必须是对象数组，而不是基本类型。**

`Arrays.asList()`是泛型方法，传入的对象必须是==对象数组==。



```java
int a[] = new int[]{1,2,3,4,5};
List<int[]> list = Arrays.asList(a);
for (int[] is : list) {
    System.out.println(is);
}
```



当传入一个基本数据类型数组时，`Arrays.asList()` 的真正得到的参数就不是数组中的元素**，而是数组对象本身**！此时List 的唯一元素就是这个数组，这也就解释了上面的代码。

我们使用包装类型数组就可以解决这个问题。

```
Integer[] myArray = { 1, 2, 3 };
```

**使用集合的修改方法:`add()`、`remove()`、`clear()`会抛出异常。**

```
List myList = Arrays.asList(1, 2, 3);
myList.add(4);//运行时报错：UnsupportedOperationException
myList.remove(1);//运行时报错：UnsupportedOperationException
myList.clear();//运行时报错：UnsupportedOperationException
```

`Arrays.asList()` 方法返回的并不是 `java.util.ArrayList` ，而是 `java.util.Arrays` 的一个内部类,这个内部类并没有实现集合的修改方法或者说并没有重写这些方法。

==注意：==使用集合类方法会报错，**但是使用内部类的==set、get方法==不会报错。**

### 2.1.4. 如何正确的将数组转换为ArrayList?

**1. 自己动手实现（教育目的）**

```
//JDK1.5+
static <T> List<T> arrayToList(final T[] array) {
  final List<T> l = new ArrayList<T>(array.length);

  for (final T s : array) {
    l.add(s);
  }
  return (l);
}
Integer [] myArray = { 1, 2, 3 };
System.out.println(arrayToList(myArray).getClass());//class java.util.ArrayList
```

**2. 最简便的方法(推荐)**

```java
List list = new ArrayList<>(Arrays.asList("a", "b", "c"))
```

**3. 使用 Java8 的Stream(推荐)**

```java
Integer [] myArray = { 1, 2, 3 };
List myList = Arrays.stream(myArray).collect(Collectors.toList());
//基本类型也可以实现转换（依赖boxed的装箱操作）
int [] myArray2 = { 1, 2, 3 };
List myList = Arrays.stream(myArray2).boxed().collect(Collectors.toList());
```

**4. 使用 Guava(推荐)**

对于不可变集合，你可以使用[`ImmutableList`](https://github.com/google/guava/blob/master/guava/src/com/google/common/collect/ImmutableList.java)类及其[`of()`](https://github.com/google/guava/blob/master/guava/src/com/google/common/collect/ImmutableList.java#L101)与[`copyOf()`](https://github.com/google/guava/blob/master/guava/src/com/google/common/collect/ImmutableList.java#L225)工厂方法：（参数不能为空）

```
List<String> il = ImmutableList.of("string", "elements");  // from varargs
List<String> il = ImmutableList.copyOf(aStringArray);      // from array
```

对于可变集合，你可以使用[`Lists`](https://github.com/google/guava/blob/master/guava/src/com/google/common/collect/Lists.java)类及其[`newArrayList()`](https://github.com/google/guava/blob/master/guava/src/com/google/common/collect/Lists.java#L87)工厂方法：

```
List<String> l1 = Lists.newArrayList(anotherListOrCollection);    // from collection
List<String> l2 = Lists.newArrayList(aStringArray);               // from array
List<String> l3 = Lists.newArrayList("or", "string", "elements"); // from varargs
```

**5. 使用 Apache Commons Collections**

```
List<String> list = new ArrayList<String>();
CollectionUtils.addAll(list, str);
```



## 2.2. Collections.toArray()方法使用的坑&如何反转数组

该方法是一个泛型方法：` T[] toArray(T[] a);` 如果`toArray`方法中没有传递任何参数的话返回的是`Object`类型数组。

**传入初始化长度的数组对象，返回该对象数组**



```
String [] s= new String[]{
    "dog", "lazy", "a", "over", "jumps", "fox", "brown", "quick", "A"
};
List<String> list = Arrays.asList(s);
Collections.reverse(list);
s=list.toArray(new String[0]);//没有指定类型的话会报错
```



## 2.3. 不要在 foreach 循环里进行元素的 remove/add 操作

如果要进行`remove`操作，可以调用迭代器的 `remove `方法而不是集合类的 remove 方法。因为如果列表在任何时间从结构上修改创建迭代器之后，以任何方式除非通过迭代器自身`remove/add`方法，迭代器都将抛出一个`ConcurrentModificationException`,这就是单线程状态下产生的 **fail-fast 机制**。

> **fail-fast 机制** ：多个线程对 fail-fast 集合进行修改的时，可能会抛出ConcurrentModificationException，单线程下也会出现这种情况，上面已经提到过。

`java.util`包下面的所有的集合类都是fail-fast的，而`java.util.concurrent`包下面的所有的类都是fail-safe的.



# 3.反射

## 什么是反射

Java反射，就是在运行状态中

- 获取任意类的名称、package信息、所有属性、方法、注解、类型、类加载器等
- 获取任意对象的属性，并且能改变对象的属性
- 调用任意对象的方法
- 判断任意一个对象所属的类
- 实例化任意一个类的对象



通过反射我们可以实现动态装配，降低代码的耦合度；动态代理等。反射的过度使用会严重消耗系统资源。

JDK 中的Java.lang.Class

## 什么是Java序列化

**序列化：将 Java 对象转换成字节流的过程。**

**反序列化：将字节流转换成 Java 对象的过程。**

当 Java 对象需要在网络上传输 或者 持久化存储到文件中时，就需要对 Java 对象进行序列化处理。

序列化的实现：类实现 Serializable 接口，这个接口没有需要实现的方法。实现 Serializable 接口是为了告诉 jvm 这个类的对象可以被序列化。





- 声明为 static 和 transient 的成员变量，不能被序列化。static 成员变量是描述类级别的属性，transient 表示临时数据
- 常用的IO输出`ObjectInputStream`和`ObjectOutputStream`

# 动态代理

**在运行期间，创建目标类，调用和扩展目标类的方法**

1. JDK动态代理：利用反射机制生成一个实现代理接口的匿名类，在调用具体方法前调用InvokeHandler来处理。
2. CGlib动态代理：利用ASM（开源的Java字节码编辑库，操作字节码）开源包，将代理对象类的class文件加载进来，通过修改其字节码生成子类来处理。
3. 区别：**JDK代理只能对实现接口的类生成代理**；CGlib是**针对类实现代理，对指定的类生成一个子类，并覆盖其中的方法**，这种通过继承类的实现方式，不能代理final修饰的类。

**有哪几种方法：**

- JDK级别的Proxy

  - ```java
    Proxy.newProxyInstance(类加载器，接口数组（class[]）,invocationHandler)
    ```

  - 

- 用Cglib实现动态代理

**什么时候用：**

- 统计每个 api 的请求耗时
- 统一的日志输出
- 校验被调用的 api 是否已经登录和权限鉴定
- Spring的 AOP 功能模块就是采用动态代理的机制来实现切面编程



# 4. 对象拷贝

## 1. 为什么要使用克隆？



## 2. 如何实现对象克隆？

- **深拷贝：**实现Cloneable接口，重写clone方法。
- **浅拷贝：**object的clone方法就是浅拷贝(native)。

## 3. 深拷贝和浅拷贝区别是什么？

**深拷贝和浅拷贝都是重新创建了一个对象**。

### 深拷贝

复制基本类型的属性；引用类型的属性复制，复制栈中的变量 和 变量指向堆内存中的对象的指针和**堆内存中的对象**。

### 浅拷贝

复制基本类型的属性，引用类型属性，复制栈中的变量和变量指向堆内存对象的指针，不复制堆内存中的对象。



**区别**

在于是否拷贝引用对象。



# 5. 异常

## throw、throws的区别

- 形式上不同
  - throws在方法名后边，用来声明一个方法可能会抛出的所有异常。
  - throw在方法体中，并且抛出一个对象，
- 功能上：
  - 程序在执行到throw语句时**立即停止。**
  - throws：调用方法者需要在调用出catch异常。



## try-catch-finally 中哪个部分可以省略？

catch和finally任选其一



## try-catch-finally 中，如果 catch 中 return 了，finally 还会执行吗？

会。



## 常见的异常类有哪些？





# 6、对象头

- Mark Word
  - 存储对象的**hashCode、GC信息、锁信息**
- Class Pointer(类型指针)
  - 存储了指向类对象信息的指针。









