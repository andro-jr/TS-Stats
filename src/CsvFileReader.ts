import fs from "fs";

export abstract class CsvFileReader<DataType> {
  data: DataType[] = [];
  abstract mapRow(row: string[]): DataType;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((item: string): string[] => {
        return item.split(",");
      })
      .map(this.mapRow);
  }
}
