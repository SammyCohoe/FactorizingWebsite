// functions for defining factoring and prime factorization
function defFactoring(){
    document.getElementById('F').innerHTML = 'Factoring is finding what numbers will multiply together to get a number or expression. For example 10 and 2 are factors of 20 because 10 x 2 = 20. An example of an expression would be X + 3 and X + 1 being factors of X^2 + 4X + 3 because (X + 3)(X + 1) = X^2 + 4X + 3.';
}
function defFactorization(){
    document.getElementById('PF').innerHTML = 'Prime factorization is very similar to regular factoring except you are only finding the prime numbers (see the "Prime Number Calculator" for a definition of prime numbers) that multiply to make a number. For example 2, 2, and 5 are prime factors of 20 because 2 x 2 x 5 = 20.';
}

// function for determining the prime factors
function primeFactorization(){
    //defining various variables and a list
    var num = document.getElementById('num').value;
    num = Math.abs(parseInt(num));
    var ans = num;
    var d = 2;
    primes = [];

    // determine if the input is valid
    if (!(isNaN(num))){
        while (num >= 2){
            // determine if the divisor goes into the number evenly
            if (num % d == 0){
            // add the divisor to the list if so and adjust the value of the num
                primes.push(d);
                num = num/d;
            }
            else{
                // increase the divisor if it does not divide evenly into the number
                d++;
            }
        }
        // display the divisors
        document.getElementById('answer').innerHTML = "The prime factors of " + ans + " are " + primes.join() + ".";
    }
    // display if the input is not valid
    else{
        document.getElementById('answer').innerHTML = "Please enter a valid number.";
    }

}




