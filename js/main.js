/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable quotes */
/* eslint-disable indent */
let money, time;

let start = () => {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
};

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};   




let chooseExpenses = () => {
	for (let i = 0; i < 2; i++){
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		// eslint-disable-next-line valid-typeof
		if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
		} else {
			i = i - 1;
		}		
	}
	
};	
chooseExpenses();

let chooseOptExpenses = () => {
	for (let i = 0; i < 3; i++){
		let a = prompt("Статья необязательных расходов?", ''),
			b = prompt("Во сколько обойдется?", '');
	
		// eslint-disable-next-line valid-typeof
		if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			appData.optionalExpenses[a] = b;
		} else {
			i = i - 1;
		}		
	}
	
};	

let detectDayBudget = () => {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневный бюджет " + appData.moneyPerDay);   
};

detectDayBudget();

 
let detectLevel = () => {
	if(appData.moneyPerDay < 100) {
		console.log ("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");	
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Ошибка");
	}
};
	
let checkSavings = () => {
	if (appData.savings == true) {
		let save = +prompt ("Какова сумма накоплений?"),
			percent = +prompt ("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
};

checkSavings();