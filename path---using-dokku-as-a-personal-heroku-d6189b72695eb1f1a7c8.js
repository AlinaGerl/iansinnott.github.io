webpackJsonp([153978030257747e5],{"./node_modules/json-loader/index.js!./.cache/json/using-dokku-as-a-personal-heroku.json":function(e,o){e.exports={data:{post:{html:'<h2 id="dokku-for-the-win"><a href="#dokku-for-the-win" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dokku For The Win</h2>\n<p>I might just be in love with <a href="https://github.com/progrium/dokku">Dokku</a>. Why? Here are some things I like as a developer:</p>\n<ul>\n<li>Not having to configure servers</li>\n<li>Not having to upload files</li>\n<li>Deploying apps to production (or staging!) with a few key strokes</li>\n<li>Portability of code</li>\n<li>Extensibility</li>\n</ul>\n<p>With a service like Heroku you get all of this, but with free, open source software like <a href="https://github.com/progrium/dokku">Dokku</a> you not only get these great features but you don\'t have to pay a premium. It\'s completely free, which means if you\'re like me and you enjoy using <a href="https://www.digitalocean.com/?refcode=9acd82993bac">Digital Ocean\'s</a> $5/mo base package you get the most critical features of Heroku for five bucks a month. That\'s a deal in my book.</p>\n<p>After a session of coding, here\'s what my new deployment process looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git add .\ngit push dokku master</code></pre>\n      </div>\n<p>It\'s <em>that</em> simple.</p>\n<h2 id="setting-up"><a href="#setting-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting Up</h2>\n<p>I\'m not going to go in depth on this because there\'s really not that much to say. Here are the steps you would take to get set up with Dokku if you\'re using Digital Ocean:</p>\n<ul>\n<li>Crete a new droplet from the standard Dokku image. <a href="https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-dokku-application">Here\'s a guide</a>.</li>\n<li>Install the <a href="https://github.com/wmluke/dokku-domains-plugin">Dokku Domains Plugin</a>. It\'s unofficial, but it works great.</li>\n<li>Run <code>dokku domains:set &#x3C;app-name> www.myawesomeapp.com</code></li>\n<li>Symlink the newly created nginx conf file to the <code>/etc/nginx/sites-enabled/</code> directory.</li>\n<li>Restart nginx: <code>sudo service nginx restart</code></li>\n</ul>\n<p>Step four is what tripped me up initially. I thought I could just run the domains command and everything would work fine, but apparently the script doesn\'t link anything up to Nginx, so you must do it yourself.</p>\n<p>The generated conf file will likely be located at <code>/home/dokku/&#x3C;app-name>/nginx-domains.conf</code>. So all you need to do is symlink that into your Nginx configuration and your good to go:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ln -s /path/to/nginx-domains.conf /path/to/sites-enabled/<app-name></code></pre>\n      </div>\n<p>After that, restart your server with the command mentioned above (or whatever works for your system) and you should be good to go. Reload your custom URL in the browser and see it live.</p>\n<p><strong>Note:</strong> This only works if you already have a domain name set up and DNS set up. Just Google this if you need help there, Digital Ocean has some great guides and a surprisingly nice DNS management interface.</p>\n<p>That\'s all. Dokku is awesome.</p>',frontmatter:{created:"2014-07-24T07:00:00.000Z",title:"Using Dokku As A Personal Heroku"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2014-07-24-using-dokku-as-a-personal-heroku.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Using Emoji in Excerpts on GitHub Pages",created:"2014-07-08T07:00:00.000Z"},slug:"using-emoji-in-excerpts-on-github-pages"},prev:{frontmatter:{title:"Useful Bash Commands For Web Developers",created:"2014-08-15T07:00:00.000Z"},slug:"useful-bash-commands-for-web-developers"}}}}});
//# sourceMappingURL=path---using-dokku-as-a-personal-heroku-d6189b72695eb1f1a7c8.js.map