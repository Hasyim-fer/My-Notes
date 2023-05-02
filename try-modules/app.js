//CORE MODULE = module bawaan saat install nodejs
//https://nodejs.dev/en/learn/reading-files-with-nodejs/

const fs = require('fs');

try {
    const data = fs.readFileSync('./README.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
};

//==========================================================================================

//LOCAL MODULE = module yang dibuat sendiri dan digunakan sendiri/tidak dipublish

const kalkulator = require("./kalkulator");

const hasilTambah = kalkulator.tambah(10, 10);
console.log(hasilTambah);

const hasilKurang = kalkulator.kurang(10, 7);
console.log(hasilKurang);

const hasilKali = kalkulator.kali(3, 3);
console.log(hasilKali);

//===========================================================================================

//THRIRD PARTY MODULE /Dependency /Library
//contoh : mathjs

const { sqrt } = require("mathjs");

const square = sqrt(25);
console.log(square);
