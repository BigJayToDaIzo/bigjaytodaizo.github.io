---
layout: post
title: Virtual Environments (dirty mother fluffers && <3 <3 <3)
comments: true
---
Happy Thursday friends!  I wanted to update everyone on the challenges I've faced over the last week or so.

Today we will discuss virtual environments, and why I despise them and love them at the same time.  As you all may know from the projects readme found at [The Transient Tracker Github](https://github.com/CosmoQuestTeam/TransientTracker-PublicRelease) I'm working on an Astrometry project on a NASA grant for the [Astronomical Society of the Pacific](https://www.astrosociety.org/) (ASP).  

The very first part of my on-boarding by my supervisors of this project was discussing the end goal.  Pamela was telling me horror stories of her (and plenty of other peer grad students) graduate research and her constant usage of a program called [IRAF](http://iraf.noao.edu/).  If you go to that link you'll see a last updated date of 3/22/2012.  If you look at ANY of the documentation you'll see this program looks (and is) antiquated as FRICK. She told me stories of wasting hours upon hours trying to glean useful information from telescope images with this tool.  She only gave me one requirement for my algorithm.  And that was that it produces the same output as IRAF but in a pretty, modern day graphical environment that does NOT make grad students cry...

That was it.  My code must work, look nice and not make people cry.  I think that's about the toughest requirement on the planet to code for.

Getting back to virtual environments.  I spent about 3 weeks trying to get IRAF to talk to a GUI tool called [SAOImage DS9](http://ds9.si.edu/site/Home.html).  I was constantly getting errors from IRAF.  I finally got IRAF figured out and then began getting errors from DS9.  Got that mess cleaned up and NOW THEY WON'T TALK TO EACH OTHER!

Fast forward to my Tuesday weekly meeting a couple days ago where Scientists, Engineers and Educators from all over the country all get together to discuss many projects for the ASP that my supervisor [Dr. Pamela Gay](https://en.wikipedia.org/wiki/Pamela_L._Gay) is the Principal Investigator for.  In our meeting this week I had to tell all my peers and supervisors that I had made not ONE single bit of progress from the week before because of all the headaches I've had getting IRAF and DS9 working and then getting them to talk to one another.  It was then that one of our Astrophysicists across the country recommended a tool called PyRaf and Astroconda.

This is where the virtual environment comes in to play.  Astroconda is a python virtual environment manager that made installing these two tools and making them talk about 1000 times easier.  PyRaf is a Python wrapped version of IRAF of which Astroconda manages the python environment for as well as python package management.  For my linux users it's VERY similar to [virtualenv](https://virtualenv.pypa.io/en/stable/).  Sorry mac and windows users, I don't know what your OS uses for virtual environments.

TODAY marks the day I successfully got these 2 programs speaking to one another and allowing me to verify the output of my algorithm!  And it felt good enough to brag about in a blog post!  Use virtual environments kids!  They will save you a LOT of headache!

That's it for today friends!

I hope you'll take a look at the other project I'm working on at [Cosmoquest](https://cosmoquest.org/x/).  There's plenty of information on us, and citizen science and how YOU can help us!  We'd love it if you'd come take a look see!

And as always, KEEP looking up!

Joe / BigJay
