const express = require("express");
const app = express();
const PORT = 5000;

const users = [
  {
    name: "a",
    id: 1,
  },
  {
    name: "b",
    id: 2,
  },
];

app.get("/", (request, response) => {
  response.send(users);
});

app.get("/:id", (request, response) => {
  const { id } = request.params;
  const user = users.find((ele) => ele.id === parseInt(id));
  response.send(user);
});

app.listen(PORT, () => console.log(`server running in PORT:${PORT}`));
