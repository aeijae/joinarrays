const joinArrays = require('../src/join');

test('returns empty arrays for no input', () => {
    expect(joinArrays()).toEqual([]);
});

test('returns empty array for empty array argument', () => {
    expect(joinArrays([])).toEqual([]);
});

test('returns empty array for several empty arrays', () => {
    expect(joinArrays([], [])).toEqual([]);
});

test('returns single array ascendingly sorted by "lastModified" for single array', () => {
    const sourceArray = [
        { lastModified: new Date(2000, 4, 1) },
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(3000, 3, 1) },
    ];

    const expectedResultArray = [
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(2000, 4, 1) },
        { lastModified: new Date(3000, 3, 1) },
    ];

    expect(joinArrays(sourceArray)).toEqual(expectedResultArray);
});

test('returns array with duplicates removed', () => {
    const duplicateObject = { lastModified: new Date(2000, 4, 1) };

    const sourceArray = [
        duplicateObject,
        duplicateObject
    ];

    const expectedResultArray = [
        { lastModified: new Date(2000, 4, 1) }
    ];

    expect(joinArrays(sourceArray)).toEqual(expectedResultArray);
});

test('returns single array ascendingly sorted by "lastModified" for multiple arrays', () => {
    const sourceArray1 = [
        { lastModified: new Date(2000, 4, 1) },
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(3000, 3, 1) },
    ];

    const sourceArray2 = [
        { lastModified: new Date(2000, 5, 1) },
        { lastModified: new Date(3000, 4, 1) },
    ];

    const sourceArray3 = [
        { lastModified: new Date(1000, 6, 1) },
    ];

    const expectedResultArray = [
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(1000, 6, 1) },
        { lastModified: new Date(2000, 4, 1) },
        { lastModified: new Date(2000, 5, 1) },
        { lastModified: new Date(3000, 3, 1) },
        { lastModified: new Date(3000, 4, 1) }
    ];

    expect(joinArrays(sourceArray1, sourceArray2, sourceArray3)).toEqual(expectedResultArray);
});

test('returns single array ascendingly sorted by "lastModified" for multiple arrays, removing duplicates', () => {
    const duplicateObject = { lastModified: new Date(2000, 4, 1) };

    const sourceArray1 = [
        duplicateObject,
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(3000, 3, 1) },
    ];

    const sourceArray2 = [
        { lastModified: new Date(2000, 5, 1) },
        duplicateObject,
        { lastModified: new Date(3000, 4, 1) },
    ];

    const sourceArray3 = [
        duplicateObject,
        { lastModified: new Date(1000, 6, 1) },
    ];

    const expectedResultArray = [
        { lastModified: new Date(1000, 5, 1) },
        { lastModified: new Date(1000, 6, 1) },
        { lastModified: new Date(2000, 4, 1) },
        { lastModified: new Date(2000, 5, 1) },
        { lastModified: new Date(3000, 3, 1) },
        { lastModified: new Date(3000, 4, 1) }
    ];

    expect(joinArrays(sourceArray1, sourceArray2, sourceArray3)).toEqual(expectedResultArray);
});