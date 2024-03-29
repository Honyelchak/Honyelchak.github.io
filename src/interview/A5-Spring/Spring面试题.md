# Spring面试专题

# 1.Spring应该很熟悉吧？来介绍下你的Spring的理解

## 1.1 Spring的发展历程

  先介绍Spring是怎么来的，发展中有哪些核心的节点，当前的最新版本是什么等

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/f401749c6b6c435d932f949067f0b252.png)

 通过上图可以比较清晰的看到Spring的各个时间版本对应的时间节点了。也就是Spring从之前单纯的xml的配置方式，到现在的完全基于注解的编程方式发展。

- 1.0的时候 用配置文件
- 2.0的时候加上了注解驱动，方便了很多，提升了开发效率。
- 3.0注解驱动的黄金时代，有了@Configuration、@ComponentScan、@import，可以完全脱离配置文件
- 4.0版本，加了很多新的特性，包括跨域啊。
- 5.0版本注解驱动成熟时代

## 1.2 Spring的组成

&emsp;&emsp;Spring是一个轻量级的IoC和AOP容器框架。是为Java应用程序提供基础性服务的一套框架，目的是用于简化企业应用程序的开发，它使得开发者只需要关心业务需求。常见的配置方式有三种：`基于XML的配置`、`基于注解的配置`、`基于Java的配置`.

主要由以下几个模块组成：

* Spring Core：核心类库，提供IOC服务；
* Spring Context：提供框架式的Bean访问方式，以及企业级功能（JNDI、定时任务等）；
* Spring AOP：AOP服务；
* Spring DAO：对JDBC的抽象，简化了数据访问异常的处理；
* Spring ORM：对现有的ORM框架的支持；
* Spring Web：提供了基本的面向Web的综合特性，例如多方文件上传；
* Spring MVC：提供面向Web应用的Model-View-Controller实现。

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011310002937.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NTI2NTcz,size_16,color_FFFFFF,t_70)


## 1.3 Spring的好处


| 序号 | 好处              | 说明                                                                                                             |
| ---- | ----------------- | :--------------------------------------------------------------------------------------------------------------- |
| 1    | 轻量              | Spring 是轻量的，基本的版本大约2MB。                                                                             |
| 2    | 控制反转          | Spring通过控制反转实现了松散耦合，对象们给出它们的依赖，`<br>`而不是创建或查找依赖的对象们。                   |
| 3    | 面向切面编程(AOP) | Spring支持面向切面的编程，并且把应用业务逻辑和系统服务分开。                                                     |
| 4    | 容器              | Spring 包含并管理应用中对象的生命周期和配置。                                                                    |
| 5    | MVC框架           | Spring的WEB框架是个精心设计的框架，是Web框架的一个很好的替代品。                                                 |
| 6    | 事务管理          | Spring 提供一个持续的事务管理接口，`<br>`可以扩展到上至本地事务下至全局事务（JTA）。                           |
| 7    | 异常处理          | Spring 提供方便的API把具体技术相关的异常`<br>`(比如由JDBC，Hibernate or JDO抛出的)转化为一致的unchecked 异常。 |
| 8    | 最重要的          | 用的人多！！！                                                                                                   |



# 2.Spring框架中用到了哪些设计模式

## 2.1 单例模式

&emsp;&emsp;单例模式应该是大家印象最深的一种设计模式了。在Spring中最明显的使用场景是在配置文件中配置注册bean对象的时候**设置scope的值为singleton** 。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
 http://www.springframework.org/schema/beans/spring-beans.xsd">
	<bean class="com.dpb.pojo.User" id="user" scope="singleton">
		<property name="name" value="波波烤鸭"></property>
	</bean>
</beans>

```

## 2.2 原型模式

&emsp;&emsp;原型模式也叫克隆模式，Spring中该模式使用的很明显，和单例一样在bean标签中设置scope的属性prototype即表示该bean以克隆的方式生成

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
 http://www.springframework.org/schema/beans/spring-beans.xsd">
	<bean class="com.dpb.pojo.User" id="user" scope="prototype">
		<property name="name" value="波波烤鸭"></property>
	</bean>
</beans>

```

## 2.3 模板模式

&emsp;&emsp;模板模式的核心是父类定义好流程，然后将流程中需要子类实现的方法就抽象话留给子类实现，Spring中的JdbcTemplate就是这样的实现。我们知道jdbc的步骤是固定

* 加载驱动,
* 获取连接通道,
* 构建sql语句.
* 执行sql语句,
* 关闭资源

  在这些步骤中第3步和第四步是不确定的,所以就留给客户实现，而我们实际使用JdbcTemplate的时候也确实是只需要构建SQL就可以了.这就是典型的模板模式。我们以query方法为例来看下JdbcTemplate中的代码.

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/a1f1150a38f94b518794e3e5df467092.png)

## 2.4 观察者模式

&emsp;&emsp;观察者模式定义的是对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。使用比较场景是在监听器中而spring中Observer模式常用的地方也是listener的实现。如ApplicationListener.

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/32247ef6524c430dab31ea97294f28ae.png)

## 2.5 工厂模式

**简单工厂模式**：

&emsp;&emsp;简单工厂模式就是通过工厂根据传递进来的参数决定产生哪个对象。Spring中我们通过getBean方法获取对象的时候根据id或者name获取就是简单工厂模式了。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:context="http://www.springframework.org/schema/context"
	xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.3.xsd">

	<context:annotation-config/>
	<bean class="com.dpb.pojo.User" id="user"  >
		<property name="name" value="波波烤鸭"></property>
	</bean>
</beans>

```

**工厂方法模式**：

&emsp;&emsp;在Spring中我们一般是将Bean的实例化直接交给容器去管理的，实现了使用和创建的分离，这时容器直接管理对象，还有种情况是，bean的创建过程我们交给一个工厂去实现，而Spring容器管理这个工厂。这个就是我们讲的工厂模式，在Spring中有两种实现一种是静态工厂方法模式，一种是动态工厂方法模式。以静态工厂来演示

```java
/**
 * User 工厂类
 * @author dpb[波波烤鸭]
 *
 */
public class UserFactory {

	/**
	 * 必须是static方法
	 * @return
	 */
	public static UserBean getInstance(){
		return new UserBean();
	}
}

```

application.xml文件中注册

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
	http://www.springframework.org/schema/beans/spring-beans.xsd">
	<!-- 静态工厂方式配置 配置静态工厂及方法 -->
	<bean class="com.dpb.factory.UserFactory" factory-method="getInstance" id="user2"/>
</beans>

```

## 2.6 适配器模式

&emsp;&emsp;将一个类的接口转换成客户希望的另外一个接口。使得原本由于接口不兼容而不能一起工作的那些类可以在一起工作。这就是适配器模式。在Spring中在AOP实现中的Advice和interceptor之间的转换就是通过适配器模式实现的。

```java
class MethodBeforeAdviceAdapter implements AdvisorAdapter, Serializable {

	@Override
	public boolean supportsAdvice(Advice advice) {
		return (advice instanceof MethodBeforeAdvice);
	}

	@Override
	public MethodInterceptor getInterceptor(Advisor advisor) {
		MethodBeforeAdvice advice = (MethodBeforeAdvice) advisor.getAdvice();
		// 通知类型匹配对应的拦截器
		return new MethodBeforeAdviceInterceptor(advice);
	}
}

```

## 2.7 装饰者模式

&emsp;&emsp;装饰者模式又称为包装模式(Wrapper),作用是用来动态的为一个对象增加新的功能。装饰模式是一种用于代替继承的技术，无须通过继承增加子类就能扩展对象的新功能。使用对象的关联关系代替继承关系，更加灵活，同时避免类型体系的快速膨胀。
&emsp;&emsp;spring中用到的包装器模式在类名上有两种表现：一种是类名中含有Wrapper，另一种是类名中含有Decorator。基本上都是动态地给一个对象添加一些额外的职责。
&emsp;&emsp;具体的使用在Spring session框架中的SessionRepositoryRequestWrapper使用包装模式对原生的request的功能进行增强，可以将session中的数据和分布式数据库进行同步，这样即使当前tomcat崩溃，session中的数据也不会丢失。

```xml
<dependency>
	<groupId>org.springframework.session</groupId>
	<artifactId>spring-session</artifactId>
	<version>1.3.1.RELEASE</version>
</dependency>

```

## 2.8 代理模式

&emsp;&emsp;代理模式应该是大家非常熟悉的设计模式了，在**Spring中AOP的实现中代理模式使用的很彻底.**

## 2.9 策略模式

&emsp;&emsp;策略模式对应于解决某一个问题的一个算法族，允许用户从该算法族中任选一个算法解决某一问题，同时可以方便的更换算法或者增加新的算法。并且由客户端决定调用哪个算法，spring中在实例化对象的时候用到Strategy模式。XmlBeanDefinitionReader,PropertiesBeanDefinitionReader

## 2.10 责任链默认

AOP中的拦截器链

## 2.11 委托者模式

DelegatingFilterProxy，整合Shiro，SpringSecurity的时候都有用到。

.....

# 3.Autowired和Resource关键字的区别？

&emsp;&emsp;这是一个相对比较简单的问题，@Resource和@Autowired都是做bean的注入时使用，其实@Resource并不是Spring的注解，它的包是javax.annotation.Resource，需要导入，但是Spring支持该注解的注入。

## 3.1 共同点

&emsp;&emsp;两者都可以写在字段和setter方法上。两者如果都写在字段上，那么就不需要再写setter方法.

## 3.2 不同点

**@Autowired**

&emsp;&emsp;@Autowired为Spring提供的注解，需要导入org.springframework.beans.factory.annotation.Autowired;只按照byType注入。

```java
public class TestServiceImpl {
 // 下面两种@Autowired只要使用一种即可
 @Autowired
 private UserDao userDao; // 用于字段上
 
 @Autowired
 public void setUserDao(UserDao userDao) { // 用于属性的方法上
 this.userDao = userDao;
 }
}
```

@Autowired注解是按照类型（byType）装配依赖对象，默认情况下它要求依赖对象必须存在，如果允许null值，可以设置它的required属性为false。如果我们想使用按照名称（byName）来装配，可以结合@Qualififier注解一起使用。如下：

```java
public class TestServiceImpl {
 @Autowired
 @Qualifier("userDao")
 private UserDao userDao; }
```

**@Resource**

&emsp;&emsp;@Resource默认按照ByName自动注入，由J2EE提供，需要导入包javax.annotation.Resource。@Resource有两个重要的属性：name和type，而Spring将@Resource注解的name属性解析为bean的名字，而type属性则解析为bean的类型。所以，如果使用name属性，则使用byName的自动注入策略，而使用type属性时则使用byType自动注入策略。如果既不制定name也不制定type属性，这时将通过反射机制使用byName自动注入策略.

```java
public class TestServiceImpl {
 // 下面两种@Resource只要使用一种即可
 @Resource(name="userDao")
 private UserDao userDao; // 用于字段上
 
 @Resource(name="userDao")
 public void setUserDao(UserDao userDao) { // 用于属性的setter方法上
 this.userDao = userDao;
 }
}
```

@Resource装配顺序：

1. 如果同时指定了name和type，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常。
2. 如果指定了name，则从上下文中查找名称（id）匹配的bean进行装配，找不到则抛出异常。
3. 如果指定了type，则从上下文中找到类似匹配的唯一bean进行装配，找不到或是找到多个，都会抛出异常。
4. 如果既没有指定name，又没有指定type，则自动按照byName方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配。

@Resource的作用相当于@Autowired，只不过@Autowired按照byType自动注入。

# 4.Spring中常用的注解有哪些，重点介绍几个

@Controller  @Service @RestController @RequestBody,@Index  @Import等

@Indexed提升 @ComponentScan的效率

- 5.0之后的@component注解默认已经内嵌了@Indexed注解
- 提高启动效率

@Import注解是import标签的替换，在SpringBoot的自动装配中非常重要，也是EnableXXX的前置基础。

- @import对应标签的替换，

# 5.循环依赖

面试的重点，大厂必问之一：

## 5.1 什么是循环依赖

看下图

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/d1e9bec7b2d648b3b777caeb6da2a872.png)

&emsp;&emsp;上图是循环依赖的三种情况，虽然方式有点不一样，但是循环依赖的本质是一样的，就你的完整创建要依赖与我，我的完整创建也依赖于你。相互依赖从而没法完整创建造成失败。

## 5.2 代码演示

&emsp;&emsp;我们再通过代码的方式来演示下循环依赖的效果

```java
public class CircularTest {

    public static void main(String[] args) {
        new CircularTest1();
    }
}
class CircularTest1{
    private CircularTest2 circularTest2 = new CircularTest2();
}

class CircularTest2{
    private CircularTest1 circularTest1 = new CircularTest1();
}
```

执行后出现了 StackOverflowError 错误

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/ad194978a72a4312bff8f659806028e9.png)

&emsp;&emsp;上面的就是最基本的循环依赖的场景，你需要我，我需要你，然后就报错了。而且上面的这种设计情况我们是没有办法解决的。那么针对这种场景我们应该要怎么设计呢？这个是关键！

## 5.3 分析问题

&emsp;&emsp;首先我们要明确一点就是如果这个对象A还没创建成功，在创建的过程中要依赖另一个对象B，而另一个对象B也是在创建中要依赖对象A，这种肯定是无解的，这时我们就要转换思路，我们先把A创建出来，但是还没有完成初始化操作，也就是这是一个半成品的对象，然后在赋值的时候先把A暴露出来，然后创建B，让B创建完成后找到暴露的A完成整体的实例化，这时再把B交给A完成A的后续操作，从而揭开了循环依赖的密码。也就是如下图：

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/b42b8c3aa1784ad7881001044aae7910.png)

## 5.4 自己解决

&emsp;&emsp;明白了上面的本质后，我们可以自己来尝试解决下：

先来把上面的案例改为set/get来依赖关联

```java
public class CircularTest {

    public static void main(String[] args) throws Exception{
        System.out.println(getBean(CircularTest1.class).getCircularTest2());
        System.out.println(getBean(CircularTest2.class).getCircularTest1());
    }

    private static <T> T getBean(Class<T> beanClass) throws Exception{
        // 1.获取 实例对象
        Object obj = beanClass.newInstance();
        // 2.完成属性填充
        Field[] declaredFields = obj.getClass().getDeclaredFields();
        // 遍历处理
        for (Field field : declaredFields) {
            field.setAccessible(true); // 针对private修饰
            // 获取成员变量 对应的类对象
            Class<?> fieldClass = field.getType();
            // 获取对应的 beanName
            String fieldBeanName = fieldClass.getSimpleName().toLowerCase();
            // 给成员变量赋值 如果 singletonObjects 中有半成品就获取，否则创建对象
            field.set(obj,getBean(fieldClass));
        }
        return (T) obj;
    }
}

class CircularTest1{
    private CircularTest2 circularTest2;

    public CircularTest2 getCircularTest2() {
        return circularTest2;
    }

    public void setCircularTest2(CircularTest2 circularTest2) {
        this.circularTest2 = circularTest2;
    }
}

class CircularTest2{
    private CircularTest1 circularTest1;

    public CircularTest1 getCircularTest1() {
        return circularTest1;
    }

    public void setCircularTest1(CircularTest1 circularTest1) {
        this.circularTest1 = circularTest1;
    }
}
```

然后我们再通过把对象实例化和成员变量赋值拆解开来处理。从而解决循环依赖的问题

```java
public class CircularTest {
    // 保存提前暴露的对象，也就是半成品的对象
    private final static Map<String,Object> singletonObjects = new ConcurrentHashMap<>();

    public static void main(String[] args) throws Exception{
        System.out.println(getBean(CircularTest1.class).getCircularTest2());
        System.out.println(getBean(CircularTest2.class).getCircularTest1());
    }

    private static <T> T getBean(Class<T> beanClass) throws Exception{
        //1.获取类对象对应的名称
        String beanName = beanClass.getSimpleName().toLowerCase();
        // 2.根据名称去 singletonObjects 中查看是否有半成品的对象
        if(singletonObjects.containsKey(beanName)){
            return (T) singletonObjects.get(beanName);
        }
        // 3. singletonObjects 没有半成品的对象，那么就反射实例化对象
        Object obj = beanClass.newInstance();
        // 还没有完整的创建完这个对象就把这个对象存储在了 singletonObjects中
        singletonObjects.put(beanName,obj);
        // 属性填充来补全对象
        Field[] declaredFields = obj.getClass().getDeclaredFields();
        // 遍历处理
        for (Field field : declaredFields) {
            field.setAccessible(true); // 针对private修饰
            // 获取成员变量 对应的类对象
            Class<?> fieldClass = field.getType();
            // 获取对应的 beanName
            String fieldBeanName = fieldClass.getSimpleName().toLowerCase();
            // 给成员变量赋值 如果 singletonObjects 中有半成品就获取，否则创建对象
            field.set(obj,singletonObjects.containsKey(fieldBeanName)?
                    singletonObjects.get(fieldBeanName):getBean(fieldClass));
        }
        return (T) obj;
    }
}

class CircularTest1{
    private CircularTest2 circularTest2;

    public CircularTest2 getCircularTest2() {
        return circularTest2;
    }

    public void setCircularTest2(CircularTest2 circularTest2) {
        this.circularTest2 = circularTest2;
    }
}

class CircularTest2{
    private CircularTest1 circularTest1;

    public CircularTest1 getCircularTest1() {
        return circularTest1;
    }

    public void setCircularTest1(CircularTest1 circularTest1) {
        this.circularTest1 = circularTest1;
    }
}
```

运行程序你会发现问题完美的解决了

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/63135dba531b45938dfbc9d69ecc6301.png)

&emsp;&emsp;在上面的方法中的核心是getBean方法，Test1 创建后填充属性时依赖Test2，那么就去创建 Test2，在创建 Test2 开始填充时发现依赖于 Test1，但此时 Test1 这个半成品对象已经存放在缓存到 `singletonObjects` 中了，所以Test2可以正常创建，在通过递归把 Test1 也创建完整了。

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/2c97505674514ed28a774477c51e0f0b.png)

最后总结下该案例解决的本质：

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/09f7cb069e58480fa37c8c5ac0dd8467.png)

## 5.5 Spring循环依赖

&emsp;&emsp;然后我们再来看看Spring中是如何解决循环依赖问题的呢？刚刚上面的案例中的对象的生命周期的核心就两个

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/f297c4657bfa4318bb1db866ad960848.png)

&emsp;&emsp;而Spring创建Bean的生命周期中涉及到的方法就很多了。下面是简单列举了对应的方法

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/51bfe454457c459b8edabde7a40318b5.png)

&emsp;&emsp;基于前面案例的了解，我们知道肯定需要在调用构造方法方法创建完成后再暴露对象，在Spring中提供了三级缓存来处理这个事情，对应的处理节点如下图：

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/d4394ca79d9a4dea87ebb7c461d7485b.png)

对应到源码中具体处理循环依赖的流程如下：

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/33568ba20781477eafed5c790a44212a.png)

&emsp;&emsp;上面就是在Spring的生命周期方法中和循环依赖出现相关的流程了。那么源码中的具体处理是怎么样的呢？我们继续往下面看。

首先在调用构造方法的后会放入到三级缓存中

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/8fe6a991c479455fb588e4246de9709d.png)

下面就是放入三级缓存的逻辑

```java
	protected void addSingletonFactory(String beanName, ObjectFactory<?> singletonFactory) {
		Assert.notNull(singletonFactory, "Singleton factory must not be null");
		// 使用singletonObjects进行加锁，保证线程安全
		synchronized (this.singletonObjects) {
			// 如果单例对象的高速缓存【beam名称-bean实例】没有beanName的对象
			if (!this.singletonObjects.containsKey(beanName)) {
				// 将beanName,singletonFactory放到单例工厂的缓存【bean名称 - ObjectFactory】
				this.singletonFactories.put(beanName, singletonFactory);
				// 从早期单例对象的高速缓存【bean名称-bean实例】 移除beanName的相关缓存对象
				this.earlySingletonObjects.remove(beanName);
				// 将beanName添加已注册的单例集中
				this.registeredSingletons.add(beanName);
			}
		}
	}
```

然后在填充属性的时候会存入二级缓存中

```java
earlySingletonObjects.put(beanName,bean);
registeredSingletons.add(beanName);
```

最后把创建的对象保存在了一级缓存中

```java
	protected void addSingleton(String beanName, Object singletonObject) {
		synchronized (this.singletonObjects) {
			// 将映射关系添加到单例对象的高速缓存中
			this.singletonObjects.put(beanName, singletonObject);
			// 移除beanName在单例工厂缓存中的数据
			this.singletonFactories.remove(beanName);
			// 移除beanName在早期单例对象的高速缓存的数据
			this.earlySingletonObjects.remove(beanName);
			// 将beanName添加到已注册的单例集中
			this.registeredSingletons.add(beanName);
		}
	}
```

## 5.6 疑问点

这些疑问点也是面试官喜欢问的问题点

### 为什么需要三级缓存

三级缓存主要处理的是AOP的代理对象，存储的是一个ObjectFactory

三级缓存考虑的是带你对象，而二级缓存考虑的是性能-从三级缓存的工厂里创建出对象，再扔到二级缓存（这样就不用每次都要从工厂里拿）

### 没有三级环境能解决吗？

没有三级缓存是可以解决循环依赖问题的

### 三级缓存分别什么作用

一级缓存：正式对象

二级缓存：半成品对象

三级缓存：工厂

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/99f0bb5b710a49f6b9ebd53a173118a5.png)



# 6.Spring的生命周期

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1646114654000/cf1072694ce9496aa04c3c6fde40c38a.png)

结合图，把Bean对象在Spring中的关键节点介绍一遍

## Spring Bean的创建生命周期

UserService.class ---> 无参构造方法 --->普通对象--->依赖注入（属性赋值、BeanNameAware接口、BeanClassLoaderAware接口、BeanFactoryAware接口）--->初始化前（postconstruct)--->初始化（initializingBean)--->初始化后（aop)--->代理对象--->Bean

## Bean的创建过程

那么Spring到底是如何来创建一个Bean的呢，这个就是Bean创建的生命周期，大致过程如下： 

1. 利用该类的构造方法来实例化得到一个对象（但是如何一个类中有多个构造方法，Spring则会进行选择，这个叫做**推断构造方法**，如果有多个，可以用@Autowired进行指定）
2. 得到一个对象后，Spring会判断该对象中是否存在被@Autowired注解了的属性，把这些属性找出来并由Spring进行赋值（**依赖注入**）
3. 依赖注入后，Spring会判断该对象是否实现了BeanNameAware接口、BeanClassLoaderAware接口、BeanFactoryAware接口，如果实现了，就表示当前对象必须实现该接口中所定义的setBeanName()、setBeanClassLoader()、setBeanFactory()方法，那Spring就会调用这些方法并传入相应的参数（**Aware回调**）
4. Aware回调后，Spring会判断该对象中是否存在某个方法被@PostConstruct注解了，如果存在，Spring会调用当前对象的此方法（**初始化前**）
5. 紧接着，Spring会判断该对象是否实现了InitializingBean接口，如果实现了，就表示当前对象必须实现该接口中的afterPropertiesSet()方法，那Spring就会调用当前对象中的afterPropertiesSet()方法（**初始化**）
6. 最后，Spring会判断当前对象需不需要进行AOP，如果不需要那么Bean就创建完了，如果需要进行AOP，则会进行动态代理并生成一个代理对象做为Bean（**初始化后**）

通过最后一步，我们可以发现，当Spring根据UserService类来创建一个Bean时：

1. 如果不用进行AOP，那么Bean就是UserService类的构造方法所得到的对象。
2. 如果需要进行AOP，那么Bean就是UserService的代理类所实例化得到的对象，而不是UserService本身所得到的对象。

Bean对象创建出来后：

1. 如果当前Bean是单例Bean，那么会把该Bean对象存入一个Map<String, Object>，Map的key为beanName，value为Bean对象。这样下次getBean时就可以直接从Map中拿到对应的Bean对象了。（实际上，在Spring源码中，这个Map就是**单例池**）
2. 如果当前Bean是原型Bean，那么后续没有其他动作，不会存入一个Map，下次getBean时会再次执行上述创建过程，得到一个新的Bean对象。

## 推断构造方法

Spring在基于某个类生成Bean的过程中，需要利用该类的构造方法来实例化得到一个对象，但是**如果一个类存在多个构造方法，Spring会使用哪个呢？**

Spring的判断逻辑如下：

1. 如果一个类只存在一个构造方法，不管该构造方法是无参构造方法，还是有参构造方法，Spring都会用这个构造方法
2. 如果一个类存在多个构造方法

1. 1. 这些构造方法中，存在一个无参的构造方法，那么Spring就会用这个无参的构造方法
   2. 这些构造方法中，不存在一个无参的构造方法，那么Spring就会**报错**

**Spring的设计思想是这样的：**

1. 如果一个类中没有显式的构造方法，则编译器会自动生成一个无参构造函数。
2. 如果一个类只有一个构造方法，那么没得选择，只能用这个构造方法
3. 如果一个类存在多个构造方法，Spring不知道如何选择，就会看是否有无参的构造方法，因为无参构造方法本身表示了一种默认的意义。`不过如果某个构造方法上加了@Autowired注解`，那就表示程序员告诉Spring就用这个加了注解的方法，那Spring就会用这个加了@Autowired注解构造方法了



> 需要重视的是，如果Spring选择了一个有参的构造方法，Spring在调用这个有参构造方法时，需要传入参数，那这个参数是怎么来的呢？

Spring会根据入参的类型和入参的名字去Spring中找Bean对象（以单例Bean为例，Spring会从单例池那个Map中去找）：

1. 先根据入参类型找，如果只找到一个，那就直接用来作为入参
2. 如果根据类型找到多个，则再根据入参名字来确定唯一一个
3. 最终如果没有找到，则会报错，无法创建当前Bean对象

```java
// 以下两种情况单独出现都会报错，因为Spring容器中可能找不到相应的对象。
public UserService(int a){
    System.out.println(a);
}
public UserService(Integer a){
    System.out.println(a);
}
```

确定用哪个构造方法，确定入参的Bean对象，这个过程就叫做**推断构造方法**。

## AOP大致流程

AOP就是进行动态代理，在创建一个Bean的过程中，**Spring在`最后一步`会去判断当前正在创建的这个Bean是不是需要进行AOP，如果需要则会进行动态代理。**

如何判断当前Bean对象需不需要进行AOP:

1. 找出所有的切面Bean
2. 遍历切面中的每个方法，看是否写了@Before、@After等注解
3. 如果写了，则判断所对应的Pointcut是否和当前Bean对象的类是否匹配
4. 如果匹配则表示当前Bean对象有匹配的的Pointcut，表示需要进行AOP



利用cglib进行AOP的大致流程：

1. 生成代理类UserServiceProxy，代理类继承UserService
2. 代理类中重写了父类的方法，比如UserService中的test()方法
3. 代理类中还会有一个target引用，该引用指向被代理对象（也就是通过UserService类推断构造方法实例化出来的对象，进行了依赖注入、初始化等步骤的对象）
   1. 代理对象并不是原始对象的直接代替，**而是一个对原始对象的包装**。原始对象的状态和行为不会因为代理对象的存在而改变，只是在调用原始对象的方法时，代理对象会在方法调用前后加入一些逻辑。因此，代理对象和原始对象在概念上是不同的，它们有各自的生命周期和行为。
4. 代理类中的test()方法被执行时的逻辑如下：

1. 1. 执行切面逻辑（@Before）
   2. 调用target.test()



当我们从Spring容器得到UserService的Bean对象时，拿到的就是UserServiceProxy所生成的对象，也就是代理对象。



UserService代理对象.test()--->执行切面逻辑--->target.test()，`注意target对象不是代理对象，而是被代理对象。`这句话很关键。

## Spring事务

当我们在某个方法上加了@Transactional注解后，就`表示该方法在调用时会开启Spring事务，而这个方法所在的类所对应的Bean对象会是该类的代理对象`。

Spring事务的代理对象执行某个方法时的步骤：

1. 判断当前执行的方法是否存在@Transactional注解
2. 如果存在，则利用事务管理器（TransactionMananger）新建一个数据库连接
3. 修改数据库连接的autocommit为false
4. 执行target.test()，执行程序员所写的业务逻辑代码，也就是执行sql
5. 执行完了之后如果没有出现异常，则提交，否则回滚



Spring事务是否会失效的判断标准：**某个加了@Transactional注解的方法被调用时，要判断到底是不是直接**`被代理对象调用的`**，如果是则事务会生效，如果不是则失效。**



# 7.Spring中支持几种作用域

Spring容器中的bean可以分为5个范围：

1. singleton：默认，每个容器中只有一个bean的实例，单例的模式由BeanFactory自身来维护。
2. prototype：为每一个bean请求提供一个实例。
3. request：为每一个网络请求创建一个实例，在请求完成以后，bean会失效并被垃圾回收器回收。
4. session：与request范围类似，确保每个session中有一个bean的实例，在session过期后，bean会随之失效。
5. global-session：全局作用域，global-session和Portlet应用相关。当你的应用部署在Portlet容器中工作时，它包含很多portlet。如果你想要声明让所有的portlet共用全局的存储变量的话，那么这全局变量需要存储在global-session中。全局作用域与Servlet中的session作用域效果相同。


# 8.说说事务的隔离级别

&emsp;&emsp;事务隔离级别指的是一个事务对数据的修改与另一个并行的事务的隔离程度，当多个事务同时访问相同数据时，如果没有采取必要的隔离机制，就可能发生以下问题：

| 问题       | 描述                                                                                                                                                                                                                                                                                                            |
| ---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 脏读       | 一个事务读到另一个事务未提交的更新数据，所谓脏读，就是指事务A读到了事务B还没有提交的数据，比如银行取钱，事务A开启事务，此时切换到事务B，事务B开启事务-->取走100元，此时切换回事务A，事务A读取的肯定是数据库里面的原始数据，因为事务B取走了100块钱，并没有提交，数据库里面的账务余额肯定还是原始余额，这就是脏读 |
| 幻读       | 是指当事务不是独立执行时发生的一种现象，例如第一个事务对一个表中的数据进行了修改，这种修改涉及到表中的全部数据行。 同时，第二个事务也修改这个表中的数据，这种修改是向表中插入一行新数据。那么，以后就会发生操作第一个事务的用户发现表中还有没有修改的数据行，就好象 发生了幻觉一样。                            |
| 不可重复读 | 在一个事务里面的操作中发现了未被操作的数据 比方说在同一个事务中先后执行两条一模一样的select语句，期间在此次事务中没有执行过任何DDL语句，但先后得到的结果不一致，这就是不可重复读                                                                                                                                |

**Spring支持的隔离级别**

| 隔离级别        | 描述                                                                                                                                                           |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DEFAULT         | 使用数据库本身使用的隔离级别`<br>` ORACLE（读已提交） MySQL（可重复读）                                                                                      |
| READ_UNCOMITTED | 读未提交（脏读）最低的隔离级别，一切皆有可能。                                                                                                                 |
| READ_COMMITED   | 读已提交，ORACLE默认隔离级别，有幻读以及不可重复读风险。                                                                                                       |
| REPEATABLE_READ | 可重复读，解决不可重复读的隔离级别，但还是有幻读风险。                                                                                                         |
| SERLALIZABLE    | 串行化，最高的事务隔离级别，不管多少事务，挨个运行完一个事务的所有子事务之后才可以执行另外一个事务里面的所有子事务，这样就解决了脏读、不可重复读和幻读的问题了 |

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190703000608167.png)

&emsp;&emsp;再必须强调一遍，不是事务隔离级别设置得越高越好，事务隔离级别设置得越高，意味着势必要花手段去加锁用以保证事务的正确性，那么效率就要降低，因此实际开发中往往要在效率和并发正确性之间做一个取舍，一般情况下会设置为READ_COMMITED，此时避免了脏读，并发性也还不错，之后再通过一些别的手段去解决不可重复读和幻读的问题就好了。


# 9.事务的传播行为

Spring中的7个事务传播行为:

| 事务行为                  | 说明                                                                                             |
| :------------------------ | :----------------------------------------------------------------------------------------------- |
| PROPAGATION_REQUIRED      | 支持当前事务，假设当前没有事务。就新建一个事务                                                   |
| PROPAGATION_SUPPORTS      | 支持当前事务，假设当前没有事务，就以非事务方式运行                                               |
| PROPAGATION_MANDATORY     | 支持当前事务，假设当前没有事务，就抛出异常                                                       |
| PROPAGATION_REQUIRES_NEW  | 新建事务，假设当前存在事务。把当前事务挂起                                                       |
| PROPAGATION_NOT_SUPPORTED | 以非事务方式运行操作。假设当前存在事务，就把当前事务挂起                                         |
| PROPAGATION_NEVER         | 以非事务方式运行，假设当前存在事务，则抛出异常                                                   |
| PROPAGATION_NESTED        | 如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作。 |

**举例说明**

**案例代码**

ServiceA

```java
ServiceA {   
     void methodA() {
         ServiceB.methodB();
     }
}
```

ServiceB

```java
ServiceB { 
     void methodB() {
     }    
}
```

### 1.PROPAGATION_REQUIRED

&emsp;&emsp;假如当前正要运行的事务不在另外一个事务里，那么就起一个新的事务 比方说，ServiceB.methodB的事务级别定义PROPAGATION_REQUIRED, 那么因为执行ServiceA.methodA的时候，ServiceA.methodA已经起了事务。这时调用ServiceB.methodB，ServiceB.methodB看到自己已经执行在ServiceA.methodA的事务内部。就不再起新的事务。而假如ServiceA.methodA执行的时候发现自己没有在事务中，他就会为自己分配一个事务。这样，在ServiceA.methodA或者在ServiceB.methodB内的不论什么地方出现异常。事务都会被回滚。即使ServiceB.methodB的事务已经被提交，可是ServiceA.methodA在接下来fail要回滚，ServiceB.methodB也要回滚
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190223225404935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NTI2NTcz,size_16,color_FFFFFF,t_70)

### 2.PROPAGATION_SUPPORTS

&emsp;&emsp;假设当前在事务中。即以事务的形式执行。假设当前不在一个事务中，那么就以非事务的形式执行

### 3PROPAGATION_MANDATORY

&emsp;&emsp;必须在一个事务中执行。也就是说，他仅仅能被一个父事务调用。否则，他就要抛出异常

### 4.PROPAGATION_REQUIRES_NEW

&emsp;&emsp;这个就比较绕口了。 比方我们设计ServiceA.methodA的事务级别为PROPAGATION_REQUIRED，ServiceB.methodB的事务级别为PROPAGATION_REQUIRES_NEW。那么当运行到ServiceB.methodB的时候，ServiceA.methodA所在的事务就会挂起。ServiceB.methodB会起一个新的事务。等待ServiceB.methodB的事务完毕以后，他才继续运行。
他与PROPAGATION_REQUIRED 的事务差别在于事务的回滚程度了。由于ServiceB.methodB是新起一个事务，那么就是存在两个不同的事务。假设ServiceB.methodB已经提交，那么ServiceA.methodA失败回滚。ServiceB.methodB是不会回滚的。假设ServiceB.methodB失败回滚，假设他抛出的异常被ServiceA.methodA捕获，ServiceA.methodA事务仍然可能提交。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190223230140433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NTI2NTcz,size_16,color_FFFFFF,t_70)

### 5.PROPAGATION_NOT_SUPPORTED

&emsp;&emsp;当前不支持事务。比方ServiceA.methodA的事务级别是PROPAGATION_REQUIRED 。而ServiceB.methodB的事务级别是PROPAGATION_NOT_SUPPORTED ，那么当执行到ServiceB.methodB时。ServiceA.methodA的事务挂起。而他以非事务的状态执行完，再继续ServiceA.methodA的事务。

### 6.PROPAGATION_NEVER

&emsp;&emsp;不能在事务中执行。
如果ServiceA.methodA的事务级别是PROPAGATION_REQUIRED。 而ServiceB.methodB的事务级别是PROPAGATION_NEVER ，那么ServiceB.methodB就要抛出异常了。

### 7.PROPAGATION_NESTED

&emsp;&emsp;如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则执行与PROPAGATION_REQUIRED类似的操作。


# 10.Spring事务实现的方式

**编程式事务管理**：这意味着你可以通过编程的方式管理事务，这种方式带来了很大的灵活性，但很难维护。

**声明式事务管理**：这种方式意味着你可以将事务管理和业务代码分离。你只需要通过注解或者XML配置管理事务。


# 11.事务注解的本质是什么

&emsp;&emsp;@Transactional 这个注解仅仅是一些（和事务相关的）元数据，在运行时被事务基础设施读取消费，并使用这些元数据来配置bean的事务行为。 大致来说具有两方面功能，一是表明该方法要参与事务，二是配置相关属性来定制事务的参与方式和运行行为

&emsp;&emsp;声明式事务主要是得益于Spring AOP。使用一个事务拦截器，在方法调用的前后/周围进行事务性增强（advice），来驱动事务完成。

&emsp;&emsp;@Transactional注解既可以标注在类上，也可以标注在方法上。当在类上时，默认应用到类里的所有方法。如果此时方法上也标注了，则方法上的优先级高。 另外注意方法一定要是public的。



## 12, 常用的注解

### @Async

作用：能够开启方法的异步。

存在的两个问题：

- 默认不能解决循环依赖
  - **解决：**在
- 默认使用到的线程池是`SimpleAsyncTaskExecutor`, 它不能复用线程，且默认线程数不做限制，易出现OOM
  - 1、为每个任务新起一个线程。2、默认线程数不做限制。3、不复用线程









---

# SpringBOOT面试专题

# 1.介绍下Spring的初始化过程

&emsp;&emsp;Spring的初始化过程中会走refresh方法，这是个模板模式的实现，包含有如下的14个方法

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648877365000/49095613fd85496aa8daeff55da04425.png)

每个方法的相关作用

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648877365000/b15b3ca64abe4bbb8066973afe27270c.png)

把每个方法的作用按照这个图介绍下就可以了

# 2.配置文件的加载解析

&emsp;&emsp;Spring初始化的时候在obtainFreshBeanFactory方法中完成了配置文件的加载解析，并把解析的bean标签信息封装到了BeanDefinition对象中，所有的解析的BeanDefinition对象都存储在了DefaultListableBeanFactory对象的beanDefinitionMap的Map集合中。

# 3.介绍下Spring中常用的注解

&emsp;&emsp;@Controller,@Service,@Repository 这些日常开发中常用的注解没啥挑战，@Import注解会让面试官眼前一亮。

@Import注解本身的由来是在Spring3.0的时候由xml文件的方式向注解编程的发展，替换以前在配置文件中的/`<import>标签` ，也就是可以导入其他的配置类，然后@Import注解还扩展了对应的功能

静态注入：可以直接把对应的类型注入到容器中:@Import(User.class)

动态注入：可以实现ImportSelector接口和ImportBeanDefinitionRegistrar接口，然后通过重写对应的方法来实现动态的注入

当然在ImportSelector接口的实现还可以触发延迟加载的逻辑。DeferredImportSelector，这块在SpringBoot的自动装配中就应用到了


# 4.SpringBoot 的自动装配原理

&emsp;&emsp;

![image.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648877365000/48daa416341d4a5a9a3369395a3e527f.png)



# 5.介绍下SpringBoot的启动流程

![SpringBoot.png](https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648877365000/9d454c37dd3a420e9a0e5c461e9a99ca.png)


# 6.SpringBoot中有了属性文件为什么还要加一个bootstrap.yml文件?

&emsp;&emsp;在单体的SpringBoot项目中其实我们是用不到bootstrap.yml文件的，bootsrap.yml文件的使用需要SpringCloud的支持，因为在微服务环境下我们都是有配置中心的，来统一的管理系统的相关配置属性，那么怎么去加载配置中心的内容呢？一个SpringBoot项目启动的时候默认只会加载对应的application.yml中的相关信息，这时bootstrap.yml的作用就体现出来了，会在SpringBoot正常启动前创建一个父容器来通过bootstrap.yml中的配置来加载配置中心的内容。


# 7.如果要对属性文件中的账号密码加密如何实现？

&emsp;&emsp;其实这是一个比较篇实战的一个问题，我们在application.yml中保存的MySQL数据库的账号密码或者其他服务的账号密码，都可以保存加密后的内容，那么我们在处理的时候要怎么解密呢？这个其实比较简单只需要对SpringBoot的执行流程清楚就可以了，第一个我们可以通过自定义监听器可以在加载解析了配置文件之后对加密的文件中做解密处理同时覆盖之前加密的内容，或者通过对应的后置处理器来处理，具体的实现如下：


![在这里插入图片描述](https://img-blog.csdnimg.cn/457ab5a2fd124ff988e10b2af6209811.png)

然后我们通过案例代码来演示下，加深大家的理解
首先我们在属性文件中配置加密后的信息

```properties
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mb?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=true
spring.datasource.username=root
# 对通过3DES对密码加密
spring.datasource.password=t5Jd2CzFWEw=

spring.datasource.type=com.alibaba.druid.pool.DruidDataSource

mybatis.mapper-locations=classpath:mapper/*.xml
```

&emsp;&emsp;在SpringBoot项目启动的时候在在刷新Spring容器之前执行的，所以我们要做的就是在加载完环境配置信息后，获取到配置的 `spring.datasource.password=t5Jd2CzFWEw=` 这个信息，然后解密并修改覆盖就可以了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/56ead524284e4317b40700fa7170e7b9.png)&emsp;&emsp;然后在属性文件的逻辑其实是通过发布事件触发对应的监听器来实现的
![在这里插入图片描述](https://img-blog.csdnimg.cn/795454a61a254cb388b86b308f0b89e3.png)
&emsp;&emsp;所以第一个解决方案就是你自定义一个监听器，这个监听器在加载属性文件(ConfigFileApplicationListener)的监听器之后处理,这种方式稍微麻烦点，
&emsp;&emsp;还有一种方式就是通过加载属性文件的一个后置处理器来处理，这就以个为例来实现

3DES的工具类

```java
/**
 * 3DES加密算法，主要用于加密用户id，身份证号等敏感信息,防止破解
 */
public class DESedeUtil {

    //秘钥
    public static final String  KEY = "~@#$y1a2n.&@+n@$%*(1)";
    //秘钥长度
    private static final int secretKeyLength = 24;
    //加密算法
    private static final String  ALGORITHM = "DESede";
    //编码
    private static final String CHARSET = "UTF-8";

    /**
     * 转换成十六进制字符串
     * @param key
     * @return
     */
    public static byte[] getHex(String key){
        byte[] secretKeyByte = new byte[24];
        try {
            byte[] hexByte;
            hexByte = new String(DigestUtils.md5Hex(key)).getBytes(CHARSET);
            //秘钥长度固定为24位
            System.arraycopy(hexByte,0,secretKeyByte,0,secretKeyLength);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return secretKeyByte;
    }

    /**
     * 生成密钥，返回加密串
     * @param key 密钥
     * @param encodeStr 将加密的字符串
     * @return
     */
    public static String  encode3DES(String key,String encodeStr){
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(getHex(key), ALGORITHM));
            return Base64.encodeBase64String(cipher.doFinal(encodeStr.getBytes(CHARSET)));
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }
    /**
     * 生成密钥,解密，并返回字符串
     * @param key 密钥
     * @param decodeStr 需要解密的字符串
     * @return
     */
    public static String decode3DES(String key, String decodeStr){
        try {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(getHex(key),ALGORITHM));
            return new String(cipher.doFinal(new Base64().decode(decodeStr)),CHARSET);
        } catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }


    public static void main(String[] args) {
        String userId = "123456";
        String encode = DESedeUtil.encode3DES(KEY, userId);
        String decode = DESedeUtil.decode3DES(KEY, encode);
        System.out.println("用户id>>>"+userId);
        System.out.println("用户id加密>>>"+encode);
        System.out.println("用户id解密>>>"+decode);
    }

}
```

声明后置处理器

```java
public class SafetyEncryptProcessor implements EnvironmentPostProcessor {
    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        for (PropertySource<?> propertySource : environment.getPropertySources()) {
            System.out.println("propertySource = " + propertySource);
            if(propertySource instanceof OriginTrackedMapPropertySource){
                OriginTrackedMapPropertySource source = (OriginTrackedMapPropertySource) propertySource;
                for (String propertyName : source.getPropertyNames()) {
                    //System.out.println(propertyName + "=" + source.getProperty(propertyName));
                    if("spring.datasource.password".equals(propertyName)){
                        Map<String,Object> map = new HashMap<>();
                        // 做解密处理
                        String property = (String) source.getProperty(propertyName);
                        String s = DESedeUtil.decode3DES(DESedeUtil.KEY, property);
                        System.out.println("密文：" + property);
                        System.out.println("解密后的：" + s);
                        map.put(propertyName,s);

                        // 注意要添加到前面，覆盖
                        environment.getPropertySources().addFirst(new MapPropertySource(propertyName,map));
                    }
                }
            }
        }
    }
}
```

然后在META-INF/spring.factories文件中注册

```properties
org.springframework.boot.env.EnvironmentPostProcessor=com.bobo.util.SafetyEncryptProcessor
```

然后启动项目就可以了
![在这里插入图片描述](https://img-blog.csdnimg.cn/970447b8998445abb81d6b9b407bde6b.png)

&emsp;搞定



8. 
