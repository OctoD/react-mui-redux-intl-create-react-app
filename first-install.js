const cwd = __dirname;
const path = require("path");
const fs = require("fs");

const envfilecontent = [
  "#",
  "NODE_PATH=./",

  "#",
  'REACT_APP_AUTH0_AUDIENCE="AUTH0_AUDIENCE"',

  "#",
  'REACT_APP_AUTH0_CLIENT_ID="AUTH0_CLIENT_ID"',

  "#",
  'REACT_APP_AUTH0_DOMAIN="AUTH0_DOMAIN"',

  "#",
  'REACT_APP_AUTH0_REDIRECT_URI="AUTH0_REDIRECT_URI"',

  "#",
  'REACT_APP_LOGROCKET_APPID="LOGROCKET_APPID"'
].join("\n");
const envfilepath = path.join(cwd, ".env");

fs.writeFileSync(envfilepath, envfilecontent, {
  encoding: "utf-8"
});
