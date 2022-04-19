// * Мінімум
let
  firstValue = 'David',
  secondValue = 'John',
  thirdValue = 'Bob',
  fourthValue = 'Аня';
// У JS не можна називати змінні зарезервованими іменами
// Value=''
// 123=''
// super=''
// typeof=''
// boolean=''

console.log(firstValue, secondValue, thirdValue, fourthValue);

/* Коментарі приклад
коментування */

// Камел кейс найпоширеніший стиль надання імен змінним у фронтенді. Також глобальні змінні можна задавати з великої літери: const ACTUALAGE; У бекенді задають змінні через нижнє підкреслення _ .

// * Норма

let firstName;
firstName = prompt('Як вас звати?');
alert('Привіт' + ' ' + firstName);

let ageNumber;
const currentYear = 2022;
ageNumber = currentYear - prompt('Введіть рік народження');
alert(firstName + ' вам' + " " + ageNumber);

let squareSide;
squareSide = prompt(firstName + ' введіть довжину сторони квадрата');
alert('Периметр квадрата = ' + (2 * squareSide));


// * Максимум
let circleRadius;
circleRadius = prompt(firstName + ' введіть радіус кола');
alert('Площа круга =' + Math.round((Math.PI * circleRadius * circleRadius)));

let
  distanceVariable,
  timeVariable;
distanceVariable = prompt(firstName + ' введіть відстань в кілометрах між двома містами');
timeVariable = prompt('за скільки годин ви хоче дістатися? (введіть час у годинах)');
alert('Щоб проїхати відстань у ' + distanceVariable + ' км ' + 'за час ' + timeVariable + ' год., потрібно їхати зі швидкістю ' + (distanceVariable / timeVariable) + ' км/год');

const converterСurrenc = 0.93;
let dollarСurrenc;
dollarСurrenc = prompt('Введіть суму у доларах');
alert(dollarСurrenc + ' доларів = ' + (dollarСurrenc * converterСurrenc) +' євро');

