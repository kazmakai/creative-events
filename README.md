# Creative Events

This is somewhat a passion project of mine. Having ran an urban sketching Meetup group in Tokyo for over a year now with 650 members, I've wanted to attempt building a platform that is targeted to mainly creative/artistic events such as plein air painting sessions and small jazz performances. 

Unlike on Meetup, where to create an event you must have first created a group, I wanted to have a more straight forward user journey where users can create events immediately as long as they're signed in. As simple as creating a room on Counter-Strike Online, and having people join you before starting a match. 

[link to the app](https://creative-events-9c772d6b6784.herokuapp.com/events)

## Features
- Browse Events near you
- Create, edit and delete events
- Comment on events
- Edit and update user profile

## Technologies
1. Node.js with Express and EJS
2. MongoDB with Mongoose
3. HTML
4. CSS
5. JavaScript
6. Cloudinary
7. Passport.js


## Approach
### Planning
Decided on the project scope, design, business logic, MVPs and necessary CRUDS, as well as the schema design.

### OAuth
To avoid potential clashes as more features get implemented to the web app, I first set up Google OAuth Authentication using Passport.js. 


### Database and models
Established the event and user schemas/model, connect them to MongoDB Atlas database before linking them to my Models.  
After the necessary middleware are mounted, I moved on to creating the necessary views that will be rendered, starting with the MVP; the events views. 

Each CRUD was tackled from the client's side:
1. Add the UI that will trigger the HTTP request that matches the route (something like an event lsitener)
2. Define the route in the appropriate router module that will match the HTTP request
3. Code the actiion/function in the controller to perform the necessary CRUD and export it.

### Deployment 
Deployed using the cloud hosting provider Heroku. 


### Debugging 
There were a bunch of bugs. Almost half of them were caused by typos, the other were due to my lack of knowledge of how requests are being processed and then finally rendered back to the client. Thanks to my instructors and classmates, I was able to resolve most of them. 


## Retrospective
The learning curve was quite steep as there were a bunch of new theories and techniques I was exposed to. It was definitely very challenging trying to grasp how different components of the backend communicate with one another. There were many instances where I was just stuck on what to do when I kept encountering similar errors. Nevertheless, with each bug I resolved, the more comfortable I became with dealing with them. 

### Features to add 
- Regex on certain forms input such as username 
- Mapping API to sort and add events by location
- Track number of attendees
- Format Date and Time
- Allow users to search events by tags
- An additional layer of confirmation in a form of a popup before users can delete an event
- Make paragrpahs look more presentable
- Copy to clipboard button for events

### Unresolved bugs
- Commenter thumbnail doesn't reflect user avatar change
- In the event edit page, datetime-local is not prefilled based on what was entered before. Need to re-enter date and time every time event is edited
- Need to track the user who created the event. 


## Status
Version 1.0
Further development to be made.

## Credits
- My instructors from GA: Joel and CJ
- My classmates for sharing their tips
- Stack Overflow and Reddit