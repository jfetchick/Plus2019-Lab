
function app() {
 pjs.defineDisplay("display", "form.json");

display.form.execute();

pjs.query("INSERT INTO request SET?", {name, email, type, details});

let credentials = pjs.sendRequest({
  method: "get",
  url: "https://noderun.com/run/profound-logic/plus-gmail/credentials",
  json: true
});

let gmail = require('gmail-send');
let send = gmail(credentials);

send({ 
  to: 'jfetch1701@gmail.com',
  subject: 'Test for node.js',
  text:`
  Name: ${name}
  Email: ${email}
  Type: ${type}

  ${details}
  `
})




pjs.messageBox("Thank you! Your request was add to our system! Don't hold your breath.")
}


exports.default = app;