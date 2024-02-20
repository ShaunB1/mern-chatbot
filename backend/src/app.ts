import express from "express";
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// Middlewares
app.use(cors({origin: "https://mern-chatbot-seven.vercel.app/", credentials: true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev")); // remove in production
app.use("/api/v1", appRouter);

export default app;
