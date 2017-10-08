webpackJsonp([0x44d830dfc99df400],{"./node_modules/json-loader/index.js!./.cache/json/getting-productive-with-fish-shell.json":function(e,t){e.exports={data:{post:{html:"<p>Today I took it upon myself to try out the very new and very cool looking <a href=\"http://fishshell.com/\">Fish Shell</a>. This is the second time I have taken it upon myself to really dive into the customization of my Terminal and after the fact I'm left with much the same feeling as the first time: I feel like I didn't get anything done today.</p>\n<p>This experience made me think a bit about a certain habit I have to get really dive into my workflow and try to find areas that are lacking or could be more efficient. The first time I did this was after watching a great <a href=\"https://peepcode.com/products/advanced-command-line\">tutorial by PeepCode</a> on the advanced ways I could use the command line. The whole video was about how to use [Bash], and then at the very end they recommend that those who want more serious customization should check out something called <a href=\"http://en.wikipedia.org/wiki/Z_shell\">Z shell</a>.</p>\n<p>That recommendation led me on an all-day adventure learning Z shell customization. The real killer feature of Z shell actually turned out to be the community involvement, and the GitHub users who were putting out easy-to-use plugins for the esoteric shell. The project is called <a href=\"https://github.com/robbyrussell/oh-my-zsh\">oh my zsh</a>, and it's a great place to start for anyone who wants a more usable terminal.</p>\n<p>The point being, there was recently an announcement on Hacker News that someone had started a <a href=\"https://github.com/bpinto/oh-my-fish\">similar project</a> for this new shell called Fish. As soon as I saw that, a big chunk of my time for the day went out the window. I knew if I started looking into the code and the various customizations I would lose many hours of the day, but I couldn't resist. I LOVE improving my workflow.</p>\n<!--more-->\n<h2>One shell to rule them all</h2>\n<p>Like most developers I spend a lot of time in the Terminal, and it can be a pain. Fish shell actually offers code-completion in the terminal as you type. This is a step up from Z shell which would offer decent tab completion but would not print out suggestions for you as you type. What's not great about Z shell is that much like bash customizing it can be a real pain. Fish on the other hand simplifies customization by making everything a function, and making functions easily definable. Here's an example of one I use often with Git:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>function gg -d \"Commit all\"\n  git commit -v -a -m \"$argv\"\nend</code></pre>\n      </div>\n<p>The first line defines the function <code>gg</code>, and then is passed the optional description option <code>-d</code>. This isn't really important, but it provides a nice and easy way to add a bit of text to remind yourself what the hell these two letters do. When you type <code>gg</code> into the command line and hit tab this description will pop up next to it. Anyway, the second line is easy, it's just a git command with a few options passed. The only part that has to do with Fish shell is the <code>$argv</code> variable which is a ‘list' of arguments that you pass. In this case I wrap it in <code>\"</code> (double quotes) so that I don't have to do that myself. The third line just ends the block. Now I can type something like this:</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>git add .\ngg Initial Commit</code></pre>\n      </div>\n<p>And my commit is done without having to type the usual annoying <code>\"</code> or <code>-m</code>.</p>\n<p>What's also great though, is that Fish shell comes with a predefined function called <code>alias</code> that supports the exact same syntax you used in Bash or Z shell. So for all those aliases sitting in your old config file you can just copy them over and be done. Or if you don't have any incompatible code in your alias file (i.e. bash or zsh functions) that would cause things to break, then just source it using the <code>.</code> syntax. Sidenote: Fish doesn't seem to support the familiar <code>source</code> keyword, you have to use the shorthand <code>.</code>.</p>\n<h2>Caveats</h2>\n<p>Two things I've noticed so far that I'm not super thrilled about:</p>\n<ul>\n<li>Often have to type <code>cd</code> to change directory</li>\n<li>No official support for Vim-like editing on the command line</li>\n</ul>\n<p>That first one is probably customizable somehow but I just didn't put time into figuring out how. It's a feature of Z shell that you can choose to omit <code>cd</code> before typing out a directory name and it will know what you mean.</p>\n<p>The second one isn't a huge issue either, because Vim integration with the command line doesn't actually provide any massive boost to productivity or usability. It's nice, to be sure, but Vim really shines when editing longer documents. When using the command line I don't make many typos so most of what I'm doing is entering text not editing it.</p>\n<p>The second one isn't a huge issue either, because Vim integration with the command line doesn't actually provide any massive boost to productivity or usability. It's nice to be sure, but</p>\n<h2>Conclusion</h2>\n<p>So that's it. My experience so far has been good, and hopefully all the time I spent today customizing this will pay off in future productivity.</p>",frontmatter:{created:"2013-11-11T08:00:00.000Z",title:"Getting Productive With Fish Shell"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2013-11-11-getting-productive-with-fish-shell.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Page reloads are a thing of the past",created:"2013-11-07T08:00:00.000Z"},slug:"page-reloads-thing-past"},prev:{frontmatter:{title:"Integrating Alfred With Keyboard Maestro",created:"2013-11-14T08:00:00.000Z"},slug:"integrating-alfred-and-keyboard-maestro"}}}}});
//# sourceMappingURL=path---getting-productive-with-fish-shell-0750880bc92d8aafb49b.js.map