import express from 'express'
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';


export {app}

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  //accepting json data
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//to store media like files and images etc, public assets
app.use(express.static("public"))

app.use(cookieParser())