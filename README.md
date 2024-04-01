# Marking Country

This site was originally built with Gatsby, Strapi and GSAP; it has been rebuilt with Svelte.

## Running this project
- Edit the npmrc example before running.
- This project uses Club GSAP (paid) plugins.
- You may need to add the following to the npmrc to install everything.
  
`always-auth=true
//npm.greensock.com/:_authToken=API_TOKEN
@gsap:registry=https://npm.greensock.com`

## To-do

### General
  
* [] Rebuild Galleries with Leaflet/zoom function (will confirm)
---
* [x] Add dark/light mode
* [] Convert hexcodes to use color()
---
* [x] Rebuild the menu: make it fullscreen, add transitions and animations, dim background
* [] Convert all audio to components
* [x] Convert warning headers to components
* [] Tighten up design
* [] Fix footer
* [] Remove unrelated videos


### Scrollytelling
* [] Add superscroll support (speed to end rush through anims)
* [x] Intro: bounce the line
* [x] Add border: none to ImageSingle (e.g. rotating calendar)
* [x] AudioBlock - smaller contained block that doens't break out of the width too much, - can be wider, but thinner!
* [] Load full page of images before starting animations and sequences
* [x] Animate the quotes
* [] Rewrite ImageSingle to take 1 image or video, caption optional, border optional
* [] 2 quote types: inline, long
* [x] MediaFullWidth: Amend to accomodate video
* [x] Collapsible: animate on open
* [x] Citations: animate
* [x] Intro: Add minimum padding/margin to top
* [x] Build quick switcher
* [x] On Story load, fade header image in
* [x] Make Leaflet maps fullwidth
* [] Yawuru - rotate calendar on scroll
* [] Forced stops on welcomes (Carnarvon)
* [] Carnarvon quick switcher: 
* [] Carnarvon - scrolling gallery fullheight of burnt damage
* [] Carnarvon: Add aerial map to Carnarvon
* [] Carnarvon - aerial map reveal, then disappear, then show again
* [] Yawuru: Uncrop Susan Edgar's father, carrying fish, at Karnin (in downloads)
* [] Carnarvon: Check Baloon video - Jackie's welcome (file C0022) (Scroll/full stop)
* [] Readjust the icons on the homepage

---
* [] Add numbers to side-scroll slider & **standard** slider
* [x] Make images more responsive; captions should fit within the visible part of the browser when scrolling 
* [] Remove flash from acknowledgement

### Accessibility
* [] Course: Accessibility: How to Design for All
* [] Sort out intro text colours
* [] Accessibility audit
* [] Add transcripts to tracks for captions 
* [] Add reduced motion to CSS and relevant sections
