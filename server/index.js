import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./Routes/Route.js";
import route from "./Routes/userRoute.js";
import countryRoutes from './Routes/RouteC.js';
import tripRoutes from './Routes/tripRoutes.js';
import routerF from "./Routes/feedback.js";
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Sudarshan_S:Sudarshan123@cluster0.un8rs.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

app.use("/api", routes);
app.use("/api",route);
app.use('/api', countryRoutes);
app.use('/api', tripRoutes);
app.use('/api',routerF)
const PORT = process.env.PORT || 3006; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

