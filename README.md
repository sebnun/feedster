# Feedster

## Installation

1. Clone this repository

2. On the root directory run:

```
cd server && npm i && node index
```

3. Open a new terminal tab, on the root directory run:

```
cd client && npm i && npm start
```

## Use case

As a user I can see <= 10 unique links from a list of RSS feeds sorted chronologically

## General Notes

This application was made with the goal of having a working implementation in less than 4 hours. 

It could have been made with just a react app, but I wanted to make it more similar to a real world application.

## Some things to improve, handle more traffic and scale:

* To handle more traffic we could add cache at the HTTP level with cache-control or implement something like redis and load balancing for more complex scenarios
* Consider a service like cloudflare for DDoS attacks and CDN
* Access the database or service directly from the backend instead of making an HTTP request
* Add environment variables instead of hardcoring some constant, for easier containerization and deployment
* Handle CORS when deployed with a domain
* Most of the business logic are pure functions, add unit tests to both the frontend and the backend, maybe end-to-end tests with puppeteer
* Consider GraphQL if the plan is to create several endpoints and use the same backend for different clients (native mobile app, web app)
* Add an openAPI spec if we continue with REST
* Consider typescript
* Implement CI/CD with github actions
* Consider user testing for usability, features, etc.
