module.exports = function reverse(n) {
    const string = n + "";
    const arr = string.split("");

    if (n < 0) {
        arr.splice(0, 1);
    }

    return +arr.reverse().join("");
};
