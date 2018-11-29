## Talent Buyer
An organizational tool for music talent buyers to browse artists at all the major agencies, keep track of their venue's calendar and create and edit offers to send out to agents. 


### Links
- <a href="https://talent-buyer.herokuapp.com/">Live on Heroku</a>
- <a href="https://github.com/colinwarmstrong/talent-buyer-api">TalentBuyer API repo on Github</a>

### Technologies Used

##### Front-End
- React
- React Router
- Redux
- Redux-thunk

##### Backend-End
- Ruby / Ruby on Rails

##### Webscraping / Background Workers
- NodeJS / ExpressJS
- NightmareJS


### APIs Used
- SongKick API
- Spotify API

### Screenshots

##### SignUp / Login using Devise & JWT
![signUpPage](https://i.imgur.com/a1xB2vn.png)

##### Buyer Dashboard
![dashboard](https://i.imgur.com/0qkjZtW.png)



### Next Steps
Additional enhancements will include:
- Allow for a buyer to manage multiple venues
- Allow for a buyer to invite team members to their dashboard
- Additional Artist information
- PDF builder for offers
- Option to send offers in email to Agents
- Agent directory

### Set Up
#### Front-end

Clone the repo

Email gray.smith00@gmail.com for Private Keys

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

#### Back-end
Clone the associated [back-end repo](https://github.com/colinwarmstrong/talent-buyer-api)

Run `bundle install` from the root directory

Run `rails db:{create,migrate,seed}`

Run `rails s`

### Test Driven Development
Talent Buyer uses Jest and Enzyme for front-end testing, and Rspec for back-end testing

Run with `npm test` in the root directory on the Front-End

### Contributors

Gray Smith : [GitHub Profile](https://github.com/graysmith00)

Tim Fischer : [GitHub Profile](https://github.com/TFisch)

Colin Armstrong : [GitHub Profile](https://github.com/colinwarmstrong)

Tristan Bambauer : [GitHub Profile](https://github.com/TristanB17)

