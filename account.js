class BankAccount {

    constructor(){

    }
    getBalance(acc_bal,full_name) {
        this.acc_bal=acc_bal;
        this.full_name = full_name;
        if(isNaN(acc_bal)){
            return 'Invalid Input'
        }else{
            let out_put = {Name:full_name , Balance: acc_bal};
            //console.log(out_put);
            return out_put;
        }
       
    }

    open(lname,fname, acc_number) {
        this.acc_number=acc_number;
        this.lname = lname;
        this.fname = fname;
        let acc = {name: lname + ' ' + fname , Accountnumber: acc_number}
        //console.log(acc);
        return acc;
    }

    deposit(deposit_amount,acc_bal) {
        this.acc_bal = acc_bal;
        this.deposit_amount = deposit_amount;
        var new_bal = deposit_amount + acc_bal;
       // console.log(acc_bal);
       return 'Your new balance is ' + new_bal ;
    }

    withdraw(acc_bal, amount) {
        this.acc_bal = acc_bal;
        this.amount = amount;
        var remaining = acc_bal-amount;
        if(remaining<0){
            //console.log('transaction denied')
            return 'transaction denied';
        }
        else{
            //console.log('transaction successful')
            return 'transaction successful Your new balance is '+ remaining;
        }
    }

    close(){

    }
}

module.exports = BankAccount;
//martha_acc = new BankAccount();
//martha_acc.open('Namuli','Martha');
//martha_acc.deposit(1000000,246485);
//martha_acc.withdraw(50000, 250000);