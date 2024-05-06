const isArmStrong = (n) => {
    let sum = 0;
    const originalNum = n;
    
    while(n){
        let ld = n%10;
        sum = sum + Math.pow(ld,3);
        n = n/10;
    }

    return originalNum === sum;
}

console("No is Armstrong:",isArmStrong(1634));
