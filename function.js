var degisken = "değer"; //global alan, fonksiyon dışında

function sayiUret(ustLimit){
    console.log(degisken)
   return Math.ceil(Math.random() * ustLimit)
}

console.log(degisken);

sayiUret(); //sayiUret fonksiyonunu çalıştırmak için

var sayi1=sayiUret(50)
var sayi2=sayiUret(1)
var sayi3=sayiUret(5)
var sayi4=sayiUret(100)


console.log('Kolon : ' + sayi1 +' '+ sayi2 +' '+sayi3 +' '+sayi4)