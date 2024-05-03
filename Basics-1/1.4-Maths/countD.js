// Function to Count Number of Digits

// Method-1 
const countDigits = (n) => {
    
    let lastdigit = null;
    let ct = 0;
    
    while(n > 0){
        lastdigit = n % 10;
        ct++;
        n =Math.floor(n/10)
    }
    return ct;
}

console.log("No of Digits:",countDigits(45));

// Method-2

const countDigits2 = (n) => {
    
   return Math.floor(Math.log10(n)+1);
}

console.log("No of Digits:",countDigits2(45));