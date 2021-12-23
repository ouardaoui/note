const fs = require('fs');

const JSONdata = fs.readFileSync("1-json.json").toString()
const data = JSON.parse(JSONdata)
data.name = "issam"
data.age = 28
fs.writeFileSync("1-json.json", JSON.stringify(data))
