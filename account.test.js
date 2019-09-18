const account = require('./account');
bankaccount = new account;
test('It does not accept numbers as input', () => {
    expect(bankaccount.getBalance('string')).toBe('Invalid Input');
});

test('It Retruns the account Balance', () => {
    expect(bankaccount.getBalance(1000000, 'Namuli Martha')).toEqual({'Name': 'Namuli Martha','Balance':1000000});
});

test('It Retruns the New account details', () => {
    expect(bankaccount.open('Namuli', 'Martha', 900034657563)).toEqual({'name': 'Namuli' + ' ' + 'Martha' , 'Accountnumber': 900034657563});
});
test('It Returns the new balance', () => {
    expect(bankaccount.deposit(1000000, 580000)).toBe('Your new balance is ' + 1580000);
});
test('It declines withraws which exceed minimum balance', () => {
    expect(bankaccount.withdraw(580000,1000000)).toBe('transaction denied');
});

test('It returns the remaining balance on succesful withdraws', () => {
    expect(bankaccount.withdraw(1000000,580000)).toBe('transaction successful Your new balance is '+ 420000);
});

