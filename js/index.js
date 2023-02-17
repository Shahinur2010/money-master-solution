// let data;
document.getElementById('calculate').addEventListener('click',function () {
    const foodItem = input('food');
    const rentItem = input('rent');
    const clothesItem = input('clothes');
    const totalExpensesElement = foodItem + rentItem + clothesItem;
    
    set('total-expenses', totalExpensesElement);
     
    const incomeAmount = input('income');
    // data = incomeAmount;
    const totalExpenses = get('total-expenses');
    
    const netBalance = incomeAmount - totalExpenses;
    
    set('balance', netBalance); 
})

document.getElementById('save-btn').addEventListener('click',function () {
    const saveField = input('save');
    const incomeAmount = input('income');
    const savingAmount = (incomeAmount * saveField) / 100;
    
    set('saving-amount', savingAmount);

    const balance = get('balance');
    const remainingBalance = balance - savingAmount;

    set ("remaining-balance", remainingBalance);
})
