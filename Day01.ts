export class Day01 {

    static convertLineToPoint(line: string): number {
        return parseInt(line.slice(1), 10);
    }

    static normalizePoint(n: number): number {
        if (n < 0) {
            const mod = n % -100;
            if (mod === 0) {
                return 0;
            } else {
                return 100 + mod;
            }
        } else if (n >= 100) {
            // 162 -> 62
            return n % 100;
        }
        return n;
    }

    solvePart1(lines: string[] = [], startingPoint: number = 50): number {
        const result: [number, number] = lines.map(line => line.trim()).map(line => {
            const point = Day01.convertLineToPoint(line);
            if (line[0] === 'R') {
                // turn right
                return point;
            } else if (line[0] === 'L') {
                // turn left
                return -point;
            }
            // throw new Error(`Invalid line direction: ${line}`);
            // but return 0 for safety
            return 0
        }).reduce((acc, curr) => {
            // do rotations
            const result = Day01.normalizePoint(acc[0] + curr);
            if (result < 0 || result >= 100) {
                throw new Error(`Normalization failed: ${acc[0]} + ${curr} = ${result}`);
            }
            console.log(`L: Number ${acc[0]} by ${curr} -> ${result} `);
            if (result === 0) {
                console.log(`W: Zero hit at rotation: ${curr} from ${acc[0]}`);
                return [result, acc[1] + 1];
            } else {
                return [result, acc[1]];
            }
        }, [startingPoint, 0]);
        
        console.log(`Total number, rotations: ${result}`);
        return result[1];
    }
}