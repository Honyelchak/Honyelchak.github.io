## house管理系统

### `CommandLineRunner`的作用

> 平常开发中有可能需要实现在**项目启动后执行的功能**，SpringBoot提供的一种简单的实现方案就是添加一个model并实现CommandLineRunner接口，实现功能的代码放在实现的run方法中



```java
public interface CommandLineRunner {
    void run(String... var1) throws Exception;
}
```



#### 如果有多个类实现CommandLineRunner接口，如何保证顺序?

> SpringBoot在项目启动后会遍历所有实现CommandLineRunner的实体类并执行run方法，如果需要按照一定的顺序去执行，那么就需要在实体类上使用一个@Order注解（或者实现Order接口）来表明顺序



### 继承`SpringBootServletInitializer`

启动项目有两种方式：

- 默认的Application启动，在创建项目时自动生成application启动类，直接run执行。
- 使用外置的tomcat启动
  - 默认的启动类要继承`SpringBootServletInitializer`类，并重写configure()方法。



### 注解@Bean

- @component注解表明一个类会作为组件类，斌告知spring要为这个类创建bean。

- @bean注解告诉spring这个方法会返回一个对象，这个对象要注册为Spring应用上下文中的bean。通常方法体中包含了最终产生bean实例的逻辑。

- 如下，有参数connectFactory，若spring容器中只有一个ConnectionFactory 类型的bean，则不论参数取名为何都是按类型取bean ConnectionFactory 为参数，若有多个则参数取名必须为多个bean中的一个，否则报错。

  ```java
  @Bean
  	public RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {
  		System.out.println(String.format("-----------getRabbitAdmin:%s", connectionFactory.hashCode()));
  		return new RabbitAdmin(connectionFactory);
  	}
  ```

  