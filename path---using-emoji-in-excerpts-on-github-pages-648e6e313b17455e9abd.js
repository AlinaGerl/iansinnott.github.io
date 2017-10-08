webpackJsonp([0x53f6412c96bc8000],{"./node_modules/json-loader/index.js!./.cache/json/using-emoji-in-excerpts-on-github-pages.json":function(e,t){e.exports={data:{post:{timeToRead:1,canonicalURL:"https://blog.iansinnott.com/using-emoji-in-excerpts-on-github-pages/",html:'<h2 id="heres-how-to-get-github-emoji-working-in-post-excerpts"><a href="#heres-how-to-get-github-emoji-working-in-post-excerpts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Here\'s how to get GitHub emoji working in post excerpts</h2>\n<p>As I was redesigning my blog recently I decided I wanted all the emoji in all of the places. That\'s not usually a problem on GitHub pages. Seriously, they even have <a href="https://help.github.com/articles/emoji-on-github-pages">an official page about it.</a>. But if you want emoji in your post excerpts, you will have a problem.</p>\n<p>GitHub pages only support emoji in post or page content. In theory, that should really apply to excerpts as well, but for some reason it does not. Here is what emoji looked like on my site before:</p>\n<div></div>\n<div></div>\n<p>![Broken GitHub Emoji]({{ site.image_dir }}broken-emoji.png)</p>\n<p>The problem was this line of code which uses Jekyll\'s built-in excerpt feature:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{{ "{{ post.excerpt "}}}}</code></pre>\n      </div>\n<p>The solution? Generate your own excerpts directly from the content using Jekyll\'s built-in helpers:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{{ "{{ post.content | truncatewords: 50 "}}}}</code></pre>\n      </div>\n<p>Thank goodness that worked, I thought I was going to have to move away from GitHub pages. If you want to be able to play around with the excerpt length easily without editing <code>index.html</code> you can also add it as a <a href="http://jekyllrb.com/docs/variables/">custom variable</a> in <code>_config.yml</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># In _config.yml...\nexcerpt_length: 100</code></pre>\n      </div>\n<p>Then in <code>index.html</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{{ "{{ post.content | truncatewords: site.excerpt_length "}}}}</code></pre>\n      </div>\n<p>This is the approach I took because it feels cleaner to me, but use whatever works for you. That\'s all, hope this helps 😎</p>',frontmatter:{created:"2014-07-08T07:00:00.000Z",title:"Using Emoji in Excerpts on GitHub Pages",disqusId:null}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2014-07-08-using-emoji-in-excerpts-on-github-pages.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"A Month In San Francisco",created:"2014-07-08T07:00:00.000Z"},slug:"a-month-in-san-francisco"},prev:{frontmatter:{title:"Setting Up Hydra Config on A Mac",created:"2014-07-03T07:00:00.000Z"},slug:"setting-up-hydra-config-on-a-mac"}}}}});
//# sourceMappingURL=path---using-emoji-in-excerpts-on-github-pages-648e6e313b17455e9abd.js.map