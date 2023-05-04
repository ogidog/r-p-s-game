export const randomizeArrayItems = (initArray: any[]): any[] => {
    let randomArray: any[] = [];
    let copyInitArray = initArray.slice();

    for (let i = copyInitArray.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        randomArray.push(copyInitArray[randomIndex]);
        copyInitArray.splice(randomIndex, 1)
    }

    return randomArray;
}
