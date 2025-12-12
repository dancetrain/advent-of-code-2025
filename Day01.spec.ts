import { Day01 } from "./Day01.ts";

describe('Day01 Test', () => {

    it ('Day01 correctly converts line to rotation', () => {
        expect (Day01.convertLineToPoint("R46")).toBe(46);
        expect (Day01.convertLineToPoint("L12")).toBe(-12);
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

    it ('Verify apply operation', () => {
        const result1 = Day01.applyRotation({currentDial: 50, rotationAction: "R60"});
        expect (result1.dialPoints).toBe(10);
        expect (result1.zeroHits).toBe(1);

        const result2 = Day01.applyRotation({currentDial: 90, rotationAction: "R20"});
        expect (result2.dialPoints).toBe(10);
        expect (result2.zeroHits).toBe(1);

        const result3 = Day01.applyRotation({currentDial: 10, rotationAction: "L15"});
        expect (result3.dialPoints).toBe(95);
        expect (result3.zeroHits).toBe(1);
        
        const result4 = Day01.applyRotation({currentDial: 5, rotationAction: "L10"});
        expect (result4.dialPoints).toBe(95);
        expect (result4.zeroHits).toBe(1);

        const result5 = Day01.applyRotation({currentDial: 0, rotationAction: "L300"});
        expect (result5.dialPoints).toBe(0);
        expect (result5.zeroHits).toBe(3);
    });
});