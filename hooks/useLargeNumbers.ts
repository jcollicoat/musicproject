export const useLargeNumber = (number: number) => {
    let string = number.toString();
    if (number > 1000000) {
        string = `${Math.round(number / 1000000)}m`;
    } else if (number > 1000) {
        string = `${Math.round(number / 1000)}k`;
    }

    return string;
};
