const fs = require("fs");
const path = require("path");

const cwd = path.join(__dirname);
const filepath = path.join(cwd, "_redirects");
const destfile = path.join(cwd, "build", "_redirects");

fs.copyFileSync(filepath, destfile);
