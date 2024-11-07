---
title: babel-parser
date: 2022-06-25 08:22:23
permalink: /pages/f773aa/
categories:
  - 《Babel》笔记
  - 插件
tags:
  - 
---

# 功能
1. 默认启用最新的 ECMAScript 版本（ES2020）。
2. 评论附件。
3. 支持 JSX、Flow、Typescript。

## API

### 方法
* babelParser.parse(code, [options])
* babelParser.parseExpression(code, [options]) <br/>
parse()将提供的内容解析code为整个 ECMAScript 程序，同时 parseExpression()尝试解析单个表达式并考虑性能。如有疑问，请使用.parse().
### options
:four_leaf_clover: `allowImportExportEverywhere` 默认情况下，import声明export 只能出现在程序的顶层。将此选项设置为true允许它们在任何允许声明的地方出现。 <br/>

:four_leaf_clover: `allowAwaitOutsideFunction` 默认情况下，`await`仅允许在异步函数内部使用，或者在`topLevelAwait`启用插件时，在模块的顶级范围内使用。将此设置true为也可以在脚本的顶级范围内接受它。不鼓励使用此选项以支持 `topLevelAwait`插件。 <br/>

:four_leaf_clover: `allowReturnOutsideFunction` 默认情况下，顶层的 return 语句会引发错误。将此设置true为接受此类代码。 <br/>

:four_leaf_clover: `allowSuperOutsideMethod` 默认情况下，super不允许在类和对象方法之外使用。将此设置true为接受此类代码。 <br/>

:four_leaf_clover: `allowUndeclaredExports` 默认情况下，导出未在当前模块范围内声明的标识符将引发错误。虽然这种行为是 ECMAScript 模块规范所要求的，但 Babel 的解析器无法预测插件管道中稍后可能插入适当声明的转换，因此有时设置此选项以true防止解析器过早地抱怨未声明的导出会很重要稍后添加。 <br/>

:four_leaf_clover: `attachComment` 默认情况下，Babel 将评论附加到相邻的 AST 节点。当此选项设置为 时false，不附加注释。当输入代码有很多注释时，它可以提供高达 30% 的性能提升。`@babel/eslint-parser`会为你设置的。不建议`attachComment: false`与 Babel 转换一起使用，因为这样做会删除输出代码中的所有注释，并呈现/* istanbul ignore next */非功能性等注释。 <br/>

:four_leaf_clover: `createParenthesizedExpressions`默认情况下，解析器设置extra.parenthesized在表达式节点上。当此选项设置为 时true，`ParenthesizedExpression`将创建 AST 节点。 <br/>

:four_leaf_clover: `errorRecovery` 默认情况下，`Babel` 在发现一些无效代码时总是抛出错误。当此选项设置为`true`时，它将存储解析错误并尝试继续解析无效的输入文件。生成的 AST 将具有一个属性，该errors属性表示所有解析错误的数组。请注意，即使启用此选项，`@babel/parser`也可能引发不可恢复的错误。 <br/>

:four_leaf_clover: `plugins` 包含要启用的插件的数组。<br/>

:four_leaf_clover: `sourceType` 指示代码应该被解析的模式。可以是"script"、"module"或之一"unambiguous"。默认为"script". "unambiguous"将使 @babel/parser 尝试猜测，基于 ES6import或export语句的存在。带有 ES6 imports 和exports 的文件被考虑"module"，否则被考虑"script"。<br/>

:four_leaf_clover: `sourceFilename` 将输出 AST 节点与其源文件名相关联。从多个输入文件的 AST 生成代码和源映射时很有用。<br/>

:four_leaf_clover: `startColumn` 默认情况下，解析的代码被视为从第 1 行第 0 列开始。您可以提供一个列号以替代开始。对于与其他源工具的集成很有用。<br/>

:four_leaf_clover: `startLine` 默认情况下，解析的代码被视为从第 1 行第 0 列开始。您可以提供一个行号以替代开始。对于与其他源工具的集成很有用。<br/>

:four_leaf_clover: `strictMode` 默认情况下，仅当存在 "use strict";指令或解析的文件是 ECMAScript 模块时，ECMAScript 代码才会被解析为严格的。将此选项设置true为始终以严格模式解析文件。<br/>

:four_leaf_clover: `ranges` 向每个节点添加一个属性：[node.start, node.end]<br/>

:four_leaf_clover: `tokens` 将所有已解析的令牌添加到节点tokens上的属性中File<br/>
### 示例

```js
require("@babel/parser").parse("code", {
  // parse in strict mode and allow module declarations
  sourceType: "module",

  plugins: [
    // enable jsx and flow syntax
    "jsx",
    "flow",
  ],
});
```

### 输出
Babel 解析器根据Babel AST 格式生成 AST


## 思维导图

## 源码
``` js

```