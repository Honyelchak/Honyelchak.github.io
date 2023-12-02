## 和Struts2的优略分析



**共同点：**

- 都是表现层框架，都是基于MVC模型编写的
- 底层都离不开原始servletAPI
- 处理请求的机制都是一个核心控制器。

**区别：**

- struts2是Filter，SpringMVC的入口是servlet
- SpringMVC是基于方法设计的，而Struts2是基于类，每次执行都会创建一个类
  - 所以SpringMVC会稍微比Struts2快一些。
- SpringMVC使用**更加简洁**。





## 请求参数的绑定

### 支持的数据类型：

- 基本类型参数：  包括基本类型和 String 类型 

- POJO 类型参数：   包括实体类，以及关联的实体类
- 数组和集合类型参数：   包括 List 结构和 Map 结构的集合（包括数组） 

SpringMVC 绑定请求参数是自动实现的，但是要想使用，必须遵循使用要求



### 使用要求：

- **基本类型或者 String类型：**  要求我们的参数名称必须和控制器中方法的形参名称保持一致。(严格区分大小写) 

- **POJO类型，或者它的关联对象：**  要求表单中参数名称和 POJO 类的属性名称保持一致。并且控制器方法的参数类型是 **POJO 类型**。

  - 若POJO中关联其他类，例如Person对象中关联Account对象。

    ```html
    <form .....>
        <input type="text" name="name"/>Person中有name
    	<input type="text" name="Account.余额" />Person中的Accout对象
    </form>
    
    ```

    

- **集合类型**,有两种方式： 

  - **第一种：**   要求集合类型的请求参数必须在 POJO 中。在表单中请求参数名称要和 POJO 中集合属性名称相同。给 List 集合中的元素赋值，使用下标。   给 Map 集合中的元素赋值，使用键值对。

  - **第二种：**   接收的请求参数是 json 格式数据。需要借助一个注解实现。 

    ```xml
    public Person{
    	String name;
    	int age;
    }
    public center{
    	List<Person> list;
    }
    <form .....>
        <!--list中的第一个对象-->
        <input type="text" name="list[0].name"/>
    	<input type="text" name="list[0].age" />
        <!--list中的第二个对象-->
        <input type="text" name="list[1].name"/>
    	<input type="text" name="list[1].age" />
    </form>
    
    ```



### 数据类型自动转换

它还可以实现一些数据类型自动转换。内置转换器全都在：    org.springframework.core.convert.support 包下。有： 

java.lang.Boolean -> java.lang.String : ObjectToStringConverter 

java.lang.Character -> java.lang.Number : CharacterToNumberFactory 

java.lang.Character -> java.lang.String : ObjectToStringConverter 

java.lang.Enum -> java.lang.String : EnumToStringConverter 

java.lang.Number -> java.lang.Character : NumberToCharacterConverter 
java.lang.Number -> java.lang.Number : NumberToNumberConverterFactory 

java.lang.Number -> java.lang.String : ObjectToStringConverter

 java.lang.String -> java.lang.Boolean : StringToBooleanConverter

 java.lang.String -> java.lang.Character : StringToCharacterConverter

 java.lang.String -> java.lang.Enum : StringToEnumConverterFactory 
java.lang.String -> java.lang.Number : StringToNumberConverterFactory 

java.lang.String -> java.util.Locale : StringToLocaleConverter 

java.lang.String -> java.util.Properties : StringToPropertiesConverter 

java.lang.String -> java.util.UUID : StringToUUIDConverter 

java.util.Locale -> java.lang.String : ObjectToStringConverter 

java.util.Properties -> java.lang.String : PropertiesToStringConverter 

java.util.UUID -> java.lang.String : ObjectToStringConverter 



#### 自定义类型转换器

1. 实现接口

```java
//org.springframe.core.xxx
// 实现该接口
public interface Converter<S,T>{
    T convert(String S);
}
```

```java
public class StringToDateConverter implements Converter<String, Date>{
    public  Date convert(String s){
        ....
        return xxx;
    }
}
```

2. 在springMVC.xml中配置自定义类型转换器。
   - spring配置类型转换器的机制是，**将自定义的转换器注册到类型转换服务中去**。

```xml
<bean id="converterService" class="org.springframework.context.support.ConversionServiceFactoryBean"> 
 <!-- 给工厂注入一个新的类型转换器 -->      
    <property name="converters"> 
      <array> 
       <!-- 配置自定义类型转换器 -->       
          <bean class="com.itheima.web.converter.StringToDateConverter"></bean> 
      </array>      
    </property> 
</bean>
```

3. 在annotation-driven标签中引用配置的类型转换服务。

   ```xml
   <mvc:annotation-driven conversion-service="converterService" />
   ```

   



### 处理乱码问题

```xml
post 请求方式： 在 web.xml 中配置一个过滤器 
<!-- 配置 springMVC 编码过滤器 -->   
<filter>    
    <filter-name>CharacterEncodingFilter</filter-name>   
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
 <!-- 设置过滤器中的属性值 -->    
    <init-param>
        <param-name>encoding</param-name>   
        <param-value>UTF-8</param-value>
    </init-param>   
 <!-- 启动过滤器 -->
    <init-param>
        <param-name>forceEncoding</param-name>   
        <param-value>true</param-value>
    </init-param>   
</filter>   
<!-- 过滤所有请求 -->
<filter-mapping>    
    <filter-name>CharacterEncodingFilter</filter-name>   
    <url-pattern>/*</url-pattern>
</filter-mapping> 
在 springmvc 的配置文件中可以配置，静态资源不过滤：
<!-- location 表示路径，mapping 表示文件，**表示该目录下的文件以及子目录的文件 -->   <mvc:resources location="/css/" mapping="/css/**"/>
<mvc:resources location="/images/" mapping="/images/**"/>
<mvc:resources location="/scripts/" mapping="/javascript/**"/>   
get 请求方式：  
tomacat 对 GET和 POST 请求处理方式是不同的，GET请求的编码问题，要改 tomcat 的 server.xml 配置文件，如下： 
<Connector  connectionTimeout="20000"  port="8080"    protocol="HTTP/1.1"  redirectPort="8443"/> 
改为： <Connector  connectionTimeout="20000"  port="8080"     protocol="HTTP/1.1"  redirectPort="8443"  useBodyEncodingForURI="true"/> 
如果遇到 ajax 请求仍然乱码，请把：  useBodyEncodingForURI="true"改为 URIEncoding="UTF-8" 即可
```



## WEB.xml配置

```xml




```



## 获取Servlet原生API

SpringMVC 还支持使用原始 ServletAPI 对象作为控制器方法的参数。

支持原始 ServletAPI 对象有： 

HttpServletRequest

HttpServletResponse

HttpSession

java.security.Principal

Locale 

InputStream  

OutputStream  

Reader  

Writer 
我们可以把上述对象，直接写在控制的方法参数中使用。 



## 常用注解

### @RequestParam

把请求中指定名称的参数给控制器中的形参赋值。

```java
// 请求参数为localhost:8080/test?name=xxx;
// required = false 可以省略
@RequestMapping("/useRequestParam") 
public String useRequestParam(@RequestParam("name")String username,       @RequestParam(value="age",required=false)Integer age)
{
    System.out.println(username+","+age);  
    return "success"; 
} 
```



### @RequestBody 

**用于获取请求体内容。**直接使用得到是 key=value&key=value...结构的数据。

 **get 请求方式不适用。**(没有请求体)



```html
<form action="test/xxx" method="post">
    <input type="text" name="name" />
    <input type="text" name="age" />
</form>
```



### @PathVariable

1. 作用：拥有绑定url中的占位符的。例如：url中有/delete/{id}，{id}就是占位符 
2. 属性 
   
1.  value：指定url中的占位符名称 
   
3. Restful风格的URL 

   1.  **请求路径一样**，可以**根据不同的请求方式去执行后台的不同方法** 
   2.  restful风格的URL优点 
      1.  结构清晰
      2. 符合标准
      3. 易于理解
      4. 扩展方便 

4. 代码如下

   ```java
   <a href="user/hello/1">入门案例</a>
   /**
   * 接收请求
   * @return
   */
   @RequestMapping(path="/hello/{id}")
   public String sayHello(@PathVariable(value="id") String id) {
   	System.out.println(id);
   	return "success";
   }
   
   ```

### @RequestHeader

![image-20200303185431951](.SpringMVC.assets\image-20200303185431951.png)



### @CookieValue

![image-20200303185507298](.SpringMVC.assets\image-20200303185507298.png)

### @ModelAttribute

1. 作用 
   1. 出现在方法上：表示当前方法会在控制器方法执行前线执行。 
   2. 出现在参数上：获取指定的数据给参数赋值。 
   3. 应用场景 
      1. 当提交表单数据不是完整的实体数据时，保证没有提交的字段使用数据库原来的数据。 

代码如下：



### @SessionAttributes

1. **作用：**用于多次执行控制器方法间的参数共享。
2. 属性 
   1. value：指定存入属性的名称



## . 



