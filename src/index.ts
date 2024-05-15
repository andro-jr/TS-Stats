import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MathResult';

const footballCsv = new CsvFileReader('football.csv');

footballCsv.read();

let manUnitedWins = 0;

for (let match of footballCsv.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log('manUnitedWins :', manUnitedWins);
