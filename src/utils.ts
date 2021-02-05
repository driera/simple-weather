export const getDirection = (dir: number): string => {
  const arr = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  let pointer = arr[0];

  for (let index = 1; index <= arr.length; index += 1) {
    if (dir === 0) {
      pointer = arr[0];
      break;
    }
    if (dir < index * 45 - 22.5) {
      pointer = arr[index - 1];
      break;
    }
  }

  return pointer;
};
