webpackJsonp([0xc5f0849d610fc000],{"./node_modules/json-loader/index.js!./.cache/json/time-machine-to-the-rescue.json":function(e,t){e.exports={data:{post:{html:"<p>A couple weeks ago I made the decision to reinstall OSX and start anew, washing away over a years worth of accumulated files. It took about two hours to get most things reinstalled and running again, and after the fact I was very happy with the results. My computer is now fresh again, the downloads folder doesn't have 1000 items in it and I have over 100GB of free space (up from ~5GB before)! All in all a very quick and painless experience... until this week.</p>\n<h2>Know what to migrate</h2>\n<p>It's tough to keep track of everything on your system that's vital to your day-to-day workflow. The toughest are the things that aren't needed day-to-day, but which become vital the second you try do something that depends on them. In my case this was building an android app for distribution.</p>\n<p>To distribute an app on the Google Play Store you need to create a Java Keystore to sign your app with. This file is monumentally important if you're an app developer, because without it you cannot update your app. This week I had to update an app on Google Play and figured out how important that file was.</p>\n<h2>Time Machine to the rescue</h2>\n<p>Luckily, I did make sure to back up my entire system before reinstalling OSX, so I knew I must have my Java Keystore saved somewhere. I just had to find it. This was actually surprisingly fast as I had initially stored it under a folder named <code>keystore</code>. Simple enough. I hit restore in Time Machine and done, it was on my system.</p>\n<p>Excellent, now I just need to sign my Android APK and I would be good to go. This particular project is built with Cordova, so the easiest way I've found to do this is to specify an <code>ant.properties</code> file under <code>platforms/android</code>. There's a great, concise <a href=\"http://ilee.co.uk/Sign-Releases-with-Cordova-Android/\">article on this with full instructions</a>.</p>\n<p>Great, now to just run the command...</p>\n<div class=\"gatsby-highlight\">\n      <pre class=\"language-none\"><code>$ cordova build android --release\n\n...\n\n-release-prompt-for-password:\n    [input] Please enter keystore password</code></pre>\n      </div>\n<p>... shit. Did not remember my keystore required a password.</p>\n<p>At point I ended up trying a few common passwords all of which failed, but I did ultimately figure it out. I wrote a quick Ruby script to run through a list of about 20 potential passwords and one of them did turn out to be the right one. So in the end not a terrible experience, just a strong reminder that backing up everything is always a good idea, and backing up the keys to your apps is paramount.</p>",frontmatter:{created:"2014-10-03T07:00:00.000Z",title:"Time Machine to the Rescue"}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2014-10-03-time-machine-to-the-rescue.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"Business",created:"2014-10-01T07:00:00.000Z"},slug:"business"},prev:{frontmatter:{title:"Running a Meteor App on Dokku",created:"2014-11-22T08:00:00.000Z"},slug:"running-a-meteor-app-on-dokku"}}}}});
//# sourceMappingURL=path---time-machine-to-the-rescue-735553d8da1451d8b6e7.js.map