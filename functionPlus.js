function wordPlus (str) {
    const helloArray = str.split('');
    const helloPlusArray = helloArray.map(i => {return i + '+'});

    return helloPlusArray.join('');
}

console.log(wordPlus('привет'));
