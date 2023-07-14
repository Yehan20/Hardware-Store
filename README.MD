# Tool Land Store

A Fullstack Hardware , Tool Store , Which allows users to purchase , view items. Has variety
of Diffent categories

Link to the application : https://yn-tooland-store.netlify.app/
Link to the adminPanel  : https://yn-tooland-admin.netlify.app/

### Try it out with these fake credentials

- Username: testUser
- Password: tesT1234$

## Lessons learned

- How to use Typescript with node js and express
- How to use Firebase Storage to add Images 
- How to implement search functionality in Different items
- How to create Payment gateway using stripe in backend
- How to handle async logic with redux
- How to create functions within schemas in mongoose
- How to connect mongo db atals to products
- How to use Env Varaibles in Vite

## Features

- User authentication and authorization (JWT authentication)
- Pagination
- Sorting by various fields (price category)
- Searching
- Shopping Cart functionality
- Stripe Payment
- Admin (Managment of Products)
- Admin (Sales Revanue)
- Admin (Anlytics)

## Tools and technologies used

- Vite
- React + Hooks 
- React Router
- Redux
- Nodejs + Express
- Type Script
- jsonwebtoken
- bcrypt
- stripe payment
- firebase
- styled components
- mvc architecture


## Get started

Open a terminal and clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/Yehan20/Hardware-Store

# Go into the repository
$ cd hardware-store

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Go to the `server` folder, and create a `.env` file. Add the following environment variables with your own values:

```dosini
PORT=5000

MONGO_URL = Your Key
SECRET_KEY= Your Key
REFRESH_KEY= Your Key
STRIPE_KEY = Your Key

```

```bash
# Terminal for the server
# cd into the server folder
$ cd server

# Install dependencies
$ npm install

# Install nodemon if you don't have it
# You can either install it globally, or locally only for this project (remove the -g flag)
npm install nodemon -g

# run the server
$ npm run devStart
```

```bash
# Terminal for the client
# cd into the front-end folder
$ cd front-end

# Install dependencies
$ npm install

# run the client app
$ npm run dev
```

At this point, you will have the server running locally at http://localhost:3001, and the client app running in the browser at http://127.0.0.1:5173/ <br />.

Note that the client app is configured to send all requests to the deployed server. If you want it to send requests to the local server, then you just have to change the base url in `Slices.ts` 


## Deployment

- Client-side application is deployed to [Netlify](https://netlify.com/)<br />
- Server-side app is deployed to [Render](https://render.com/)
