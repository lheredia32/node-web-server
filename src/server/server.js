const express = require("express");
const path = require("path"); // path hace referencia a todas las carpetas de la aplicación
// a traves de ella se puede navegar por las carpetas

const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  app.use(express.static(public_path));

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
};

module.exports = {
  startServer,
};
