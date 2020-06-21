## User Story 1: New User Visits Landing Page
A new user visits our Home page for the first time. They should see:
- A navigation bar with links
  - Organize Power (Landing)
  - Explore
  - Profile
  - Login
  - Signup
- List of clickable cards of the most popular movements in our database
  - Movement image
  - Movement title
  - Movement description - shortened
  - Movement tags
  - Movement stats


## User Story 2: New User Views a Movement Page
A new user wants to view a movement before deciding to login so they click on the title of a movement.
This will bring them to a page specific to that movement.

Header
- Navbar

Then they should see two columns (Desktop) or one (Mobile):
Left Column
- Movement image
- Important politician to pressure
- Movement description - full

Right Column
- Email button
- Text button
- Movement stats

## User Story 3: New User Wants to Signup and Login
User clicks on the signup button in the navbar taking them to the signup form.

Currently, the only requirement is that the username is unique in the database.

If the visitor tries to sign up with an existing username, they will not be added to the database.
A conditional warning will tell the user that the username already exists.

User fills out the signup form with a unique username and hits submit.

If the user is successfully added to the database, they will be redirected to the login page.

A message will encourage the new user to sign in. The user types in their username and password and hits login.

If the credentials match the database, the user will be redirected to their new profile page.


## User Story 4: Logged-In User Wants to View Profile Page, Join a Movement, and Leave a Comment
The new user is now on their profile page showing:

Profile Card
- Name
- Image
- Location
- Bio

Start a Movement and Join a Movement buttons

User clicks on Join a Movement which will redirect them to the explore page showing movement cards.

A user clicks on a movement title they are interested in and clicks the follow movement button.

This will link the user to that movement. They can confirm this by revisiting their profile page.

## User Story 5: User Wants to Interact with a Movement
There are currently three primary interations a user can have with a movement once they are following it:
1. Leave a comment
The comment box is available at the bottom of the screen. The user can type
in a comment, hit submit, and the comment will be linked to the movement and stored in the database.

2. Email a politician
The email button will open mailto: link to the email assigned to the politician by the organizer
who started the movement.

3. Text their friend a link to the movement.
Using the Twilio API, users can text their friends a link to the movement.

We track the number of people who have clicked the email and text buttons to determine the strength of a movement.

## User Story 6: User Wants to Start a Movement
To start a movement, the user should navigate to their profile page and click the Start A Movement button.
This will render a form for starting a movement with the following inputs:
- Name
- Description
- Image Url
- City, State

The user can click one of two buttons: Add a Politician to Your Movement or Create!

If user clicks Add a Politician, another form is rendered with the following information:
- POLITICIAN'S FIRST NAME
- POLITICIAN'S LAST NAME
- PHONE NUMBER FOR THIS POLITICIAN, OR THEIR PARTY
- EMAIL ADDRESS FOR THIS POLITICIAN, OR THEIR PARTY
- WHO IS THIS POLITICIAN AFFILIATED WITH?
- WHAT POSITION DOES THIS POLITICIAN HOLD?
- ADD AN IMAGE OF THIS POLITICIAN

Then the user will click create. This will redirect them back to their profile page where they can view the
movements they are involved with.

## FUTURE USER STORY IDEAS
## User Story X: User Wants to View Movements That Another User is Involved With
## User Story X: User Wants to Unfollow A Movement
## User Story X: Users Should be Notified of Activity in Movements They Follow/Lead
