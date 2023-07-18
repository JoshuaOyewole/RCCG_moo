export const removeZero = (number: string) => {
    if (number.charAt(0) === "0") {
        return number.slice(1)
    }
    else return number;
}