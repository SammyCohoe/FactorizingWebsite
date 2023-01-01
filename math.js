// functions for the definition of a prime and composite number 
function defPrime(){
	document.getElementById('P').innerHTML = 'A prime number is a whole number only divisble by itself and one.';
}

function defComposite(){
	document.getElementById('C').innerHTML = 'A composite number is a whole number divisble by more than two numbers.';
}


// function for determing if the number is prime 
function isPrime(){


    var num = document.getElementById('num').value;
    num = Math.abs(parseInt(num));
    prime = 0;
    var i;
    var x;
    var d;
    var x = num / 2;
    divisors = [];

    // determine if the user input is valid 
    if (!(isNaN(num))){
	// special cases for 0 and 1 
        if (num == 0 || num == 1){
                document.getElementById('answer').innerHTML = num + ' is not a prime number.';
        }

        else{
        // loop through the first half of the numbers of num to determine if it is prime
                for(i = 2; i < x; i++){
                if (num % i == 0){
                    document.getElementById('answer').innerHTML = num + ' is not a prime number.';
                    // set prime equal to 1 so that the program knows it is not a prime number
                    prime = 1;

                    // determine the numbers that divide into the non prime number
                    for (d = 1; d < num + 1; d++){
                        if (num % d == 0){
                            divisors.push(d);
                        }
                    }
            break;
                }
            }
        }

        // display that the number is prime
        if (prime == 0){
        document.getElementById('answer').innerHTML = num + ' is a prime number.';
        }
    }
    // display if the user input is not valid 
    else{
        document.getElementById('answer').innerHTML = "Please enter a valid number."
    }
}


// function for printing off the divisors 
function divisorsAre(){
    var num = document.getElementById('num').value;
    num = Math.abs(parseInt(num));

    // determine if the user input is valid 
    if (!(isNaN(num))){
        // if the number is prime display the number and one for the divisors  
        if (prime == 0){
            var x = document.getElementById('num').value;
            var primeDivisors = x + " and " + 1;
            document.getElementById('divisors').innerHTML = primeDivisors;
        }
	// display the number of divisors if the number is not prime 
        else{
    
            document.getElementById('divisors').innerHTML = divisors.join();
        }
    }
    // display this if the user input is not valid 
    else{
        document.getElementById('divisors').innerHTML = 'Please enter a valid number.';
    }
}










