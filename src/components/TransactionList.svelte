<script>
import allTransactions from '../stores/store.js'

import Transaction from './Transaction.svelte'
</script>

<div>
    <h3>History</h3>
        <ul class="list">
            {#each $allTransactions as transaction }
                <Transaction transaction={transaction}/>
            {/each}
        </ul>  
</div>