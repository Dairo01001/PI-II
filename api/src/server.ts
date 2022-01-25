import axios from "axios";

import app from "./app";
import config from "./config/config";
import { Genre, sequelize } from "./database";

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get("port"), async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${config.API.KEY}`
    );
    Promise.all(
      data.results.map(({ id, name }: { id: number; name: string }) => {
        Genre.create({ id, name });
      })
    );
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
});
