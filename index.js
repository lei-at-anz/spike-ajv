const Ajv = require("ajv").default
const fs = require('fs')

const ajv = new Ajv()
const schema = JSON.parse(fs.readFileSync('./schema.json', 'utf8'));
const validate = ajv.compile(schema)

let content = '{"amount":"1.234234"}'
let object = JSON.parse(content)
console.log(`validate ${content} : ${validate(object)}`)
