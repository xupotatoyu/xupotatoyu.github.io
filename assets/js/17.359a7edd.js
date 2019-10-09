(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{208:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和","aria-hidden":"true"}},[t._v("#")]),t._v(" == 和 ===")]),t._v(" "),a("p",[t._v("区别")]),t._v(" "),a("blockquote",[a("p",[t._v("对于"),a("code",[t._v("==")]),t._v("，当左右两端类型"),a("strong",[t._v("不一样")]),t._v("的话就会进行"),a("strong",[t._v("类型转换")])])]),t._v(" "),a("h3",{attrs:{id:"比较大小的流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较大小的流程","aria-hidden":"true"}},[t._v("#")]),t._v(" == 比较大小的流程")]),t._v(" "),a("ul",[a("li",[t._v("判断两者类型是否相同，相同则直接比较")]),t._v(" "),a("li",[t._v("类型不同则类型转换")]),t._v(" "),a("li",[t._v("判断是否存在对比"),a("code",[t._v("null")]),t._v("和"),a("code",[t._v("undefined")]),t._v(",如是返回"),a("code",[t._v("true")])]),t._v(" "),a("li",[t._v("判断两者类型是否为"),a("code",[t._v("string")]),t._v("和"),a("code",[t._v("number")]),t._v("，将字符串转换为"),a("code",[t._v("number")]),t._v("。(不分左右)")]),t._v(" "),a("li",[t._v("判断一方是否为"),a("code",[t._v("boolean")]),t._v("，是的话把"),a("code",[t._v("boolean")]),t._v("转换为"),a("code",[t._v("number")])]),t._v(" "),a("li",[t._v("判断有一方是否是"),a("code",[t._v("object")]),t._v("，另一方为"),a("code",[t._v("string")]),t._v(","),a("code",[t._v("number")]),t._v(","),a("code",[t._v("symbol")]),t._v("是的话转为基本类型比较")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yck'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            ↓\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v("\n")])])]),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("blockquote",[a("p",[t._v("定义：函数A内部有函数B并返回函数B，函数B可以访问到函数A中的变量。那么B就是闭包")])]),t._v(" "),a("blockquote",[a("p",[t._v("意义：间接访问函数内部的变量。该变量不会被回收机制回收，这个变量一直保存在内存中又不会污染全局变量")])]),t._v(" "),a("h4",{attrs:{id:"利用闭包结局var定义函数问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用闭包结局var定义函数问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用闭包结局var定义函数问题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 666666")]),t._v("\n")])])]),a("h4",{attrs:{id:"解决方法一-闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法一-闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法一 闭包")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0123456")]),t._v("\n")])])]),a("h4",{attrs:{id:"解决方法二-使用settimeout的第三个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法二-使用settimeout的第三个参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法二 使用"),a("code",[t._v("setTimeout")]),t._v("的第三个参数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    i       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三个参数可以作为内部函数的入参")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"解决方法二-let定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法二-let定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法二 let定义")]),t._v(" "),a("h2",{attrs:{id:"深拷贝和浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝和浅拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" 深拷贝和浅拷贝")]),t._v(" "),a("h3",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" 浅拷贝")]),t._v(" "),a("blockquote",[a("p",[t._v("对象类型在赋值的过程是复制了地址，从而到导致一处改变处处改变的问题。我们可以用浅拷贝来解决这个问题")])]),t._v(" "),a("h5",{attrs:{id:"方法一-object-assign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-object-assign","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法一 Object.assign")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/ixygj197875/article/details/79156236",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),a("br"),t._v(" "),a("code",[t._v("Object.assign()")]),t._v("方法用于对象的合并，其会拷贝对象中所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("h5",{attrs:{id:"方法二-展开运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-展开运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法二 展开运算符")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/3935a80342a0",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("h3",{attrs:{id:"深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝","aria-hidden":"true"}},[t._v("#")]),t._v(" 深拷贝")]),t._v(" "),a("blockquote",[a("p",[t._v("当对象中的属性是一个对象时，浅拷贝只能拷贝对象的地址。不是完全的拷贝，依旧共享对象")])]),t._v(" "),a("h5",{attrs:{id:"方法一-json-parse-json-stringify-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-json-parse-json-stringify-object","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法一 JSON.parse(JSON.stringify(object))")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.runoob.com/json/json-parse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.parse"),a("OutboundLink")],1),t._v(" 将数据转换为 JavaScript 对象"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.runoob.com/json/json-stringify.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.stringify(object)"),a("OutboundLink")],1),t._v("  将JavaScript 对象转换为字符串")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    jobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FE'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paese")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'native'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FE")]),t._v("\n")])])]),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/stono/p/4375185.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),a("br"),t._v(" "),a("img",{attrs:{src:"https://github.com/xupotatoyu/img-md/blob/master/mind/08234759-7a690122f346441bb67a55b3830df118.jpg?raw=true",alt:"JsObject layout"}}),t._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/xupotatoyu/img-md/master/mind/6264932-2aab1c8c439923ec.webp",alt:"原型1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/xupotatoyu/img-md/master/mind/6264932-e589472e4f3f6d32.webp",alt:"原型2"}}),t._v("\n由上图其实就可以理清原型的该概念了。")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("h5",{attrs:{id:"原型链继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链继承")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awsl'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// awsl")]),t._v("\n")])])]),a("p",[t._v("由此可见，每一个函数都有一个prototype属性，这个属性指向一个原型对象。而原型对象中有一个"),a("code",[t._v("constructor")]),t._v("属性指回该函数，形成一个循环。\n如若构造函数，new一个子类。他们会共享原型对象，并继承原型中的属性。这就另类的实现了继承。"),a("br"),t._v("\n而且，每次创建的对象都可以使用一些API这些api就是对象从原型中继成的。")]),t._v(" "),a("h3",{attrs:{id:"一些原型操作的api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些原型操作的api","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些原型操作的api")]),t._v(" "),a("h5",{attrs:{id:"isprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isprototypeof","aria-hidden":"true"}},[t._v("#")]),t._v(" isPrototypeOf")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果[[prototype]]指向调用此方法的对象，那么返回true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h5",{attrs:{id:"object-getprototypeof-perso1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-getprototypeof-perso1","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.getPrototypeOf(perso1)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以获得一个对象的原型")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gerPrototypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Object")]),t._v("是所有对象的爸爸，所有对象可以通过"),a("code",[t._v("_proto_")]),t._v("找到")]),t._v(" "),a("li",[a("code",[t._v("Function")]),t._v("是所由的函数的爸爸，所有函数可以通过"),a("code",[t._v("_proto_")]),t._v("找到")]),t._v(" "),a("li",[t._v("函数的prototype时候一个对象")]),t._v(" "),a("li",[t._v("对象的"),a("code",[t._v("_proto_")]),t._v("属性指向原型，"),a("code",[t._v("_proto_")]),t._v(" 将对象和原型连接起来组成了原型链")])])])}),[],!1,null,null,null);s.default=e.exports}}]);