# SpringBoot配置流程



## @SpringBootApplication

`@SpringBootApplication`注解中包含了



- `@SpringBootConfiguration`
  - 打开之后是`@Configuration`
- `@EnableAutoConfiguration`
- `@ComponentScan`



### @Configuration

JavaConfig形式的SpringIOC容器的配置类使用的那个`@Configuration`,SpringBoot社区推荐使用基于JavaConfig的配置形式，所以这里的启动类标注了`@Configuration`之后，本身其实也是一个IOC容器的配置类。



- XML声明和定义配置方式：

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"
	xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
						http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
						http://www.springframework.org/schema/aop 
						http://www.springframework.org/schema/aop/spring-aop-3.0.xsd
						http://www.springframework.org/schema/context 
						http://www.springframework.org/schema/context/spring-context-3.0.xsd
						http://www.springframework.org/schema/tx 
						http://www.springframework.org/schema/tx/spring-tx-3.0.xsd
	">
	<bean id="app" class="com..." />
```

- 用一个过滤器举例，JavaConfig的配置方式是这样：

```java
@Configuration
public class DruidConfiguration {    
    @Bean
    public FilterRegistrationBean statFilter(){
        //创建过滤器
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(new WebStatFilter());
        //设置过滤器过滤路径
        filterRegistrationBean.addUrlPatterns("/*");
        //忽略过滤的形式
        filterRegistrationBean.addInitParameter("exclusions","*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");
        return filterRegistrationBean;
    }
}
```



**重点：**



- **任何一个标注了@Configuration的Java类定义都是一个JavaConfig配置类。**
  - 多个配置类可使用import进行合并
- ==**任何一个标注了@Bean的方法，其返回值将作为一个bean定义注册到Spring的IoC容器，方法名将默认成该bean定义的id。**==



------

### @ComponentScan

@ComponentScan对应XML配置中的元素，@ComponentScan的功能其实就是自动扫描并加载符合条件的组件（比如@Component和@Repository等）或者bean定义，最终将这些bean定义加载到IoC容器中。

我们可以通过basePackages等属性来细粒度的定制@ComponentScan自动扫描的范围，如果不指定，则**默认Spring框架实现会从声明@ComponentScan所在类的package进行扫描。**



**Ps：**所以SpringBoot的启动类最好是放在root package下，因为默认不指定basePackages。

------

### @EnableAutoConfiguration

看英文意思就是自动配置，概括一下就是，借助@Import的帮助，将所有符合自动配置条件的bean定义加载到IoC容器。





一面
一面主要是问一些常规的问题，java基础，数据库基础的题目，还是比较简单的
二面
二面主要会问一些你的项目经验，具体你应用到了那些技术，如何克服难题等等

