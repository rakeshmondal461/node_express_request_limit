import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();
const port = 3030;

app.use(cors());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
