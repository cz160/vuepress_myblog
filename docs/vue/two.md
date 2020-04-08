---
title: '深入'
---
# Front Matter
任何包含 YAML front matter 的 Markdown 文件都将由 gray-matter 处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：
~~~
---
title: Blogging Like a Hacker
lang: en-US
---
~~~
在这些三条虚线之间，你可以设置预定义变量（参见下面），甚至可以创建自己的自定义变量。 然后，您可以使用 $frontmatter 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。

TIP