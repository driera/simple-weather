export const getWindDirection = (dir: number): string => {
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

export const formatUnixToTime = (unix: number): string => {
  return new Date(unix * 1000).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  });
};
