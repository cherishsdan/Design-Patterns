MVP架构模式是MVC的衍生品，它的目的是要尝试分清楚model、view、和使它们联系起来的代码（表示器 presenter）之间的边界
MVC中，view可以根据Model的变化直接更新，在MVP中，**model与view之间的所有通信必须经过presenter**
MVP模式下的视图不应该直接包含事件处理代码，而应该从表示器传入视图
意味着视图代码只负责渲染用户界面，而表示器则负责实施事件的处理过程

以下摘自[阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
![MVP][http://image.beekka.com/blog/2015/bg2015020109.png]
1. 各部分之间的通信，都是双向的
2. View 与 Model 不发生联系
3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。