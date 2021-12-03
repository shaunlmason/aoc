export function countDepthIncreases(measurements: number[]): number {
  let increases = 0;

  let previous: number | undefined;
  for (let index = 0; index < measurements.length; index++) {
    const current = measurements[index];

    // guard initial value
    if (!previous) {
      previous = current;
      continue;
    }

    if (current > previous) {
      increases++;
    }

    previous = current;
  }

  return increases;
}
