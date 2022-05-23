# tl;dv - Full-Stack Developer Test

[![Netlify Status](https://api.netlify.com/api/v1/badges/4f3a767c-489e-4744-be4c-b1d2bbaf8726/deploy-status)](https://app.netlify.com/sites/elegant-concha-fd3500/deploys)

# Requirements

- [X] Bootstrap a new API with a mongo database - use [Strapi](https://strapi.io/) or mock the API requests
- [X] Add a new Content Type resource : Video `API` reachable on `/videos` . The entity should have at least:
    - `slug`: string
    - `title`: string
    - `url`: string
    - `isPublic`: boolean
    
     *(CRUD Methods will be generated in the same time, by Strapi)*
    
- [X] Create a small React App to consume this API
- This front-end application should have several pages to allow you to
    - [X] list all the videos in the API
    - [X] view a specific video when you click on the item in the list. (A player should play the specific video)
    - [X] edit a specific video (no validation on the inputs for now)
    - *(For now let's say videos are pre-populated via the Strapi admin interface)*
- [X] Write tests

## **Bonus (for Front-End position)**

Here are some points you could do as smaller improvements. ⚠️  If you are doing some of those bonus points, please do them into another branch, called `bonus-frontend`

- [X] Create a new page to create a new video entry 
- [X] No UI is defined, you can use any libraries that you want to make your front-end app really appealing - *Used chakra-ui*
- [X] Responsive design 

## **Bonus (for Back-End position)**

Below are some points you could do as smaller improvements. ⚠️  If you are doing some of those bonus points, please do them into another branch, called `bonus-backend`

- [-] Add pagination on GET `/videos` (only on the API, not on the front-end) - *It seeams that strapi does it by default*
- [-] You will update the video entity to link it to the user. And add a new endpoint to only display the videos for a specific user (`/users/:id/videos`) - *Haven't done it, but I would had a user entry to the videos schema and them grab the videos by user*
- [X] Your project is running inside a Docker - *Did it on the master branch, to help me run all the environment with strapi+postgresql*

# How to run locally 

```
make run

make tests // run tests
```

By running `make run` the environment will be automatically set up, also, it will open a browser tab with the react application.

> NOTE: if you don't have *make* installed, please run `chmod +x scripts/run.sh && ./scripts/run.sh` it will have the same effect.

# Demo

https://elegant-concha-fd3500.netlify.app