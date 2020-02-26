<script>
import allTransactions from '../stores/store.js'

let text = '';
let amount = 0;

const handleSubmit = e => {
    const transaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount
    }
    allTransactions.addTransaction(transaction)
}
</script>

<div>
    <h3>Add new transaction</h3>
        <form on:submit|preventDefault={handleSubmit} >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" bind:value={text} placeholder="Enter text ..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                <input type="number" bind:value={amount} placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
</div>