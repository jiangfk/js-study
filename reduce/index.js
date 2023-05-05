const people = [
    {id: 1, name: 'nancy', age: 35},
    {id: 2, name: 'jemmt', age: 18},
    {id: 3, name: 'farade', age: 30},
]

let result;

// count
result = people.reduce((acc) => acc + 1, 0);

// sum ages
result = people.reduce((acc, people) => acc + people.age, 0)
// array of names(map)
result = people.reduce((acc, people) => [...acc, people.name], [])
// convert to id => person lookup dict
result = people.reduce((acc, people) => {
    return { ...acc, [people.id]: people }
}, {})
// max age
result = people.reduce((acc, people) => Math.max(acc, people.age), 0)
// find by name
function searchName(name) {
    return people.reduce((acc, people) => {
        if (acc != null) return acc;
        if (name === people.name) return people;
    }, null)
}
result = searchName('farade')
// all over 18
result = people.reduce((acc, people) => {
    if (!acc) return false;
    return people.age > 18;
}, true)
// any over 18
result = people.reduce((acc, people) => {
    if (acc) return true;
    return people.age > 18;
}, false)
// count occurrences
const count = [
    { id: 1, status: "pending" },
    { id: 2, status: "pending" },
    { id: 3, status: "cancelled" },
    { id: 4, status: "shipped" },
]
result = count.reduce((acc, count) => {
    // if (acc[count.status]) {
    //     acc[count.status] ++;
    // } else {
    //     acc[count.status] = 1;
    // }
    // return { ...acc }
    // 重复的属性会被后面的属性覆盖掉
    return { ...acc, [count.status]: (acc[count.status] || 0 ) + 1 }
}, {})
// flatten

const folders = [
    "index.js",
    ["flatten.js", "mpa.js"],
    ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
    console.log(acc, item)
    if (Array.isArray(item)) {
    //    return [...item.reduce(flatten, acc)];
       return [...acc, ...item.reduce(flatten, [])];
    }
    return [...acc, item];
}

result = folders.reduce(flatten, []);
// create reduce ourselves
function reduce(arr, callback, initail) {
    let middleResult = initail ?? arr[0];
    arr.forEach((item, index) => { 
        middleResult = callback(middleResult, item, index, arr);
    });
    return middleResult;
}
result = reduce([1, 2, 3], (acc, num) => acc + num, 0);
console.log(result);