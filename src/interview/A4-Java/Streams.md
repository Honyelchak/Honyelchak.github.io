### Spliterator



```java
// 判断该spliterator是否有该特性(参数)， 
default boolean hasCharacteristics(int characteristics) {
    return (characteristics() & characteristics) == characteristics;
}
```

这里涉及到一个位运算。



