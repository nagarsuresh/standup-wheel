const sm = require('source-map');
const fs = require('fs');

// console.log(process.argv[2]);
const input = process.argv[2];
const inputJson = JSON.parse(input); // '{line: 19, column: 45801}'

const rawSourceMap = fs.readFileSync(__dirname + "/../docs/maps/main.bd8b6cc2ddf33516696a.js.map", "utf8");
const c = sm.SourceMapConsumer.with(rawSourceMap, null, consumer => {
  console.log(consumer.originalPositionFor({
    line: inputJson.line,
    column: inputJson.column
  }));
});