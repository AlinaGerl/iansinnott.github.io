webpackJsonp([0x9234e388a0529800],{"./node_modules/json-loader/index.js!./.cache/json/wordpress-development-server-full-set-up-guide.json":function(e,t){e.exports={data:{post:{timeToRead:13,canonicalURL:"https://blog.iansinnott.com/wordpress-development-server-full-set-up-guide/",html:'<h2 id="unleashing-your-wordpress-development-server"><a href="#unleashing-your-wordpress-development-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unleashing your WordPress Development Server</h2>\n<p>So you want to escape inclusive packages like MAMP, learn about web servers and generally code like a boss? Well if you use a Mac your in the right place, but guess what we need before we get started? A local development environment! If you don\'t know what that is, read the next paragraph. If you do, then skip down. Even if you already have a local dev server set up this will still be useful knowledge should you want to untether yourself from MAMP or any other AMP stack bundle.</p>\n<!--more-->\n<p><strong>Windows Users:</strong> This article is about setting up a local dev environment on Mac OSX 10.8. You will also need to get an AMP stack up and running but I\'m not familiar with Windows so I\'m just going to recommend <a href="http://bitnami.org/stack/wamp">WAMP</a> (sigh).</p>\n<h2 id="the-local-dev-environment"><a href="#the-local-dev-environment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Local Dev Environment</h2>\n<p>When you code in PHP you need somewhere to test your work as you go along. This is where the local dev server comes in. You will also need a local dev server if you do any sort of online development. What the local dev server is… is just that: a server that runs on your computer. When you buy web hosting your paying for disk space on someone else\'s server. That server is running server-side software that let\'s you do many things, like using PHP and MySQL. So we\'re going to set up the same thing running from our own computer. This means web files (.php, .html, etc.) on your own hard drive will be hosted and served to your browser. <strong>Let\'s go!</strong></p>\n<h3 id="this-tutorial"><a href="#this-tutorial" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>This tutorial</h3>\n<p>There are so many tutorials on this subject out there, so why read this one… I\'ll tell you: Because most of the rest suck. Notice how I said most. I will refer in this lesson to some tutorials elsewhere that are actually very useful. Also, I will be focusing on setting up a professional dev environment, free of MAMP or XAMP or whatever else is out there. If you\'ve ever seen/used MAMP Pro this is essentially setting up the same thing without a GUI. And my way is free!</p>\n<p>There is also the added benefit that you get to better understand your server, learn a bit of terminal and in the end feel a huge sense of accomplishment (maybe). So with that, let\'s see what we will need to get started.</p>\n<h3 id="necessary-ingredients"><a href="#necessary-ingredients" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Necessary Ingredients</h3>\n<p>Todays recipe is fairly simple in prep, more difficult later on in pickup. Her\'s what we need (follow the links to download):</p>\n<ol>\n<li>phpMyAdmin (maybe not \'required\' but you want it)</li>\n<li>MySQL</li>\n<li>An open Terminal window (../Applications/Utilities/Terminal.app)</li>\n</ol>\n<p><strong>Disclaimer:</strong> This tutorial is for Mac OSX 10.8. I\'ve seen it work on 10.6 and 10.7 but you may run into bugs that I don\'t solve in this post.</p>\n<p>Now let\'s get cooking! The first step is in Terminal. Before we really delve in we want to make a backup copy of the files we\'re going to edit. Skip this step if you like, but do so at your own peril. I don\'t want to see angry comments later saying I broke your machine.</p>\n<h3 id="step-0-setup--backup"><a href="#step-0-setup--backup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 0: Setup / Backup</h3>\n<p>If it doesn\'t already exit, make a file under your home directory called <code>Sites</code>. This is going to be the root of your server, and where you will store all your sites. In this new folder make another folder called something like \'server-backup\'. This is where we will backup to.</p>\n<p>The three files we will be editing are:</p>\n<ol>\n<li><code>httpd.conf</code></li>\n<li><code>httpd-vhosts.conf</code></li>\n<li><code>[username].conf</code></li>\n</ol>\n<p>That last one is specific to you. During this post if I write \'[username]\' what I mean is your own username on the system. You can find this if you don\'t know it by typing <code>whoami</code> into terminal and hitting return.</p>\n<p>So to backup these files do the following commands.</p>\n<ol>\n<li><code>cp /etc/apache2/httpd.conf ~/Sites/server-backup</code></li>\n<li><code>cp /etc/apache2/extra/httpd-vhosts.conf ~/Sites/server-backup</code></li>\n<li><code>cp /etc/apache2/users/[username].conf ~/Sites/server-backup</code></li>\n</ol>\n<p>That last command may or may not work because you may not have created the [username].conf file yet. Don\'t worry, we\'ll get to that soon.</p>\n<p><strong>One last setup step:</strong> You will need to be able to open files for editing <em>from the Terminal</em>. You can use whatever editor you want. My favorite is <a href="http://www.sublimetext.com/2">Sublime Text 2</a>. I wrote a quick <a href="http://iansinnott.com">writeup on SB2</a> that you can check out if your interested. To see how to set up sublime for terminal use, check out this <a href="https://gist.github.com/artero/1236170">Gist on GitHub</a>. If you don\'t want to do anything like that and just want to get moving, use nano. It\'s built in to Terminal. Use it by typing something like the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>nano [filename]</code></pre>\n      </div>\n<p>Where \'[filename]\' would be the file you want to open and edit. It\'s a bit esoteric so I don\'t recommend it, but it\'s built into your computer.</p>\n<h3 id="step-1-enabling-apache"><a href="#step-1-enabling-apache" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Enabling Apache</h3>\n<p>Open up Terminal. Then use the following command to start Apache:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo apachectl start</code></pre>\n      </div>\n<p>Now fire up your favorite browser and make sure everything is in order. In the nav bar type <a href="http://localhost">http://localhost</a>. You should see something like this displaying the text “It Works!”:</p>\n<img src="http://coolestguyplanettech.com/downtown/sites/default/files/itworks.png" alt="it works apache" />\n<p>Now that we\'re all set there, let\'s see what we\'re looking at. Localhost is the default web root for your local server. The file being displayed can be found here:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>/Library/WebServer/Documents/</code></pre>\n      </div>\n<p>This is the system root, but we want to get your user root directory running properly. That\'s the next step.</p>\n<h3 id="the-user-root"><a href="#the-user-root" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The User Root</h3>\n<p>Remember the \'Sites\' folder you created? Open finder and get to it. If you haven\'t made that file yet for some reason, create it now and name it \'Sites\'. Here\'s a pic I pulled from Google. You can see the Sites folder at the bottom.</p>\n<h4 id="set-up-development-folders"><a href="#set-up-development-folders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set Up Development Folders</h4>\n<p>Now within the Sites folder you need to create all the folders you want to be able to serve to your local browser. You can make as many as you want. For instance, my sites folder contains wp1.dev, wp2.dev, etc. I also have a folder named ian.dev where I keep the local installation of my personal site for editing. Name these folders whatever you want. The point is that each one will eventually contain a full site. Just name the folder something that you don\'t mind typing into a browser (i.e. something short).</p>\n<p><a href="http://phpbackward.files.wordpress.com/2013/01/home-folder.jpeg"><img src="http://phpbackward.files.wordpress.com/2013/01/home-folder.jpeg?w=300" alt="Making the sites folder" /></a></p>\n<p>This is the home folder for the user \'admin\'.</p>\n<p>Now it\'s time to get serious. We need to edit your computers hosts file so that when we actually type these addresses into the browser they are redirected. To edit the hosts file do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo subl /private/etc/hosts</code></pre>\n      </div>\n<p>Or, if you are using nano do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo nano /private/etc/hosts</code></pre>\n      </div>\n<p>It doesn\'t matter what is currently in there, but don\'t delete anything. What were going to do is add some lines to the bottom. You need to add \'127.0.0.1&#8242; followed by the name of one of the folders you just created. So for my wp1.dev site I have a line in my hosts file that reads \'127.0.0.1 wp1.dev\'. Here\'s a bit of my hosts file:</p>\n```\n127.0.0.1 ian.dev\n127.0.0.1 wp1.dev\n127.0.0.1 wp2.dev\n127.0.0.1 wp3.dev\n```\n<p>You see that I have my personal site plus three development servers. This list actually goes all the way to wp15.dev, but you get the point. I recommend creating more of these aliases than you think you will need so you don\'t have to come back and edit hosts later. As I\'ll show you in a bit, this allows me to simply create a new folder in Sites with one of these names and bam! a new site is good to go. Now save hosts and exit Sublime or whatever text editor your in.</p>\n<p>Jump into Terminal and do the following two commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>cd /etc/apache2/users\nsudo nano username.conf</code></pre>\n      </div>\n<p>You will need to enter your password to use sudo commands. For anyone not familiar with the Terminal, the first line gets us to the right folder and the second line opens up the file for editing. Past in the following, but remember to put your username in the place of \'your<em>user</em>name\'. For me it\'s /Users/Ian/Sites/:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><Directory "/Users/ian/Sites/">\nOptions Indexes MultiViews FollowSymLinks\nAllowOverride All AuthConfig\nOrder allow,deny\nAllow from all\n</Directory></code></pre>\n      </div>\n<p>Now save the changes and close out of nano. Your editing window will show you the hotkeys you need at the bottom. It will probably prompt you to name your file when you save. Keep the name unchanged so that we overwrite the original.</p>\n<p>Now check the permissions on the file you just edited. To do that type <code>ls -lah</code> in Terminal. As long as you\'re in the right directory already, it should look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-rw-r--r--  1 root  wheel  148 12 28 21:11 username.conf</code></pre>\n      </div>\n<p>If the permissions come up with anything other than <code>-rw-r--r--</code> use this next command to fix them:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo chmod 644 username.conf</code></pre>\n      </div>\n<p>Remember you can\'t just copy and paste that. You need to write in your own username. Now restart Apache. You will need to use this command several more times so keep it on hand.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo apachectl restart</code></pre>\n      </div>\n<h2 id="setting-up-php-editing-httpdconf"><a href="#setting-up-php-editing-httpdconf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setting Up PHP (editing httpd.conf)</h2>\n<p>Finally! We\'re going to get PHP running. This is actually super simple. All we have to do is uncomment a line in our Apache config file. Before we do that I will say again: <strong>BE CAREFUL!</strong> This file is one of those system files that can seriously break things if not handled with care. If you have been following from the beginning you already backed this file up, so your all set. Alright, back to it. Do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo nano /etc/apache2/httpd.conf</code></pre>\n      </div>\n<p>Now find and uncomment the following line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>LoadModule php5_module libexec/apache2/libphp5.so</code></pre>\n      </div>\n<p>When within nano, you can use the \'control + W\' hotkey to search the document. After you remove the \'#\' and save the file that\'s it, PHP is enabled. However, I\'m going to suggest you don\'t close out of httpd.conf just yet. Let\'s make a few more changes while were here.</p>\n<p>Move down a number of lines to roughly 130. You should see two lines of code for User and Group. Comment the existing lines and input your own username and the group name staff. It should look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#User _www\n#Group _www\nUser username\nGroup staff</code></pre>\n      </div>\n<p>This makes Apache run as you, meaning you will be given full server permissions. This is optional but it may save you trouble later. For me it was needed to allow local WordPress installations to download and install plugins/themes from the back end. I\'ll also remind you again to make user you replace \'username\' with your own user name. If you\'re having an identity crisis, use the <code>whoami</code> command.</p>\n<p>Now find the following line of code via search (ctrl+w in nano):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>#Include /private/etc/apache2/extra/httpd-vhosts.conf</code></pre>\n      </div>\n<p>Remove the pound sign to uncomment. This enables the virtual hosts file which is necessary to turn our folders within Sites into local websites.</p>\n<p>Finally, search for the text “AllowOverride”. This will bring you to a comment block describing “what directives may be placed in .htaccess files.” This is what you’re after. Change the line <code>AllowOverride None</code> to <code>AllowOverride All</code>. Save and close your httpd.conf file, hopefully you will never have to touch it again.</p>\n<p><strong>The User.conf File</strong></p>\n<p>Next we need to edit a user specific file. In terminal do the following, replacing username with your user name:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo nano /private/etc/apache2/users/Ian.conf</code></pre>\n      </div>\n<p>Make sure the file looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><Directory "/Users/your_user_name/Sites/">\nOptions Indexes MultiViews FollowSymLinks\nAllowOverride All AuthConfig\nOrder allow,deny\nAllow from all\n</Directory></code></pre>\n      </div>\n<p>Save and close that file. Then restart Apache (remember the command?).</p>\n<h2 id="virtual-hosts"><a href="#virtual-hosts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Virtual Hosts</h2>\n<p>Open up the virtual hosts file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo subl /private/etc/apache2/extra/httpd-vhosts.conf</code></pre>\n      </div>\n<p>You should see a file around 40 lines long, with a couple of virtual host entries. These are sample entries. We\'re going to be making a number of entries in here and they will depend on how you named your files within Sites. The head of your virtual-hosts file will need a line like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>NameVirtualHost *:80\n\n<VirtualHost *:80>\nDocumentRoot "/Users/ian/Sites"\n</VirtualHost></code></pre>\n      </div>\n<p>Then you need to specify the actual virtual hosts for each of your local sites. Here is a sample from my own vhosts file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><VirtualHost *:80>\n    DocumentRoot "/Users/Ian/Sites/wp1.dev"\n    ServerName wp1.dev\n</VirtualHost>\n<VirtualHost *:80>\n    DocumentRoot "/Users/Ian/Sites/wp2.dev"\n    ServerName wp2.dev\n</VirtualHost>\n<VirtualHost *:80>\n    DocumentRoot "/Users/Ian/Sites/wp3.dev"\n    ServerName wp3.dev\n</VirtualHost></code></pre>\n      </div>\n<p>You can see the pattern. All you need to do is create lines like these replacing the directory to your sites folder as well as the folder names.</p>\n<p>Within the VirtualHost block the first line points to the file location on the system and the second line indicates the web address. Meaning that when you type that string into your browser you should get to the folder indicated in line one. So after you input all the virtual hosts you want then you\'re done! Finally. Now you should be able to input any of these addresses and get to that folder, which is probably still empty at this point.</p>\n<p>So now we should be up and running with PHP. To make sure go to your document root (either the sites folder or the system root mentioned above). Find the file that\'s currently being served at localhost. It will probably be named something like \'index.html\'. Now edit this using either the nano command or any text editor. Here\'s the nano command on my system:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>sudo nano Library/WebServer/Documents/index.php</code></pre>\n      </div>\n<p>Edit that file and add the following code to anywhere. Here\'s what my \'index.php\' file looks like. I added an extra paragraph to remind myself where the doc was being served from:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code><html><body></p>\n<h1>It works!</h1>\n<p>This doc at: /Library/WebServer/Documents/\n<?php phpinfo();>\n</body></html></code></pre>\n      </div>\n<p>Save the file. Now when you reload localhost you should see all your php info. NOTE: Be sure that the file is a .php file. I think by default it will be a .html file so you may need to change it.</p>\n<p>If you don\'t get the expected page with a big list of php settings then something went wrong. Check the filename, check that you edited the file in the right directory and if that doesn\'t work go back up and try following from the beginning of this section again.</p>\n<h2 id="mysql"><a href="#mysql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MySQL</h2>\n<p>So now we have PHP and Apache up and running. The last key ingredient MySQL. To be half-decent PHP developers we need to be able to work well with a database, so even though you could start coding PHP right now with the current setup we still need a database. Download it from the <a href="http://dev.mysql.com/downloads/mysql/" title="download mysql">MySQL site</a>. Use the Mac OS X ver. 10.6 (x86, 64-bit), DMG Archive version (works fine on 10.8). Install everything that comes in the DMG.</p>\n<p>You can now start the MySQL server from the System Preferences pane or via the command line.<a href="http://phpbackward.files.wordpress.com/2013/01/e89ea2e5b995e5bfabe785a7-2013-01-22-e4b88ae58d882-14-31.png"><img src="http://phpbackward.files.wordpress.com/2013/01/e89ea2e5b995e5bfabe785a7-2013-01-22-e4b88ae58d882-14-31.png" alt="You can start the MySQL server from the System Preferences" /></a></p>\n<h4 id="set-the-root-password"><a href="#set-the-root-password" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Set The Root Password</h4>\n<p>Use this command, and remember the password you use:</p>\n<p><code>/usr/local/mysql/bin/mysqladmin -u root password \'yourpasswordhere\'</code></p>\n<p>Now we\'re ready for phpMyAdmin.</p>\n<h2 id="installing-phpmyadmin"><a href="#installing-phpmyadmin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing phpMyAdmin</h2>\n<p>If I wrote up this section I would pretty much just be copying word for word the article that helped me get it set up, so I\'m just going to point you there. Here\'s the link:</p>\n<p><a href="http://coolestguyplanettech.com/downtown/install-and-configure-apache-mysql-php-and-phpmyadmin-osx-108-mountain-lion" title="phpMyAdmin installation">Installing phpMyAdmin</a></p>\n<p>If you have read along here you can scroll down to the last section where you will find out how to get phpMyAdmin up and running. This is a very good article and if anything has gone wrong up to this point I suggest checking it out, as I may have forgotten something. Once you get phpMyAdmin set up your done! Now we can get to the real purpose of why were here: Coding PHP.</p>\n<h2 id="done"><a href="#done" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Done!</h2>\n<h2 id="external-resources"><a href="#external-resources" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>External Resources</h2>\n<p>Most of what I wrote here is a combination of various articles I read myself to learn how to make this work. Here are two great articles that talk about setting up your own AMP stack and working with virtual hosts, respectively:</p>\n<ul>\n<li><a href="http://coolestguyplanettech.com/downtown/install-and-configure-apache-mysql-php-and-phpmyadmin-osx-108-mountain-lion" title="setting up amp stack">Install and configure phpMyAdmin and MySql on Mac</a></li>\n<li><a href="http://wpcandy.com/teaches/how-to-improve-local-wordpress-development-on-a-mac/#.UP43IaFARdQ" title="virtual hosts with wordpress">How to improve local WordPress development</a></li>\n</ul>',frontmatter:{created:"2013-05-30T07:00:00.000Z",title:"WordPress Development Server - Full Set Up Guide",disqusId:[1337579457,1337579457]}}},pathContext:{id:"/Users/jandrix/dev/sites/blog.iansinnott.com/content/_posts/2013-05-30-wordpress-development-server-full-set-up-guide.md absPath of file >>> MarkdownRemark",next:{frontmatter:{title:"The WP_Post Object",created:"2013-06-15T07:00:00.000Z"},slug:"the-wp_post-object"},prev:{frontmatter:{title:"Portfolio Update + Future Site Update",created:"2013-05-14T07:00:00.000Z"},slug:"portfolio-update-future-site-update"}}}}});
//# sourceMappingURL=path---wordpress-development-server-full-set-up-guide-bb0ccc7635695dbf4950.js.map