import {writable, derived} from 'svelte/store'

// const store = () => {
//     let transactions = [
//         {id:1, text:'Flower', amout:5.00},
//         {id:2, text:'Flowers', amout:15.00},
//         {id:3, text:'Flowerss', amout:25.00},
//     ]

//     const { subscribe, set, update} = writable(transactions)

//     // const methods = {
//     //     allTransactions(){
//     //         update(state => {
//     //             console.log('state')
//     //             console.log(state)
//     //         })
//     //     }
//     // }



//     return {
//         subscribe,
//         set,
//         update,
//         allTransactions: ()=> update(n => console.log(n))
//         // ...methods
//     }
// }

/**
 * V2
 */
// V2 Test
// inspiration https://codesandbox.io/s/todo-store-all-tuhjq
const transactions = writable([])

const allTransactions = {
    subscribe: transactions.subscribe,
    addTransaction: (transaction) => 
        transactions.update(transactions_ => [
            ...transactions_,
            {
                id: transaction.id,
                text: transaction.text,
                amount: transaction.amount  
            }
        ]),
};

export const balance = derived(allTransactions, ($allTransactions)=> {
    let fullAmount = 0
    $allTransactions.forEach((each)=>{
        fullAmount += each.amount
    })
    return fullAmount
});

// const amounts = allTransactions.map(each => each.amount)

export const income = derived(allTransactions, ($allTransactions) => {

    const amounts = $allTransactions.map(each => each.amount)

    return amounts
            .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
})

export const expense = derived(allTransactions, ($allTransactions) => {
    const amounts = $allTransactions.map(each => each.amount)

    return (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        * -1
        )
        .toFixed(2)
})

export default allTransactions