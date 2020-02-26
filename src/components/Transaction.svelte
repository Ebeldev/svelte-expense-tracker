<script>
    export let transaction
    const sign = transaction.amount < 0 ? '-' : '+'
    const transactionClass = transaction.amount < 0 ? 'minus' : 'plus'
</script>

<li class={transactionClass}>{transaction.text}<span>{sign}{Math.abs(transaction.amount)}</span></li>