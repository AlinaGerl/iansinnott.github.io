webpackJsonp([0x5a23da4dbd3cd000],{"./node_modules/json-loader/index.js!./.cache/json/setting-up-hydra-config-on-a-mac.json":function(e,n){e.exports={data:{post:{html:'<p><strong>Update 2016-11-12:</strong> I no longer use either Hydra or Mjolnir. Currently my go to app for window management is <a href="https://github.com/kasper/phoenix">Phoenix</a>.</p>\n<p><strong>Update:</strong> The Hydra project referenced in this post no longer exists. It\'s been succeeded by <a href="https://github.com/sdegutis/mjolnir">Mjolnir</a>, a project by the initial creator of Hydra. So whenever you see me reference "Hydra" I\'m now actually referencing <a href="https://github.com/sdegutis/mjolnir">Mjolnir</a>.</p>\n<h2 id="i-set-up-hydra-to-minimize-my-dependence-on-a-mouse"><a href="#i-set-up-hydra-to-minimize-my-dependence-on-a-mouse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I Set Up Hydra to Minimize my Dependence on a Mouse</h2>\n<p><em>This post is about moving one step closer to a mouse-less workflow, where any command can be accomplished trivially from the keyboard.</em></p>\n<p>I discovered <a href="https://github.com/sdegutis/mjolnir">Hydra</a> through Hacker News earlier today, and it\'s almost everything I could wish for in a window management tool. My new setup allows me to manage windows somewhat like you see in the image bellow:</p>\n<p>![Keyboard Window Management]({{ site.url }}/public/images/hydra.gif)</p>\n<p>If you interested, <a href="https://github.com/sdegutis/dotfiles/blob/osx/home/.hydra/init.lua#L43-L50">here\'s the source</a> to make Hydra work like you see in that image. But if you\'re like me, you will probably want to customize everything, so here\'s a quick tutorial on how to do that.</p>\n<!--more-->\n<h2 id="initlua"><a href="#initlua" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>init.lua</h2>\n<p>If you just downloaded and installed Hydra, you will need to create an init file\nat <code>~/.hydra/init.lua</code>. This file will be read every time the app opens and any time you explicitly tell Hydra to reload its configuration.</p>\n<p>I would recommend copying in the sample file that Hydra will load if there is no init file present. That file is a great reference for both the Hydra api and Lua.</p>\n<h3 id="lua"><a href="#lua" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lua</h3>\n<p>If you have no experience with Lua and want to set up some extreme window commands with Hydra don\'t worry. It turns out Lua is a pretty simple language. At least simple enough to write Hydra configuration quickly and effectively. I had absolutely no experience with Lua before today and now I have an effective Hydra setup. To me, Lua\'s syntax feels like a bit of a middle ground between Javascript, Ruby and Bash.</p>\n<h2 id="hydra-api"><a href="#hydra-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hydra API</h2>\n<p>Hydra exposes a few useful global variables for you, but in my coding the most useful by far was <code>window</code>. Everything in my config files started with <code>window</code>, so that\'s what I\'ll cover here. Here is a snippet to grab the active frame and the screen:</p>\n<div class="gatsby-highlight">\n      <pre class="language-lua"><code><span class="token keyword">local</span> win <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">focusedwindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">-- If no focused window, just return</span>\n<span class="token keyword">if</span> <span class="token keyword">not</span> win <span class="token keyword">then</span> <span class="token keyword">return</span> <span class="token keyword">end</span>\n\n<span class="token keyword">local</span> winframe <span class="token operator">=</span> win<span class="token punctuation">:</span><span class="token function">frame</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">local</span> screenframe <span class="token operator">=</span> win<span class="token punctuation">:</span><span class="token function">screen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">frame_without_dock_or_menu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">local</span> newframe <span class="token operator">=</span> <span class="token punctuation">{</span>\n  x <span class="token operator">=</span> winframe<span class="token punctuation">.</span>x<span class="token punctuation">,</span>\n  y <span class="token operator">=</span> winframe<span class="token punctuation">.</span>y<span class="token punctuation">,</span>\n  w <span class="token operator">=</span> winframe<span class="token punctuation">.</span>w<span class="token punctuation">,</span>\n  h <span class="token operator">=</span> winframe<span class="token punctuation">.</span>h<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">-- [Do stuff to newframe before setting it]</span>\n\nwin<span class="token punctuation">:</span><span class="token function">setframe</span><span class="token punctuation">(</span>newframe<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>That is a basic boilerplate for most things you would need to do with the active window in the active screen.</p>\n<h3 id="frames"><a href="#frames" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frames</h3>\n<p>Not sure if the term \'frame\' is preexisting or if it is just something coined by the author of Hydra, but what it really means to the rest of us is a window. This can be confusing since <code>window</code> is itself a global variable and it is used to retrieve the active (or focused) frame. Basically, when you manipulate a frame you are manipulating that \'window\' in finder. When you resize a finder window with the mouse you are also manipulating a frame. To focus a frame, or make it active, just click on it or use the usual command tab.</p>\n<h3 id="screens"><a href="#screens" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Screens</h3>\n<p>In this post whenever I say screen, I will mean the result of calling:</p>\n<div class="gatsby-highlight">\n      <pre class="language-lua"><code>window<span class="token punctuation">.</span><span class="token function">focusedwindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">screen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">frame_without_dock_or_menu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>That <code>frame_without_dock_or_menu</code> method is key, because it returns a rectangle that represents the \'usable\' part of your screen. That means everything except the top menu bar and the doc (if it\'s visible). This is important because people can put their doc wherever they like (left, bottom, right) but this function will always return the correct rectangle representing the usable portion of the screen.</p>\n<p>Screens also have a second feature. This is a feature I never had a use for so I didn\'t explore it, but as far as I can tell these are \'Spaces\' on a Mac. So if you use a ton of different spaces in your workflow this would be a good place to do some optimizing.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>That\'s pretty much all you would need to know to get started. Here some gists taken directly from <a href="https://github.com/iansinnott/dotfiles/tree/master/dotfiles/hydra">my own dotfiles</a></p>\n<p>First off, my init file which binds resize and window motion commands to a \'meta\' key, which I defined as cmd+shift:</p>\n<p>{% gist iansinnott/2cbecf87d9273a0d5918 %}</p>\n<p>I put most of the actual logic in a separate file to keep things tidy:</p>\n<p>{% gist iansinnott/0c9a0dcba88e6d0de0e5 %}</p>\n<p>That\'s all. Feel free to leave a comment if there\'s anything you would add. So far this has been all I need to keep my hands on the keyboard.</p>',frontmatter:{created:"2014-07-03T07:00:00.000Z",title:"Setting Up Hydra Config on A Mac"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2014-07-03-setting-up-hydra-config-on-a-mac.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Jekyll Management Like a Boss",created:"2014-06-28T07:00:00.000Z"},slug:"jekyll-management-like-a-boss"},prev:{frontmatter:{title:"Using Emoji in Excerpts on GitHub Pages",created:"2014-07-08T07:00:00.000Z"},slug:"using-emoji-in-excerpts-on-github-pages"}}}}});
//# sourceMappingURL=path---setting-up-hydra-config-on-a-mac-7e1cfd62e10c306eb540.js.map