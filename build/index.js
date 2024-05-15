"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MathResult_1 = require("./MathResult");
const footballCsv = new CsvFileReader_1.CsvFileReader('football.csv');
footballCsv.read();
let manUnitedWins = 0;
for (let match of footballCsv.data) {
    if (match[1] === 'Man United' && match[5] === MathResult_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MathResult_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log('manUnitedWins :', manUnitedWins);
