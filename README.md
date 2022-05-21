# tl;dv - Full-Stack Developer Test

[![Netlify Status](https://api.netlify.com/api/v1/badges/4f3a767c-489e-4744-be4c-b1d2bbaf8726/deploy-status)](https://app.netlify.com/sites/elegant-concha-fd3500/deploys)

# Requirements

- Bootstrap a new API with a mongo database - use [Strapi](https://strapi.io/) or mock the API requests
- Add a new Content Type resource : Video `API` reachable on `/videos` . The entity should have at least:
    - `slug`: string
    - `title`: string
    - `url`: string
    - `isPublic`: boolean
    
     *(CRUD Methods will be generated in the same time, by Strapi)*
    
- Create a small React App to consume this API
- This front-end application should have several pages to allow you to
    - list all the videos in the API
    - view a specific video when you click on the item in the list. (A player should play the specific video)
    - edit a specific video (no validation on the inputs for now)
    - *(For now let's say videos are pre-populated via the Strapi admin interface)*
- Write tests

# How to run locally 

```
make run

make tests // run tests
```

By running `make run` the environment will be automatically set up, also, it will open a browser tab with the react application.

> NOTE: if you don't have make installed, please run `chmod +x scripts/run.sh && ./scripts/run.sh` it will have the same effect.

