// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let btn = document.getElementById('btn');
let inputstr = document.getElementById('inputstr');
let result = document.getElementById('result');

const mainobj = () => {
    let upstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    let lowstr = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz ";

    let obj = {};

    for(let i = 0; i<upstr.length; i++) {
        obj[upstr[i]] = lowstr[i];
    }
    return obj;
} 

const toLowerStr = (str) => {
    let bag = '';
    for(let i = 0; i<str.length; i++) {
        bag += mainobj()[str[i]];
    }

    return bag; 
}

btn.addEventListener('click', () => {
    result.textContent = toLowerStr(inputstr.value);
})


