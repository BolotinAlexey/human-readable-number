const first = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const second = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const third = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const fourth = ["hundred", "thousand", "million", "billion"];

// const trimZero = (n) => {

// }
const one = (n) => first[n - 1];
const two = (n) => {
    return n - (n % 10) === 10
        ? second[Math.floor(n % 10)]
        : third[Math.floor(n / 10 - 2)] +
              (n % 10 !== 0 ? " " + first[(n % 10) - 1] : "");
};

const three = (n) => {
    return (
        one(Math.floor(n / 100)) +
        " " +
        fourth[0] +
        (n % 100 ? " " + toReadable(n % 100) : "")
    );
};

const four = (n) => {
    return (
        one(Math.floor(n / 1000)) +
        " " +
        fourth[1] +
        (n % 1e3 ? " " + toReadable(n % 1e3) : "")
    );
};

function toReadable(n) {
    if (!n) return "zero";
    switch (n.toString().length) {
        case 1:
            return one(n);
        case 2:
            return two(n);

        case 3:
            return three(n);

        case 4:
            return four(n);

        default:
            break;
    }
}

module.exports = toReadable;
