<script>

//----------------**ТИПТЕР**:-------------------------
/*
Number - Сандық мәндер, бүтін және бөлшек
String - Мәтіндік жолдар
Boolean - Логикалық мәндер
Undefined - айнымалы жарияланған, бірақ мән берілмеген 
Null - "ештеңе", "жоқ" деген мағынаны, объект ретінде қарастырылады
Symbol - Бұл ерекше, қайталанбайтын мәндерді анықтауға арналған тип. */
const symbol1 = Symbol("identifier");
const symbol2 = Symbol("identifier");
console.log(symbol1 === symbol2); // false, себебі әрбір Symbol бірегей

const person2 = {
  name: "Ali",
  age: 30,
  [symbol1]: "Бұл символ арқылы жасырын мәлімет"
};
console.log(person[symbol1]); // "Бұл символ арқылы жасырын мәлімет"
console.log(person.symbol1);   // undefined, символ тек өзінің бірегей идентификаторымен қолжетімді

/*
BigInt - Өте үлкен сандармен жұмыс істеу, n әріпін қосып жазады, мысалы: 1234567890123456789012345678901234567890n.
NaN (Not a Number) - сандық емес мән, математикалық операциялар қате болғанда. Мысалы, "abc" * 3 // NaN.
Infinity және -Infinity - сандық iексіздік мәндері, оларды үлкен немесе кіші сандарға бөлу арқылы алуға болады. Мысалы, 1 / 0 
Array — "объект" түрі болып табылады, бірақ бір типтегі деректер тізбегін сақтауға ыңғайлы.
Function - "объект" болып саналады және ол JavaScript тілінде бірінші деңгейлі мән ретінде қарастырылады.
Date - Уақыт пен күнді көрсететін "объект". Мысалы, let now = new Date();
RegExp - регулярлық өрнектерді көрсететін "объект". Мәтінді іздеу мен өңдеу үшін. Мысалы, let regex = /hello/i;
Map - Объектіден айырмашылығы, Map-та кілт ретінде кез келген типті қолдануға болады. */
let map = new Map();
map.set('name', 'Ali');
map.set(1, 'One');

/*
Set - Массивтен айырмашылығы, бір мән тек бір рет қана сақталады. */
let set = new Set();
set.add(1);
set.add(2);
set.add(1); // Қайталанбайды

/*
WeakMap және WeakSet - Map және Set айырмашылығы объектілерді әлсіз сілтеме ретінде сақтайды, яғни объектілер пайдаланылмаса, оларды автоматты түрде жоюға болады.
JSON (JavaScript Object Notation) - объектілерге ұқсас, бірақ тек мәтін ретінде сақталады.*/
let json = '{"name": "Ali", "age": 25}';
let obj = JSON.parse(json); // JSON-ды объектке айналдыру

/*
Error - try...catch арқылы ұстап алуға болады. Түрлі қателер бар: Error, TypeError, SyntaxError, т.б.
Symbol.iterator - бұл символды қолдану арқылы объектті қайталанатын (итерирленетін) етіп жасауға болады, 
сондықтан ол for...of циклімен, немесе spread операторымен (...) жұмыс істей алады. */
const iterableObject = {
  items: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    const items = this.items;

    return {
      next() {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

/*
Proxy - объектке қатынасты бақылау және өзгерту үшін қолданылатын құрал.*/
const target = {
  message: "Сәлем, әлем!"
};
const handler = {
  get(target, property) {
    console.log(`${property} қасиетіне қол жеткізілді`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`${property} қасиеті ${value} мәніне орнатылды`);
    target[property] = value;
    return true;
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.message); // "message қасиетіне қол жеткізілді", "Сәлем, әлем!"
proxy.message = "Қош келдіңіз!"; // "message қасиеті Қош келдіңіз! мәніне орнатылды"
console.log(proxy.message); // "message қасиетіне қол жеткізілді", "Қош келдіңіз!"

/*
async/await - Асинхронды функцияларды жазуды жеңілдететін құрал.
Event Loop - JavaScript-тің асинхронды операцияларды орындау механизмін түсіну үшін маңызды.
Бұл механизм асинхронды кодты (мысалы, setTimeout, fetch) кезекке қояды да, негізгі ағын бос болғанда орындайды. */
console.log("1. Бірінші"); // Call Stack - синхронды түрде орындалатын код сақталады
setTimeout(() => { // Web APIs - Асинхронды операциялар сонда жіберіледі, браузердің өзінде орындала береді.
  console.log("3. Таймерден кейін"); // 
}, 1000); // Callback Queue - Асинхронды операция аяқталған кезде, оның кері шақыруы
console.log("2. Екінші"); // Call Stack - синхронды түрде орындалатын код сақталады

/*
Event Loop - шақыру стекінің босап тұрғанын тексереді. Бос болса, Event Loop кезектегі (Callback Queue) алғашқы кері шақыруды алып, оны шақыру стегіне жібереді.
Callback — басқа функцияға аргумент ретінде берілген. Асинхронды операцияларды орындау кезінде көп қолданылады. Мысалы, setTimeout(() => console.log('Hello'), 1000);
Generator Functions —  олар function* синтаксисі арқылы анықталады және yield кілт сөзі арқылы мәндерді біртіндеп қайтаруға мүмкіндік береді.
yield - Бұл кілт сөз генератор функциясында мәнді тоқтатып, оны сыртқа қайтарады.
next() - генератордағы келесі yield нүктесіне дейінгі кодың орындалуын жалғастырады */
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = myGenerator();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

/*
DOM Events - click, mouseover, keydown
Custom Events - жеке оқиғалар құрып, оларды триггерлеуге болады. Мысалы, new CustomEvent('myEvent', { detail: { key: 'value' } });
Strict Mode - "use strict"; директивасы арқылы кодты қатаң режимде жазуға болады.
Modules - import, export
Destructuring - объектілерден деректерді ыңғайлы түрде бөлу. let {name, age} = person;
Spread оператор - ассивтер мен объектілерді бөлу немесе біріктіру. Мысалы, [...arr1, ...arr2] массивтерді біріктіреді.
Spread — бір жерде бірнеше мәндерді тарату үшін.
Rest — бірнеше мәндерді бір жерге жинау үшін.
Optional Chaining (?.) - объектінің қасиетіне қол жеткізу, егер ол бар болса ғана мәнді қайтарады. Мысалы, user?.address?.street.
Nullish Coalescing (??) - null немесе undefined болғанда әдепкі мәнді қолдануға мүмкіндік береді. Мысалы, let name = user.name ?? 'Guest';
(||) - Егер сол жақ бөлігі жалған болса, оң жақтағы мән қайтарылады; */

/* #Қосымша ұғымдар:
"Плагин" негізгі бағдарламаға қосымша функция қосу үшін қажет, ал "модуль" бағдарламаның логикалық құрылымын бөліп, оны оқылатын және қайта пайдалануға оңай етуге көмектеседі.
Typed Arrays - JavaScript-те арнайы деректер массивтері бар, олар белгілі бір типті деректермен жұмыс істеу үшін қолданылады. Мысалы, Uint8Array, Int16Array, Float32Array сияқты массивтер, оларда тек нақты типтегі деректер сақталады және үлкен деректерді өңдеу үшін қолайлы.
Buffer - Бұл әсіресе Node.js-те қолданылатын деректер буферы. Ол бинарлық деректермен жұмыс істеуге мүмкіндік береді, бұл желілік байланыс кезінде немесе файлдан деректер оқу кезінде пайдалы.
Intl (Internationalization) - Intl объектісі түрлі локальдарға (елдерге және тілдерге) бейімделген мәтіндік және сандық мәндерді пішімдеу үшін қолданылады. Мысалы, сандарды валюта ретінде пішімдеуге немесе күндер мен уақыттарды жергілікті форматқа келтіруге болады.
Reflect - Бұл объект проксилермен және объектілермен жұмыс жасау кезінде әртүрлі операцияларды жеңілдету үшін пайдаланылады. Мысалы, Reflect.get, Reflect.set, Reflect.apply әдістері арқылы объектілерді басқаруға болады.
Atomics - Atomics объектісі көп ағындармен жұмыс істегенде жалпы жадыны қауіпсіз басқаруға арналған. Бұл көп ағынды ортада операциялардың орындалуын синхрондау үшін қажет.
WebAssembly (Wasm) - JavaScript арқылы вебте жоғары өнімділікке ие бағдарламалар жазу үшін қолданылады. WebAssembly компиляцияланған кодтың браузерде орындалуына мүмкіндік береді, әсіресе ауыр есептеулерге қолайлы.
WeakRef - Жадыны басқаруға арналған әлсіз сілтемелерді жасауға мүмкіндік береді. Бұл әсіресе объектіні жадта ұстау қажеттілігі аз болғанда пайдалы.
FinalizationRegistry - WeakRef-пен бірге объектілерді жойғанда қосымша кодты орындау үшін қолданылады. Объектілер жойылғанда арнайы функция шақырылады.
Observable - Бұл реактивті бағдарламалау концепті, ол негізінен RxJS кітапханасында кездеседі. Observable деректер ағындарын бақылауға және өңдеуге мүмкіндік береді, әсіресе асинхронды оқиғаларды басқару үшін қолайлы. */


//---------------- **АЙНЫМАЛЫЛАР**:--------------------------

let age = 30;
const SURname = "Ainur"; // өзгермейтін мән үшін const
var country = "Kazakhstan"; // сирек қолданылады
// 1. Жарамдылық аймағы (Scope)
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, өйткені var функция деңгейінде жарамды
}
testVar();

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // Қате: y анықталмаған, өйткені let тек блок деңгейінде жарамды
}
testLet();

// 2. Қайта жариялау
var name = "Alice";
var name = "Bob"; // Қате болмайды
console.log(name); // "Bob"
let name = "Alice";
let name = "Bob"; // Қате: 'name' қайта жарияланған

// 3. Хостинг (Hoisting)
console.log(num); // undefined (var хостингке түседі, бірақ инициализацияланбайды)
var num = 5;
console.log(count); // Қате: 'count' анықталмаған (уақытша өлі аймақ)
let count = 10;

// 4. Циклдарда қолдану
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 3
// 3
// 3
// Себебі i соңғы мәнін есте сақтайды, бұл жерде 3.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0
// 1
// 2
// Әр итерцияда i мәні жеке блокқа байланысты болады.


// ----------------**ФУНКЦИЯЛАР:--------------------------------
/*
Стрелечный функция: const greet = (name) => `Hello, ${name}!`;
bind(), call(), apply() -  Осы әдістер this мәнін функция ішінде анықтап береді */
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greet = person.greet;
greet(); // undefined, `this` мәні жоғалды

const boundGreet = greet.bind(person);
boundGreet(); // "Hello, my name is Alice"

/*Рекурсия - Функция өзін-өзі шақыратын*/
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/*Жоғары деңгейлі функциялар (Higher-Order Functions) - map, filter, reduce:
Асинхронды функциялар - Async/Await және Promises
Замыкание (Closure) - функцияның өз контекстінде анықталған сыртқы айнымалыларды есте сақтау қабілеті.*/
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
/*IIFE (Immediately Invoked Function Expression) - бұл анықталған бойда орындалатын функциялар.*/
(function () {
  let message = 'Hello from IIFE!';
  console.log(message);
})();
/*Бұл функция бірден орындалады және глобалды айнымалыларды өзгертпейді.*/

/*Memoization - Функциялардың нәтижелерін есте сақтай отырып, есептеулерді оңтайландыру үшін memoization қолдануға болады. */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
const factorial = memoize(function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});
console.log(factorial(5)); // Жылдам нәтиже береді

/*Тізбек функциялар (Chaining Functions) - ейбір кітапханалар мен үлгілерде тізбектеуді қолдау үшін функциялар бір-біріне мәндерді қайтарады.*/
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(number) {
    this.value += number;
    return this; // тізбек үшін өзін қайтарады
  }
  subtract(number) {
    this.value -= number;
    return this;
  }
  multiply(number) {
    this.value *= number;
    return this;
  }
}
const result = new Calculator(10).add(5).subtract(3).multiply(4).value;
console.log(result); // 48

/*Debouncing - Бір уақытта бірнеше рет шақырылса, соңғысын ғана орындайды*/
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

/*Throttling - Бір уақытта бірнеше рет шақырылса, белгілі бір уақыт ішінде тек бір рет орындайды*/
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

//----------------**Циклдер--------------------------------
//*for циклі
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

//*while циклі
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//*do...while циклі
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5); // 0, 1, 2, 3, 4

//*for...of циклі
const fruits = ["алма", "банан", "шие"];
for (const fruit of fruits) {
  console.log(fruit); // алма, банан, шие
}

//*for...in циклі
const person3 = { name: "Ali", age: 25, country: "Kazakhstan" };
for (const key in person3) {
  console.log(key + ": " + person[key]);
}
// name: Ali, age: 25, country: Kazakhstan

/*Циклдерді басқару операторлары: break және continue
break - цикльді толық тоқтату үшін қолданылады.
continue - ағымдағы итерацияны өткізіп, келесі итерацияға өту үшін қолданылады.*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Циклды толық тоқтатады
  }
  console.log(i); // 0, 1, 2, 3, 4
}
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Тек тақ сандарды көрсетеді
  }
  console.log(i); // 1, 3, 5, 7, 9
}

/*Циклдарды тиімді пайдалану - forEach()*/
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

//----------------**Event Handling--------------------------------
/*
Mouse Events (Тышқан оқиғалары):
  click: Элементті басу.
  dblclick: Элементті екі рет басу.
  mousedown / mouseup: Тышқанның батырмасын басу және босату.
  mouseenter / mouseleave: Тышқанды элементке апару және шығару.
  mousemove: Тышқанды элемент үстінде жылжыту.
Keyboard Events (Пернетақта оқиғалары):
  keydown: Пернені басу.
  keyup: Пернені босату.
  keypress: Символдық пернені басу (ескірген).
Form Events (Форма оқиғалары):
  submit: Форма жіберілгенде.
  focus: Элементке фокус түскенде.
  blur: Элемент фокустан шыққанда.
  change: Форма элементінің мәні өзгергенде (input, select, т.б.).
Window Events (Терезе оқиғалары):
  load: Бүкіл бет жүктеліп болғанда.
  resize: Терезенің өлшемі өзгергенде.
  scroll: Парақта жылжығанда.
  unload: Парақтан шығу кезінде (ескірген).
*/

/*Оқиғаларды Өңдеу Әдістері*/
// HTML атрибуттары арқылы (Inline Event Handler)
<button onclick="alert('Батырма басылды!')">Басу</button>
//JavaScript арқылы (Event Handler Property)
const button = document.getElementById('myButton');
button.onclick = function () {
  alert('Батырма басылды!');
};
//addEventListener() әдісі
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Батырма басылды!');
});
//*Оқиға Объектісі (Event Object)
document.addEventListener('click', function (event) {
  console.log(event.type); // Оқиға түрін көрсетеді, мысалы "click"
  console.log(event.target); // Оқиға орын алған элементті көрсетеді
});
// preventDefault(): Оқиғаның әдепкі әрекетін тоқтату (мысалы, сілтемені басқанда бетке өтпеу).
// stopPropagation(): Оқиғаның таралуын тоқтату (оқиға басқа элементтерге таралмайды).
document.getElementById('parent').addEventListener('click', () => {
  console.log("Ата-ана элементі");
});
document.getElementById('child').addEventListener('click', (event) => {
  console.log("Бала элементі");
  event.stopPropagation(); // Ата-ана элементіне оқиға таралмайды
});
// *Оқиғаларды Жою
function handleClick() {
  alert("Батырма басылды!");
}
button.addEventListener('click', handleClick);
// Кейін оқиғаны жою
button.removeEventListener('click', handleClick);

/*Оқиға Таралуы (Event Propagation) - JavaScript-те оқиға екі бағытта таралады:*/
// Кірістеу (Capturing): Жоғарыдан төмен қарай.
// Шығару (Bubbling): Төменнен жоғары қарай.

//----------------**Асинхронды JavaScript --------------------------------
//*Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Уәде орындалды");
  }, 1000);
});

myPromise
  .then(result => console.log(result))   // "Уәде орындалды"
  .catch(error => console.error(error))
  .finally(() => console.log("Операция аяқталды"));
// Promise.all – Барлық уәделер орындалғанда, нәтиже береді. Біреу ғана орындалмаса, қате қайтарады.
// Promise.race – Бірінші орындалған уәденің нәтижесін қайтарады.
// Promise.allSettled – Барлық уәделер аяқталғанда нәтижені береді, сәтті немесе сәтсіз болғанына қарамастан.
// Promise.any – Бірінші сәтті орындалған уәденің нәтижесін береді, егер барлық уәделер сәтсіз болса, қате қайтарады.
Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))  // Қате болғандықтан орындалмайды
  .catch(error => console.error(error)); // "Қате"

//*Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Қате:", error);
  }
}
fetchData();

// Async/Await көмегімен бірнеше уәделерді бір уақытта орындау үшін Promise.all пайдаланылады.
async function getData() {
  try {
    const [data1, data2] = await Promise.all([
      fetch("https://api.example.com/data1"),
      fetch("https://api.example.com/data2")
    ]);
    const result1 = await data1.json();
    const result2 = await data2.json();
    console.log(result1, result2);
  } catch (error) {
    console.error("Қате:", error);
  }
}
getData();

//----------------**Destructuring--------------------------------
//*Массивтерді Деструктуризациялау
const fruits2 = ["apple", "banana", "orange"];
const [first, second, third] = fruits2;
console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"

//*Деструктуризация кезінде мәндерді өткізіп кету:
const numbers2 = [1, 2, 3, 4];
const [one, , three] = numbers2;
console.log(one);   // 1
console.log(three); // 3

//*Қалған элементтерді жинау (...rest):
const colors = ["red", "green", "blue", "yellow"];
const [primary, secondary, ...others] = colors;
console.log(primary);   // "red"
console.log(secondary); // "green"
console.log(others);    // ["blue", "yellow"]

//*Объектілерді Деструктуризациялау
const user = {
  name: "Alice",
  age: 25,
  city: "New York"
};
const { name, age2, city } = user;
console.log(name); // "Alice"
console.log(age2);  // 25
console.log(city); // "New York"

//Айнымалы атын өзгерту:
const product = {
  productName: "Laptop",
  price: 1000
};
// productName-ді itemName ретінде аламыз
const { productName: itemName, price } = product;
console.log(itemName); // "Laptop"
console.log(price);     // 1000

//*Әдепкі мәндерді орнату:
const person4 = {
  name: "Bob"
};
// age жоқ болса, әдепкі мән 30 болады
const { name, age3 = 30 } = person4;
console.log(name); // "Bob"
console.log(age3);  // 30

//*Функция параметрлері ретінде деструктуризация:
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}
const user2 = { name: "Alice", age: 25 };
greet(user2); // "Hello, Alice. You are 25 years old."

//*Құрамалы деструктуризация (Nested Destructuring):
const student = {
  name: "John",
  marks: {
    math: 90,
    english: 85
  }
};
const { name, marks: { math, english } } = student;
console.log(name);   // "John"
console.log(math);   // 90
console.log(english); // 85

//----------------**Export және Import Мысалдары--------------------------------
// user.js
export const name = "Alice";
export const age4 = 25;
export function sayHello() {
  return `Hello, ${name}`;
}
export const pi = 3.14159;
export default function multiply(a, b) {
  return a * b;
}

// main.js
import { name, age4, sayHello } from './user.js';
import multiply, { pi } from './user.js';

console.log(name);         // "Alice"
console.log(age4);          // 25
console.log(sayHello());   // "Hello, Alice"

console.log(multiply(3, 4)); // 12
console.log(pi);             // 3.14159

//**Прототиптер және Мұрагерлік (Inheritance)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.

//----------------**LocalStorage және SessionStorage--------------------------------
// LocalStorage
localStorage.setItem('username', 'Alice'); // Деректі сақтау
const username = localStorage.getItem('username'); // Деректі алу
console.log(username); // "Alice"

localStorage.removeItem('username'); // Деректі жою
localStorage.clear(); // Барлық деректерді тазалау
// SessionStorage
sessionStorage.setItem('sessionUser', 'Bob'); // Деректі сақтау
const sessionUser = sessionStorage.getItem('sessionUser'); // Деректі алу
console.log(sessionUser); // "Bob"

sessionStorage.removeItem('sessionUser'); // Деректі жою
sessionStorage.clear(); // Барлық деректерді тазалау

//----------------**AJAX Мысал:--------------------------------
const xhr = new XMLHttpRequest(); // XMLHttpRequest объектісін жасау
xhr.open('GET', 'https://api.example.com/data', true); // Сұрау әдісі мен URL-ді анықтау

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) { // Сұрау толық орындалған кезде
    const data = JSON.parse(xhr.responseText); // Деректерді алу
    console.log(data);
  }
};

xhr.send(); // Сұрауды жіберу

//----------------**Fetch API--------------------------------
fetch('https://api.example.com/data') // Сұрау жіберу
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON форматына түрлендіру
  })
  .then(data => {
    console.log(data); // Деректерді пайдалану
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

//----------------**DOM--------------------------------
const element = document.getElementById('myElement');
const elements = document.getElementsByClassName('myClass');
const elements2 = document.getElementsByTagName('div');
const element2 = document.querySelector('.myClass');
const elements3 = document.querySelectorAll('p.myClass');
element.textContent = 'Жаңа мазмұн'; // Тек мәтін
element.innerHTML = '<strong>Жаңа мазмұн</strong>'; // HTML
element.style.color = 'red'; // Мәтіннің түсін өзгерту
element.style.fontSize = '20px'; // Шрифт көлемін өзгерту

// Жаңа элемент жасау
const newElement = document.createElement('div');
newElement.textContent = 'Мен жаңа элементпін';
document.body.appendChild(newElement); // Элементті денеге қосу
// Элементті жою
const elementToRemove = document.getElementById('myElement');
elementToRemove.remove();
// Көшірмені қосу
const originalElement = document.getElementById('myElement');
const clonedElement = originalElement.cloneNode(true); // Элементті көшіріп алу
document.body.appendChild(clonedElement);

const button = document.getElementById('myButton');
button.addEventListener('click', function () {
  alert('Батырма басылды!');
});

//DOM-ды Оптимизациялау
//Batch Updates: DOM-ды бірнеше рет жаңартпас бұрын, өзгерістерді бір пакетте орындау ұсынылады. Бұл тиімділікті арттырады.
//Document Fragments: Көптеген элементтерді бір уақытта қосу үшін DocumentFragment пайдалану.
const fragment = document.createDocumentFragment();
const newElement1 = document.createElement('div');
const newElement2 = document.createElement('div');
fragment.appendChild(newElement1);
fragment.appendChild(newElement2);
document.body.appendChild(fragment); // Барлығын бір уақытта қосу

//----------------**Functional Programming--------------------------------
/* (Функционалды бағдарламалау) - Pure Functions, Immutability, Higher-order Functions, Composition. Мысалдар: map, reduce, filter*/
/*Чистые функции (Таза функциялар):*/
function add(a, b) {
  return a + b; // Чистая функция
}
/*Иммутабилділік (Immutable State) - өзгерістер жаңа деректерді жасау арқылы жүзеге асырылады*/
const array = [1, 2, 3];
const newArray = [...array, 4]; // Жаңа массив жасау
/*Функцияларды жоғары деңгейде қолдану - функцияларды қайтаруға болатын функциялар
Функционалды композия (Function Composition) - Көптеген функцияларды біріктіру
Лямбда функциялар (Lambda Functions) - олар функциялар ретінде қысқа түрде жазылады*/
const double = x => x * 2; // Лямбда функция
console.log(double(5)); // 10
/*Рекурсия (Recursion) -  өзін-өзі шақырғанда рекурсия пайда болады*/
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//----------------------Қосымша ұғымдар--------------------------
/*JavaScript Engine - Әрбір браузерде JavaScript-ті орындау үшін өз қозғалтқышы (engine) бар. Мысалы, Chrome браузерінде V8 Engine
V8
 Жадыны Басқару (Memory Management):
JavaScript қозғалтқыштары жадыны автоматты түрде басқарады, оның ішінде объектілерді жасау және жою, жадты тазалау (Garbage Collection). V8 Engine-де, мысалы, Mark-and-Sweep әдісі қолданылады, бұл объектілерді кәдеге жарату мен жадыны босатуды қамтамасыз етеді.
 JIT (Just-In-Time) Компиляция:
JavaScript бастапқыда интерпретацияланатын тіл болғанымен, қазіргі қозғалтқыштар JIT компиляцияны қолданады, яғни JavaScript коды орындалу барысында байт-кодқа компиляцияланып, нәтижесінде тез орындалады.
 Қолданушының Жиі Қайталанатын Кодын Оптимизациялау:
JavaScript қозғалтқышы кодының қайталанатын және тиімді орындалуын қамтамасыз ету үшін оны талдап, жиі қолданылатын код фрагменттерін жылдамдатады.
Inlining:
Жиі шақырылатын функциялар қозғалтқышқа «inline» түрде біріктіріледі, бұл функцияларды шақыру шығындарын азайтады.
*/

/*JavaScript Өнімділігін Оптимизациялау
Таза Код Жазу және Таза Функцияларды Қолдану
Асинхронды Код Жазу
DOM-мен жұмыс жасау ауыр болуы мүмкін, сондықтан тек қажетті элементтерді өзгерту ұсынылады. 
Event Delegation - Бірнеше элементтерге оқиға тыңдағыштарын (event listeners) орнатқан кезде, әр элементке бөлек тыңдағыш орнату өнімділікті төмендетуі мүмкін. 
Оның орнына, event delegation әдісін пайдаланып, ата-ана элементке тыңдағыш орнатыңыз.*/
document.querySelector('#parentElement').addEventListener('click', function (event) {
  if (event.target.matches('.childClass')) {
    // Тек таңдаулы элементтерге жауап беру
    console.log('Child element clicked');
  }
});
// Кешіру (Memoization) - Кейбір есептеулерді кешіру кодты жылдамдатады. Мысалы, бірдей аргументтерді қайталама есептеуден сақтайды.
const cache = {};
function memoizedFactorial(n) {
  if (cache[n]) {
    return cache[n];
  }
  if (n === 0) {
    return 1;
  }
  const result = n * memoizedFactorial(n - 1);
  cache[n] = result;
  return result;
}
/*
Тегтер мен Стильдерді Біріктіру - Қайталанатын элементтер үшін CSS кластарын пайдаланып, инлайн стильдерді қолданбау ұсынылады. Бұл DOM ағашын жеңілдетеді және рендерлеуді тездетеді.
Heavy Functions-ті Debounce немесе Throttle Қолдану
Lazy Loading
map, filter, және reduce т.б.
Кітапханалар мен Фреймворктарды Жаңарту*/

//----------------**Security Basics---------------------------
/*
XSS (Cross-Site Scripting) Шабуылы - веб-сайтқа зиянды JavaScript кодын енгізу арқылы шабуыл жасау түрі.
CSRF (Cross-Site Request Forgery) Шабуылы - зиянды сайт арқылы қолданушының сессиясындағы басқа сайтқа қатысы бар әрекеттерді қолданушының атынан орындауға бағытталған шабуыл. 
SQL Injection — SQL сұраныстарында пайдаланушы енгізген деректердің орынсыз қолданылуынан туындайтын шабуыл түрі. 
Кукилер мен сессия - деректері шабуылдаушылардың назарында болатын маңызды элементтер болып табылады.
Пайдаланушы құпия сөздерін дұрыс сақтау — деректер қауіпсіздігінің маңызды бөлігі. Оларды қарапайым мәтін түрінде сақтамау қажет.
Error Handling - Қателер туралы толық ақпарат шабуылдаушыларға қосымша мүмкіндіктер беруі мүмкін. Сондықтан қателерді өңдеуді қатаң түрде бақылау керек.
Криптографиялық Технологияларды Қолдану - Барлық деректерді "HTTPS" арқылы қорғау, Сезімтал деректерді дерекқорда сақтар алдында "шифрлау".
Кіріс Деректерді Тексеру - Пайдаланушы енгізген деректер әрдайым дұрыс және қауіпсіз болмайды. Сондықтан деректерді тексеру қажет.*/


//----------------**Worker --------------------------------
/* Worker Threads (Node.js) -  есептеулерді негізгі ағыннан бөлек орындауға мүмкіндік береді */
// main.js
const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');
worker.on('message', (message) => {
  console.log(`Негізгі ағын: Жауап алынды - ${message}`);
});
worker.postMessage('Сәлем, worker!'); // Worker ағынына хабар жіберу

// worker.js
const { parentPort } = require('worker_threads');
parentPort.on('message', (message) => {
  console.log(`Worker ағыны: ${message}`);
  parentPort.postMessage('Жауап: Әлем!');
});

//** Web Workers (Браузер ортасы) -  бұл браузерде негізгі UI ағынынан бөлек JavaScript кодын орындауға мүмкіндік беретін API. 
// main.js
const worker1 = new Worker('worker.js');
worker1.onmessage = (event) => {
  console.log(`Негізгі ағын: Жауап алынды - ${event.data}`);
};
worker1.postMessage('Сәлем, Web Worker!');

// worker.js
onmessage = (event) => {
  console.log(`Worker: ${event.data}`);
  postMessage('Жауап: Әлем!');
};

//------------------Қосымша ұғымдар------------------------------
/*
Data Binding (Деректер байланысы) - Интерфестегі (код жазудағы) өзгерістерді көруге қызмет қылады 
Virtual DOM - Интерфестегі (код жазудағы) өзгерістерді ғана негізігі DOM-ға көшіруге қызмет қылады
Regular Expressions (RegEx) — бұл мәтіндегі үлгілерді сәйкестендіру және манипуляциялау үшін қолданылатын қуатты құрал. https://regexr.com/
Dynamic Imports — JavaScript-те кодты динамикалық түрде импорттау әдісі. Яғни, кодтың белгілі бір бөлігін тек қажет болғанда ғана жүктейді.
Функция белгілі бір шарт орындалғанда ғана модульді импорттайды*/
function loadModule() {
  import('./module.js')
    .then((module) => {
      module.doSomething();
    })
    .catch((error) => {
      console.error("Модуль жүктелмеді:", error);
    });
}
/*Code Splitting — қосымшаның барлық кодын бірнеше бөлікке бөліп, қажеттіліктерге қарай бөлек жүктейді. 
Бұл әдіс қолданушыға әр бетте немесе әр компонентте қажет емес кодтарды жүктеуден сақтайды. 
Code Splitting-ті қолдану үшін Webpack сияқты құрастыру құралдары пайдаланылады*/

/*
-SSR Жұмыс істеу принципі:
Пайдаланушы бетті сұрайды.
Сервер бетті рендерлейді және оған барлық қажетті деректерді қосады.
Сервер HTML файлын пайдаланушының шолғышына жібереді.
Пайдаланушы бірден толық HTML бет көрінісін көреді.
JavaScript жүктеліп, қосымшаға динамикалық мүмкіндіктер қосылады.*/

/*
-CSR Жұмыс істеу принципі:
Пайдаланушы бетті сұрайды.
Сервер тек HTML қаңқасын және JavaScript кодын жібереді.
Шолғыш JavaScript кодын жүктеп, орындалғаннан кейін серверден деректерді сұрайды.
Деректер келгеннен кейін, JavaScript оларды HTML элементтеріне түрлендіреді және қолданушыға көрсетеді.*/

/*
-Reactivity жүйесі мен Proxy API арасындағы байланыс:
Vue сияқты фреймворктер Proxy API қолдана отырып, Reactivity жүйесін құрады. 
Proxy арқылы объектілердің get, set сияқты әрекеттерін бақылап, UI-ді тиісті түрде жаңарту үшін оқиғалар тудырады.*/

</script>