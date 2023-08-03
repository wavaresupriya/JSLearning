let array =[4,5,4,5,8,5,7,8,9,7,8];
 
function removeDublicates(arr)
{
    const result=[];
    const temp={};
    let index =0;

    for(let i=0;i<arr.length;i++) {
        if(!temp[arr[i]])
        {
            temp[arr[i]] = 1;
            result[index] = arr[i];
            index++;
        }
    }
return result;
}
console.log(removeDublicates(array));