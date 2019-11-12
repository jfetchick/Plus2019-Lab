
function start() {
var user = pjs.getUser();
if (user != null && pjs.query("SELECT * FROM admins WHERE user = ?", user).length > 0) {
  pjs.call("menu.js");
}
else {
  pjs.call("form.js");
}

}

exports.default = start;