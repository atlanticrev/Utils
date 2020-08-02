const Utils = {
    classOf: function (object) {
        if (object !== object) {
            return 'NaN';
        }
        return Object.prototype.toString.call(object).slice(8, -1);
    },

    isPrimitive: function (value) {
        return ['Number', 
            'String', 
            'Boolean', 
            'Symbol', 
            'Undefined', 
            'Null', 
            'NaN', 
            'BigInt'].indexOf(this.classOf(value)) !== -1;
    },

    equals: function (one, another) {
        if (arguments.length < 2) {
            throw new Error('Too few arguments');
        }
        const oneType = Utils.classOf(one);
        const anotherType = Utils.classOf(another);
        if (oneType !== anotherType) {
            return false;
        }
        if (Utils.isPrimitive(one)) {
            return one === another;
        }
        if (oneType === 'Object') {
            if (!Object.keys(one).length || !Object.keys(another).length) {
                return false;
            }
            if (Object.keys(one).length !== Object.keys(another).length) {
                return false;
            }
            let keys = Object.keys(one);
            for (let i = 0; i < keys.length; i++) {
                if (!another[keys[i]] || one[keys[i]] !== another[keys[i]]) {
                    return false;
                }
            }            
        }
        if (oneType === 'Array') {
            if (!one.length || !another.length) {
                return false;
            }
            if (one.length !== another.length) {
                return false;
            }
            for (let i = 0; i < one.length; i++) {
                if (!another[i] || one[i] !== another[i]) {
                    return false;
                }
            }
        }
        return true;
    },

    deepEquals: function () {},

    getDiffs: function () {
        let diffs = [];
        const aType = Utils.classOf(one);
        const bType = Utils.classOf(another);
        if (aType !== bType) {
            console.log('Types of structures is different');
            return diffs;
        }
        if (aType === 'Object') {
            if (!Object.keys(one).length || !Object.keys(another).length) {
                return diffs;
            }
            const biggerObj = (Object.keys(one).length - Object.keys(another).length) >= 0 ? one : another;
            for (let prop of biggerObj) {
                if (Utils.isPrimitive(biggerObj[prop])) {
    
                }
            }
        } else if (aType === 'Array') {
    
        }
        return diffs;
    },

    strReverse: function (string) {
        if (this.classOf(string) !== 'String') {
            throw new TypeError('Argument is not a string');
        }
        if (!string.length) {
            throw new Error('String is empty');
        }
        let result = [];
        let i;
        let tmp;
        for (i = 0; i < Math.floor(string.length / 2); i++) {   
          tmp = string[i];
          result[i] = string[string.length - 1 - i];
          result[string.length - 1 - i] = tmp;
        }
        if (string.length % 2 !== 0) {
            result[i] = string[i];
        }
        return result.join('');
    },

    arrReverse: function (array) {
        if (this.classOf(array) !== 'Array') {
            throw new TypeError('Argument is not an array');
        }
        if (!array.length) {
            throw new Error('Array is empty');
        }
        let result = [];
        let i;
        let tmp;
        for (i = 0; i < Math.floor(array.length / 2); i++) {   
          tmp = array[i];
          result[i] = array[array.length - 1 - i];
          result[array.length - 1 - i] = tmp;
        }
        if (array.length % 2 !== 0) {
            result[i] = array[i];
        }
        return result;
    },

    resolvePath: function (object, path) {
        let result = object;
        for (let i = 0; i < path.length; i++) {
            result = result[path[i]];
        }
        return result;
    },

    qsort: function (array) {
        if (!array.length) {
            return [];
        }
        let pivot = array.pop();
        let lesserEls = array.filter(el => el <= pivot);
        let greaterEls = array.filter(el => el > pivot);
        return this.qsort(lesserEls).concat([pivot]).concat(this.qsort(greaterEls));
    },

    max: function (array) {
        return Math.max(...array);
    },

    min: function (array) {
        return Math.min(...array);
    },

    rand: function (start, stop) {
        return Math.random() * (stop - start) + start;
    },

    randInt: function (start, stop) {
        return Math.floor(Math.random() * ((stop + 1) - start) + start);
    },

    intArr: function (count, start, stop) {
        let result = [];
        for (let i = 0; i < count; i++) {
            result.push(this.randInt(start, stop));
        }
        return result;
    },

    sortAsc: function (array) {
        return array.sort((a, b) => {return a < b ? -1 : 1});
    },

    sortDesc: function (array) {
        return array.sort((a, b) => {return a < b ? 1 : -1});
    },

    factorial: function (n) {
        let result = n;
        while (n !== 1) {
            result *= n--;
        }
        return result;
    }
};

// // Tests:
// const listOne = [123, 'asda', true, [1, 2, 3], ['a', 'c', [5, 2, 3]]];
// const listTwo = [123, 'asd', false, [1, 2, 4], ['a', 'b', [5, 4, 3]]];

// const diffs = Utils.getDiffs(listOne, listTwo);
// console.log(diffs);

