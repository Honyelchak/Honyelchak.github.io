## 1. Java中有几种类型的流？

- 字符流和字节流
- ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190418185002235.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODc1NTg1,size_16,color_FFFFFF,t_70)

- **字节流继承`InputStream`和`OutPutStream`**
- **字符流继承`InputStreamReader`和`OutputStreamWriter`**
- 总体架构图
  - ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190418184716728.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODc1NTg1,size_16,color_FFFFFF,t_70)

## 2.字节流和字符流哪个好？怎么选择？

- 绝大多数情况下使用字节流会更好，因为字节流是字符流的包装，而大多数时候 IO 操作都是直接操作磁盘文件，所以这些流在传输时都是以字节的方式进行的（图片等都是按字节存储的）

- ```java
  // 注意看字符流构造方法需要传InputStream
  public InputStreamReader(InputStream in) {
      super(in);
      try {
          sd = StreamDecoder.forInputStreamReader(in, this, (String)null); // ## check lock object
      } catch (UnsupportedEncodingException e) {
          // The default encoding should always be available
          throw new Error(e);
      }
  }
  ```

- 如果对于操作需要通过 IO 在内存中频繁处理字符串的情况使用字符流会好些，因为字符流具备缓冲区，提高了性能。

## 3. 什么是缓冲区？有什么作用？

 缓冲区就是一段特殊的内存区域，很多情况下当程序需要频繁地操作一个资源（如文件或数据库）则性能会很低，所以为了提升性能就可以将一部分数据暂时读写到缓存区，以后直接从此区域中读写数据即可，这样就显著提升了性。
对于 Java 字符流的操作都是在缓冲区操作的，所以如果我们想在字符流操作中主动将缓冲区刷新到文件则可以使用 flush() 方法操作。



5. 什么是Java序列化，如何实现Java序列化？
序列化就是一种用来处理对象流的机制，将对象的内容进行流化。可以对流化后的对象进行读写操作，可以将流化后的对象传输于网络之间。序列化是为了解决在对象流读写操作时所引发的问题
序列化的实现：将需要被序列化的类实现Serialize接口，没有需要实现的方法，此接口只是为了标注对象可被序列化的，然后使用一个输出流（如：FileOutputStream）来构造一个ObjectOutputStream(对象流)对象，再使用ObjectOutputStream对象的write(Object obj)方法就可以将参数obj的对象写出



## 4. Java获取项目根路径和类加载路径

