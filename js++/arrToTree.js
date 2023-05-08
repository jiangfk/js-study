/**
 * Two ways to change one-dimensional arr to tree：
 * 1.recursion
 * 2.flatten (recommend)
 * 3. time compare can see time save a lot by method 2
 */

 // get one-dimensional test data first

 const treeData = require('../data/js++/treeData.json').data

//  这边的顺序同时影响着把其还原成树时的顺序
 function flatten(acc, item) {
    if (item.childData.length) {
        const t = item.childData.reduce(flatten, acc)
        item.childData =  []
        return [...t, item]
    } 
    return [...acc, item]
 }

 function countNum(data) {
    let len = data.length
    data.map(item => {
        len = item.childData.length ? len + countNum(item.childData) : len
    })
    return len
 }
 console.log('num =', countNum(treeData))
 
 const flatArr = treeData.reduce(flatten, []);
//  console.log('+++==================', flatArr, flatArr.length)


// method 1 recursion
let parentsData = []
let childrenData = []
function formatData(data) {
    // split the first layer
    parentsData = data.filter(item => item.fid == 0);
    childrenData = data.filter(item => item.fid != 0);
    childAppendParent(parentsData, childrenData)
    return parentsData;
    // deal with layers
    function childAppendParent(fdata, cdata) {
        fdata.forEach((fitem) => {
            cdata.forEach((citem, index) => {
                if (fitem.id == citem.fid) {
                    const backData = JSON.parse(JSON.stringify(cdata));
                    fitem.childData.push(citem)
                    backData.splice(index, 1)
                    childAppendParent([citem], backData)
                }
            })
        })

    }
}

// method 2 normal double iteration(******************)

function formatData1(data) {
    return data.filter(fitem => {
        const childData = data.filter(citem => {
            return citem.fid == fitem.id
        })
        fitem.childData = childData
        return fitem.fid == 0
    })
}

// console compare the time 

// console.time()
// const finalTree = formatData(flatArr)
// console.timeEnd()


console.time()
const finalTree1 = formatData1(flatArr)
console.timeEnd()

// console.log('转化后树1为===========', finalTree);
console.log('转化后树2为===========', finalTree1);
// const testArr = finalTree.reduce(flatten, []);
const testArr1 = finalTree1.reduce(flatten, []);
// console.log('转化后的树测试长度+++==================', testArr.length)
console.log('转化后的树测试长度+++==================', testArr1.length)