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

app.use(express.json());

app.get("/", (request, response) => {
  response.send("hello, welcome to test server");
});

app.get("/users", (request, response) => {
  response.send(users);
});

app.get("/:id", (request, response) => {
  const { id } = request.params;
  const user = users.find((ele) => ele.id === parseInt(id));
  response.send(user);
});

app.post("/users", (request, response) => {
  const newUser = request.body;
  console.log(newUser);
  response.send("done");
});

app.listen(PORT, () => console.log(`server running in PORT:${PORT}`));
