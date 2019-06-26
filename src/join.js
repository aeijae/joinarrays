'use strict';

// Join arrays into single array, removing duplicates and sorting by 'lastModified' property (Date)
const joinArrays = (...arrays) => {
    const allItemsArray = arrays.reduce((allEntries, arr) => [...allEntries, ...arr], []);

    const uniqueItemsArray = Array.from(new Set(allItemsArray));

    const sortedItems = uniqueItemsArray.sort((a, b) => a.lastModified - b.lastModified);

    return sortedItems;
};

module.exports = joinArrays;