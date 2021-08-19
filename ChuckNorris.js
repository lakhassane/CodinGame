/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const MESSAGE = readline();

 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 const countBinaries = binary => {
     const len = binary.length;
     let output = [];
     let i = 0;
     while (i < len) {
         const count = [];
         j = i;
         while (j < len && binary[i] === binary[j]) {
             count.push('0')
             j++
         }
        // console.log(`count of ${binary[i]} = ${count}`)
         output.push({count: count, bin: binary[i]})
         i = j;
     }
 
     return output;
 }
 
 const generateOutput = array => {
     let word = [];
     for (bin of array) {
         word.push(`${bin.bin === "1" ? "0" : "00"} ${bin.count.join('')}`)
     }
     return word.join(' ');
     //console.log('word', word)
 }
 
 let bin = "";
 for (char of MESSAGE) {
     let binTemp = char[0].charCodeAt(0).toString(2);
     bin += binTemp;
 }
 
 while (bin.length < 7) bin = '0' + bin;
 
 
 const output = countBinaries(bin)
 //console.log('out', output)
 console.log(generateOutput(output));
 
 //console.log('answer');
 