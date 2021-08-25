

function Hello () {
    console.log('this', this);
    if (this instanceof Hello) {
        return {value: 20}
    } else {
        return 10;
    }
}

console.log(new Hello())
console.log(Hello())