
function app(req, res) {

var records = pjs.query("SELECT * FROM request");
res.send(records);
}

exports.default = app;