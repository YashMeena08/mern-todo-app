import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.routes.js"
import { connectDB } from "./config/db.js";
import cors from "cors";
// import path from "path";


app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://mern-todo-app-wk2n.onrender.com"
    ],
    credentials: true
}));

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

const __dirname = path.resolve();

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname,"/frontend/dist")));
//     app.get("*",(req, res)=>{
//         res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
//     });
// }

app.listen(PORT, ()=> {
    connectDB(); 
    console.log(`servert started at${PORT} ` );
});

 