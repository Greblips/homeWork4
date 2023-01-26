// Задание 1

for (let i = 0; i <=1; i++) {
    console.log ('Привет')
    
}


// Задание 2

for (let i = 1; i<=5; i++) {
    console.log(i)
    
}

// Задание 3

for (let i = 7; i <=22; i++){
    console.log(i)
}

// Задание 4

const employeeSaLary ={
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'

}
for (let name in employeeSaLary) {
        console.log(`${name} - зарплата ${employeeSaLary[name]}`);
}

// задание 5

for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
        console.log(n);
        console.log(`Количество итераций ${num}`)
}

// Задание 6

for (let fridayDate = 1; fridayDate <= 31; fridayDate+=7) {
    console.log(`Сегодня пятница, ${fridayDate}-е число. Необходимо подготовить отчет.`);
}

