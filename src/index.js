const showAccount = document.querySelector('.hide-Account')
const accountBalance =  document.querySelector('.account-balance')
const cashbackText = document.querySelector('.cashback-text')
showAccount.addEventListener('click',()=>{
 showAccount.classList.toggle('show-Account')
 if(cashbackText.innerText === '****'){
    cashbackText.innerText = 'Nibo?'
 }else{
    cashbackText.innerText = '****'
 };

 if(accountBalance.innerText === '****'){
    accountBalance.innerText = '₦OTHING DEY'
 }else(
    accountBalance.innerText = '****'
 )
})
