---
layout: post
title:  "Day 2 at YOOX NET-A-PORTER"
date:   2016-08-11 19:27:00 +0100
categories: news
author: Steve Brewer
comments: true
---

Today was our second meetup at YNAP, and this time it was at their fabulous head office in Westfield's The Village.

I'm not sure if it was YNAP's stunning interior design rubbing off on us or if new member Sharla's creative spark brought us in this direction but today we chose her idea to run with for our front end project: 🐈 Cat Vacuuming.

<img src="/img/blog/5.jpg">

Not as cruel as it sounds, it turns out some cats ❤️ [love a bit of suction](https://www.youtube.com/watch?v=63xWsWuH-eI). We also loved coding to a backdrop of cat videos and as Sharla called it, Cat Trance.

<img src='/img/blog/6.jpg' />

We setup a repo, got a [Trello board](https://trello.com/b/XauGuhxx/cat-vacuums) going for ideas and Gary setup Gulp to manage our preprocessing so we could use Sass. We made a couple of atomic design modules: our navbar and a billboard. We did this using the Block Element Modifier (BEM) CSS naming convention.

<img src="/img/blog/7.jpg">

So we had `m-navbar` for our navbar molecule and `m-billboard` for our page jumbotron. Within that, we had `m-billboard__headline`, `m-billboard__header` and `m-billboard__message` and perhaps one day we'll have a modified billboard, such as `m-billboard--light` if we need a version for light backgrounds that has dark text. This system makes everything so easy to find for anyone else collaborating on the project who may not know where to find all the code.

We found a perfect Google Font and a colour scheme from [coolors.co](http://coolors.co) that really captured our feline image, and Sharla sketched us a logo with her 🐭 mouse:

<img src='/img/blog/8.png' />

All the while Gulp was converting our Sass into CSS, and it's there ready to automate any future processes we'd like to handover to it so we can spend more time watching cat's get vacuumed.

What's the point of Vac Dat Cat? Who knows, but we're having a cracking time building it and flexing our creative coding skills without worrying about perfection. Maybe it'll turn into a freaking awesome cat blog. Watch this space!

We broke for lunch downstairs at Yo Sushi! and rounded off the day with a bit of Street Fighter, where I got to watch my player take a nap on the floor each round while Jerome and Gary took turns wiping the floor with me. Practice makes perfect though, right? I've only got another 10,000 hours to catch up with Jerome.

<img src="/img/blog/9.jpg" width="690" height="460">
<img src="/img/blog/10.jpg/uploads/default/original/1X/b7c388cd0f81ee3ee1bbb5c3500aab7f7647e3de.jpg" width="690" height="460">

If you'd like to join in the cat bants, RSVP to our [next meetup](https://www.meetup.com/West-London-Coders/events/233242087/).

You can also [see what we did](http://westlondoncoders.com/cat-vacuums/) and [how we did it](https://github.com/WestLondonCoders/cat-vacuums/commits/master), as well as our [Trello board](https://trello.com/b/XauGuhxx/cat-vacuums).
