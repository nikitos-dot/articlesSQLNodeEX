const express = require("express");
const app = express();
const articlesRoutes = require("./routers/articles");
const port = 3015;

app.use(express.json());
app.use("/articles", articlesRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
