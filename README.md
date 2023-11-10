# Creative Events

I run an urban sketching in Tokyo on Meetup and wanted to create a platform that is targeted to mainly creative/artistic events such as plein air painting sessions and small jazz performances. 

On Meetup, you have to create a group before you can create an event. On my web app, as long as you're signed in, you can create events immediately. As easy as creating a room on Counter-Strike Online.

[link to the app](https://kazmakai.github.io/todo-list/)

## Features
- Browse Events near you
- Create events
- Comment on events
- Edit and update events
- Edit and update user profile

## Technologies
1. NodeJS with Express and EJS
2. MongoDB with Mongoose
3. HTML
4. CSS
5. JavaScript


## Bugs that need to be fixed
- Change event cover image
- Other users can't comment
- "hosted by <%= user.userName %>" issue


## Features to add
- Add mapping API to sort and add events by location
- Track attendees
- Format Date and Time
- Allow users to search events by tags
- Add another layer of confirmation before deleting event
- Make paragrpahs look more presentable
- Copy to clipboard button for events


## Approach
I designed and develop this based on my personal preference; something that has a minimalistc user interface, is quick and snappy, and doesn't have a bunch of unnecessary customizations that I generally don't need. Just like a piece of scrap paper you write your shopping list on except it's digital. 

A to-do list is probably the most common basic app people will build and there are many ways to tackle it. For me, I prefer to first build the basic HTML and CSS of the app before establishing the interactive components, mainly the buttons in this case. 

There are only 2 main functions to this app: add/delete tasks and check/uncheck tasks. 


To exercise my knowledge of DOM, I used it to manipulate CSS and HTML to create new list elements as opposed to using another popular way of first creating an empty list items in HTML. 

Once the main functions have been built, I added some accessories like sound effects, sound on/off button, adjusted the media query so it looks better on mobile, and saving the data to local storage.

## Retrospective
Even thoughh this is a seemingly simple app, it did give me a decent challenge and I learned a handful of skills from it. Moving forward, I'd like to first fix a bug where the mute button svg disappears on click before adding a tasks edit feature. 


## Status
Version 1.0
Further development to be made.

## Credits
- My instructors from GA: Joel and CJ
- Wan
- Stack Overflow and Reddit