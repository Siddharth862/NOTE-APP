const express = require("express");
const { connectdb } = require("./config/database");
const noteRouter = require("./router/noteRouter");

const app = express();
const PORT = 5000;

connectdb();
app.use(express.json());
app.use("/api", noteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
