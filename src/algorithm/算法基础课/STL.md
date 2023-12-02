# C++ STL

- C++中读取单个字符，最好用读入字符串的方式。`scanf("%s")`
- `0x3f3f3f3f`是一个大于1e9的数。
- `memset()`是按照字节赋值的，int是4个字节。所以`memset(h, 0x3f, sizeof h)`就是把数组都置为`0x3f3f3f3f`。
  - `memset(h, -1, sizeof h)` 每个位置都
- 



## Algorithm

### unique

将数组中重复的元素放到最后。

> 准确来说是将不重复的元素移到前面。

- 一般和`erase`组合使用，删除重复元素。

```cpp
#include<cstdio>
#include<vector>
#include<algorithm>

using namespace std;

int main()
{
    
    vector<int> a = {1,3,3,4,5,6,6,7};
    print(a);
    vector<int>::iterator it1;
    
    it1 = unique(a.begin(), a.end());
    print(a);
    a.erase(it1, a.end());
    print(a);
}

// 结果：
// 1 3 3 4 5 6 6 7 
// 1 3 4 5 6 7 6 7 
// 1 3 4 5 6 7 

```

### sort

> sort(start, end)

将数组中[start, end)范围内的元素排序。

- 默认是升序
- 不稳定排序，稳定可选择`stable_sort(start, end)`

```cpp
// 1. 使用STL提供的比较规则进行降序
sort(a.begin(), a.end(), std::greater<int>());
// 2. 默认升序
sort(a.begin(), a.end());
// 3. 自定义比较规则
sort(a.begin(), a.end(), cmp());

-------
// 自定义的比较规则cmp()
bool mycomp(int i, int j) {
    return (i < j);
}
    
```

## Vector

倍增变长数组，支持随机寻址。

> 倍增：每一次数组长度不够的时候，就分配当前数组长度一倍的空间。
>
> 系统为某一个程序分配空间时，所需时间，基本上与空间大小无关，与申请次数有关。

### 基本API

`size()`

`empty()`

`clear()`：清空

`front()/back()`：返回第(最后)一个数

`push_back()/pop_back()`：在队尾插入(删除)一个数

`begin()/end()`：迭代指针

### 遍历

```cpp
// 1. 数组下标
for (int i = 0; i < v.size(); i ++) v[i];
// 2. 迭代器遍历
for (vector<int>::iterator it = v.begin(); it != v.end(); i ++) *i;
// 3. C++ 11 基于范围的for遍历(http://c.biancheng.net/view/3738.html)
for (auto num : v) num;
```

### 支持比较运算

```cpp
// 如果两个容器具有相同的长度而且所有元素都相等，那么这两个容器就相等；否则，不等

// 如果两个容器长度不相同，但较短的容器中所有元素都等于较长容器中对应的元素，则称较短的容器小于另一个容器。

// 如果两个容器都不是对方的初始子序列，则它们的比较结果取决于所比较的第一个不相等的元素。
```



## pair<int,int>

存储一个二元组。

- `p.first`第一个元素

- `p.second`第二个元素

```cpp
// 两种初始化方式：
pair <int,string> p;

// 1. p = make_pair(10,"abc");
// 2. p = {10,"abc");
```



### 支持比较排序

按照字典序，以first为第一个关键字，以second为第二个关键字。

## string

字符串， 支持随机寻址。

`size()/length()`：返回字符串长度

`substr(起始下标，(字串长度))`：返回子串

`c_str()` ：返回字符串所在字符数组的起始地址

`empty()`: Test if string is empty

`clear()`: clear() 之后，size() 变成 0，capacity() 不变

## queue

普通队列

`size()`

`empty()`

`push()`：向队尾插入一个元素。

`front()`：返回队头元素

`back()`：返回队尾元素

`pop()`：弹出队头元素

**Ps:**

- 队列没有`clear()`函数，清空 q = queue<int> ();

## priority_queue

优先队列

- 默认是大根堆：`priority_queue<int> q`
- 定义为小根堆：`priority_queue<int, vector<int>, greater<int>> q`

`push()`

`top()`

`pop()`

`size()`

`empty()`

**Ps:**

- 没有`clear()`函数

## stack

栈

`push()`

`top()`

`pop()`

`empty()`

`size()`

## deque

双端队列，支持随机寻址。

`size()`

`clear()`

`empty()`

`front()/back()`

`push_back()/pop_back()`

`push_front()/pop_front()`

`begin()/end()`

## set、map、multiset、multimap

基于平衡二叉树(红黑树)，动态维护有序序列。

- set不允许元素重复，如果有重复就会被忽略，但`multiset`允许

`size()`

`empty()`

`clear()`

`begin()/end()`



### set/multiset

> ​    c++语言中，multiset是<set>库中一个非常有用的类型，它可以看成一个序列，**插入一个数，删除一个数都能够在O(logn)的时间**内完成，而且他**能时刻保证序列中的数是有序的**，而且序列中可以存在重复的数。

`insert()`

`find()`

`count()`：返回某一个数的个数

`erase()`:

- 输入是一个数x， 删除所有x。`O(k + logn)`
- 输入一个迭代器，删除这个迭代器。

`lower_bound()/upper_bound()`:

- `lower_bound(x)`  返回大于等于x的最小的数的迭代器
- `upper_bound(x)`  返回大于x的最小的数的迭代器

### map/multimap

`insert()` ：插入的数是一个pair
`erase()` ：输入的参数是pair或者迭代器
`find()`
随机寻址[]：时间复杂度是 `O(logn)`， 注意multimap不支持此操作。 
`lower_bound()`/`upper_bound()`

## unordered_set、unordered_map、unordered_multiset、unordered_multimap

哈希表

- 和上面类似，但增删改查的时间复杂度是O(1)

- 不支持lower_bound()和upper_bound()

## bitset

压位

### 定义

`bitset <个数> 变量名;`

### 支持

`~，&，|，^`
`>>，<<`
`==，!=`
`[]`

### 常用函数

`count();` 返回某一个数的个数
`any();` 判断是否至少有一个1
`none();` 判断是否全为0
`set();` 把所有位置赋值为1
`set(k,v); `将第k位变成v
`reset();` 把所有位变成0
`flip();` 把所有位取反，等价于~
`flip(k);` 把第k位取反

# 总结

`size()`、`empty()`是所有STL都有的，时间复杂度是O(1)的。

