import jsonServer from "json-server";
import auth from "json-server-auth";

const app = jsonServer.create();
const router = jsonServer.router("Data/db.json");
const middleWare = jsonServer.defaults();

app.use(middleWare);
app.db = router.db;

app.use(auth);

app.use(router);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
