
function list() {

pjs.defineDisplay("display", "list.json");

while (true) {
var records = pjs.query("SELECT * FROM request");
display.grid.replaceRecords(records);
display.list.execute();

display.grid.readChanged();
if (!pjs.endOfData()) {
  pjs.query("UPDATE request SET ? WHERE id = ?", [{ complete }, id]);
}
}
}

exports.default = list;