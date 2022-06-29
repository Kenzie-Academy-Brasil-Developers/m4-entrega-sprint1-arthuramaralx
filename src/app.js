import express from "express";
import userRouter from "./routers/users.routes";
import loginRouter from "./routers/login.routes";
import { connectDatabase } from "./database"
const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.listen(3000, async ()  =>{
    console.log('Executando na porta 3000')
   await connectDatabase();
});

export default app;
