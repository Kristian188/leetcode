const num = "-121"

function check(num) {
    let str = num.toString();

    if (num < 0) {
        return false;
    }

    return str === str.split('').reverse().join('');

}
console.log(check(num))