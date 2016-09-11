Welcome to CitCat.io, a Tic-Tac-Toe web app for cats.
The game is hosted on GitHub Pages (DanielJRaine.github.io), and a custom domain name was registered with AWS Route53 - www.CitCat.io.

Project management was done using Trello.
  - https://trello.com/b/oQnvItZs/citcat-io
Wireframing and mockup was done using NinjaMock.
  - https://ninjamock.com/Designer/Workplace/3541471/Page1
Entity Relationship modeling was done using LucidChart.
  - https://www.lucidchart.com/documents/edit/31e96b04-103c-4d0c-94f9-ba08b79ddc44#
Math.js library was included to handle matrix algebra.
Victor.js was installed to experiment with using vectors, but it was not used in production.
git and GitHub were used for source/version control.
  - https://github.com/DanielJRaine/CitCat.io
Bootstrap components were used as templates for HTML/CSS.
BootSnipp snippets were used for certain components.

The first step in development was to create a wireframe/mockup as a seed for ideas.  During this process, I wrote user stories to help flesh out the basic skeleton of ideas and used them to write comments on the mockup explaining potential behaviors of each element.  In this way, the mockup created the user stories, and the user stories created the mockup.  After a back-and-forth conversation between these two, all of the features in the spec had been mapped out.

At this point I started playing around with project management software and eventually settled upon Trello to help manage the many moving parts of the project.  I created a progression of project to-do lists, starting with planning/UX design which I had partially completed already.  I mapped out the next steps in order of priority.  My goal was to create a working game, first and foremost, and only then add server interactivity and deploy. I planned to start with a simple HTML page with only enough features to allow basic interaction with JQuery to serve as input for my game logic.  Once the game logic was working and bug-free, I would then move onto more advanced styling and CSS features before finally deploying the project.

The next step was to write pseudo-code to help translate the mockup into production code.  I used LucidChart to graphically represent a list of objects corresponding to elements from the mockup, and I generated a rudimentary entity relationship diagram of my objects' properties, behaviors, and interactions.

After getting a good bird's eye view of the project as a whole, I then started on the code itself.  I began with mapping out the DOM tree in HTML, adding class and ID names that I had decided upon during mockup and ERD.  CSS was added to make a basic game grid, and JQuery was applied to make the cells interactive.  Once I had click events mapped to individual cells, I then started writing my game logic.

I knew this game could be solved using linear algebra (matrix math), so I did some research to see if there were any mathematics papers on the subject that might give me an idea for an algorithm to use. I discovered that if I could represent the game board as a 3x3 matrix and represent x's, o's, and empty spaces as numbers (1, -1, and 0), then I could use all sorts of mathematical tools to easily solve for win conditions.  In case of a win, some set of cells adds up to either +3 or -3, either on a row, column or diagonal.  Using vector (2D matrix) addition, I added up the 3 rows in a single step and then checked to see if +3 or -3 was in the resulting vector.  No loops necessary.  The same was done for columns.  Lastly was the diagonals problem.  Luckily, Math.js had a function for calculating the 'trace' of a matrix (the sum of diagonal elements), so that too was a single easy calculation.  The only remaining step was to find the what I will call the reverse trace (the some of the other diagonal, from top-right to bottom-left).  This is where the math.js library failed me.  It did not have a built in function for calculating the reverse trace, so I had to do some actual math myself.  I looked up how to perform matrix rotations, thinking I could simply rotate the matrix 90 degrees and then use the calculate trace function.  This kept on not working how I expected it to, so eventually I gave up on it after trying several different matrix transformations and I simply created stored the cells in my model matrix backwards so I could calculate the reverse trace.  By this point the game logic was done.

Next, I added checks to make sure the user could not break the game, either by continuing play after the game had ended or by clicking on the same square twice.  Turn changing was implemented as well, and by this point, my internal game system was working well enough where I now felt comfortable integrating it with the server API.

AJAX calls were written for my game logic, and I was able to take my local representation of game state and upload it to the server using POST and PATCH requests.  I then added user authentification.

With all of the concerns cropping up, I wanted to structure my code in a way that kept everything separate.  I refactored my functions into board, auth, and user-info directories and tried to make it so there was no cross-talk between them.  However, I ran into an issue here where one of my user-info methods (showGameLog, which displays number of games played) did not have a DOM event to trigger it, since it only happened either upon user sign in (an auth concern) or creation of a new game (a board concern).  I thought of a way around this problem by having my user-info ShowGameLog function 'listen' to the app object (which both auth and board communicate with) for when auth or board store user or game info into it.  This proved to be tricky.  I knew I needed an object listener.  I didn't know if that existed.  So I googled around and found a few functions - Object.observe, Object.watch, proxies, etc.  One of these was deprecated, the other had warning signs all over its documentation saying NOT to use it in production code and only use for debugging.  Then I discovered Backbone.js.  I knew this could be a rabbit hole, so I just learned about it and figured out that it was an MVC framework that I could use to set object listeners so I could get the perfect separation of concerns I was lacking using only JQuery and AJAX.

I decided that I needed to finish the project and get it functional before diving down this rabbit hole, so I went on to complete all the spec requirements, at which point I would decide whether or not to refactor my entire app using Backbone.

Once I got everything working with the server-side API, I was ready to deploy.  I pushed my work to github pages, but there was an issue with the server API.  It was sending out 400 messages which seemed like there was a problem with security settings.  I found an issue filed on this problem hinting that it was an HTTPS problem and that I might need to use SSL/TLS.  I researched the matter and discovered that GitHub Pages enforces HTTPS to be used for its default domains, but if you use a custom domain, you can get away without using HTTPS.  My game now worked in its deployed form.

From here all I had to do was make it look crisp and tweak the CSS.

Unsolved Problems:
- HTTPS
- Reverse trace and matrix rotations
- Refactoring into Backbone
- Resolving responses emitted from setting multiple event listeners to the same event.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
