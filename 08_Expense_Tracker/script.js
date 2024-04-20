const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: []
};



const transactionForm = document.getElementById('Transaction_form');
const tList = document.querySelector('.transactionList');
const textInp = document.getElementById('text');
const amountInp = document.getElementById('amount');

let isEdit = false;
let tId;

let netAmount = document.getElementById('netAmount');
let earnings = document.getElementById('earnings');
let expenses = document.getElementById('expense');

const renderTransactions = () => {

    const transactions = state.transactions;

    let earning = 0;
    let expense = 0;
    let net = 0;

    tList.innerHTML = '';

    transactions.forEach((tr) => {

        const { id, amount, text, type } = tr;

        const isCredit = type === 'credit' ? true : false;
        const sign = isCredit ? '+' : '-';

        const transaction = `


        <div class="transaction" id="${id}">

            <div class="content" onclick="ShowIcon(${id})">
                <div class="left">
                    <p>${text}</p>
                    <p>${sign} ₹${amount}</p>
                </div>

                <div class="status ${isCredit ? 'credit' : 'debit'}">
                    ${isCredit ? 'C' : 'D'}
                </div>
            </div>

            <div class="lower">

                <div class="icon" onclick="handleEdit(${id})">
                    <img src="icons/pen.svg" alt="edit">
                </div>

                <div class="icon" onclick="handleDelete(${id})">
                    <img src="icons/trash.svg" alt="trash">
                </div>

            </div>
        </div>`

        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;
        net = earning - expense;

        tList.insertAdjacentHTML('afterbegin', transaction);

    });

    netAmount.innerHTML = `${net}`;
    earnings.innerHTML = `${earning}`;
    expenses.innerHTML = `${expense}`;

};


const addTransaction = (e) => {

    e.preventDefault();

    const isEarn = e.submitter.id === 'ernBtn' ? true : false;

    console.log();


    const formData = new FormData(transactionForm);
    const TransactionData = {};

    formData.forEach((val, key) => {

        TransactionData[key] = val;
    });

    const { text, amount } = TransactionData;

    const transaction = {

        id: isEdit ? tId : Math.round(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: isEarn ? 'credit' : 'debit'
    };

    if (isEdit) {

        const tIndex = state.transactions.findIndex((t) => t.id === tId);
        state.transactions[tIndex] = transaction;
        isEdit = false
        tId = null;

    } else {

        state.transactions.push(transaction);
    }

    // Clear input fields
    textInp.value = '';
    amountInp.value = '';

    // Save transactions to local storage
    localStorage.setItem('transactions', JSON.stringify(state.transactions));

    renderTransactions();

};

const ShowIcon = (id) => {

    const selectedtTransaction = document.getElementById(id);
    const lower = selectedtTransaction.querySelector('.lower');

    lower.classList.toggle('show');

};

const handleEdit = (id) => {

    const trnsctn = state.transactions.find((t) => t.id === id);
    const { text, amount } = trnsctn;

    textInp.value = text;
    amountInp.value = amount;
    tId = id;
    isEdit = true;

};

const handleDelete = (id) => {

    const filteredTransaction = state.transactions.filter(t => t.id !== id);
    state.transactions = filteredTransaction;

    // Save transactions to local storage
    localStorage.setItem('transactions', JSON.stringify(state.transactions));

    renderTransactions();
};

// Check if there are transactions stored in local storage
const storedTransactions = localStorage.getItem('transactions');
if (storedTransactions) {
    state.transactions = JSON.parse(storedTransactions);
}

renderTransactions();

transactionForm.addEventListener('submit', addTransaction)

