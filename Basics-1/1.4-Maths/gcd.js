// === Method 1 ====

const gcd = (n1,n2) => {
    let gcd = 1;

    // min(n1,n2) => As the highest factor can be the min of n1,n2;
    for(let index = min(n1,n2); index >=1 ;index --){
        if(n1 % index == 0 && n2 % index == 0){
            gcd = index;
        }
    }

    return gcd;
}

console.log("GCD:",gcd(20,15));


// === Method 2 ===

const gcdEucledian = (n1,n2) => {

    let gcd = 1;

    while(n1>0 && n2>0){
        if(n1>n2){
            n1 = n1%n2;
        }else {
            n2 = n2%n1;
        }
    }

    gcd = (n1 > 0) ? n1 : n2;

    return gcd;
}

console.log("GCD:",gcdEucledian(11,13));