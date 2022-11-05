import app from "./app";
import connectToMongo from "./mongo";

const portNumber = process.env.PORT;

connectToMongo()
  .then(() =>
    app.listen(portNumber, () => console.log("connected to ", portNumber))
  )
  .catch((error) => console.error(error));
