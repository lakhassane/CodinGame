/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 for (let i = 0; i < n; i++) {
     const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
 }
 
 let closest = 0;
 
 if (n > 0) {
     closest = inputs[0];
     inputs.slice(1).forEach(inp => {
         if (Math.abs(inp) < Math.abs(closest)) {
             closest = inp;
         } else if(inp === closest) {
             closest = inp;
         } else if (Math.abs(inp) === Math.abs(closest)) {
              closest = Math.abs(closest)
         }
     })
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(closest);
 