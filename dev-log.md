Here's a documentation of the steps taken to create this project:

# 05-12-2023

-   create a git repo - https://github.com/debojitsaha/terroni
-   clone the git repo:

```bash
git clone git@github.com:debojitsaha/dropper.git
```

-   initialize vite with react and typescript:

```bash
npm create vite@latest
```

-   setup project directory

```bash
cd src
mkdir components interfaces pages routes styles utils
```

-   setup node and npm

```bash
npm install
npm install react-router-dom axios express mysql2
```

-   setup linter and formatter: I created a .prettierrc with prettier configs (along with prettierignore) as well as a .eslintrc.cjs following official documentation and community standards
-   downloaded mysql from the following link: https://dev.mysql.com/downloads/installer/
-   installation of mysql server and workbench. I used the same credentials as provided in the api.js file while setting up the mysql instance in my system.
-   setup **revspire_db**:

```bash
cd _assignment
mysql -u root -p
CREATE DATABASE revspire_db;
USE revspire_db;
SOURCE /Users/debojit/Projects/terroni/_assignment/database-schema.sql;
EXIT;
```

-   Browse the database: I opened the mysql workbench and browsed the revspire_db with some simple sql commands. I also noted down a user id and a folder id to test the api.

```
"viewer_id": "IGH024724845797",
"folder_id": "WRS791262501655"
```

-   Setup and test API: In this step, I added a package.json script called "api" with command `node _assignment/api.js`. Then I opened the postman application and hit a post request to `/view-content-and-folders-sorted` with the above json in the request body and observed the reponse format.

This concluded my activity for the day and I was ready with the frontend setup, api setup and database setup.

# 06-12-2023

This was when I actively started to code.

-   Starting with tailwind setup:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

-   Tailwind configuration: in this step I edited the tailwind.config.js file with the content and fontFamily field for setting up tailwind with react and adding Montserrat font support.
-   Starting the UI code
