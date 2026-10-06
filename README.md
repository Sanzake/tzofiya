# tzofiya

## Backend

### DB
בחרתי במונגו כי אין צורך בקשר בין טבלאות וגם היא ניתנת להרחבה בקלות
וגם הצוות יודע לעבוד איתה יותר טוב

### Status Code
addAlert - 201 - add alert to db

getAlerts / getSingleAlert / usersGet.ctrl - 200 - get data from db

errorHandler - 500 - uncaught server error

deleteAlert.ctrl / deleteUser.ctrl - 204 - successfull deleted

updateAlert.ctrl - 201 - successfull updated

userRegister.ctrl - 201 / 409 - created / email conflict

alerts.dal / users.dal / getAlertById- 404 - Not found

userLogin.ctrl - 200 / 409 - succesfull login / Invalid username or password

meGet.ctrl - 200 / 401

### Validation
Alert validation :

displayName / description - string minimum 4 chars - incorrect ...

priority / arena / status - enum with valid strings

lat / lon - number


Register validation:

username - string 4 - 20 chars

password - string min 8 chars

email - email

role - ["admin", "general_user", "arena_user"]

assignedArena - ["all", "North", "Center", "South"]


Login validation:

username - string 4 - 20 chars

password - string min 8 chars

### Run 
Run mongo db localy (in cli or docker)
Create .env and fill it from .env.example

```
cd tzofiya/backend
npm init
npm run dev
```


## Frontent
### Run
```
cd tzofiya/frontend
npm init
npm run dev
```

####
Browser URL - ```localhost:5173```