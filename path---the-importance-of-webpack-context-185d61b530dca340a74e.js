webpackJsonp([0xdecf81cf5b7ba00],{"./node_modules/json-loader/index.js!./.cache/json/the-importance-of-webpack-context.json":function(e,t){e.exports={data:{post:{html:'<p>Today I ran into an issue testing my <a href="https://github.com/iansinnott/react-static-webpack-plugin">react-static-webpack-plugin</a> plugin. I\'ve been running webpack builds in subdirectories of the repository and then running test assertions against the output in order to test the project. So far it\'s worked great, but after updating my dependencies recently I ran into a nasty error:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Error: Error: Child compilation failed:\nEntry module not found: Error: Cannot resolve \'file\' or \'directory\' ./src/routes.js in /path/to/react-static-webpack-plugin:\nError: Cannot resolve \'file\' or \'directory\' ./src/routes.js in /path/to/react-static-webpack-plugin</code></pre>\n      </div>\n<p>...😖</p>\n<p>Not good. But looking at the output and enabling the debug logger in my build process led me to the ultimate culprit, Webpack\'s context.</p>\n<p>Here\'s what was happening:</p>\n<ul>\n<li>I was running build commands from the root directory of my project</li>\n<li>The builds I was running needed to be ran in their own subdirectory</li>\n<li>Building directly in the subdirectory worked fine...</li>\n<li>Webpack\'s context was getting set to the root directory no matter what</li>\n</ul>\n<p>After looking at the <a href="https://webpack.github.io/docs/configuration.html#context">Webpack docs</a> it quickly became apparent what was happening:</p>\n<p><code>context</code> in the <code>webpack.config.js</code></p>\n<blockquote>\n<p>The base directory (absolute path!) for resolving the entry option. If output.pathinfo is set, the included pathinfo is shortened to this directory.\n<em><strong>Default:</strong> process.cwd()</em></p>\n</blockquote>\n<p>I was pretty sure I knew what <code>process.cwd()</code> would return, so I started to have a hunch. Looking at the <a href="https://nodejs.org/api/process.html#process_process_cwd">Node docs</a>:</p>\n<blockquote>\n<p>The process.cwd() method returns the current working directory of the Node.js process.</p>\n</blockquote>\n<p>Ah, I see. Turns out that my Webpack builds which ran in subdirectories were actually searching for the entry files in the <em>root</em> directory of the project.</p>\n<p>The fix was swift and effective. I added the following line to my <code>webpack.config.js</code> files:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>context: __dirname</code></pre>\n      </div>',frontmatter:{created:"2016-11-24T08:00:00.000Z",title:"The importance of Webpack context"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2016-11-24-the-importance-of-webpack-context.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"A refreshing dose of minimalism",created:"2016-11-16T08:00:00.000Z"},slug:"a-refreshing-dose-of-minimalism"},prev:{frontmatter:{title:"Migrating to GatsbyJS Part 1",created:"2017-07-09T07:00:00.000Z"},slug:"migrating-to-gatsbyjs-part-1"}}}}});
//# sourceMappingURL=path---the-importance-of-webpack-context-185d61b530dca340a74e.js.map