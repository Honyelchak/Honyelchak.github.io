### jsp 和 servlet 有什么区别？

> Jsp就是一个Servlet程序！！！Servlet的技术可以用在Jsp程序中。Jsp的技术并不是全部适用于servlet程序！

#### JSP的特点

JSP的运行必须交给tomcat服务器， 在tomcat的work目录中，存放jsp运行时的临时目录

#### JSP执行过程

第一次：

- 客户端发送请求(.../index.jsp)
- tomcat扫描jsp文件，然后将在work目录下将JSP文件翻译成Java源代码
- 将Java源代码编译成class文件
- 构造对象，调用相应的方法。

第n次：

- 构造对象，调用相应的方法。

out.write(...)



### jsp 有哪些内置对象？作用分别是什么？

9大内置对象

- request：对应 Java 类 javax.servlet.http.HttpServletRequest；客户端的请求信息：Http协议头信息、Cookie、请求参数等

- response：对应 Java 类 javax.servlet.http.HttpServletRespons；用于服务端响应客户端请求，返回信息

- pageContext：对应 Java 类 javax.servlet.jsp.PageContext；页面的上下文

- session：对应 Java 类 javax.servlet.http.HttpSession；客户端与服务端之间的会话

- application：对应 Java 类 javax.servlet.ServletContext；用于获取服务端应用生命周期的信息

- out：对应 Java 类 javax.servlet.jsp.JspWriter；用于服务端传输内容到客户端的输出流

- config：对应 Java 类 javax.servlet.ServletConfig；初始化时，Jsp 引擎向 Jsp 页面传递的信息

- page：对应 Java 类 java.lang.Object；指向 Jsp 页面本身

- exception：对应 Java 类 java.lang.Throwabl；页面发生异常，产生的异常对象



### 说一下 jsp 的 4 种作用域？

`page域` 在这个作用域中存放的属性值，只能在当前页面中取出。

`request域从请求创建到请求消亡`

`Session域`范围是一段客户端与服务器端持续链接的时间。

`application域` 服务器web应用启动到停止，整个web应用中所有请求所涉及的页面。



### session 和 cookie 有什么区别？

- session数据存储到服务器端
- cookie数据存储到客户端



**一般实际使用中，都是把关键信息保存在 session 里，其他信息加密保存到cookie中。**



### 说一下 session 的工作原理？

session 是浏览器和服务器会话过程中，服务器分配的一块储存空间。服务器默认为浏览器在cookie中设置 sessionid，浏览器在向服务器请求过程中传输 cookie 包含 sessionid ，**服务器根据 sessionid 获取出会话中存储的信息。**

- 浏览器访问服务器的servlet时，服务器会自动创建session，并把sessionid通过cookie返回到浏览器。

- 服务器会默认给 session 一个过期时间，即从该 session 的会话在有效时间内没有再被访问就会被设置过超时，需要重新建立会话。

  如 tomcat 的默认会话超时时间为30分钟。



### 如果客户端禁止 cookie 能实现 session 还能用吗？

### spring mvc 和 struts 的区别是什么？

### 如何避免 sql 注入？

### 什么是 XSS 攻击，如何避免？

### 什么是 CSRF 攻击，如何避免？



### 转发与重定向的区别

#### 转发

**服务端行为**

- 地址栏不会改变
- 转发**只能转发到当前web应用内的资源**
- 可以将数据保存在request域对象中
- 转发只有一次请求

#### 重定向

**客户端行为**

- 地址栏会变
- 两次请求
- 不能在重定向的过程中，将数据保存到request中







