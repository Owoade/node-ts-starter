import express from "express";

import { config } from "dotenv"
import user_router from "./src/services/user/route";

config();

const app = express()

const PORT = process.env.PORT ?? 5000;

app.use( "/user", user_router );

app.listen(PORT, ()=> console.log("The server is running fine and good"));