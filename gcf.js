
// functions for the gcd and lcm definitions
function defGCD(){
    document.getElementById('G').innerHTML = "The Greatest Common Divisor of X amount of numbers is the greatest positive divisor of each number. One way the GCD can be found is by multiplying the common prime factors of both numbers (see the Prime Factorization Calculator for definition of a factor and prime factor). For example the prime factors of 12 are 2, 2, and 3 and the prime factors of 16 are 2, 2, 2, and 2. The common prime factors are 2 and 2 therefore since 2 x 2 = 4 the GCD of 12 and 16 is 4.";
}

function defLCM(){
    document.getElementById('L').innerHTML = "The Lowest Common Multiple of X amount of numbers is the smallest positive integer that all numbers can divide into evenly. A way to find the LCF is to write out and multiply all common prime factors of both numbers (see the Prime Factorization Calculator for definition of a factor and prime factor). For example the prime factors of 12 and 16 are 2, 2, and 3 and 2, 2, 2, and 2 respectively therefore since 2 x 2 x 2 x 2 x 3 = 48 the LCM is 48.";
}




function GCD(){
    // define both of the user inputs
    var x = document.getElementById('num').value;
    x = Math.abs(parseInt(x));
    var y = document.getElementById('num1').value;
    y = Math.abs(parseInt(y));
    var loop = true;

    // check to make sure both inputs are valid
    if ( !(isNaN(x)) && !(isNaN(y)) ){

        // determine the smallest number
        if (x > y){
            var min = x;
        }

        // if the same number is given twice then the gcd is said number
        else if (x == y){
            document.getElementById('answer').innerHTML = 'The GCD of ' + x + ' is ' + x;
            loop = false;
        }

        // determine the smallest number
        else{
            var min = y;
        }

        // while statement is how we find the gcd, we do this by attempting to divide the smallest number into both numbers
        // if it doesnt fit evenly then we decrease the value of said number by one until it does
        while (loop == true){
            if (x % min == 0 && y % min == 0){
                document.getElementById('answer').innerHTML = 'The GCD of ' + x + ' and ' + y + ' is ' + min;
                break;
                loop = false;
            }
            min--;
        }
    }
    else{
        document.getElementById('answer').innerHTML = "Please enter a valid number.";
    }
}

// function to determine the lowest common multiple
function LCM(){

    // define both user inputs
    var x = document.getElementById('num').value;
    x = Math.abs(parseInt(x));
    var y = document.getElementById('num1').value;
    y = Math.abs(parseInt(y));
    var loop = true;

    // check to make sure both inputs are valid responses
    if ( !(isNaN(x)) && !(isNaN(y)) ){

        // determine which is the largest number
        if (x > y){
            var min = x;
        }

        // if the numbers are the same then the lcm is that number
        else if (x == y){
            document.getElementById('answer1').innerHTML = 'The LCM of ' + x + ' is ' + x;
            loop = false;
        }

        // determine the largest number
        else{
            var min = y;
        }

        // while statement is how we find the lcm, we do this by trying to divide each number into the largest number
        // if both numbers dont fit easily then the value is increased by one until both numbers divide evenly
        while (loop == true){
            if (min % x == 0 && min % y == 0){
                document.getElementById('answer1').innerHTML = 'The LCM of ' + x + ' and ' + y + ' is ' + min;
                break;
                loop = false;
            }
            min++;
        }
    }
    // display this if the input is invalid
    else{
        document.getElementById('answer1').innerHTML = "Please enter a valid number.";
    }
}



