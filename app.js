const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(require("./src/routes/tareasRouter"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
