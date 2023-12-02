# Spring

## 判断BeanDefinition的checkCandidate方法

Spring框架在扫描类创建BeanDefinition之后，为什么checkCandidate方法需要判断这么多？

```java
protected boolean checkCandidate(String beanName, BeanDefinition beanDefinition) throws IllegalStateException {
    if (!this.registry.containsBeanDefinition(beanName)) {
        return true;
    }
    BeanDefinition existingDef = this.registry.getBeanDefinition(beanName);
    BeanDefinition originatingDef = existingDef.getOriginatingBeanDefinition();
    if (originatingDef != null) {
        existingDef = originatingDef;
    }
    // 是否兼容，如果兼容返回false表示不会重新注册到Spring容器中，如果不冲突则会抛异常。
    if (isCompatible(beanDefinition, existingDef)) {
        return false;
    }
    throw new ConflictingBeanDefinitionException("Annotation-specified bean name '" + beanName +
            "' for bean class [" + beanDefinition.getBeanClassName() + "] conflicts with existing, " +
            "non-compatible bean definition of same name and class [" + existingDef.getBeanClassName() + "]");
}
```

上边的方法是为了防止下边这种情况：

```java
AnnotationApplicationContext context = new AnnotationApplicationContext();
context.register(Config.class);
context.register(Config1.class);
context.fresh();
```

1. `Config.class`和`Config1.class`指定了相同的扫描路径，那就意味着Spring将会扫描两次，但是又不需要添加两次BeanDefinition，所以checkCandidate会判断两个BeanDefinition指向的Bean是不是同一个？如果是的，那就不需要抛出异常，直接返回false，不添加到BeanDefinitionMap中。否则，抛出异常。



## 属性文件中的账号密码加密如何实现？





