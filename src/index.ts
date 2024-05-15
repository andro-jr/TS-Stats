import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MathResult";

const footballCsv = new CsvFileReader("football.csv");

const footballMatchReader = new MatchReader(footballCsv);
footballMatchReader.load();

footballCsv.read();

let manUnitedWins = 0;

for (let match of footballMatchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log("manUnitedWins :", manUnitedWins);
