## Website Performance Optimization portfolio project

###Updates after first review:
src/views/js/main.js
-Implemented "use strict" in global scope and had to declare var newWidth for pizza resizing
-updated queries with document.getElementById() || document.getElementsByClassName() on multiple places to improve performance
-Placed array length outside of the scope of the for loops
-Placed creating of var's outside the scope of the for loops to no recreate the varables on every iteration
-Restored numbers for var cols = 8; and var s = 256;

src/views/css/style.css
-Replaced z-index with transform: translateZ(0); and used prefixes if needed for specific browsers

###How to run the project
For this project I made use of Grunt & node and npm packages. They were used to automate image optimisation & minifying html, js & css.
I created a src folder which includes al the source folders and files. To review the project source files please check the src folder. Documents included comments on changes made to the files.

#####In order to run Grunt please first install node.js & all npm packages
install Node:
-Open Terminal and go to the root folder of your project
-Install node: sudo npm install -g grunt-cli
-Install npm pages:
 npm install grunt-responsive-images --save-dev
 npm install grunt-mkdir --save-dev
 npm install grunt-contrib-copy --save-dev
 npm install grunt-contrib-clean --save-dev
 npm install grunt-contrib-cssmin --save-dev
 npm install grunt-contrib-uglify --save-dev
 npm install grunt-contrib-htmlmin --save-dev
 
To run Grunt type in the terminal: grunt
Grunt will now output to the root folder from the src folder.

###SHORTENING THE CRITICAL RENDERING PATH OF INDEX.HTML
Project can be viewed on github pages: http://haryselman.github.io/udacity-website-optimization-project/index.html
Score is 92 on mobile and 93 on desktop. I used ImageMagick optimisation engine to optimise the images and grunt to automate it, but Google PageSpeed complains about lack of lossyless images.
Will have to investigate the image settings of ImageMagick one day to resolve this problem. All in all, above 90 score :)

Changes I made to improve CRP

- Moved the google fonts to end of the body
- Added async attribute to all js script
- Added media="print" to the css/print to unblock CRP
- Minified and inlined the styles from style.css inside of HTML
- Minified all js and html with Grunt and npm packages
- Optimised image size and quality of the site through Grunt and ImageMagick
	
###SRC/VIEWS/PIZZA.HTML
Main changes to provide consistent frame rate of 60fps:
See comments in code for all changes I made to main.js

- Used Grunt & npm packages to minify css, js & html from 'src/views' to 'views'
- Changed some values to not have that many pizza's on the screen as there is less painting needed. Painting is currectly the bottleneck
- Reordered some var's to not be included in the loops which caused Jank
- Implemented requestAnimationFrame
- Reduced time to resize pizza's to aprox. 0.5ms