const seededRandom = (seed: number): (() => number) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return (): number => {
    s = (s * a) % m;
    return s / m;
  };
};

export const fetchAPI = (date: Date): string[] => {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

export const submitAPI = (formData: Record<string, any>): boolean => {
  return true;
};
