![Logo](img/Logo/PNG/logoBlack.png?raw=true "ECP Logo")
# ECP
ECP is a portfolio page helper for the lazy developer.
<br />
ECP stands for Easy Card Portfolio. It is meant to be used on a website for someone who needs a portfolio, such as a developer, artist, muscian, really any freelancing or professional individual trying to make their own website. This is especially geared towards helping developers create an easy portfolio page by typing less code overall. 
<br />
# Benefits of Using ECP
Developers like to use less code, so they can get jobs done faster. <br />
ECP allows developers to create a portfolio page with the absolute minimum code needed. It's designed to be plug and play, and works with any framework due to being coded fully in pure JavaScript and CSS. A developer using ECP will basically input all of the divs needed for a portfolio page, with an image and a title, and ECP will take care of the rest.
<br />
# Upcoming Features and Updates
Soon, a website providing a demonstration of ECP and even a playground to see its full potential will be launched, and the link will be posted here.<br /><br />
New features and upcoming updates:<br />
- Choose to use links to pages, links to open a frame, or no links at all. (Currently, all cards are clickable.)
- Choice for manual image resizing with card size, or automatic resizing. (Auto will look good, but we all have different design choices.)
- Fixes for long titles changing where the title is positioned on the card. (Small bug, to avoid this for now, use short titles or wider cards.)<br /><br />
# Using ECP
ECP is free to use and customize for everyone. I'd really prefer some credit though, and I've uploaded logos for ECP in the image folder for use in your projects. I also have a patreon <a href="https://www.patreon.com/ocwjay">here<a/> you can contribute to if you really enjoyed this project.
# Instructions and Documentation
ECP is SUPER EASY to use. And I'm not saying that lightly. You're going to use a fraction of the code you normally would.<br /><br />
Getting started:<br />
You need to have viewport in your html document for portability across devices. Here's a copy/paste snippet, because I'm nice:
```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
If you didn't know before, throw that in your `<head>` block.<br /><br />
Once you have that done, add the ECP folder into your website directory.<br />
Your directory should now look something like this: `folderYouKeepSitesIn/currentWebsiteProject/ECP`.<br />
Once your directory has been set up with ECP, link it to your html. The CSS file should go into your `<head>` tag, and I reccommend HIGHLY that you put the JS script at the end of your `<body>` tag. Note: I have not tested this with the JS file in any other place, because having it at the end of the body tag is the most efficient way to link a JS script.<br /><br />
Make sure you add your custom CSS files after ECP, so that you can customize it at will.<br /><br />
Now that you have ECP set up with your html document, you're probably wondering how to use it.<br />
To implement it in the webpage, create a `<div>` element and give it the id `"portfolioWrapper"`.<br />
i.e.: `<div id="portfolioWrapper"></div>`.<br />
This is the element that will wrap around the entire portfolio.<br />
If you wish to add shadows to the cards, add the class `"shadows"` to the portfolio wrapper. `div id="portfolioWrapper" class="shadows"></div>`.<br />
You can - and should - also change the background color of the wrapper in your custom CSS file by referencing the id.<br /><br />
Moving along, the next thing you should add is a `<p>` element. You'll see why in a moment.<br /><br />
So the `<p>` element needs to have an id called `"portfolioItems"`. Here's a snippet: `<p id="portfolioItems"></p>`<br />
This is where the glory of ECP comes in. You don't actually have to add any more HTML. At all. All you have to do at this point is add the titles, links, and image sources in the `<p>` element. This can only be done one way, and if you do it any other way, it WILL NOT work correctly. Unless, of course, you're customizing the code for your own needs and know what you're doing.<br /><br />
To type the items correctly, you'll need to type in the title name for item 1, then the link to refer to if clicked, then the image source for that item, separated by a comma and a space. Continue in that fashion until you're done. For instance:
```
<div id="portfolioWrapper" class="shadows">
  <p id="portfolioItems">Title for Item 1, link/for/item1.html, img/imageSrcForItem1.png, Title for Item 2, link/for/item2.html, img/imageSrcForItem2.png, Title for Item 3, link/for/item3.html, img/imageSourceForItem3.png</p>
</div>
```
<br />
That's literally it. ECP will do the rest for you and create 3 cards that are clickable with the image of your choice under each title. Notice how there's no comma at the end of the last image source though. That's very !important! If you accidentally add a comma there, the image will not show. <br /><br />
Customizations can be done to the code pretty simply. If you want to change anything, the cards have the class `"portfolioCard"`. Things you may want to change for this element are the background color, the width, and the height. Don't worry, ECP can accept any width and height you want to give it (within reason). The titles on the cards have the `"cardTitle"` class, and you may want to change the background color, the width, the font color, and the font family. You know. All that font stuff. <br /><br />
That's pretty much it for the usage of ECP. I hope you get as much usability out of it as possible.
