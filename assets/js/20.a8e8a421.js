(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{220:function(t,a,_){"use strict";_.r(a);var v=_(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.jianshu.com/p/fe32ef31deed",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),_("OutboundLink")],1)]),t._v(" "),_("h4",{attrs:{id:"具体分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#具体分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体分类")]),t._v(" "),_("ul",[_("li",[t._v("网络层面的优化")]),t._v(" "),_("li",[t._v("DOM操作与渲染层面的优化")]),t._v(" "),_("li",[t._v("数据层面的优化")])]),t._v(" "),_("h4",{attrs:{id:"前端优化的需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端优化的需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端优化的需求")]),t._v(" "),_("ul",[_("li",[t._v("用户角度：网页快速流畅")]),t._v(" "),_("li",[t._v("开发人员角度：快速，整洁，规范")])]),t._v(" "),_("p"),t._v(" "),_("h2",{attrs:{id:"网络方面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络方面","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络方面")]),t._v(" "),_("h4",{attrs:{id:"一，减少http请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一，减少http请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 一，减少http请求")]),t._v(" "),_("p",[t._v("主要是优化js，css和图片资源三个方面")]),t._v(" "),_("ul",[_("li",[t._v("合并js文件")]),t._v(" "),_("li",[t._v("合并css文件")]),t._v(" "),_("li",[t._v("雪碧图的使用(css sprite)")]),t._v(" "),_("li",[t._v("使用base64表示简单的图片")])]),t._v(" "),_("blockquote",[_("p",[t._v("合并js文件和css文件可以使用webpack等打包工具。")])]),t._v(" "),_("blockquote",[_("p",[t._v("雪碧图有专门的制作工具。")])]),t._v(" "),_("blockquote",[_("p",[t._v("图片编码使用base64，对于一些简单的图片可以使用base直接写入html。")])]),t._v(" "),_("h4",{attrs:{id:"二，减少资源体积"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二，减少资源体积","aria-hidden":"true"}},[t._v("#")]),t._v(" 二，减少资源体积")]),t._v(" "),_("ul",[_("li",[t._v("gzip压缩 "),_("a",{attrs:{href:"https://segmentfault.com/a/1190000012571492?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("js混淆")]),t._v(" "),_("li",[t._v("css压缩")]),t._v(" "),_("li",[t._v("图片压缩")])]),t._v(" "),_("blockquote",[_("p",[t._v("gzip压缩: gzip主要是针对html文件而言，可以将html中重复的部分进行一个打包，多次复用。")])]),t._v(" "),_("blockquote",[_("p",[t._v("js混淆: 可以有简单的压缩(将空白字符删除)、丑化(丑化的方法，就是将一些变量缩小)")])]),t._v(" "),_("blockquote",[_("p",[t._v("css压缩：就是进行简单的压缩")])]),t._v(" "),_("blockquote",[_("p",[t._v("图片压缩：主要也是减小体积，在不影响观感的前提下，尽量压缩图片，使用png等图片格式，减少矢量图、高清图等的使用。")])]),t._v(" "),_("h4",{attrs:{id:"三，缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三，缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 三，缓存")]),t._v(" "),_("ul",[_("li",[t._v("DNS缓存")]),t._v(" "),_("li",[t._v("CDN部署与缓存")]),t._v(" "),_("li",[t._v("http缓存")])]),t._v(" "),_("p"),t._v(" "),_("h2",{attrs:{id:"dom操作与渲染层面的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom操作与渲染层面的优化","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM操作与渲染层面的优化")]),t._v(" "),_("h4",{attrs:{id:"浏览器是如何渲染网页的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是如何渲染网页的","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器是如何渲染网页的")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/59d489156fb9a00a571d6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),_("OutboundLink")],1)]),t._v(" "),_("ol",[_("li",[t._v("使用HTML创建文档对象模板(DOM)")]),t._v(" "),_("li",[t._v("使用CSS创建CSS对象模板(CSSOM)")]),t._v(" "),_("li",[t._v("基于DOM和CSSOM执行脚本(Scripts)")]),t._v(" "),_("li",[t._v("合并DOM和CSSOM形成渲染树(Render Tree)")]),t._v(" "),_("li",[t._v("使用渲染树布局(Layout)所有元素")]),t._v(" "),_("li",[t._v("渲染(Paint)所有元素")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5797628-b2cd3a2d463b05fd?imageMogr2/auto-orient/strip%7CimageView2/2/w/888/format/webp",alt:""}})]),t._v(" "),_("h4",{attrs:{id:"一，优化网页渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一，优化网页渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 一，优化网页渲染")]),t._v(" "),_("ul",[_("li",[t._v("css样式放在头部，js文件放在尾部或者设置异步")]),t._v(" "),_("li",[t._v("尽量避免内联内联样式")])]),t._v(" "),_("h4",{attrs:{id:"二，dom操作优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二，dom操作优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 二，DOM操作优化")]),t._v(" "),_("ul",[_("li",[t._v("减少回流和重绘\n"),_("ul",[_("li",[t._v("避免在doucument上直接进行频繁的DOM操作")]),t._v(" "),_("li",[t._v("使用Classname代替大量的内联样式修改")]),t._v(" "),_("li",[t._v("对于复杂的UI元素，设置position为absolute或fixed")])])]),t._v(" "),_("li",[t._v("尽量使用CSS动画而非js动画")]),t._v(" "),_("li",[t._v("使用requestAnimationFrame代替setInterval")]),t._v(" "),_("li",[t._v("适当使用canvas")]),t._v(" "),_("li",[t._v("尽量减少css表达式")]),t._v(" "),_("li",[t._v("使用事件代理")])]),t._v(" "),_("h4",{attrs:{id:"四，移动端优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四，移动端优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 四，移动端优化")]),t._v(" "),_("ul",[_("li",[t._v("长列表滚动优化\n"),_("ul",[_("li",[t._v("IOS尽量使用局部滚动")]),t._v(" "),_("li",[t._v("android尽量使用全局滚动")])])]),t._v(" "),_("li",[t._v("函数防抖和函数节流")]),t._v(" "),_("li",[t._v("使用touchstart，touchend代替click")]),t._v(" "),_("li",[t._v("HTML的viewport设置")]),t._v(" "),_("li",[t._v("开启GPU渲染加速")])]),t._v(" "),_("blockquote",[_("p",[t._v("函数防抖和函数节流：设计滚动等会被频繁触发的DOM事件，需要做好防抖和节流的工作。他们都是为了限制函数的执行频次，以优化函数触发频率过高导致响应的速度跟不上触发频率，出现延迟，假死或卡顿的现象。")])]),t._v(" "),_("p",[_("strong",[t._v("函数防抖")]),t._v("：当调用动作经过n毫秒后，才会执行该函数，若在这n毫秒内又调用此函数将会重新计算执行时间。"),_("br"),t._v(" "),_("strong",[t._v("函数节流")]),t._v("：预先设定一个执行周期，按照固定的周期执行一次函数，然后进入下一个新周期。")]),t._v(" "),_("p"),t._v(" "),_("h2",{attrs:{id:"数据方面的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据方面的优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据方面的优化")]),t._v(" "),_("h4",{attrs:{id:"一，图片加载处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一，图片加载处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 一，图片加载处理")]),t._v(" "),_("ul",[_("li",[t._v("图片预加载")]),t._v(" "),_("li",[t._v("图片懒加载")]),t._v(" "),_("li",[t._v("首屏加载时进度条的显示")])]),t._v(" "),_("blockquote",[_("p",[t._v("预加载：提前加载内容")])]),t._v(" "),_("blockquote",[_("p",[t._v("图片懒加载：在最初给图片的src设置一个比较简单的图片，然后将图片的真实地址设置给自定义属性，做一个占位。然后给图片设置监听事件，一旦图片到达视口范围，从图片的自定义属性中获取真地址，然后赋值给src，让其加载。")])]),t._v(" "),_("blockquote",[_("p",[t._v("首屏进度条的显示：往往对于首屏优化后的数据量并不满意的话，同时也不能进一步缩短首屏包的长度了，就可以使用进度条的方式，来提醒用户进行等待")])]),t._v(" "),_("h4",{attrs:{id:"二，异步请求优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二，异步请求优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 二，异步请求优化")]),t._v(" "),_("ul",[_("li",[t._v("使用正常的json数据格式进行交互")]),t._v(" "),_("li",[t._v("部分常用的数据缓存")]),t._v(" "),_("li",[t._v("数据埋点的统计")])]),t._v(" "),_("blockquote",[_("p",[t._v("可以将一些用户的基本信息等常用的信息做一个缓存，这样可以保证ajax请求的减少。")])]),t._v(" "),_("blockquote",[_("p",[t._v("webWorker: 为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);