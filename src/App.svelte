<script>
	import Header from './components/Header.svelte'
	import Balance from './components/Balance.svelte'
	import IncomeExpenses from './components/IncomeExpenses.svelte'
	import  TransactionList  from './components/TransactionList.svelte';
	import  AddTransaction  from './components/AddTransaction.svelte';
</script>

<main>
	<Header />
	<div class="container">
		<Balance />
		<IncomeExpenses />
		<TransactionList />
		<AddTransaction />
	</div>
</main>