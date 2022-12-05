var contributors = require('github-contributors');
var fs = require("fs");
var { user } = require('./config.json');
var { repository } = require('./config.json');
var { id } = require('./config.json');
var { secret } = require('./config.json');
var { file } = require('./config.json');
var repo = `${user}/${repository}`;
var opts = { id: id, secret: secret };

contributors(repo, opts, function (err, res) {
  if (err) console.log(err);
  let contributors = [];
  let contributors_avatars = [];
  for (let i = 0; i < res.length; i++) {
    if (!`${res[i].login}`.endsWith("[bot]")) {
      contributors.push(res[i].login);
    }
    for (let i = 0; i < res.length; i++) {
      if (!`${res[i].login}`.endsWith("[bot]")) {
        contributors_avatars.push(res[i].avatar_url);
      }
    }
  }
  let strg = `<div align="center">\n<table>\n<tr>\n`;
  for (let i = 0; i < contributors.length; i++) {
    if (i % 7 === 0) {
      strg += "</tr>\n<tr>\n";
    }
    strg += `<td align="center"><a href="https://github.com/${contributors[i]}"><img src="${contributors_avatars[i]}?s=100" width="100px;" alt="${contributors[i]}"/><br /><sub><b>${contributors[i]}</b></sub></a><br /></td>\n`;
  }
  strg += "</tr>\n</table>\n</div>";
  console.log(strg);
  if (file === true) {
    fs.writeFile("./table.txt", strg, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
});