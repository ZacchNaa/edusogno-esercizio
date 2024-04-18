```sh
FORKATE LA REPO
```

- UTILIZZATE LA STRUTTURA PRESENTE NELLA REPO

- ALL'INTERNO DI assets > db TROVERETE IL FILE DI MIGRAZIONE DEL DB 'Migrations.sql' CON IL NECESSARIO PER CREARE LA TABELLA utenti E eventi E PER MIGRARE I DATI DEGLI EVENTI

## Run locally

### create a mongodb account and create a database
`https://cloud.mongodb.com/`

`Update your .env file with your DATABASE_URL`


---
### Start backend

#### Setup

`cd backend`

`npm install`

`npm run dev || pnpm dev`

---
### Start frontend

#### Setup

`cd app`

`npm install`

#### Run the dev server
`npm run dev`
`visit your app on: http://localhost:3000/`


---

### Testing

- Please navigate to the User registration page
- Enter your details and submit
- You will be redirected to the login page
- Enter the email and password you created and login

## There are only to roles `admin | user`
## By default the user is assigned an `admin` role
- But, you can change it to `user` on line 27 of `backend\models\user.js`

As an `admin` you have create, edit, view, and delete right
As a `user` you have only view right

You can also reset you password
Please note that email is unique

