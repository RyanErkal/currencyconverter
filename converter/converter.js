var myHeaders = new Headers();
myHeaders.append("apikey", "TfTL9pRJXI4BWjIP6cAJirmbisPA3HCe");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=GBP%2CEUR%2CJPY%2CCHF&base=USD", requestOptions) // Make a request to the API
  .then(response => response.text()) // Extract the body of the response as text
  .then(result => console.log("json: ",result)) // Log the response body to the console
  .catch(error => console.log('error', error)); // Log any errors to the console

let result = await response.json();
console.log("result: ", result);

//convert from one currency to another
function convert(){
    //get the amount to convert
    let amount = document.getElementById('input').value;
    //get the input currency
    let inputCurrency = document.getElementById('inputcurrency').value;
    //get the output currency
    let outputCurrency = document.getElementById('outputcurrency').value;
    //get the conversion rate
    if(inputCurrency == 'EUR'){
        if(outputCurrency == 'EUR'){
            document.getElementById('output').value = amount;
        }else if(outputCurrency == 'GBP'){
            document.getElementById('output').value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            document.getElementById('output').value = amount * EUR;
        }else if(outputCurrency == 'JPY'){
            document.getElementById('output').value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            document.getElementById('output').value = amount * CHF;
        }
    }else if(inputCurrency == 'GBP'){
        if(outputCurrency == 'EUR'){
            document.getElementById('output').value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            document.getElementById('output').value = amount;
        }else if(outputCurrency == 'USD'){
            document.getElementById('output').value = amount * GBP;
        }else if(outputCurrency == 'JPY'){
            document.getElementById('output').value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            document.getElementById('output').value = amount * CHF;
        }
    }else if(inputCurrency == 'USD'){
        if(outputCurrency == 'EUR'){
            document.getElementById('output').value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            document.getElementById('output').value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            document.getElementById('output').value = amount;
        }else if(outputCurrency == 'JPY'){
            document.getElementById('output').value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            document.getElementById('output').value = amount * CHF;
        }
    }else if(inputCurrency == 'JPY'){
        if(outputCurrency == 'EUR'){
            document.getElementById('output').value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            document.getElementById('output').value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            document.getElementById('output').value = amount * USD;
        }else if(outputCurrency == 'JPY'){
            document.getElementById('output').value = amount;
        }else if(outputCurrency == 'CHF'){
            document.getElementById('output').value = amount * CHF;
        }
    }else if(inputCurrency == 'CHF'){
        if(outputCurrency == 'EUR'){
            document.getElementById('output').value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            document.getElementById('output').value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            document.getElementById('output').value = amount * USD;
        }else if(outputCurrency == 'JPY'){
            document.getElementById('output').value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            document.getElementById('output').value = amount;
        }
    }
}


//add event listeners
document.getElementById('convert').addEventListener('click', convert);
document.getElementById('input').addEventListener('keyup', convert);
document.getElementById('inputcurrency').addEventListener('change', convert);
document.getElementById('outputcurrency').addEventListener('change', convert);