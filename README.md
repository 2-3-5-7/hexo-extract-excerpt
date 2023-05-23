# hexo-extract-excerpt

- Processing flow
	- If an excerpt is manually specified using `<!--more-->`, use the content before it as the excerpt.
	- If no excerpt is specified, extract text from the article (links,  images, mermaid diagrams, etc. are ignored) and take the first `excerpt_length` (default 400, configurable) characters from the beginning of the text.
	- If the length of the extracted text is less than `excerpt_length` (i.e., the article is very short), use the entire text as the excerpt  and end the processing. Otherwise, take the extracted text as the `excerpt text`.
	- (Optional) Extract the first image element from the article based on `excerpt_img_selector`, and insert the image element at the beginning of the `excerpt text` to create the final excerpt.
- Configuration
	- Add the configuration to `_config.yml`. Default configuration is used if not specified.
	- `excerpt_length` is set to 400 by default and can be changed by specifying `excerpt_length: 500`.
	- `excerpt_img_selector` is set to `''` by default, which means images are not extracted. It can be configured in any CSS selector format, such as `excerpt_img_selector: 'img'` (matching the first image element), `excerpt_img_selector: 'img, pre.mermaid, figure'` (matching the first image element, code block, or mermaid diagram, whichever appears first).

# hexo-extract-excerpt

- 处理流程
	- 已手动指定摘要时，用 `<!--more-->` 前面的内容作为摘要
	- 没有摘要时，从文章提取文字（链接、图片、mermaid 等内容会被忽略），从文字头部截取 `excerpt_length` 长度的字数（默认 400，可配置）
	- 如截取后的长度小于 `excerpt_length`（文章很短时），则直接使用原文（不生成摘要），处理结束，否则截取部分作为 `摘要文本`
	- （可选）按 `excerpt_img_selector` 从文章中提取第一个图片元素，并将该元素插入到 `摘要文本`  前面，成为最终摘要
- 配置
	- 配置添加到 `_config.yml` 中，不配置时使用默认配置
	- `excerpt_length` 默认为 400，可修改 `excerpt_length: 500`
	- `excerpt_img_selector` 默认为 `''`，即不提取图片，可配置成任何 CSS 选择器格式，如 `excerpt_img_selector: 'img'`（匹配第一个图片元素）， `excerpt_img_selector: 'img, pre.mermaid, figure'` （匹配第一个图片或代码块或 mermaid，哪个类型先出现用哪个）