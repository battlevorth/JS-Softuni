function phoneNumber(numbers) {
    let pattern = /\B\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let allNumbers = numbers.shift();

    let validNumber = allNumbers.match(pattern);

    console.log(validNumber.join(', '));
}
phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']
)