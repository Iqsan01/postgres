import "dotenv/config";
import express from "express";
import router from "./routes/user.route.js";
import connect from "./config/databse.js";

const app = express();
const port = process.env.PORT || 3000


app.use(express.json())

app.use('/users', router)



app.listen(port, () => {
    connect();
    console.log(`Server is running on ${port}`);
})