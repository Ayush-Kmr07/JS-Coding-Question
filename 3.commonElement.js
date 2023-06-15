let arr1 = [7,4,5,8,9];
let arr2 = [2,3,7,9,0];
let arr3 = [];
var k = 0;

for(var i=0;i<arr1.length; i++)
{
    for(var j=0;j<arr2.length;j++)
    {
        if(arr1[i]===arr2[j])
        {

            arr3[k]=arr1[i]
            k++
        }
    }
}

console.log[arr3];