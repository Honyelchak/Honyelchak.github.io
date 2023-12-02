## Performance

通过`threads`表来查询所有的线程：

1. 查询当前连接关联的连接id和线程id
   1. `select CONNECTION_ID(), PS_THREAD_ID(13), PS_CURRENT_THREAD_ID();`
2. 查询当前连接的thread信息
   1. `select * from threads where THREAD_ID = PS_CURRENT_THREAD_ID();`