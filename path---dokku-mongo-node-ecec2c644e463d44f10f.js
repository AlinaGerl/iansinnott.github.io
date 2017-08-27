webpackJsonp([0xdd35c6450182a000],{"./node_modules/json-loader/index.js!./.cache/json/dokku-mongo-node.json":function(e,o){e.exports={data:{post:{html:'<p><em>TL;DR: If you run into trouble using Mongo with Dokku for a Node.js app, re-image your server and start from scratch.</em></p>\n<p>Today was my first adventure into setting up a full-fledged, database-driven application with Dokku. I built the app with Node.js so I chose Mongo as the database. Local setup was easy, I already had Mongo installed. Setting up the production server also seemed easy at first until it just didn\'t work. Here\'s I troubleshot it:</p>\n<h2 id="nginx-error"><a href="#nginx-error" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nginx Error</h2>\n<p>The first problem I ran into was an Nginx error page. I forgot the status code, but it essentially meant there was no app running. Strange, since the app was running fine on my local system. Since my application was set to log to stdout I wasn\'t able to see any information about what was causing the app to error out, so I decided to do a quick deploy to Heroku and see what was amiss.</p>\n<p><strong>Sidenote</strong>: I <em>really</em> like Heroku. If it wasn\'t so much more expensive than a Digital Ocean droplet I would probably use them for every project.</p>\n<h3 id="troubleshooting-on-heroku"><a href="#troubleshooting-on-heroku" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting on Heroku</h3>\n<p>Heroku has a great <code>heroku logs</code> command that shows everything an application logged while it was running. As soon as I saw the output I had a face-palm moment: I hadn\'t saved all my dependencies to <code>package.js</code>, so I was getting simple "module not found" errors. That was embarrassing, but at least it\'s a quick fix.</p>\n<p>After cleaning up my <code>package.json</code> file I deployed again and got a database error. Nothing unusual there, I hadn\'t added a Mongo database to Heroku. This was to be expected, so I decided to deploy straight back to my own droplet.</p>\n<h2 id="was-dokku-broken"><a href="#was-dokku-broken" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Was Dokku Broken?</h2>\n<p>After redeploying I was still getting the same Nginx error telling me that there was no app running. When I ran <code>docker ps</code> I saw that was true: Only the MongoDB container was running. Lame.</p>\n<p>At this point I didn\'t know what to try. I\'m still not super familiar with Docker/Dokku for deployment, so I used the good old fashioned method of just resetting everything.</p>\n<p>I had saved a droplet image on DO right after installing Node but before setting up Dokku with my SSH key, so I just restored to that image. Then I:</p>\n<ul>\n<li>Setup my SSH key as usual, not using virtual host naming b/c I still haven\'t transfered the clients main site.</li>\n<li>Installed the Dokku Mongo plugin and the domains plugin</li>\n<li>Created a Mongo container using the plugin: <code>dokku mongodb:create &#x3C;app></code></li>\n<li>Created the actual Dokku app from my local server: <code>git remote add dokku dokku@&#x3C;ip>:&#x3C;app></code></li>\n<li>Deployed: <code>git push dokku master</code></li>\n</ul>\n<p>Then everything worked fine. Running <code>docker ps</code> now shows two running containers: one for the app and one for Mongo.</p>\n<h2 id="so-in-conclusion"><a href="#so-in-conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So.. in conclusion</h2>\n<p>I don\'t know what went wrong initially, but resetting everything worked like a charm. So when in doubt, just restore to a stable image and start from scratch. And make sure to make snapshots of your droplet whenever you feel it is in a reusable state. Boosh!</p>',frontmatter:{created:"2014-08-22T07:00:00.000Z",title:"Dokku, Mongo & Node.js"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2014-08-22-dokku-mongo-node.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Programmer, Maker or Both?",created:"2014-09-24T07:00:00.000Z"},slug:"engineer-maker-or-both"},prev:{frontmatter:{title:"Useful Bash Commands For Web Developers",created:"2014-08-15T07:00:00.000Z"},slug:"useful-bash-commands-for-web-developers"}}}}});
//# sourceMappingURL=path---dokku-mongo-node-ecec2c644e463d44f10f.js.map