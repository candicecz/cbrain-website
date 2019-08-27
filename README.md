# cbrain-website

### Website for the CBRAIN service

#### For local development:

1. `npm install`
2. `npm run dev`

##### To update:

1. The first time:
   - `$ heroku login`
   - `$ heroku git:clone -a cbrain-website`
   - `$ cd cbrain-website`
2. Make desired changes and `npm run build`
3. `git add .`, `git commit`, `git push heroku master`
