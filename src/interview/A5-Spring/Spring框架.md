## 解决耦合的思路: 工厂模式解耦

在实际开发中可以把三层的对象的全类名都使用配置文件保存起来,当启动服务器应用加载的时候,创建这些对象的实例并保存在`容器`中. 在获取对象时,不使用new的方式,而是直接从`容器`中获取,这就是`工厂设计模式`.



# 使用springIOC解决程序耦合



1. 配置`bean`: 在类的根路径下的`resource`目录下创建`bean.xml`文件,把对象的创建交给spring来管理.
   每个``标签对应一个类,其`class`属性为该类的全类名,`id`属性为该类的id,在spring配置中,通过`id`获取类的对象.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd">
    
        <!--把对象的创建交给spring来管理-->
        <bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl"></bean>
        <bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl"></bean>
    </beans>
   ```

   

2. 在表现层文件`Client.java`中通过`容器`创建对象.通过核心容器的`getBean()`方法获取具体对象.

   ```java
   public class Client {
        public static void main(String[] args) {
            // 获取核心容器对象
            ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml");
            // 根据id获取Bean对象
            IAccountService as  = (IAccountService)ac.getBean("accountService");
            
            // 执行as的具体方法
            // ...
        }
    }
   
   ```

   我们常用的`容器`有三种: `ClassPathXmlApplicationContext`,`FileSystemXmlApplicationContext`,`AnnotationConfigApplicationContext`.

   - `ClassPathXmlApplicationContext`: 它是从类的根路径下加载配置文件
   - `FileSystemXmlApplicationContext`: 它是从磁盘路径上加载配置文件
   - `AnnotationConfigApplicationContext`: 读取注解创建容器

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190614160046551.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L25jZXB1X0NoZW4=,size_16,color_FFFFFF,t_70)

## 使用XML配置文件实现IOC

### bean标签

- 作用: 配置托管给spring的对象,默认情况下调用类的无参构造函数,若果没有无参构造函数则不能创建成功
- 属性:
  - id: 指定对象在容器中的标识,将其作为参数传入getBean()方法可以获取获取对应对象.
  - class: 指定类的全类名,默认情况下调用无参构造函数
  - scope: 指定对象的作用范围,可选值如下
    singleton: 单例对象,默认值
    prototype: 多例对象
    request: 将对象存入到web项目的request域中
    session: 将对象存入到web项目的session域中
    global session: 将对象存入到web项目集群的session域中,若不存在集群,则global session相当于session
  - `init-method`：指定类中的初始化方法名称,在对象创建成功之后执行
  - `destroy-method`：指定类中销毁方法名称,对`prototype`多例对象没有作用,因为多利对象的销毁时机不受`容器`控制

### bean的作用范围和生命周期

 

![image-20200225224818184](.Spring框架.assets\image-20200225224818184.png)

### 实例化 Bean 的三种方式

1. **使用默认无参构造函数创建对象**: 默认情况下会根据默认无参构造函数来创建类对象,若Bean类中没有默认无参构造函数,将会创建失败.

   - 如果类中写了有参构造方法，若没有写无参构造方法的话
     - 如果没有在配置文件中配置构造参数的话，配置文件会报错

   ```xml
   <bean id="accountService" class="cn.maoritian.service.impl.AccountServiceImpl"></bean>
   ```

2. **使用静态工厂的方法创建对象:**

   创建静态工厂如下:

   ```java
   // 静态工厂,其静态方法用于创建对象
   public class StaticFactory {
   	public static IAccountService createAccountService(){
   		return new AccountServiceImpl();
   	}
   }
   
   ```

   使用`StaticFactory`类中的静态方法`createAccountService`创建对象,涉及到``标签的属性:

   1. `id`属性: 指定对象在容器中的标识,用于从容器中获取对象
   2. `class`属性: 指定静态工厂的全类名
   3. `factory-method`属性: 指定生产对象的静态方法

   ```xml
   <bean id="accountService"
   	class="cn.maoritian.factory.StaticFactory"
   	factory-method="createAccountService"></bean>
   
   ```

   1. > 其实,类的构造函数也是静态方法,因此`默认无参构造函数`也可以看作一种`静态工厂方法`

3. **使用实例工厂的方法创建对象**

   创建实例工厂如下:

   ```
   public class InstanceFactory {
   	public IAccountService createAccountService(){
   		return new AccountServiceImpl();
   	}
   }
   ```

   先创建实例工厂对象`instanceFactory`,通过调用其`createAccountService()`方法创建对象,涉及到``标签的属性:

   1. `factory-bean`属性: 指定实例工厂的`id`
   2. `factory-method`属性: 指定实例工厂中生产对象的方法

   ```xml
   <bean id="instancFactory" class="cn.maoritian.factory.InstanceFactory"></bean>
   <bean id="accountService"
   	factory-bean="instancFactory"
   	factory-method="createAccountService"></bean>
   
   ```

---

## 依赖注入

### 依赖注入的概念

依赖注入(`Dependency Injection`)是spring框架核心ioc的具体实现.

  **我们等待框架通过配置的方式将持久层对象传入业务层,而不是直接在代码中new某个具体的持久化层实现类,这种方式称为依赖注入.**



### 依赖注入的方法

因为我们是通过**反射**的方式来创建属性对象的,而不是使用new关键字,因此我们要指定创建出对象各字段的取值.



#### 1、使用构造函数注入

通过类默认的构造函数来给创建类的字段赋值,相当于调用类的构造方法.

涉及的标签: `<constructor-arg>`用来定义构造函数的参数,其属性可大致分为两类:

1. 寻找要赋值给的字段
   1. `index`: 指定参数在构造函数参数列表的索引位置
   2. `type`: 指定参数在构造函数中的数据类型
   3. `name`: 指定参数在构造函数中的变量名,最常用的属性

2. 指定赋给字段的值
   1. `value`: 给基本数据类型和String类型赋值
   2. `ref`: 给其它Bean类型的字段赋值,`ref`属性的值应为配置文件中配置的`Bean`的`id`

```xml
<!-- 使用Date类的无参构造函数创建Date对象 -->
<bean id="now" class="java.util.Date" scope="prototype"></bean>

<bean id="accountService" class="cn.maoritian.service.impl.AccountServiceImpl">
	<constructor-arg name="name" value="myname"></constructor-arg>
	<constructor-arg name="age" value="18"></constructor-arg>
	<!-- birthday字段为已经注册的bean对象,其id为now -->
	<constructor-arg name="birthday" ref="now"></constructor-arg>
</bean>

```



#### 2、使用set方法注入(更常用)

在类中提供需要注入成员属性的set方法,创建对象只调用要赋值属性的set方法。

涉及的标签: `<property>`,用来定义要调用set方法的成员. 其主要属性可大致分为两类:

1. 指定要调用set方法赋值的成员字段
   1. `name`：要调用set方法赋值的成员字段
2. 指定赋给字段的值
   1. `value`: 给基本数据类型和String类型赋值
   2. `ref`: 给其它Bean类型的字段赋值,`ref`属性的值应为配置文件中配置的`Bean`的`id`

```xml
<!-- 使用Date类的无参构造函数创建Date对象 -->
<bean id="now" class="java.util.Date" scope="prototype"></bean>

<bean id="accountService" class="cn.maoritian.service.impl.AccountServiceImpl">
	<property name="name" value="myname"></property>
	<property name="age" value="21"></property>
	<!-- birthday字段为已经注册的bean对象,其id为now -->
	<property name="birthday" ref="now"></property>
</bean>

```



#### 注入集合字段

集合字段及其对应的标签按照**集合的结构**分为两类: 相同结构的集合标签之间可以互相替换.

1. 只有键的结构:

   1. 数组字段: `标签表示集合,`标签表示集合内的成员.
   2. List字段: `标签表示集合,`标签表示集合内的成员.
   3. Set字段: `标签表示集合,`标签表示集合内的成员.

2. 键值对的结构:

   1. Map字段: map标签表示集合,`<entry>`标签表示集合内的键值对,其key属性表示键,value属性表示值.
   2. Properties字段: `<props>`标签表示集合,`<prop>`标签表示键值对,其key属性表示键,标签内的内容表示值.
      其中`<map>,<props>`标签之间,`<entry>,<prop>`标签之间可以互相替换使用.
   
    

#### 3. 区别

**本质区别：**

- 设置注入是先通过调用无参构造器创建一个bean实例，然后调用对应的setter方法注入依赖关系；

- 而构造注入则直接调用有参数的构造器，当bean实例创建完成后，已经完成了依赖关系的注入。

**应用场景区别：**

使用构造函数需要对所有字段进行赋值



## 使用注解实现IOC

使用注解实现IOC,要将注解写在类的定义中

### 常用注解

#### 用于创建对象的注解

这些注解的作用相当于`bean.xml`中的`<bean>`标签

![image-20200225225946278](.Spring框架.assets\image-20200225225946278.png)

> `@Controller`,`@Service`,`@Repository`注解的作用和属性与`@Component`是一模一样的,可以相互替代,它们的作用是使三层对象的分别更加清晰.



#### 用于注入数据的注解

这些注解的作用相当于`bean.xml`中的`<property>`标签.                                        

![image-20200225230036444](.Spring框架.assets\image-20200225230036444.png)



#### 用于改变作用范围的注解

这些注解的作用相当于`bean.xml`中的``标签的`scope`属性.

 ![image-20200225230122622](.Spring框架.assets\image-20200225230122622.png)



#### 和生命周期相关的注解



![image-20200225230133181](.Spring框架.assets\image-20200225230133181.png)





![image-20200225230214365](.Spring框架.assets\image-20200225230214365.png)





------



https://blog.csdn.net/ncepu_Chen/article/details/91903396







### 静态代理

这种代理方式需要代理对象和目标对象实现一样的接口。

- 优点：
  - 可以在不修改目标对象的前提下扩展目标对象的功能。
- 缺点：
  - 冗余，由于代理对象要实现与目标对象一样的接口，会产生过多的代理类。
  - 不宜维护，一旦接口增加方法，目标对象和代理对象都要进行修改。

```java
// 目标接口
public interface Target {
    public void solve();
}
// Log代理类
public class Log implements Target{

    private Target target;

    public Log(Target target) {
        this.target = target;
    }

    @Override
    public void solve() {
        System.out.println("开始执行！");
        target.solve();
        System.out.println("执行结束！");
    }
}
// Test测试类
public class Test {

    public static void main(String[] args) {
        new Log(()-> System.out.println("Target 执行中！！！！")).solve();
    }
}
```



### 动态代理的写法

步骤：

1. 定义一个`InvocationHandler`实例，它负责实现接口的方法调用；

2. 通过

   ```
   Proxy.newProxyInstance()
   ```

   创建

   ```
   interface
   ```

   实例，它需要3个参数：

   1. 使用的`ClassLoader`，通常就是接口类的`ClassLoader`；
   2. 需要实现的接口数组，==至少需要传入一个接口进去；==
   3. 用来处理接口方法调用的`InvocationHandler`实例。

3. 将返回的`Object`强制转型为接口。



常用的动态代理分为两种

1. 基于接口的动态代理,使用JDK 官方的 Proxy 类,要求被代理者至少实现一个接口
2. 基于子类的动态代理,使用第三方的 CGLib库,要求被代理类不能是final类.

区别：

- JDK的动态代理有一个限制，就是使用动态代理的对象必须实现一个或多个接口。
- 如果想代理没有实现接口的类，就可以使用CGLIB实现。



```java
接口名 新对象名 = (接口名)Proxy.newProxyInstance(
    被代理的对象.getClass().getClassLoader(),	// 被代理对象的类加载器,固定写法
    被代理的对象.getClass().getInterfaces(),	// 被代理对象实现的所有接口,固定写法
    new InvocationHandler() {	// 匿名内部类,通过拦截被代理对象的方法来增强被代理对象
        /* 被代理对象的任何方法执行时,都会被此方法拦截到
        	其参数如下:
                proxy: 代理对象的引用,不一定每次都用得到
                method: 被拦截到的方法对象
                args: 被拦截到的方法对象的参数
        	返回值:
        		被增强后的返回值
		*/
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            if("方法名".equals(method.getName())) {
            	// 增强方法的操作
                rtValue = method.invoke(被代理的对象, args);
                // 增强方法的操作
                return rtValue;
            }          
        }
    });

```



### 使用动态代理解决代码冗余现象

我们使用动态代理对上述Service进行改造,创建`BeanFactory`类作为service层对象工厂,通过其`getAccountService`方法得到业务层对象.



```java
// 用于创建Service的代理对象的工厂
public class BeanFactory {

	private IAccountService accountService;		// 被增强的service对象
	private TransactionManager txManager;		// 事务控制工具类

	// 成员变量的set方法,以便Spring容器注入
	public void setTxManager(TransactionManager txManager) {
		this.txManager = txManager;
	}
	public final void setAccountService(IAccountService accountService) {
		this.accountService = accountService;
	}

	// 获取增强后的Service对象
	public IAccountService getAccountService() {
		return (IAccountService) Proxy.newProxyInstance(accountService.getClass().getClassLoader(),
			accountService.getClass().getInterfaces(),
			new InvocationHandler() {
				// 增强方法
				@Override
				public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
					Object rtValue = null;
					try {
						//1.开启事务
						txManager.beginTransaction();
						//2.执行操作
						rtValue = method.invoke(accountService, args);
						//3.提交事务
						txManager.commit();
						//4.返回结果
						return rtValue;
					} catch (Exception e) {
						//5.回滚操作
						txManager.rollback();
						throw new RuntimeException(e);
					} finally {
						//6.释放连接
						txManager.release();
					}
				}
			});
	}
}

```

```xml
<!--配置beanfactory-->
<bean id="beanFactory" class="cn.maoritian.factory.BeanFactory">
	<!-- 注入service -->
    <property name="accountService" ref="accountService"></property>
    <!-- 注入事务控制工具 -->
    <property name="txManager" ref="txManager"></property>
</bean>

```



# 使用SpringAOP解决代码冗余

## AOP相关术语

- `Joinpoint`(`连接点`): 被拦截到的方法.
- `Pointcut`(`切入点`): 我们对其进行增强的方法.
- `Advice`(`通知`/`增强`): 对切入点进行的增强操作
  - 包括`前置通知`,`后置通知`,`异常通知`,`最终通知`,`环绕通知`
- `Weaving`(`织入`): 是指把增强应用到目标对象来创建新的代理对象的过程。
- **`Aspect`(`切面`): 是切入点和通知的结合**



## 使用XML配置AOP



1. 在`bean.xml中引入约束`并将通知类注入Spring容器中

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd">
	
    <!--通知类-->
	<bean id="logger" class="cn.maoritian.utils.Logger"></bean>
</beans>

```

2. 使用`<aop:config>`标签声明AOP配置,所有关于AOP配置的代码都写在``标签内

```
<aop:config>
	<!-- AOP配置的代码都写在此处 -->
</aop:config>

```

3. 使用`<aop:aspect`标签配置切面,其属性如下

   1. `id`: 指定切面的`id`
   2. `ref`: 引用通知类的`id`

    ```xml
   <aop:config>
   	<aop:aspect id="logAdvice" ref="logger">
       	<!--配置通知的类型要写在此处-->
       </aop:aspect>
   </aop:config>
   
    ```

    

4. 使用`aop:pointcut`标签配置切入点表达式,指定对哪些方法进行增强,其属性如下

   1. `id`: 指定切入点表达式的`id`
   2. `expression`: 指定切入点表达式

   ```xml
       <aop:config>
           <aop:aspect id="logAdvice" ref="logger">
               <aop:pointcut expression="execution(* cn.maoritian.service.impl.*.*(..))" id="pt1"></aop:pointcut>
           </aop:aspect>
       </aop:config>
   
   ```

5. 使用`<aop:xxx>`标签配置对应类型的通知方法

![image-20200225230818217](.Spring框架.assets\image-20200225230818217.png)

```xml
<aop:config>
    <aop:aspect id="logAdvice" ref="logger">
        <!--指定切入点表达式-->
        <aop:pointcut expression="execution(* cn,maoritian.service.impl.*.*(..))" id="pt1"></aop:pointcut>
        <!--配置各种类型的通知-->
        <aop:before method="printLogBefore" pointcut-ref="pt1"></aop:before>
        <aop:after-returning method="printLogAfterReturning" pointcut-ref="pt1"></aop:after-returning>
        <aop:after-throwing method="printLogAfterThrowing" pointcut-ref="pt1"></aop:after-throwing>
        <aop:after method="printLogAfter" pointcut-ref="pt1"></aop:after>
		<!--环绕通知一般单独使用-->       
        <!-- <aop:around method="printLogAround" pointcut-ref="pt1"></aop:around> -->
    </aop:aspect>
</aop:config>

```



### 切入点表达式

- 切入点表达式的写法: `execution([修饰符] 返回值类型 包路径.类名.方法名(参数))`
- 切入点表达式的省略写法:



![image-20200225230949579](.Spring框架.assets\image-20200225230949579.png)





![image-20200225231012980](.Spring框架.assets\image-20200225231012980.png)



![image-20200225231029959](.Spring框架.assets\image-20200225231029959.png)

![image-20200225231041448](.Spring框架.assets\image-20200225231041448.png)

![image-20200225231053770](.Spring框架.assets\image-20200225231053770.png)

![image-20200225231116049](.Spring框架.assets\image-20200225231116049.png)



### Spring事务传播

- require
  - 如果存在一个事务，则支持当前事务。如果没有事务则开启一个新的事务。 
- supports
  - 如果存在一个事务，就支持当前事务，如果没有事务就，非事务的执行。
- mandatory
  - 如果存在一个事务，就支持当前事务，如果不存在，就报异常。
- requires_new
  - 需要使用 JtaTransactionManager作为事务管理器。 
    它会开启一个新的事务。如果一个事务已经存在，则先将这个存在的事务挂起。
- not_supproted
  - 总是非事务的执行，并挂起任何存在的事务。
  - 也需要事务管理器。
- _never
  - 总是非事务的执行，如果存在一个活动事务，则抛出异常。
- _nested
  - 如果当前存在事务，则在嵌套事务中执行，如果没有事务，则执行与required类似的操作。