
## API Heroku NBV

  

Step to `start` the project locally:

> Use `npm install` after to start: `npm run dev`

  

Step to `deploy` on the HEROKU:

> Realize the `git init` on the project, if not exist project in your account.

> Then, realize login on the Heroku using: `heroku login` and create the repository `heroku create name_app`.

> After put all project to add on the git of the Heroku using: `git add .` and run commit: `git commit -m "first commit"`

> Finally, make the push to Heroku using: `git push heroku master` and the project will make deploy automatically and generate the *url*.

  

To add the Postgres on the project, make:

> Access: https://elements.heroku.com/addons/heroku-postgresql and select the Add-on plan and which application you want to provision the PostgreSQL.

> Remember: In your app, it's necessary to exist the variables environments set to connection on the database.

  

Endpoints of the project:

> POST: /api/v1.0

> GET: /api/v1.0

> PUT: /api/v1.0/:id

> DELETE: /api/v1.0/:id

