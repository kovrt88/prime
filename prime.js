var i = 2;
while(true) {
    var prime = true;
    for (let n = 1; n < i; n++) {
        if (i%n == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i + ", ");
    }
}