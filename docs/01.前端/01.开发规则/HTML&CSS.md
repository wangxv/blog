---
title: HTML&CSS
date: 2022-05-15 10:21:59
permalink: /pages/64be92/
categories:
  - 前端
  - 开发规则
tags:
  - 
---

# HTML&CSS

1、HTML 元素名称、属性、属性值（除非`text/CDATA`）、CSS 选择器、属性和属性值（字符串除外）必须小写。

2、CSS属性将声明按字母顺序排列，以便以易于记忆和维护的方式实现一致的代码。

```
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

3、用新行分隔选择器和声明。为每个选择器和声明开始一个新行。

```
/* 推荐 */
h1,
h2,
h3 {
  font-weight: normal;
  行高：1.2；
}
```

4、html里面用双引号，css中使用单引号

例外：如果您确实需要使用该`@charset`规则，请使用双引号——不允许使用[单引号](https://www.w3.org/TR/CSS21/syndata.html#charset)。

```
/* 推荐 */
@import url(https://www.google.com/css/maia.css);
html {
  font-family: 'open sans', arial, sans-serif;
}
```