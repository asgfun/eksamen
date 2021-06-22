const letters = ['aaa', 'aab', 'abc'];
const result = letters.map(e=>e.toLocaleLowerCase()).includes('d');
console.log(result + letters);

const array1 = ['aaa', 'aab', 'abc'];

const found = array1.find(letter => letter > aab);

console.log(found);

let arr = ['bug', 'cat', 'dog', 'flea', 'bat', 'hat', 'rat'];

let newArr = arr.filter(element => element >= element.indexOf(3));
    
console.log(newArr);