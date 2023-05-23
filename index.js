const { convert } = require('html-to-text');
const cheerio = require('cheerio');

hexo.extend.filter.register('after_post_render', function (post) {
	// already added <!--more-->
	if (post.excerpt.length > 0) {
		return post;
	}

	const excerptLength = hexo.config.excerpt_length || 400;
	const txt = convert(
			post.content, {
			selectors: [
				{ selector: 'img', format: 'skip' },
				{ selector: 'figure', format: 'skip' },
				{ selector: 'pre.mermaid', format: 'skip' },
				{ selector: 'a', options: { ignoreHref: true } },
				{ selector: 'ul', options: { itemPrefix: '- ' } },
				{ selector: 'h1', options: { uppercase: false } },
				{ selector: 'h2', options: { uppercase: false } },
				{ selector: 'h3', options: { uppercase: false } },
				{ selector: 'h4', options: { uppercase: false } },
				{ selector: 'h5', options: { uppercase: false } },
				{ selector: 'h6', options: { uppercase: false } },
				{ selector: 'table', options: { uppercaseHeaderCells: false } }
			]
		}
	);

	// short posts
	if (txt.length < excerptLength) {
		return post;
	}

	post.excerpt = '<p>' + txt.substring(0, excerptLength) + ' ...</p>';

	if (hexo.config.excerpt_img_selector) {
		const $ = cheerio.load(post.content);
		const img = $(hexo.config.excerpt_img_selector);
		// center the img
		img.attr('style', 'display: block;margin: auto;')
		// add to the beginning
		post.excerpt = (img.prop('outerHTML') ?? '') + post.excerpt;
		if (img.attr('class')?.toLowerCase() === 'mermaid')
			post.excerpt += `<script type="module"> import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';	mermaid.initialize({startOnLoad: true, flowchart: {curve: 'linear'}}); </script>`;
	}

	return post;
});
