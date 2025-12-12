
export type RotationProgress =  {
    dialPoints: number;
    zeroHits: number;
    zeroEnds: number;
}

export type RotationResult = {
    dialPoints: number;
    zeroHits: number;
}

export type RotationOperation = {
  currentDial: number;
  rotationAction: string;
}

export class Day01 {

  static applyRotation(operation: RotationOperation): RotationResult {
    const points = this.convertLineToPoint(operation.rotationAction)
    const finalDial = operation.currentDial + points
    console.log(`Applying rotation ${operation.rotationAction} to ${operation.currentDial} results in ${finalDial}`);

    let zeroHits = 0;
    // calculate number of zeroes engagements 
    if (finalDial <= 0) {
      zeroHits = Math.trunc(finalDial / -100)
      if (operation.currentDial != 0) {
        zeroHits += 1;
     }
    } else if (finalDial >= 100) {
      zeroHits = Math.trunc(finalDial / 100)
    }

    return {
      dialPoints: this.normalizePoint(finalDial),
      zeroHits: zeroHits
    } as RotationResult
  }

  static convertLineToPoint(line: string): number {
    const points = parseInt(line.slice(1), 10);
    if (line[0] === 'R') {
        // turn right
        return points;
    } else if (line[0] === 'L') {
        // turn left
        return -points;
    }
    throw new Error(`Incorrect operation ${line}`);
  }

    static normalizePoint(n: number): number {
        let dialPoints;
        if (n < 0) {
            const mod = n % -100;
            if (mod === 0) {
                dialPoints = 0
            } else {
                dialPoints = 100 + mod;
            }
        } else if (n >= 100) {
            // 162 -> 62
            dialPoints =  n % 100;
        } else {
            dialPoints = n;
        }
        if (dialPoints < 0 || dialPoints >= 100) {
            throw new Error(`Normalization failed for ${n} -> ${dialPoints}`);
        }
        return dialPoints;
    }

    solvePart1(lines: string[] = [], startingPoint: number = 50): RotationProgress {
        const result: RotationProgress = lines.map(line => line.trim()).reduce((acc, curr) => {
            const operation: RotationOperation = {
                currentDial: acc.dialPoints,
                rotationAction: curr
            }
            const rotationResult = Day01.applyRotation(operation);
            return {
                dialPoints: rotationResult.dialPoints,
                zeroHits: acc.zeroHits + rotationResult.zeroHits,
                zeroEnds: rotationResult.dialPoints === 0 ? acc.zeroEnds + 1 : acc.zeroEnds,
            };
        }, {
            dialPoints: startingPoint,
            zeroHits: 0,
            zeroEnds: 0
        });
        
        console.log(`Total number, rotations: ${result}`);
        return result
    }
}