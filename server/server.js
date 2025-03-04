import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./confing/db.js";
import AdminJS from "adminjs";
import { adminOptions } from "./admin/admin.config.js";
import { buildRouter } from "@adminjs/express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectDB();

const admin = new AdminJS(adminOptions);
const adminRouter = buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`AdminJS at http://localhost:${PORT}${admin.options.rootPath}`);
});
