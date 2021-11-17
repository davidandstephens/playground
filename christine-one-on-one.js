var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.push(6);

console.log(arr);

//----

var el1 = arr[0];
var el2 = arr[1];
// etc...

// For loop - can be or each, but we can also stop after a specific number of elements.
for (var i = 0; i < 3; i++) { // arr.length is chosen because I want to interact with every element of the array
    console.log(arr[i]);
}

// forEach - literally for each element of the array

arr.forEach(function (el) {
    console.log(el);
});

// Now with objects

arr = [{
        key: "value",
        id: 1
    }, {
        key: "value",
        id: 2
    }, {
        key: "value",
        id: 3
    }];

arr.forEach(function(obj) {
    console.log(obj.key);
});

// hypothetical

weather.forEach(function (dayOfWeather) {

});