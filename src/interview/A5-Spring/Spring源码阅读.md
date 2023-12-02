本文以`new AnnotationConfigApplicationContext()`为启动对象。

## AnnotationConfigApplicationContext构造方法



```java
StartupStep createAnnotatedBeanDefReader = this.getApplicationStartup().start("spring.context.annotated-bean-reader.create");
// 额外会创建StandardEnvironment
this.reader = new AnnotatedBeanDefinitionReader(this);
createAnnotatedBeanDefReader.end();
this.scanner = new ClassPathBeanDefinitionScanner(this);
```

