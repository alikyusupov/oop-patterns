const brackets = ['()', '()()', '(())', '((()))', '()(())'];
const OPENER = "(";
const CLOSER = ")" ;
const isMatch = arr => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === CLOSER || arr[arr.length - 1] === OPENER || (arr.length % 2 !== 0)) {
            return false
        }
    arr[i] === OPENER ? counter++ : counter--;
    }
    return (counter == 0)
}
const finalCheck = () => brackets.every(b => isMatch(b))
console.log(finalCheck())//true