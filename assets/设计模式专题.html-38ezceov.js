import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-XffPLay1.js";const t={},p=e(`<h1 id="【金三银四】设计模式篇" tabindex="-1"><a class="header-anchor" href="#【金三银四】设计模式篇" aria-hidden="true">#</a> 【金三银四】设计模式篇</h1><h1 id="_1-谈谈你对设计模式的理解" tabindex="-1"><a class="header-anchor" href="#_1-谈谈你对设计模式的理解" aria-hidden="true">#</a> 1.谈谈你对设计模式的理解</h1><p>1.首先谈设计模式的作用：经验的传承，提高了软件复用的水平，最终达到提高软件开发效率</p><table><thead><tr><th>设计原则</th><th style="text-align:left;">简单说明</th></tr></thead><tbody><tr><td>单一职责</td><td style="text-align:left;">一个类只负责一项职责</td></tr><tr><td>里氏替换原则</td><td style="text-align:left;">子类可以扩展父类的功能，但不能改变父类原有的功能</td></tr><tr><td>依赖倒置原则</td><td style="text-align:left;">要依赖于抽象，不要依赖于具体，核心思想是<mark>面向接口编程</mark></td></tr><tr><td>接口隔离原则</td><td style="text-align:left;">建立单一接口，不要建立庞大臃肿的接口，<code>&lt;br&gt;</code>尽量细化接口，接口中的方法尽量少</td></tr><tr><td>迪米特法则 （最少知道原则）</td><td style="text-align:left;">一个对象应该对其他对象保持最少的了解</td></tr><tr><td>开闭原则</td><td style="text-align:left;">对扩展开放，对修改关闭</td></tr></tbody></table><p>2.设计模式的分类</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/2014caaf469649d1a3c84a582ef7319b.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>3.创建型模式：都是用来帮助我们创建对象的！</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/c6b87746e9884c22b56ca99bc265c496.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>4.结构性模式:关注对象和类的组织</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/6b8dffa88b924af6ba3664386d6a9f0a.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>5.行为型模式:关注系统中对象之间的相互交换，研究系统在运行时对象之间的相互通信和协作，进一步明确对象的职责，共有11中模式</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/9bfe35ab4a494cc4ae84a20ee9e30a5c.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h1 id="_2-谈谈你对单例模式的理解" tabindex="-1"><a class="header-anchor" href="#_2-谈谈你对单例模式的理解" aria-hidden="true">#</a> 2.谈谈你对单例模式的理解</h1><p>作用：单例模式的核心是<strong>保证一个类只有一个实例，并且提供一个访问实例的全局访问点。</strong></p><table><thead><tr><th>实现方式</th><th style="text-align:left;">优缺点</th></tr></thead><tbody><tr><td>饿汉式</td><td style="text-align:left;">线程安全，调用效率高 ，但是不能延迟加载</td></tr><tr><td>懒汉式</td><td style="text-align:left;">线程安全，调用效率不高，能延迟加载</td></tr><tr><td>双重检测锁式</td><td style="text-align:left;">在懒汉式的基础上解决并发问题</td></tr><tr><td>静态内部类式</td><td style="text-align:left;">线程安全，资源利用率高，可以延时加载</td></tr><tr><td>枚举单例</td><td style="text-align:left;">线程安全，调用效率高，但是不能延迟加载</td></tr></tbody></table><h2 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h2><p>也就是类加载的时候立即实例化对象，实现的步骤是先私有化构造方法，对外提供唯一的静态入口方法，实现如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单例模式：饿汉式
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance1</span> <span class="token punctuation">{</span>
	<span class="token comment">// 声明此类型的变量，并实例化，当该类被加载的时候就完成了实例化并保存在了内存中</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance1</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 对外提供一个获取实例的静态方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>饿汉式单例模式代码中，static变量会在类装载时初始化，此时也不会涉及多个线程对象访问该对象的问题。虚拟机保证只会装载一次该类，肯定不会发生并发访问的问题。因此，可以省略synchronized关键字</p><p>问题：如果只是加载本类，而不是要调用getInstance()，甚至永远没有调用，则会造成资源浪费！</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单例模式：饿汉式
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 声明此类型的变量，并实例化，当该类被加载的时候就完成了实例化并保存在了内存中</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance1</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 对外提供一个获取实例的静态方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单例模式：懒汉式
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance2</span> <span class="token punctuation">{</span>
	<span class="token comment">// 声明此类型的变量,但没有实例化</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance2</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 对外提供一个获取实例的静态方法，为了数据安全添加synchronized关键字</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">SingletonInstance2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 当instance不为空的时候才实例化</span>
			instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>  此种方式在类加载后如果我们一直没有调用getInstance方法，那么就不会实例化对象。实现了延迟加载，但是因为在方法上添加了synchronized关键字，每次调用getInstance方法都会同步，所以对性能的影响比较大。</p><h2 id="双重检测锁" tabindex="-1"><a class="header-anchor" href="#双重检测锁" aria-hidden="true">#</a> 双重检测锁</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * 单例模式：懒汉式
 * 双重检测机制
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance3</span> <span class="token punctuation">{</span>
	<span class="token comment">// 声明此类型的变量,但没有实例化</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span>  <span class="token class-name">SingletonInstance3</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 对外提供一个获取实例的静态方法，</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span>  <span class="token class-name">SingletonInstance3</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token class-name">SingletonInstance3</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">// 1.分配内存空间  2. 执行构造方法，实例化对象 3.把这个对象赋值给这个空间</span>
                    <span class="token comment">// 如果不加volatile 会执行重排序 1 3 2 </span>
					instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不加volatile有指令重排序的问题。添加后可以解决。</p><h2 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 静态内部类实现方式
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance4</span> <span class="token punctuation">{</span>
	<span class="token comment">// 静态内部类</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonClassInstance</span><span class="token punctuation">{</span>
		<span class="token comment">// 声明外部类型的静态常量</span>
		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SingletonInstance4</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 私有化构造方法</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// 对外提供的唯一获取实例的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance4</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token class-name">SingletonClassInstance</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举单例" tabindex="-1"><a class="header-anchor" href="#枚举单例" aria-hidden="true">#</a> 枚举单例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单例模式：枚举方式实现
 * <span class="token keyword">@author</span> dengp
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SingletonInstance5</span> <span class="token punctuation">{</span>

	<span class="token comment">// 定义一个枚举元素，则这个元素就代表了SingletonInstance5的实例</span>
	<span class="token constant">INSTANCE</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">singletonOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 功能处理</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-怎么解决反射爆破单例" tabindex="-1"><a class="header-anchor" href="#_3-怎么解决反射爆破单例" aria-hidden="true">#</a> 3.怎么解决反射爆破单例</h1><p>  在单例中我们定义的私有的构造器，但是我们知道反射是可以操作私有的属性和方法的，这时我们应该怎么处理？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
	<span class="token class-name">SingletonInstance1</span> s1 <span class="token operator">=</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 反射方式获取实例</span>
	<span class="token class-name">Class</span> c1 <span class="token operator">=</span> <span class="token class-name">SingletonInstance1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
	<span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	constructor<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SingletonInstance1</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SingletonInstance1</span><span class="token punctuation">)</span>constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>com.dpb.single.SingletonInstance1@15db9742
com.dpb.single.SingletonInstance1@6d06d69c

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>产生了两个对象，和单例的设计初衷违背了。 解决的方式是在无参构造方法中手动抛出异常控制,或者声明一个全局变量来控制。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
<span class="token keyword">private</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 只能有一个实例存在，如果再次调用该构造方法就抛出异常，防止反射方式实例化</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;单例模式只能创建一个对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种方式我们还可以通过反序列化的方式来破解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
	<span class="token class-name">SingletonInstance2</span> s1 <span class="token operator">=</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 将实例对象序列化到文件中</span>
	<span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>
			<span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;c:/tools/a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	oos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 将实例从文件中反序列化出来</span>
	<span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>
			<span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;c:/tools/a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">SingletonInstance2</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SingletonInstance2</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要在单例类中重写readResolve方法并在该方法中返回单例对象即可，如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dpb<span class="token punctuation">.</span>single</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">ObjectStreamException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 单例模式：懒汉式
 * <span class="token keyword">@author</span> 波波烤鸭
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance2</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>

	<span class="token comment">// 声明此类型的变量,但没有实例化</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SingletonInstance2</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 私有化所有的构造方法,防止直接通过new关键字实例化</span>
	<span class="token keyword">private</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 只能有一个实例存在，如果再次调用该构造方法就抛出异常，防止反射方式实例化</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;单例模式只能创建一个对象&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 对外提供一个获取实例的静态方法，为了数据安全添加synchronized关键字</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">SingletonInstance2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 当instance不为空的时候才实例化</span>
			instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingletonInstance2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 重写该方法，防止序列化和反序列化获取实例</span>
	<span class="token keyword">private</span> <span class="token class-name">Object</span> <span class="token function">readResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ObjectStreamException</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:readResolve方法是基于回调的，反序列化时，如果定义了readResolve()则直接返回此方法指定的对象，而不需要在创建新的对象！</p><h1 id="_4-说说你在哪些框架中看到了单例的设计" tabindex="-1"><a class="header-anchor" href="#_4-说说你在哪些框架中看到了单例的设计" aria-hidden="true">#</a> 4.说说你在哪些框架中看到了单例的设计</h1><p>1.Spring中的Bean对象，默认是单例模式</p><p>2.相关的工厂对象都是单例，比如：MyBatis中的SqlSessionFactory，Spring中的BeanFactory</p><p>3.保存相关配置信息的都是单例，比如：MyBatis中的Configuration对象，SpringBoot中的各个XXXAutoConfiguration对象等</p><p>4.应用程序的日志应用，一般都会通过单例来实现</p><p>5.数据库连接池的设计也是单例模式</p><h1 id="_5-谈谈你对工厂模式的理解" tabindex="-1"><a class="header-anchor" href="#_5-谈谈你对工厂模式的理解" aria-hidden="true">#</a> 5.谈谈你对工厂模式的理解</h1><p>  工厂模式的作用是帮助我们创建对象，我们不用自己来创建，根据需要创建的对象的复杂度我们可以把工厂模式分为简单工厂，工厂方法和抽象工厂。</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/95f501de57d3451faf9228414dc6f75f.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_5-1-简单工厂" tabindex="-1"><a class="header-anchor" href="#_5-1-简单工厂" aria-hidden="true">#</a> 5.1 简单工厂</h2><p>  简单工厂模式又称为静态工厂方法，他可以根据不同的参数而返回不同的实例，简单工厂模式专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。</p><p>JDK中的简单工厂应用：DataFormat</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/4fdddcfbf8784080a3706158f6945e9a.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>自己写一个简单工厂的案例</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/de2237eb14fe491fbd38c5a815fa7c27.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 简单工厂
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据对应的类型返回相关产品</span>
        <span class="token class-name">CarFactory</span><span class="token punctuation">.</span><span class="token function">createCar</span><span class="token punctuation">(</span><span class="token string">&quot;奥迪&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CarFactory</span><span class="token punctuation">.</span><span class="token function">createCar</span><span class="token punctuation">(</span><span class="token string">&quot;Byd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义公共的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Audi</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;奥迪在跑...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Byd</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Byd在跑...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建对应的简单工厂类</span>
<span class="token keyword">class</span> <span class="token class-name">CarFactory</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Car</span> <span class="token function">createCar</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;奥迪&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Audi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;Byd&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Byd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;该产品不能生产&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现简单工厂对于新增产品是无能为力的！不修改原有代码根本就没办法扩展!!!</p><h2 id="_5-2-工厂方法" tabindex="-1"><a class="header-anchor" href="#_5-2-工厂方法" aria-hidden="true">#</a> 5.2 工厂方法</h2><p>  针对于简单工厂的短板，引出了工厂方法模式，定义一个用户创建对象的接口，让子类决定实例化哪个类，工厂方法使一个类的实例化延迟到了其子类中。</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/cedbded5fc4543eb80dd3663bbe814c7.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>代码实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 工厂方法模式
 */
public class FactoryMethod {

    public static void main(String[] args) {
        new AudiCarFactory().createCar().run();
        new BydCarFactory().createCar().run();
    }


    public static interface  Car{
        public void run();
    }

    public static class Byd implements Car{
        @Override
        public void run() {
            System.out.println(&quot;比亚迪...&quot;);
        }
    }

    public static class Audi implements Car{
        @Override
        public void run() {
            System.out.println(&quot;奥迪...&quot;);
        }
    }

    public static interface CarFactory{
        public Car createCar();
    }

    // 扩展的工厂
    public static class AudiCarFactory implements CarFactory{
        @Override
        public Car createCar() {
            return new Audi();
        }
    }

    public static class BydCarFactory implements CarFactory{
        @Override
        public Car createCar() {
            return new Byd();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单工厂和工厂方法模式的对比</p><ol><li>简单工厂只有一个工厂，而工厂方法有多个工厂</li><li>简单工厂不支持扩展，而工厂方法支持扩展，扩展的方式就是添加对应的工厂类即可</li><li>简单工厂代码复杂度低，工厂方法代码复杂度高</li><li>...</li></ol><h2 id="_5-3-抽象工厂" tabindex="-1"><a class="header-anchor" href="#_5-3-抽象工厂" aria-hidden="true">#</a> 5.3 抽象工厂</h2><p>  上面的两种方式实现的工厂都是生产同一大类的产品，如果要实现生产不同类型的产品这时我们就可以用抽象工厂模式来实现。</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/185ba2bc37394c47ae8f62390d019829.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>代码实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 抽象工厂：多个产品族
 */
public class AbstractFactory {

    public static void main(String[] args) {
        Car car = new LuxuryEngineCarFacory().createCar();
        Engine engine = new LuxuryEngineCarFacory().createEngine();
        car.run();
        engine.run();
    }

    // 抽象工厂
    public static interface AbstarctComponentFactory{
        Car createCar();
        Engine createEngine();
    }

    public static class LuxuryEngineCarFacory implements AbstarctComponentFactory{
        @Override
        public Engine createEngine() {
            return new LuxuryEngineFactory().createEngine();
        }

        @Override
        public Car createCar() {
            return new BydCarFactory().createCar();
        }
    }

    public static class LowEngineCarFacory implements AbstarctComponentFactory{
        @Override
        public Car createCar() {
            return new AudiCarFactory().createCar();
        }

        @Override
        public Engine createEngine() {
            return new LowEngineFactory().createEngine();
        }
    }

    // 汽车产品族
    public static interface  Car{
        public void run();
    }

    public static class Byd implements Car {
        @Override
        public void run() {
            System.out.println(&quot;比亚迪...&quot;);
        }
    }

    public static class Audi implements Car {
        @Override
        public void run() {
            System.out.println(&quot;奥迪...&quot;);
        }
    }

    public static interface CarFactory{
        public Car createCar();
    }

    // 扩展的工厂
    public static class AudiCarFactory implements CarFactory {
        @Override
        public Car createCar() {
            return new Audi();
        }
    }

    public static class BydCarFactory implements  CarFactory{
        @Override
        public Car createCar() {
            return new Byd();
        }
    }

    // 发动机产品族
    public static interface Engine{
        public void run();
    }

    public static class LuxuryEngine implements Engine{
        @Override
        public void run() {
            System.out.println(&quot;豪华版发动机...&quot;);
        }
    }

    public static class LowEngine implements Engine{
        @Override
        public void run() {
            System.out.println(&quot;低配版发动机...&quot;);
        }
    }

    public static interface EngineFactory{
        public Engine createEngine();
    }

    public static class LuxuryEngineFactory implements EngineFactory{
        @Override
        public Engine createEngine() {
            return new LuxuryEngine();
        }
    }

    public static class LowEngineFactory implements EngineFactory{
        @Override
        public Engine createEngine() {
            return new LowEngine();
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三者的对比：</p><ol><li>简单工厂模式(静态工厂模式) ：虽然某种程度不符合设计原则，但实际使用最多。</li><li>工厂方法模式：不修改已有类的前提下，通过增加新的工厂类实现扩展。</li><li>抽象工厂模式：不可以增加产品，可以增加产品族！</li></ol><h1 id="_6-谈谈你对建造者模式的理解" tabindex="-1"><a class="header-anchor" href="#_6-谈谈你对建造者模式的理解" aria-hidden="true">#</a> 6.谈谈你对建造者模式的理解</h1><p>  实际开发中，我们所需要的对象构建时非常复杂，且有很多步骤需要处理时，这时建造者模式就很适合。比如MyBatis中的SqlSessionFactory对象的创建，我们不光要创建SqlSessionFactory本身的对象，还有完成MyBatis的全局配置文件和映射文件的加载解析操作，之后把解析出来的信息绑定在SqlSessionFactory对象中，</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/21221aa599f9428083bc92d81ac151d2.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>直接参考MyBatis的代码即可</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/6d7aec1477204d9397cf5b59a1f2ad65.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>所以建造者模式的作用就是帮助我们解决了复杂对象的创建</p><h1 id="_7-谈谈你对原型模式的理解" tabindex="-1"><a class="header-anchor" href="#_7-谈谈你对原型模式的理解" aria-hidden="true">#</a> 7.谈谈你对原型模式的理解</h1><p>  在java中我们知道通过new关键字创建的对象是非常繁琐的(类加载判断，内存分配，初始化等)，在我们需要大量对象的情况下，原型模式就是我们可以考虑实现的方式。   原型模式我们也称为克隆模式，即一个某个对象为原型克隆出来一个一模一样的对象，该对象的属性和原型对象一模一样。而且对于原型对象没有任何影响。原型模式的克隆方式有两种：浅克隆和深度克隆.</p><table><thead><tr><th>原型模式</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td>浅克隆</td><td style="text-align:left;">只是拷贝本对象,其对象内部的数组、引用对象等都不拷贝，\`\`还是指向原生对象的内部元素地址</td></tr><tr><td>深度克隆</td><td style="text-align:left;">深复制把要复制的对象所引用的对象都复制了一遍</td></tr></tbody></table><h2 id="_7-1-浅克隆" tabindex="-1"><a class="header-anchor" href="#_7-1-浅克隆" aria-hidden="true">#</a> 7.1 浅克隆</h2><p>  被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。换言之，浅复制仅仅复制所考虑的对象，而不复制它所引用的对象。 Object类提供的方法clone=只是拷贝本对象= ， =其对象内部的数组、引用对象等都不拷贝= ，还是指向原生对象的内部元素地址.</p><p>  被克隆的对象必须Cloneable,Serializable这两个接口;</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>bobo<span class="token punctuation">.</span>prototype</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 实现克隆的方法
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">CloneNotSupportedException</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setBirth</span><span class="token punctuation">(</span><span class="token class-name">Date</span> birth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>birth <span class="token operator">=</span> birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个普通对象</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">666666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;波波烤鸭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setBirth</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;原型对象的属性：&quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 克隆对象</span>
        <span class="token class-name">User</span> cloneUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> user<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;克隆的对象的属性：&quot;</span> <span class="token operator">+</span> cloneUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 修改原型对象的属性</span>
        date<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span><span class="token number">12345677</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 修改克隆对象的属性</span>
        cloneUser<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;波哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;原型对象的属性：&quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;克隆的对象的属性：&quot;</span> <span class="token operator">+</span> cloneUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, birth=&quot;</span> <span class="token operator">+</span> birth <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/6443e2d851514225a9253ca8d26de73f.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>浅克隆的问题:虽然产生了两个完全不同的对象，但是被复制的对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用都仍然指向原来的对象。<img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/05ad80babac04b43956010b8244cd85b.png" alt="image.png" loading="lazy"></p><h2 id="_7-2-深度克隆" tabindex="-1"><a class="header-anchor" href="#_7-2-深度克隆" aria-hidden="true">#</a> 7.2 深度克隆</h2><p>  被复制对象的所有变量都含有与原来的对象相同的值，除去那些引用其他对象的变量。那些引用其他对象的变量将指向被复制过的新对象，而不再是原有的那些被引用的对象。换言之，深复制把要复制的对象所引用的对象都复制了一遍。 实现的效果是:</p><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/6fdf967a6fc74e8690b75e3bb3640b7c.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>深度克隆(deep clone)有两种实现方式，第一种是在浅克隆的基础上实现，第二种是通过序列化和反序列化实现，我们分别来介绍</p><p>方式一：在浅克隆的基础上实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 实现克隆的方法
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">CloneNotSupportedException</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 实现深度克隆</span>
        user<span class="token punctuation">.</span>birth <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://fynotefile.oss-cn-zhangjiakou.aliyuncs.com/fynote/1462/1648123011000/1ba148deb0244a4dbfef33a8f1b3bcbd.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>方式二：序列化和反序列化</p><table><thead><tr><th>名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td>序列化</td><td style="text-align:left;">把对象转换为字节序列的过程。</td></tr><tr><td>反序列化</td><td style="text-align:left;">把字节序列恢复为对象的过程。</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span><span class="token punctuation">,</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token class-name">Date</span> date <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1231231231231l</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;波波烤鸭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span><span class="token function">setBirth</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----原型对象的属性------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//使用序列化和反序列化实现深复制</span>
	<span class="token class-name">ByteArrayOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ObjectOutputStream</span>    oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">)</span><span class="token punctuation">;</span>
	oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> bos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">ByteArrayInputStream</span>  bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ObjectInputStream</span>	  ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>bis<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//克隆好的对象！</span>
	<span class="token class-name">User</span> user1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

	<span class="token comment">// 修改原型对象的值</span>
	date<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span><span class="token number">221321321321321l</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;------克隆对象的属性-------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,100),c=[p];function i(l,o){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","设计模式专题.html.vue"]]);export{r as default};
