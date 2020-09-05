document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function(){

    fetch('https://api.exchangeratesapi.io/latest?base=USD')


    .then(response=>{
        return response.json()})
    .then(data=>{
        const currency = document.querySelector('#currency').value;
        const rate = data.rates[currency]
        document.querySelector('#result').innerHTML = `1 dollor is equal to ${rate.toFixed(3)} ${currency}`
       
    });



        

        return false;
    }


    


});
