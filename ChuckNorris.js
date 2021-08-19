
 const MESSAGE = readline();

 const encode = {
    "0" : "00",
    "1" : "0"
}
 
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
         word.push(`${encode[bin.bin]} ${bin.count.join('')}`)
     }
     return word.join(' ');
 }
 
 let bin = "";
 for (char of MESSAGE) {
    let binTemp = char[0].charCodeAt(0).toString(2);
    while (binTemp.length < 7) binTemp = '0' + binTemp;
    
    bin += binTemp;
 }
 
 
 // This additional step is not necessary.
 // can be removed to pass "bin" to generateOutpu directly.
 // But then some "adjustements" (:D) need to be done in generateOutput.
 const output = countBinaries(bin)
 //console.log('out', output)
 console.log(generateOutput(output));
 
 //console.log('answer');
 