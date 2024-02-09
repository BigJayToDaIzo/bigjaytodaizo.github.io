---
title: Helix and Zellij
position: 1
layout: post
short_name: jm
author: jm
---
### Helix & Zellij

 So I watched a [video](https://www.youtube.com/watch?v=miwvF60BeMk&t=360s) on how this developer spun up an Arch linux environment in WSL2 (Windows subsystem for linux v2) with a fancy new and modern terminal multiplexer and IDE called Zellij and Helix respectively. Concerning Zellij think tmux with slightly more sensible keybinds and slightly prettier interface out of the box.  Yes you can make tmux gorgeous, I spent a couple days doing it and adding plugins.  But let me just tell you how delightful this thing is. Concerning Helix, think ALMOST Neovim but with a few slightly more sensible keybinds.

I had some trouble getting Zellij to install.  I was a little nervous when the documentation mentioned using cargo (Rusts package manager) to install it.  I hate having package managers everywhere.  Can't everthing just be handled with pacman?  But I digress.  I had a little trouble getting it to run (for some reason the installation didn't add it to the path) but once I did get it running properly and my fish shell properly checking for existing instances of it when I spawn terminals, it just feels and looks SO NICE.  I'm going to daily drive this badboy for a few days but I have strong feelings this is going to replace tmux all together.

And speaking of dethroning kings, Neovim is on VERY thin ice with me after playing with Helix for a couple hours today. Think of Neovim, but with damn near every programmer feature already ready to go out of the box.  AND NO LUA TO CONFIGURE.  Just toml.  Toml is so much nicer to configure with than Lua IMO.

But to conclude this short post after a long break, I'm very excited about a future with these two modern beauties.

Do yourself a favor, and give them a try together.  What a gorgeous and nice feeling combination!
