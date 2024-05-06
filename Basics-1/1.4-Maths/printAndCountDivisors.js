const printAndCountAllDivisors = (n) => {
    let ct = 0;

    for (let index = 0; index <= Math.sqrt(n); index++) {
        
        if( n % index === 0){
            console.log(index+" ");
            ct++;
            if(Math.floor(n/index)!=index){
                console.log(Math.floor(n/index+" "));
                ct++;
            }
        }
    }
    return ct;

}

console.log("\nTotal Divisors:",printAndCountAllDivisors(36));
