import cors from "cors";
import express from "express";
import helmet from "helmet";
import apiRouter from "./src/routes/api.js";
import { errorHandler } from "./src/utils/errorHandler.js";

const PORT = 3001;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, console.log(`Server listen on port - ${PORT}`));
