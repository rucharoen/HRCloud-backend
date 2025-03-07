# Get start with HRCloud Backend
As you've clone this project, don't forget to run this command in this project
## npm i

![Screenshot 2025-03-07 141810](https://github.com/user-attachments/assets/796910c3-b1af-4a28-b3d8-de562b1ca15d)

## Make sure your database is running !!

# Now you should ready to run this project now!

## First of all, you have to make sure to check this config file
You should to config it to match to your Database

![Screenshot 2025-03-07 141938](https://github.com/user-attachments/assets/21ac4af9-4ad2-4535-8bcb-36f49d64d7d2)

# Let's see each part of this code, what it's doing ?
First, server.js, it's endpoint of this project.
And it's the main part to start the server by this command.
## node server.js or npm start

![Screenshot 2025-03-07 142032](https://github.com/user-attachments/assets/3a9959b4-13fe-4b0f-bde6-f7c9b37cf7c5)

## This project has 4 main part to run, in app folder
### -config
### -controllers
### -models
### -routes

![Screenshot 2025-03-07 142224](https://github.com/user-attachments/assets/3b6a7289-41fd-4329-9538-206a1fe72351)

# config
This file contains every config you need to run this project.
For now, it contains Database configuration

![Screenshot 2025-03-07 142252](https://github.com/user-attachments/assets/d176ce29-85d6-47da-9e05-2b7f85caffcb)

# controllers
This file contains every action of APIs to do CRUD.
Create
Read
Update
Delete

## This function have for Read

![Screenshot 2025-03-07 142558](https://github.com/user-attachments/assets/5f2cde0c-dcc0-4998-ab6c-3f95a3e58dae)

## This function have for Create

![Screenshot 2025-03-07 142649](https://github.com/user-attachments/assets/9309c476-55dc-4af2-8773-690596533c6d)

## This function have for Read, but specific with id

![Screenshot 2025-03-07 142723](https://github.com/user-attachments/assets/79409883-30e5-4b22-835b-bb1c76072fb0)

## This funtion have for Update by id

![Screenshot 2025-03-07 142738](https://github.com/user-attachments/assets/dcce7375-e24c-435d-82bc-9265fd800bd5)

## This function have for Delete by id

![Screenshot 2025-03-07 142802](https://github.com/user-attachments/assets/be7c1417-8df3-4ea6-a589-50a51d10ec31)

# models
This file contains model of the table we'll create and plug to database

## index.js
it contains sequelize and use config to plug with database.
And then export to use in other file

![Screenshot 2025-03-07 143051](https://github.com/user-attachments/assets/9bc7e8d5-68cc-4a9e-b76c-ef38874c00b9)

## product.model
it contains model to create table in database and match to table.


# routes
This file contains routes of APIs to lead every requests to controllers.

## user.routes
it contains every routes to go to controllers.


# server.js
This file is an endpoint for every requests to go to other routes.

It has allowed cors for Frontend project to pass through.

Use sequelize from model to connect to database.

And the last, it will listen to any request that come in on port 5000 which contained by .env config file

![Screenshot 2025-03-07 143603](https://github.com/user-attachments/assets/5a899233-085a-4aae-8000-c228f3df4714)
