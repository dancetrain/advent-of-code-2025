
import fs from "fs";
import { Day01 } from "./Day01.ts";

async function main() {


    console.log(`Day 01 Part 1:Starting`);

    const day01 = new Day01();

    // read input from file
    const input = fs.readFileSync("day_01.txt", "utf-8").trim().split("\n");

    const result = day01.solvePart1(input);
    console.log(`Day 01 Part 1: ${JSON.stringify(result)}`);
}

main().catch(console.error);