var data = [
    { nama: 'indomie', harga: 3000, rating: 5, likes: 150},
    { nama: 'leptop', harga: 4000000, rating: 4.5, likes: 123},
    { nama: 'aqua', harga: 3000, rating: 4, likes: 250},
    { nama: 'smart tv', harga: 4000000, rating: 4.5, likes: 42},
    { nama: 'headphone', harga: 4000000, rating: 3.5, likes: 90},
    { nama: 'very smart tv', harga: 4000000, rating: 3.5, likes: 87},
];

function sortir(a,b){
    if(a.harga < b.harga){
        return -1;
    }else if(a.harga > b.harga){
        return 1;
    }

    if(a.rating > b.rating){
        return -1;
    }else if(a.rating < b.rating){
        return 1;
    }

    if(a.likes > b.likes){
        return -1;
    }else if(a.likes < b.likes){
        return 1;
    }
    return 0;
}

let hasil = data.sort(sortir);
console.log(hasil)