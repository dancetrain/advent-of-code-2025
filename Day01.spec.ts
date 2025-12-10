import { Day01 } from "./Day01.ts";

describe('Day01 Test', () => {

    it ('Day01 correctly converts line to rotation', () => {

        expect (Day01.convertLineToPoint("R46")).toBe(46);
        expect (Day01.convertLineToPoint("L12")).toBe(12);
    });

    it ('Verify NormalizationRotation', () => {
        expect (Day01.normalizePoint(150)).toBe(50);
        expect (Day01.normalizePoint(100)).toBe(0);
        expect (Day01.normalizePoint(162)).toBe(62);
        expect (Day01.normalizePoint(99)).toBe(99);
        expect (Day01.normalizePoint(0)).toBe(0);
        expect (Day01.normalizePoint(-1)).toBe(99);
        expect (Day01.normalizePoint(-50)).toBe(50);
        expect (Day01.normalizePoint(-150)).toBe(50);
        expect (Day01.normalizePoint(-400)).toBe(0);
    });

    it('Day01 solvePart1 simple tests', () => {
        const day01 = new Day01();
        // test rotations overflow only
    
        expect (day01.solvePart1(["L50"])).toBe(1);
        expect (day01.solvePart1(["R50"])).toBe(1);
        expect (day01.solvePart1(["L51"])).toBe(0);
    });

    it('Example input', () => {
        const day01 = new Day01();
        const input = ["L68",
                        "L30",
                        "R48",
                        "L5",
                        "R60",
                        "L55",
                        "L1",
                        "L99",
                        "R14",
                        "L82"];
        expect (day01.solvePart1(input)).toBe(3);
    })
});