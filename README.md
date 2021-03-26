Author: Ren Gernes

Project: Meadowlark site with node.js and Express

Email: laurenagernes@lewisu.edu

## Credits: 

Code developed from Web Development with Node and Express, 2nd Edition by Ethan Brown accessed from O'Reilly books. This exercise provides a basic website layout served by Express and templated with Handlebars.

## Instructions:

** These instructions are paraphrased from the README.md file from the folder, ch03, provided in the git repository: https://github.com/EthanRBrown/web-development-with-node-and-express-2e. **

This site uses node module dependencies "express" and "express-handlebars" that you can find listed in the package.json file. The file with these dependencies will not be available if the repository is cloned. You will need to use the command "npm install" in order to add the necessary dependencies to run the site.

Routing information can be found in the site directory, labeled as meadowlark.js.

Inside the views folder, you will find the main layout for all pages hosted on the meadowlark site, as well as individual Handlebar pages for each of the pages on the site.

The public directory contains a logo image displayed on each page of the site. These static files are served using `express.static.`

To run the website, access the site directory and run the command "node meadowlark.js" from your preferred command line.

Then, type in the following URLs in your preferred browser to see each page of the site:

Home page: http://localhost:3000

About page: http://localhost:3000/about

Error 404 page: http://localhost:3000/nope