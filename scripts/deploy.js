const path = require("path");
const { exec } = require("./utils");

exec(path.join("scripts", "deploy.sh"));
