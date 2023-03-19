const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
const thirtyDays = ["April", "June", "September", "November"];
let ans = null;

const getDateUpperBound = (month, isLeapYear) => {
	if (month === "February") {
  	return 28 + isLeapYear;
  } else if (thirtyDays.includes(month)) {
  	return 30;
  
  } else {
  	return 31;
  }
}

const dateSpan = document.querySelector("#date");
const resetButton = document.querySelector("#reset");
const checkButton = document.querySelector("#check");
const day = document.querySelector("#day");
const result = document.querySelector("#result");

checkButton.addEventListener("click", () => {
	result.classList.value = '';
  
	if (ans === day.value) {
  	result.textContent = "Correct!";
    result.classList.add("correct");
  } else {
  	result.textContent = "Wrong!";
    result.classList.add("incorrect");
  }
});

resetButton.addEventListener("click", () => {
	main();
});

const randomElem = (list) => {
	const idx = Math.floor(Math.random() * list.length);
	return list[idx];
}
const random = (a, b) => {
	return Math.floor(Math.random() * (b-a)) + a;
}

function main() {
	result.textContent = "";
  result.classList.value = '';
  
	const randomMonth = randomElem(month);
  const randomYear = random(1700, 3000);
  const isLeapYear = randomYear % 4 === 0;
  const randomDate = random(1, getDateUpperBound(month, isLeapYear));
  const dateObj = new Date(`${randomMonth} ${randomDate}, ${randomYear} 00:00:00`);
  ans = dayOfWeek[dateObj.getDay()];
  dateSpan.textContent = `${randomMonth} ${randomDate}, ${randomYear}`;
}

main();

