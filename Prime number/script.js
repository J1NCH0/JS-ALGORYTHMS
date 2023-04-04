let x = 100

for (let i = 2; i <= x; i++) {
    let isPrime = true;
    for (let y = 2; y < i; y++) {
        if (i % y === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i)
    }
}