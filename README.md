## REACT 组件通信方式

####父子 之间通信
参考parent-child文件下的demo


###全局广播
采用订阅/发布模式  通知到任意一个组件

参考pubsub文件下demo
文档 https://github.com/mroderick/PubSubJS

###signals

采用signals模式
与Event Emitter/Target/Dispatcher相似，但是你不要使用随机的字符串作为事件触发的引用

参考signals 文件夹下demo

文档 https://github.com/millermedeiros/js-signals/wiki/Examples
