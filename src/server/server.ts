import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("dist"));

console.log("hullo");

app.get("/", (req, res) => {
  console.log("plz work");
  res.send("plz work");
});

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "firstName1", lastName: "lastName1" },
    { id: 2, firstName: "firstName2", lastName: "lastName2" },
    { id: 3, firstName: "firstName3", lastName: "lastName3" },
  ];
  res.json(customers);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
