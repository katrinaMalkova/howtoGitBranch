const credit=200000;
const procent=0.1;
const period=2;

console.log('Выплата по кредиту =', Math.floor(credit+(credit*procent)+((credit+(credit*procent))*procent)), ', переплата =', Math.floor((credit+(credit*procent)+((credit+(credit*procent))*procent)) - credit) );