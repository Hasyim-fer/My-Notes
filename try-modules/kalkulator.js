class Kalkulator {
    tambah = (x, y) => {
        return x + y;
    };

    kurang = (x, y) => {
        return x - y;
    };

    kali = (x, y) => {
        return x * y;
    };

    bagi = (x, y) => {
        return x / y;
    };

    sisaBagi = (x, y) => {
        return x % y;
    };
};
module.exports = new Kalkulator();

//atau bisa menggunakan cara dibawah tanpa dimasukan kedalam class

// const tambah = (x, y) => {
//     return x + y;
// };

// const kurang = (x, y) => {
//     return x - y;
// };

// module.exports = {
//     tambah,
//     kurang,
// };
// module.exports = { tambah, kurang};