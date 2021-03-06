---
layout: post
title: FWHM, Aperature and Annulus OH MY!
comments: true
---

# July 9th 2018

## Happy Monday again!

I don't know why Monday seems to be the day these posts get done. I think it's because I work from home on Mondays and I have an uninterrupted peaceful and quiet environment to concentrate on grammar and sentence structure.  Now keep in mind I'm a computer scientist and not a literary academic.  I'll likely make a half dozen faux pas in this very post.  I DO, however, proof read before posting in hopes that I can catch any silly misuse of "to/too/two", "your/you're" or "there/their/they're" (aforementioned faux pas).

ON to the subject, getting back to adding functionality to my Transient Tracker project.  I did a short 1.5 hour [twitch stream](https://twitch.tv/cosmoquestx) on Sunday (yesterday) and I updated the code from creating a region of interest around the object "center" (brightest pixel of object, possibly NOT the center after more in depth analysis) to expand the region of interest to the fwhm around that "center".  Today I will begin working on a user prompt that will ask the user to select a radius in pixels for an aperture in pixels which must be greater than the [FWHM](https://http://mathworld.wolfram.com/FullWidthatHalfMaximum.html) (we currently use Gaussian).  From there we will generate two more radii to create an annulus in order to determine the background intensity near the star so we can subtract that light from the object to eventually end up with a 'magnitude' on each object in the image!

I've spent dozens of hours talking with Astronomers to try to understand all these things and trust me if you don't understand something I said above you are NOT alone.  I was right there with you until about 30 minutes ago when our newest Astrophysicist talked with me until it finally stuck.  I'll post pictures in an upcoming blog post to try to help make it more clear. Of course if there are any astronomy pros out there that see any flaws in my post I'm happy to hear them (just don't be an asshole about it) and I will make the corrections.  I don't mind being wrong, saying so and correcting myself.  I only mind when you're an asshole about telling me I'm wrong. :)

In closing (I need to get to coding) I would like to invite you to join us over at [Cosmoquest](https://www.cosmoquest.org/x) and get signed up for all the cool stuff over there and read up on the blogs as well as play around with the mappers!  Transient Tracker will be available there eventually but for now play with all the other tools and help us sift through some NASA data!

Hopefully next week I'll have more information and can put together a more robust post with images and code snippets.

Until then, keep those eyes pointed up!  There's an infinitely large playground up there to explore and we hope you'll join us!

All my best,

Joe/BigJay
