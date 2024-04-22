import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,f as s}from"./app-2Xbp2Heq.js";const n={},d=s(`<h2 id="负载均衡算法" tabindex="-1"><a class="header-anchor" href="#负载均衡算法" aria-hidden="true">#</a> 负载均衡算法</h2><h3 id="_1、轮询-默认" tabindex="-1"><a class="header-anchor" href="#_1、轮询-默认" aria-hidden="true">#</a> 1、轮询（默认）</h3><p>每个请求按时间顺序逐一分配到不同的后端服务，如果后端某台服务器死机，自动剔除故障系统，使用户访问不受影响。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bakend {
    server 192.168.0.1;
    server 192.168.0.2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、weight-轮询权值" tabindex="-1"><a class="header-anchor" href="#_2、weight-轮询权值" aria-hidden="true">#</a> 2、weight（轮询权值）</h3><p>weight的值越大分配到的访问概率越高，主要用于后端每台服务器性能不均衡的情况下。或者仅仅为在主从的情况下设置不同的权值，达到合理有效的地利用主机资源。</p><p>指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bakend {  
    server 192.168.0.1 weight=10;
    server 192.168.0.2 weight=10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、ip-hash" tabindex="-1"><a class="header-anchor" href="#_3、ip-hash" aria-hidden="true">#</a> 3、ip_hash</h3><p>每个请求按访问IP的哈希结果分配，使来自同一个IP的访客固定访问一台后端服务器，并且可以有效解决动态网页存在的session共享问题。</p><p>每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream bakend {  
    ip_hash;  
    server 192.168.0.1:88;  
  
  server 192.168.0.2:80;  
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、fair-第三方" tabindex="-1"><a class="header-anchor" href="#_4、fair-第三方" aria-hidden="true">#</a> 4、fair（第三方）</h3><p>比 weight、ip_hash更加智能的负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，也就是根据后端服务器的响应时间 来分配请求，响应时间短的优先分配。Nginx本身不支持fair，如果需要这种调度算法，则必须安装upstream_fair模块。</p><p>按后端服务器的响应时间来分配请求，响应时间短的优先分配。 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend {  
    server 192.168.0.1:88;  
    server 192.168.0.2:80;  
    fair;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、url-hash-第三方" tabindex="-1"><a class="header-anchor" href="#_5、url-hash-第三方" aria-hidden="true">#</a> 5、url_hash（第三方）</h3><p>按访问的URL的哈希结果来分配请求，使每个URL定向到一台后端服务器，可以进一步提高后端缓存服务器的效率。Nginx本身不支持url_hash，如果需要这种调度算法，则必须安装Nginx的hash软件包。</p><p>按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。</p><p>注意：在upstream中加入hash语句，server语句中不能写入weight等其他的参数，hash_method是使用的hash算法。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend {  
    server 192.168.0.1:88;  
    server 192.168.0.2:80;  
    hash $request_uri;  
    hash_method crc32;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=[d];function l(t,h){return i(),a("div",null,r)}const u=e(n,[["render",l],["__file","nginx.html.vue"]]);export{u as default};
