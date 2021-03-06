import express from "express";
import userRouter from "./routers/users.routes";
import loginRouter from"./routers/login.routes"

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter)
app.listen(3000)

export default app;