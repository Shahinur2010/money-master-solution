function input(inputId) {
    const inputItem = document.getElementById(inputId);
    const inputFieldString = inputItem.value;
    const inputField = parseInt(inputFieldString);
    inputItem.value = '';
    return inputField;
}

function get(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;  
}

function set(id, value){
    const setDataField = document.getElementById(id);
    setDataField.innerText = value;
}









// document.getElementById('calculate').addEventListener('click',function(){
//     const foodMoneyField = document.getElementById('food');
//     const newFoodMoneyString = foodMoneyField.value;
//     const newFoodMoney = parseInt(newFoodMoneyString);
//     foodMoneyField.value = '';
//     const RentMoneyField = document.getElementById('rent');
//     const newRentMoneyString = RentMoneyField.value;
//     const newRentMoney = parseInt(newRentMoneyString);
//     RentMoneyField.value = '';
//     const ClothesMoneyField = document.getElementById('clothes');
//     const newClothesMoneyString = ClothesMoneyField.value;
//     const newClothesMoney = parseInt(newClothesMoneyString);
//     ClothesMoneyField.value = '';

   

//     const totalExpensesElement = document.getElementById('total-expenses');

//     const totalExpenses = newFoodMoney + newRentMoney + newClothesMoney;
//     if(isNaN(totalExpenses)){
//         return;
//     }
//     totalExpensesElement.innerText = totalExpenses;


//     const incomeField = document.getElementById('income');
//     const incomeFieldElementString = incomeField.value;
//     const incomeFieldElement= parseInt(incomeFieldElementString);
//     incomeField.value = '';

    
//     const balanceElement = document.getElementById('balance');
    
//     const totalBalance = incomeFieldElement - totalExpenses;
//     if(isNaN(totalBalance)){
//         return;
//     }
//     balanceElement.innerText = totalBalance;


//     // console.log(previousBalance);
// })


// document.getElementById('save').addEventListener('click',function () {
//     const saveFieldElement = document.getElementById('save');
//     const saveFieldString = saveFieldElement.value;
//     const saveField = parseInt(saveFieldString);
//     saveFieldElement.value = '';

//     const incomeField = document.getElementById('income');
//     const incomeFieldElementString = incomeField.value;
//     const incomeFieldElement= parseInt(incomeFieldElementString);
//     incomeField.value = '';

//     const savingPercentage =  incomeFieldElement * 0.2;
    
//     const savingAmount = document.getElementById('saving-amount');
//     savingAmount.innerText = savingPercentage;

//     // const remainingBalance = document.getElementById('remaining-balance');
    
//     // const remain = totalExpenses + savingPercentage;
//     // remainingBalance.innerText = remain;
    
// })

