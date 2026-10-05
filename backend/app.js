import express from "express"
import helmet from "helmet"


const PORT = 3001

const app = express()

app.use(helmet())
app.use(express.json())


app.listen(PORT, console.log(`Server listen on port - ${PORT}`))