let c = () => {
    console.log(this);  
}
c()

let obj = {
    a:1,
    b:2,
   k: function d() {
        console.log(this);
    }
}

obj.k()

let arr = [1,2,3,4,5,6]

console.log(arr.splice(0,2));
console.log(arr);
console.log('2' === 2);
