/*********************************
 * Coding Challenge 1
 */

/*
Mark & John are trying to compare their BMI whih is caculated
using the formula: BMI = mass / height^2 = mass / (height * height).
where Mass is in KG & Height in meters.

1. Store both Mark and Johns mass & height in vars.
2. Calculate their BMI's.
3. Create a boolean var containing information about whether
   Mark has a higher BMI than John. 
4. Print a string to the console containing the var
   from step 3. (Something like is Marks BMI higher than Johns...true or false?)
*/
//Answer:

let kateWeight, jamesWeight, kateHeight, jamesHeight, kateBmi, jamesBmi;

kateHeight = 1.3;
jamesHeight = 1.7;
kateWeight = 45;
jamesWeight = 40;

//Feet to Meters:  ft / 0.348
//Stone to kg: st /0.15747


kateBmi = kateWeight/(kateHeight*kateHeight);

console.log('Kates height is:' + ' ' + kateHeight  + 
 ' Kates weight is:' + ' ' + kateWeight + ' Kates BMI is: ' + ' ' +
kateBmi);


jamesBmi = jamesWeight/(jamesHeight*jamesHeight);

console.log('James\'s height is:' + ' ' + jamesHeight  + 
 ' James weight is:' + ' ' + jamesWeight + ' James BMI is: ' + ' ' +
jamesBmi);

if( jamesBmi > kateBmi )
{
console.log("James has larger BMI!")
} else console.log("Kate has greater BMI!");


//__________________________________________________________________