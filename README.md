
<h1 align="center">

  E-Points
  <br>
</h1>
<img src="https://github.com/stephmukami/e-points/blob/main/client/public/epoints-pic-home.PNG" alt="home page pic">

<h4 align="center">A reward based web application for incentivizing use of Electric Motorbikes.</h4>
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#technical-architecture">Technical Architecture</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>



## Key Features

* Authentication and authorization
  - Riders and Passengers can their own accounts and log in
* Rider Code Generation
  - Riders can create unique codes for sharing 
* Point Accumulation System
  - Passengers can earn points for completed rides 
* Reward redemption
  -  Passengers can convert points to mobile airtime

## Technical Architecture
### Frontend

* Next.js: A React framework providing server-side rendering, routing, and optimal performance
### Backend
 
* Next.js API routes for handling server-side logic
   
* NeonDB: A hosted PostgreSQL database solution for:
  - User profile management
  - Points tracking
  - Code generation and validation
  
* Intergration
  -  Africa's Talking API: Enables seamless airtime distribution when users redeem their points

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/stephmukami/e-points.git

# Go into the repository
$ cd client

# Install dependencies
$ npm install

# Run the app
$ npm run dev

# Run the ml backend
$ cd server
$ node app.js
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

MIT

---

