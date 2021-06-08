function isPrimeNumber(number) {
    if (typeof number === 'number') {
        let belongingToNumbers;
        if (number < 2) {
            belongingToNumbers = 1;
        }
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                belongingToNumbers = 1;
            }
        }
        if (belongingToNumbers == 1) {
            console.log(`${number} is not prime number`);
        } else {
            console.log(`${number} is prime number`);
        }
    } else if (typeof number === 'object') {
        const longArrays = number.length;
        if (longArrays > 0) {
            for (var n = 0; n < longArrays; n++) {
                let num = number[n];
                isPrimeNumber(num);
            }
        } else {
            console.log('empty line');
        }
    } else {
        console.log('This type is not supported.');
    }
}