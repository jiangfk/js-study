
// demo 1
/**
 * 1. You can see the condition in if is '=='
 * 2. You already know when judge if equal different datatype, the 'toString' function will be called
 * 3. Rewrite toString()
 */

var a = {
    default: 0,
    toString: function() {
        return  ++ this.default;
    }
}
if (a == 1 && a == 2 && a == 3) {
    console.log('demo1想想都知道在考什么')
}

// demo 2
/**
 * 1. Appearantly here we need to call get, and we need to rewirte get here
 * 2. Normal demo the first param can be window, don't need to define a null object
 */
var _default = 0;
Object.defineProperty(this, 'a', {
    get() {
        return ++ _default;
    }
});

if (this.a === 1 && this.a === 2 && this.a === 3) {
    console.log('demo2想想都知道在考什么吗')
}

// demo 3

/**
 * 1. For test you the understanding of the obj and arr and function's length
 */

 var len1 = ({} + {}).length //类型转换 30
 var len2 = ([] + []).length //类型转换 0
 var len3 = (function(){}).length //形参个数 0
 function test(a,b,c) {
    console.log(arguments.length) //实参
 }
test(1,2,3,4)
 var len4 = test.length
 console.log('demo 3', len1, len2, len3, len4)