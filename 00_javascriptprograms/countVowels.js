// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     console.log("Number of vowels: " + count);
// }
// countVowels("Hello World"); // 3

function countVowels(str)
{
let vowels = "aeiouAEIOU";

for(let char of str)
{
	if(vowels.includes(char))
	{
	console.log(char);
	}
}


}


countVowels("java and javascript are nice programming language");









function countVowels(str)
{

let vowels = "aeiouAEIOU";
let count = 0;

for(let char of str)
{

if(vowels.includes(char))
{
	//count++;
    console.log(char);
}
//console.log(count);


}
}

countVowels("Pankaj love javascript"); // 7


