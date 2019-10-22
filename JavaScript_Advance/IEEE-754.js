console.log(0.1 + 0.2); // 0.3000000000000004
console.log(0.3 + 0.6); // 0.8999999999999999

/*
Why does this happen?
It's actually pretty simple. When you have a base 10 system (like ours), 
it can only express fractions that use a prime factor of the base. 
The prime factors of 10 are 2 and 5. So 1/2, 1/4, 1/5, 1/8, and 1/10 can all 
be expressed cleanly because the denominators all use prime factors of 10. 
In contrast, 1/3, 1/6, and 1/7 are all repeating decimals because their denominators 
use a prime factor of 3 or 7. In binary (or base 2), the only prime factor is 2. 
So you can only express fractions cleanly which only contain 2 as a prime factor. 
In binary, 1/2, 1/4, 1/8 would all be expressed cleanly as decimals. 
While, 1/5 or 1/10 would be repeating decimals. So 0.1 and 0.2 (1/10 and 1/5) while clean
 decimals in a base 10 system, are repeating decimals in the base 2 system 
 the computer is operating in. When you do math on these repeating decimals, 
 you end up with leftovers which carry over when you convert the computer's 
 base 2 (binary) number into a more human readable base 10 number.
*/
