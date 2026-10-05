# tzofiya

## Backend

### DB
בחרתי במונגו כי אין צורך בקשר בין טבלאות וגם היא ניתנת להרחבה בקלות
וגם הצוות יודע לעבוד איתה איתור טוב

### Status Code
getAlertById - 404 - alert not found
addAlert - 201 - add alert to db
getAlerts / getSingleAlert - 200 - get data from db
errorHandler - 500 - uncaught server error
deleteAlert.ctrl - 204 - successfull deleted
updateAlert.ctrl - 201 - successfull updated

### Run 
```
cd backend
npm init
npm run dev
```
