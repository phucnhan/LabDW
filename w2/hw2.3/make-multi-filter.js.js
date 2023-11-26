function MakeMultiFilter(originalArray) {
    var currentArray = originalArray.slice(); // Create a copy of the originalArray

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            // Apply the filter
            currentArray = currentArray.filter(filterCriteria);

            // Call the callback function if provided
            if (typeof callback === 'function') {
                callback.call(originalArray, currentArray);
            }
        }

        // Return arrayFilterer for chaining or currentArray
        return filterCriteria ? arrayFilterer : currentArray;
    }

    // Return the arrayFilterer function
    return arrayFilterer;
}

// Example usage
var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);

arrayFilterer1(
    function (elem) {
        return elem !== 2;
    },
    function (currentArray) {
        console.log(this);
        console.log(currentArray);
    }
);

arrayFilterer1(function (elem) {
    return elem !== 3;
});

var currentArray = arrayFilterer1();
console.log('currentArray', currentArray);

function filterTwos(elem) {
    return elem !== 2;
}
function filterThrees(elem) {
    return elem !== 3;
}
var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);
var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
console.log('currentArray2', currentArray2);

var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)());
console.log(arrayFilterer4(filterThrees)());
