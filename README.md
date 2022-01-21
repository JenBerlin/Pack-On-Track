<div ><a href="........"><img src="./server/public/images/POT-logo.png"/></a></div>

<br>

<h1>PACK ON TRACK</h1>

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<h2>Table of Content</h2>

- [Project Link](#project-link)
- [Getting Started](#getting-started)
- [Contributors](#contributors)
- [About The project](#about-the-project)

  - [User Story](#user-story)
  - [Technologies Used](#technologies-used)
  - [Web APIs](#web-apis)
  - [Wireframes](#wireframes)

- [Plans For Improvement](#plans-for-improvement)
- [Screenshots](#screenshots)

  - [Homepage](#homepage)
  - [Dashboard](#dashboard)
  - [Profile](#profile)
  - [Sign In/ Sign Up](#sign-in-sign-up)
  - [About Us](#about-us)
  - [FAQ](#faq)
  - [Shipment](#shipment)
  - [Address](#address)

<br>

### Project Link

[Link](https://intense-lowlands-65258.herokuapp.com/) to our live app.
These are our project's [presentation](https://docs.google.com/presentation/d/1XD44_pA1ehytbJZhph0vRMQ353_id4LOznRdizqkDJQ/edit#slide=id.p) and our [GitHub repo](https://github.com/JenBerlin/Pack-On-Track/tree/dev).

<br>

### Getting Started

This is a live website, therefore accessible directly on its [live URL](https://intense-lowlands-65258.herokuapp.com/).
Should you like to experiment and check the code, feel free to clone the repo to your local machine and open the project in your VSCode:

```
git clone git@github.com:JenBerlin/Pack-On-Track.git
cd Pack-On-Track
code .
```

Install all dependencies (dotenv, express, mysql2, sequelize) by using typing in the terminal:

`npm i`

Open the mysql shell, connect to mysql and run the following command to create the database:

`db/schema.sql`

Go back to your terminal, seed data in the database and start the server by running:

`npm run start`

<br>

### Contributors

- Jenny : https://github.com/JenBerlin
- Jitka : https://github.com/jitasek
- Mohamed : https://github.com/mohamedallam13
- Vicente : https://github.com/vvicunag

<br>

### About The Project

Pack On Track is a handy light-weight web app which keeps track of all your active online orders for you. It takes over the burden from your shoulders of having to remember when your next order is getting shipped to which of your addresses, by which courier company and many other fancied features.

<br>

### Key Features

- user sign-up, login, logout
- view dashboard with all user's shipments
- from the dashboard, user can:
  - create, view, update, delete shipment
  - create, view, update, delete address
  - update user's profile
- hashed password
- password verification during sign-up

<br>

#### User Story

As a spirited online shopper, I want to keep track of my current orders. I want to have an overview of all my orders' data aggreagted and saved in one place to be able to access, update or delete my upcoming shipments anytime.

<br>

#### Technologies Used

<p>The following technologies and frameworks were used while working on this project:</p>

- HTML, CSS (Bootstrap UI Framework)
- JavaScript
- npm package manager
- Express.js
- express-handlebars
- express-sessions
- connect-session-sequelize
- MVC architectural pattern
- Sequelize ORM
- MySQL
- bcrypt package
- dotenv package
- Insomnia API Design Platform
- eslint, nodemon (dev dependencies)

<br>

#### Wireframes

- Homepage ![Image](./server/public/images/homepage.png)

- Dasboard ![Image](./server/public/images/dashboard.png)

- Profile ![Image](./server/public/images/user-profile.png)

- Sign In/ Sign Up ![Image](./server/public/images/login_signup.png)

- Shipment ![Image](./server/public/images/shipment-detail.png)

- Address ![Image](./server/public/images/address-detail.png)

<br>

### Plans For Improvement

- overdue orders in a red section
- shipment status tracking
- tracking of where the parcel is at the moment
- email plugin to transfer order confirmation data into the App and account
- adjusting dekiuvery date directly through the app
- delivery pickupo notification
- Slack message/ email notification for this week's shipments
- password re-type security feature on login page ?
- user confirmation/verification request after sign-up (users click a link emailed to them)
- developing a mobile app

<br>

### Screenshots

- #### Homepage

  ![Image](./server/public/images/homepage-web.png)

- #### Dashboard

  ![Image](./server/public/images/dashboard-web.png)

- #### Profile

  ![Image](./server/public/images/profile-web.png)

- #### Sign In/ Sign Up

  ![Image](./server/public/images/loginsignup-web.png)

- #### About Us

  ![Image](./server/public/images/about-us.png)

- #### FAQ

  ![Image](./server/public/images/FAQ.png)

- #### Shipment

  ![Image](./server/public/images/shipment-web.png)

- #### Address
  ![Image](./server/public/images/address-web.png)
