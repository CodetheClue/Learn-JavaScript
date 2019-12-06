1. Write an function `square` which takes an array as input and return a new array use [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method. 
For example, `square([1,2,3,4])` should return `[1,4,9,16]`.
 
2. Write an function `getOdd` which takes an array of number as input and return a new array contains only odd number use [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. 
For example, `getOdd([1,2,3,4,5])` should return `[1,3,5]`.

<details>
<summary>Solution</summary>
<p>

1. Use `Array.prototype.map` method.
```js
function square(arr) {
    return arr.map(number => number * number);
}
```

2. Use `Array.prototype.filter` method.
```js
function getOdd(arr){
    return arr.filter(num => num % 2 === 1);
}
```

</p>
</details>
