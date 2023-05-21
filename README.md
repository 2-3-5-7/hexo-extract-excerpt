# hexo-extract-excerpt

- 基于 [hexo-plain-excerpt](https://www.npmjs.com/package/hexo-plain-excerpt) 修改
	- 更新 `html-to-text` 版本
	- 添加了代码块、mermaid 的 skip 处理
	- 列表项前标号 (itemPrefix) 改成 `- `
- 当没有  `<!--more-->` 时，按默认摘要长度 400 截取，否则用  `<!--more-->` 前面的文本作为摘要
- 摘要长度可在 `_config.yml` 中修改，如 `excerpt_length: 500`
- 如生成的摘要长度小于 `excerpt_length`，则直接显示原文（不生成摘要）



- Modified based on [hexo-plain-excerpt](https://www.npmjs.com/package/hexo-plain-excerpt)
	- Upgraded `html-to-text` version
	- Added skip processing for code blocks and mermaid
	- Changed the itemPrefix of list items to `- `
- If `<!--more-->` is not present, posts will be truncated to the default excerpt length of 400. Otherwise, the text before `<!--more-->` will be used as the excerpt.
- The excerpt length can be modified in `_config.yml`, e.g. `excerpt_length: 500`
- If the generated excerpt length is less than `excerpt_length`, the original post will be displayed (no excerpt generated).
