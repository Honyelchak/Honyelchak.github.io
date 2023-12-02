



# 常见问题

1.1 在项目中，如何解决 Netty 的拆包沾包问题，不够怎么办，超过了怎么办 

1.2 Netty 与 标准的 IO 有何区别 

1.3 Netty(NIO) 与 BIO 的区别 

1.4 NIO 多路复用的原理 

1.5 Netty-Server 是否进行过压力测试 

1.6 Netty 客户端如果断网了怎么办 

1.6.1 服务端怎么检测客户端已经离线，去断开连接，回收连接 

1.6.2 客户端短时间的断网，重新连接会有重复的连接请求怎么解决 

1.7 多台服务器，当短时间的断网，断网前连接一次连接到第一台服务器，恢复网络后又连接一 次，连接到第 5 台服务器，怎么检测在第一台服务器上已经存在了一个连接。



## 1、服务端升级，Netty断线重连

> 面试题：Netty作为Server给车联网使用，Server 端做升级，升级过程中会导致连接断开，这样的场景下，怎么处理？

在车联网中，Server 端做升级时，可能会导致连接断开。为了解决这个问题，可以采用以下两种方式：

### 1、客户端断线重连机制

在客户端中实现一个断线重连的机制，当发现连接断开后，立即尝试重新连接。可以设置重连的时间间隔，以避免频繁连接和无效连接。在尝试重新连接时，可以使用`指数退避（exponential backoff）算法`，即每次重连时，等待的时间间隔逐渐增加，以避免过多的连接尝试和网络拥堵。

在Netty中，可以使用`ChannelFutureListener`来监听连接断开事件，然后在回调中触发断线重连操作。以下是示例代码：

```Java
public class CarClient {
    private static final int MAX_RETRIES = 10;
    private static final long RETRY_DELAY = 1000;

    private Bootstrap bootstrap;
    private Channel channel;
    private String host;
    private int port;

    public void connect() {
        EventLoopGroup group = new NioEventLoopGroup();
        bootstrap = new Bootstrap();
        bootstrap.group(group)
            .channel(NioSocketChannel.class)
            .remoteAddress(new InetSocketAddress(host, port))
            .handler(new CarClientInitializer());

        bootstrap.connect().addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture future) throws Exception {
                if (future.isSuccess()) {
                    channel = future.channel();
                } else {
                    scheduleReconnect(MAX_RETRIES, RETRY_DELAY);
                }
            }
        });
    }

    private void scheduleReconnect(final int retries, final long delay) {
        if (retries == 0) {
            return;
        }
        bootstrap.config().group().schedule(new Runnable() {
            @Override
            public void run() {
                bootstrap.connect().addListener(new ChannelFutureListener() {
                    @Override
                    public void operationComplete(ChannelFuture future) throws Exception {
                        if (future.isSuccess()) {
                            channel = future.channel();
                        } else {
                            scheduleReconnect(retries - 1, delay * 2);
                        }
                    }
                });
            }
        }, delay, TimeUnit.MILLISECONDS);
    }
}
```

在示例代码中，我们使用了Bootstrap来创建客户端，并在connect方法中连接到服务器。在连接成功后，我们保存了连接的Channel对象，以便后续的数据通信。如果连接失败，我们调用`scheduleReconnect`方法来进行断线重连，使用了指数退避算法来控制重连的时间间隔。

### 2、服务端平滑升级机制

在Server端升级时，可以使用平滑升级机制，即在升级过程中，保持原有的连接不受影响，并在升级完成后，逐步切换到新的升级版本。可以通过在Server端使用负载均衡器（Load Balancer）来实现平滑升级，保证不同版本的Server共存，并逐步将流量切换到新版本的Server上。

在Netty中，可以使用ChannelGroup来管理多个Channel对象，并在升级过程中，逐个关闭旧版本的Server的Channel，并打开新版本的Server的Channel，以实现平滑升级。以下是示例代码：

```java
public class CarServer {
    private ChannelGroup channelGroup = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);

    public void start() throws Exception {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup)
                .channel(NioServerSocketChannel.class)
                .childHandler(new CarServerInitializer(channelGroup))
                .option(ChannelOption.SO_BACKLOG, 128)
                .childOption(ChannelOption.SO_KEEPALIVE, true);

            ChannelFuture future = bootstrap.bind(PORT).sync();
            future.channel().closeFuture().sync();
        } finally {
            workerGroup.shutdownGracefully();
            bossGroup.shutdownGracefully();
        }
    }

    public void upgrade() {
        // 在这里进行升级操作，并打开新版本的Server的Channel
        Channel newChannel = openNewChannel();
        channelGroup.add(newChannel);
        // 逐个关闭旧版本的Server的Channel
        for (Channel channel : channelGroup) {
            if (channel != newChannel) {
                channel.close();
            }
        }
    }
}
```

在示例代码中，我们使用了ChannelGroup来管理多个Channel对象，并在upgrade方法中进行升级操作。首先，我们打开新版本的Server的Channel，并将新的Channel添加到ChannelGroup中。然后，我们逐个关闭旧版本的Server的Channel，保证升级过程中旧版本的连接不受影响。当所有旧版本的连接关闭后，新版本的Server就可以接受所有新的连接了。



### 3、多点部署

1. 使用负载均衡：使用负载均衡器可以将请求分发到多个Server实例上，这样即使其中一个Server实例进行升级或者重启，客户端也可以通过负载均衡器访问其他可用的Server实例，从而避免连接断开。常见的负载均衡器有Nginx、HAProxy等。
2. 使用双机热备：在双机热备架构中，主机和备机之间通过心跳机制保持同步，当主机发生故障或者需要升级时，备机可以自动接管主机的工作，从而避免因为主机故障或者升级而导致连接断开。常见的双机热备方案有Keepalived、Pacemaker等。