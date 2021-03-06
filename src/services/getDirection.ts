const getDirection = (dir: number) => {
    const arr = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
    let pointer = arr[0];

    for (let index = 1; index <= arr.length; index += 1) {
        if (dir < (index * 45) - 22.5) {
            pointer = arr[index - 1];
            break;
        }
    }

    return pointer;
};

export default getDirection;
