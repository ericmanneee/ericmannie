const birthdayEl = document.getElementById('birthday');
const buttonEl = document.getElementById('btn');
const resultEl = document.getElementById('result');

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ''){
        alert('Please enter your birthday')
    } else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old.`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    if(
        month < 0 || (month == 0 && currentDate.getDate()
        < birthDate.getDate())
    ){
        age--;
    }
    return age;

}

buttonEl.addEventListener("click", calculateAge);