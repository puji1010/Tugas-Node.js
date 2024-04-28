const number1 = 61;
const result1 = Math.sqrt(number1);

if (number1 % 2 === 0){
    console.log(`${number1} dari akar pangkat 2 adalah ${result1}`);}

else {console.log("Tidak bisa input bilangan ganjil");}

if (!isNaN(number1) && number1 >= 0){
    //console.log(`${number1} is akar pangkat 2 dari ${result1}`);
} else { 
    console.log("Tidak bisa input bilangan negatif");

}
