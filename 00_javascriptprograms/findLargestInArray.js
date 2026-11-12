// function largestInArray(arr) {
//     return Math.max(...arr);
// }
// console.log(largestInArray([10, 25, 3, 99, 56])); // 99





// function findLargestInArray(arr)
// {
// return Math.max(...arr);
// }


// console.log(findLargestInArray([12,34,56,65,43,32,11]));




//===========================


//findLargestInArray([23,45,32,12,12,23,12,45,67,89,99,100]);



function findLargestInArray(arr)
{
let largest = arr[0];

for( let i=1; i<arr.length; i++)
{
	if(arr[i] > largest)
		{
		largest = arr[i];
		}
		
		}
        return largest;
    }



console.log(findLargestInArray([12,34,56,65,43,32,11]));
