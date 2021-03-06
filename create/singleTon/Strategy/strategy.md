# strategy
> 定义一系列算法，把他们一个个封装起来，并使它们可以相互替换
> 将算法的使用与算法的实现 **_分离_** 开来

一个基于策略模式的程序至少有两部分组成：

 - 一组策略类，策略类封装了具体的算法，并负责具体的计算过程
 - 环境类context，接受客户的请求，随后把请求委托给一个策略类，context要维持对某个策略对象的引用
 
 定义一系列的算法，把他们封装成策略类，算法封装在策略类内部的方法里。在客户对Context发起请求时，
 Context 总是把请求委托给策略对象中的某一个实现
 
 在javascripty语言中，函数也是对象，所以更直接的做法是把stragety直接定义为函数。
 
 PROS:
 
 - 利用组合、委托和多态等技术和思想，可以有效避免多重条件选择语句
 - 提供了对开放-封闭原则的完美支持，将算法封装在strategy中，使得他们易于切换、扩展
 - 利用组合和委托让Context具有执行算法的能力，也是继承的一种更轻量的替代方案