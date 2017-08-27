webpackJsonp([0xf5cf6d1ce5f5b800],{"./node_modules/json-loader/index.js!./.cache/json/migrating-to-gatsbyjs-part-1.json":function(e,n){e.exports={data:{post:{timeToRead:7,canonicalURL:"https://blog.iansinnott.com/migrating-to-gatsbyjs-part-1/",html:'<p><strong>Abstract:</strong> Migrating a static site to <a href="https://www.gatsbyjs.org/">Gatsby</a> is pretty simple. I\'ll walk through how I did it and the pitfalls along the way.</p>\n<p><a href="https://www.gatsbyjs.org/">Gatsby 1.0</a> was just recently published and I got excited. I\'ve been excited about static sites for <em>a while</em>, especially in combination with React. I\'ve <a href="https://www.youtube.com/watch?v=_1k2HEPH6fY">spoken publicly about building static sites with React</a> and two of my top repositories on GitHub are just for building static sites with React...</p>\n<p><img src="https://dropsinn.s3.amazonaws.com/blurred-repos.png" alt="Blurred Repos"></p>\n<p>So I was pretty pumped to see Gatsby hit 1.0. And so far it has not disappointed.</p>\n<h2 id="migrating-to-gatsby-10"><a href="#migrating-to-gatsby-10" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating to Gatsby 1.0</h2>\n<p>OK, enough context! Let\'s migrate something. I chose to start by migrating <a href="https://www.iansinnott.com">my personal site</a> since it\'s already built with React and is literally 1 page. Here it is—the entire site:</p>\n<p><img src="https://dropsinn.s3.amazonaws.com/www.iansinnott.com-screenshot-2017-07-09.png" alt="Home page screenshot"></p>\n<h3 id="adding-gatsby-to-an-exiting-project"><a href="#adding-gatsby-to-an-exiting-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Gatsby to an exiting project</h3>\n<p>Step 1 is to <strong>install Gatsby</strong>. I\'m also adding <code>gatsby-link</code> and the react helmet plugin because I knew I would need them:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>yarn add gatsby gatsby-link gatsby-plugin-react-helmet</code></pre>\n      </div>\n<p><strong>Create a <code>gatsby-config.js</code> file</strong> in the project root and drop the following into it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// gatsby-config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  siteMetadata<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`Gatsby Default Starter`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token string">`gatsby-plugin-react-helmet`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>Run Gatsby</strong> to make sure everything is working.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>gatsby develop</code></pre>\n      </div>\n<p>This will start a local server. Point your browser to whatever local port it gives you and try it out. You should see a Gatsby 404 page. This is because it expects your source code to be in the <code>src/</code> directory. In my project all my source is in my <code>client/</code> directory so Gatsby has nothing to find.</p>\n<p>However, when I loaded up the dev server in the browser I was greeted by this hot error 😐 (note, this may well not happen for you):</p>\n<p><img src="https://dropsinn.s3.amazonaws.com/Screen%20Shot%202017-07-08%20at%2012.07.49%20PM.png" alt="Gatsby dev server build error"></p>\n<p>If you <em>do</em> see something like that not to worry. It\'s an issue with conflicting versions of react-proxy probably resulting from differing versions of react-hot-loader. You can check this with <code>npm ls react-proxy</code>. Anyway, blow away your <code>node_modules</code> folder and install from scratch. Also check your <code>package.json</code> dependencies to make sure you aren\'t depending on any hot loading packages. In fact, now would be a good time to remove almost all your devDependencies from package.json. Gatsby is an entire build pipeline that will take care of most things for you, so consider critically every one of your dev dependencies. After manually pruning mine looked like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>"devDependencies": {\n  "babel-eslint": "^7.2.3",\n  "eslint": "^4.1.1",\n  "eslint-config-zen": "^3.0.0",\n  "eslint-plugin-flowtype": "^2.34.1",\n  "eslint-plugin-react": "^7.1.0"\n},</code></pre>\n      </div>\n<p>Yup, all loaders and plugins are gone. Gatsby isn\'t even in this list because it\'s a full-blown dependency, not just a devDependency.</p>\n<p>So, once you\'ve cleared out your old dev dependencies do a fresh install. Then restart the dev server:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>yarn upgrade\ngatsby develop</code></pre>\n      </div>\n<p>You should see the correct 404 page in your browser.</p>\n<h3 id="moving-source-code-around"><a href="#moving-source-code-around" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Moving source code around</h3>\n<p>Here is the structure of my source code before and after the migration. I\'m putting them together here for easy comparison, but I will walk through all of what changed.</p>\n<p><strong>Before:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── client\n│   ├── components\n│   │   ├── App.js\n│   │   ├── App.styl\n│   │   ├── face.png\n│   │   └── favicon.ico\n│   ├── lib\n│   │   └── vars.styl\n│   ├── index.js\n│   └── routes.js\n├── package.json\n├── template.js\n├── webpack.config.dev.js\n└── webpack.config.prod.js</code></pre>\n      </div>\n<p><strong>After:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── src\n│   ├── components\n│   │   ├── App.styl\n│   │   ├── face.png\n│   │   └── favicon.ico\n│   ├── layouts\n│   │   └── index.js\n│   ├── lib\n│   │   └── vars.styl\n│   ├── pages\n│   │   ├── 404.js\n│   │   └── index.js\n│   └── html.js\n├── gatsby-config.js\n└── package.json</code></pre>\n      </div>\n<p>Let\'s start with the quick wins:</p>\n<ul>\n<li>We no longer need webpack config so remove them:\n<code>rm webpack.*</code></li>\n<li>Gatsby expects everything under the <code>src</code> directory so let\'s make that happen\n<code>mv client src</code></li>\n<li>Create <code>layouts</code> and <code>pages</code> directories under <code>src</code>\n<code>mkdir -p src/layouts</code>\n<code>mkdir -p src/pages</code></li>\n</ul>\n<p>Now let\'s talk about those directories:</p>\n<ul>\n<li><code>src/layouts/</code>: Is where you put wrapper components. Markup that will generally "go around" your individual pages. This usually means headers and footers.</li>\n<li><code>src/pages/</code>: This is the meat of a Gatsby site. It\'s where the content goes. The rule of thumb is that you should construct your <code>src/pages</code> directory to build your URLs.</li>\n</ul>\n<p>For my purposes I had one layout and one index page. Of course I also wanted a 404 page so I created all three. This meant a bit of refactoring since I had everything together in <code>App.js</code>.</p>\n<p>I\'m migrating from React Router so let\'s take a quick look at my route config:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span>‘<span class="token operator">/</span>\' component<span class="token operator">=</span><span class="token punctuation">{</span>App<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IndexRoute</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>*<span class="token punctuation">\'</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>NotFound<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Pretty simple right? When migrating over to Gatsby these components had a direct mapping to files in the new structure:</p>\n<ul>\n<li><code>App</code> -> <code>layouts/index.js</code></li>\n<li><code>Home</code> -> <code>pages/index.js</code></li>\n<li><code>NotFound</code> -> <code>pages/404.js</code></li>\n</ul>\n<p>Migrating your components will be specific to your project so I\'ll just point you to the minimal gatsby example which includes all the relevant files: <a href="https://github.com/gatsbyjs/gatsby/tree/v1.0.8/examples/no-plugins">examples/no-plugins</a>.</p>\n<h2 id="css-and-stylus-support"><a href="#css-and-stylus-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CSS and Stylus support</h2>\n<p>Up until this point I had commented out all my CSS and <a href="http://stylus-lang.com/">Stylus</a> imports since I figured they might cause issues. In the case of CSs this fear was unfounded. Gatsby does a great job of handling CSS imports right out of the box.</p>\n<p>However I was using <a href="http://stylus-lang.com/">Stylus</a> along with <a href="https://github.com/webpack-contrib/css-loader#modules">CSS Modules</a> which is a bit more complicated. Turns out there was actually <em>zero support</em> for Stylus with Gatsby, <strong>but</strong> Gatsby is highly extensible so...</p>\n<p>Time to write a plugin. I\'ll skip over most of the details here since you view the source code of the plugin I wrote directly. But a neat feature of Gatsby is that you create a <code>plugins/</code> directory in your own project and extend Gatsby right there. This is a really nice developer experience and it makes it easy to write a plugin that can then be contributed back to the Gatsby community later.</p>\n<p>So, after all the changes above and creating the stylus plugin my project looked like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── plugins\n│   └── gatsby-plugin-stylus\n│       ├── gatsby-node.js\n│       └── package.json\n├── src\n│   ├── components\n│   │   ├── App.styl\n│   │   ├── face.png\n│   │   └── favicon.ico\n│   ├── layouts\n│   │   └── index.js\n│   ├── lib\n│   │   └── vars.styl\n│   ├── pages\n│   │   ├── 404.js\n│   │   └── index.js\n│   └── html.js\n├── gatsby-config.js\n├── package.json\n└── yarn.lock</code></pre>\n      </div>\n<p>And it worked 🎉.</p>\n<p>As for the stylus plugin, there\'s currently <a href="https://github.com/gatsbyjs/gatsby/pull/1437">a pull request</a> to get it merged in. Once it\'s merged you can use stylus by just installing the plugin:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>yarn install gatsby-plugin-stylus</code></pre>\n      </div>\n<h2 id="final-polish"><a href="#final-polish" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Final Polish</h2>\n<p>After getting everything working properly the last step was to add a few things I had neglected while refactoring:</p>\n<p><strong>Analytics:</strong> I\'ve been using Google Analytics on my site all along so I needed to get that working I just needed to add the <code>gatsby-plugin-google-analytics</code> plugin.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{\n  resolve: \'gatsby-plugin-google-analytics\',\n  options: {\n    trackingId: \'UA-<MY_TRACKING_ID>\',\n  },\n},</code></pre>\n      </div>\n<p><strong>Titles and meta tags</strong></p>\n<p><a href="https://github.com/nfl/react-helmet/">react-helmet</a> is great for this and Gatsby recognizes it. Just add the <code>gatsby-plugin-react-helmet</code> and your good to go. See the react-helmet docs for how to actually use it.</p>\n<p><strong>Final <code>gatsby-config.js</code>:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>// Gatsby\nmodule.exports = {\n  siteMetadata: {\n    title: \'Ian Sinnott\',\n  },\n  plugins: [\n    \'gatsby-plugin-react-helmet\',\n    {\n      resolve: \'gatsby-plugin-stylus\',\n      options: {\n        modules: true,\n      },\n    },\n    {\n      resolve: \'gatsby-plugin-google-analytics\',\n      options: {\n        trackingId: \'UA-<MY_TRACKING_ID>\',\n      },\n    },\n  ],\n};</code></pre>\n      </div>\n<p>That\'s all. If you have an questions you can leave a commend or <a href="https://twitter.com/ian_sinn">find me on twitter</a>.</p>\n<hr>\n<p>P.S. You may have noticed that this was a super simple site (one page!) and that this is "Part 1". I plan to migrate this blog you\'re reading right now to Gatsby and do a Part 2 write up about that. It will be a much more real-world use case of Gatsby and will use the awesome GraphQL infrastructure Gatsby gives you 😋</p>',frontmatter:{created:"2017-07-09T07:00:00.000Z",title:"Migrating to GatsbyJS Part 1",disqusId:null}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2017-07-09-migrating-to-gatsbyjs-part-1.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Migrating my blog to Gatsby (Part 2 of Gatsby migration)",created:"2017-08-21T06:53:54.533Z"},slug:"migrating-a-blog-to-gatsby-part-2-of-gatsby-migration"},prev:{frontmatter:{title:"The importance of Webpack context",created:"2016-11-24T08:00:00.000Z"},slug:"the-importance-of-webpack-context"}}}}});
//# sourceMappingURL=path---migrating-to-gatsbyjs-part-1-e4f1f14bf135a525e0c4.js.map