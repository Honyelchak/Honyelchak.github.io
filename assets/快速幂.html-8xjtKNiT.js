import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as a,f as i,a as e,b as s}from"./app-_dQeDwys.js";const c={},p=i(`<h1 id="快速幂" tabindex="-1"><a class="header-anchor" href="#快速幂" aria-hidden="true">#</a> 快速幂</h1><p>求 <code>m^k%p</code>，时间复杂度 <code>O(logk)</code></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int qmi(int m, int k, int p)
{
    int res = 1 % p, t = m;
    while (k)
    {
        if (k&amp;1) res = res * t % p;
        t = t * t % p;
        k &gt;&gt;= 1;
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="矩阵快速幂" tabindex="-1"><a class="header-anchor" href="#矩阵快速幂" aria-hidden="true">#</a> 矩阵快速幂</h4><p>关于快速幂这一块还是需要做一个总结，写一篇博客捋捋思路，加深理解。</p><h5 id="为什么要用快速幂" tabindex="-1"><a class="header-anchor" href="#为什么要用快速幂" aria-hidden="true">#</a> 为什么要用快速幂？</h5><p>例如：现在有一个题目让你求 $a^{b}$ ,你可能觉得很简单啊，来一个<code>for</code>循环，循环<code>b-1</code>次就行了。但是如果b非常大的情况下，那这个做法是非常低效的，时间复杂度大致为 <code>O(b)</code>。</p><p>当用快速幂之后，时间复杂度为<code>O(logn)</code>。</p><h5 id="快速幂例子" tabindex="-1"><a class="header-anchor" href="#快速幂例子" aria-hidden="true">#</a> 快速幂例子</h5><p>例如我们用快速幂求 $2^{11}$ 。</p>`,10),l=e("p",null,[s("将指数拆分能够得到如下的结果。 $$ 2^{11} = 2"),e("sup",{0:""},"{2"),s("+2"),e("sup",null,"{1}+2"),s("{3}} $$ 学过进制转换看到11拆开的样子肯定会很眼熟，其实这里就是跟二进制有关。")],-1),r=e("p",null,[s("11的二进制为"),e("code",null,"1011"),s(" , $11=2"),e("sup",{2:""},"{3}*1+2"),s("*0+2"),e("sup",{0:""},"{1}*1+2"),s("*1$")],-1),u=i(`<p>这样一来，我们求$2^{11}$就不需要算10次了，现在三次就够了。 $$ 2^{11} = 2<sup>{2</sup>0} * 2<sup>{2</sup>{1}} * 2<sup>{2</sup>{3}} $$ 到这里以后，我们可能会觉得后边的这三项似乎不好求。</p><p>不着急，我们先上代码。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int poww(int a,int b){
    int ans=1,base=a;
    while(b!=0){
        if(b&amp;1!=0)
        　　ans*=base;
        base*=base;
        b&gt;&gt;=1;
　 }
    return ans;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码短小精悍，但是，我还是不太建议刻意去记它，容易忘。理解之后，自然就记住了。</p><p>我们将$2^{11}$ 带入代码走一遍或许你就能够理解了。</p><p>其实程序就是自左到右求那三项的值。</p><p>$2^{11} = 2<sup>{2</sup>0} * 2<sup>{2</sup>{1}} * 2<sup>{2</sup>{3}}$</p><p>上边我们已经知道11的二进制为<code>1011</code></p><p>程序参数<code>a = 2,b =11</code></p><p><code>ans =1,base = 2</code></p><p>到第四行代码处，11最后一位明显是1，那么我们就需要与结果变量<code>res</code>相乘。</p><p>其实，这里的相乘的就是$2<sup>{2</sup>{0}} $ ，乘完之后<code>res = 2</code>.</p><p>到第六行代码处，base自乘。这一步我给大家详细解释一下：</p><p>base*base = $base^2$ ,$base^2 * base^2 = base^4$ , $base^4 * base^4 = base^{8}$ ,$base^{8} * base^{8} = base^{16}$</p><p>有没有发现一个问题，每次自乘的结果如下：</p>`,15),o=e("p",null,[s("$base^2 、base"),e("sup",null,"4、base"),s("8、base"),e("sup",{32:""},"{16}、base"),s("$")],-1),b=i(`<p>我们换种写法你会更明白：</p><p>$base<sup>{2</sup>{1}} 、 base<sup>{2</sup>{2}}、base<sup>{2</sup>{3}} 、base<sup>{2</sup>{4}} 、base<sup>{2</sup>{5}} $</p><p>你会发现和上边我们要求的一样。</p><p>$2^{11} = 2<sup>{2</sup>0} * 2<sup>{2</sup>{1}} * 2<sup>{2</sup>{3}}$</p><p>无非是<code>base = 2</code>。</p><p><code>b &gt;&gt;= 1</code>右移一位，他的作用是将<code>1011</code>变成<code>101</code>--&gt;<code>10</code>--&gt;<code>1</code></p><p>当<code>b</code>的最后一位为0时，不乘base，为1的时候成base。</p><p>$2^{11} = 2<sup>{2</sup>0} * 2<sup>{2</sup>{1}} * 2<sup>{2</sup>{3}}$</p><p>这样我们能够让<code>res</code>乘上上边的三项，而不乘上<code>2^{2^2}</code>。</p><p>其实就是根据b的二进制来判断是否乘上二的阶乘。</p><p>如果b最后一位为<code>1</code>，也就是说$2^{x}$对b有贡献，所以我们结果乘上base。</p><p>否则，我们结果不需要乘base，但是base需要自乘，因为二进制位中左边的权重更大一些。</p><p>矩阵快速幂，他的思想和快速幂的思想是一样的。无非就是 底数变为矩阵了。所以你只需定义一下矩阵的乘法即可。</p><h4 id="矩阵快速幂-1" tabindex="-1"><a class="header-anchor" href="#矩阵快速幂-1" aria-hidden="true">#</a> 矩阵快速幂</h4><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>Matrix mul(Matrix A,Matrix B){
    Matrix res;
    
    for(int i=0;i&lt;maxn;i++){
        for(int j=0;j&lt;maxn;j++){
            for(int k=0;k&lt;maxn;k++){
            	res.a[i][j] += A.a[i][k]*B.a[k][j];     
            }
        }
    }
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果说需要递推很多次就要去考虑是否要用矩阵快速幂</p>`,16),t=[p,l,r,u,o,b];function v(m,h){return d(),a("div",null,t)}const g=n(c,[["render",v],["__file","快速幂.html.vue"]]);export{g as default};
