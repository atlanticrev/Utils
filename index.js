Utils = {
    max: (array) => {
        return Math.max(...array);
    },

    randomInt: (start, stop) => {
        return Math.floor(Math.random() * ((stop + 1) - start) + start);
    },

    randomIntArray: (quantity, start, stop) => {
        let result = [];

        for (let i = 0; i < quantity; i++) {
            result.push(Utils.randomInt(start, stop));
        }

        return result;
    },

    sortAsc: (array) => {
        array.sort((a, b) => {return a < b ? -1 : 1});
        return array;
    },

    sortDesc: (array) => {
        array.sort((a, b) => {return a < b ? 1 : -1});
        return array;
    },
};