const data = [{
    nama: 'Indomie',
    harga: '3000',
    rating: 5,
    likes: 150
},{
    nama: 'Laptop',
    harga: '4000000',
    rating: 4.5,
    likes: 123
},{
    nama: 'Aqua',
    harga: '3000',
    rating: 4,
    likes: 250
},{
    nama: 'Smart TV',
    harga: '4000000',
    rating: 4.5,
    likes: 42
},{
    nama: 'Headphone',
    harga: '4000000',
    rating: 3.5,
    likes: 90
},{
    nama: 'Very Smart TV',
    harga: '4000000',
    rating: 3.5,
    likes: 87
},];

console.log('data : ', multiSort(data, {
    harga: 'asc',
    rating: 'desc',
    likes: 'desc'
}));

function multiSort(array, sortObject = {}) {
    const sortKeys = Object.keys(sortObject);

    if (!sortKeys.length) {
        return array;
    }

    for (let key in sortObject) {
        sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1 : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
    }

    const keySort = (a, b, direction) => {
        direction = direction !== null ? direction : 1;

        if (a === b) { 
            return 0;
        }

        return a > b ? direction : -1 * direction;
    };

    return array.sort((a, b) => {
        let sorted = 0;
        let index = 0;

        while (sorted === 0 && index < sortKeys.length) {
            const key = sortKeys[index];

            if (key) {
                const direction = sortObject[key];

                sorted = keySort(a[key], b[key], direction);
                index++;
            }
        }

        return sorted;
    });
}