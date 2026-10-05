import express from "express";
import helmet from "helmet";
import apiRouter from "./src/routes/api.js";

const PORT = 3001;

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, console.log(`Server listen on port - ${PORT}`));
