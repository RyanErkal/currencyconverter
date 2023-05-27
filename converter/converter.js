// var myHeaders = new Headers();
// myHeaders.append("apikey", "TfTL9pRJXI4BWjIP6cAJirmbisPA3HCe");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// let jsonDate = fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=GBP%2CEUR%2CJPY%2CCHF&base=USD", requestOptions) // Make a request to the API
//   .then(response => response.text()) // Extract the body of the response as text
//   .then(result => console.log("json: ",result)) // Log the response body to the console
//   .catch(error => console.log('error', error)); // Log any errors to the console

//get elements
let input = document.getElementById('input');
let inputlist = document.getElementById('inputlist');
let outputlist = document.getElementById('outputlist');
let output = document.getElementById('output');
let convert = document.getElementById('convert');

//add event listeners
//input.addEventListener('keyup', convert);
//inputlist.addEventListener('change', convert);
//outputlist.addEventListener('change', convert);
convert.addEventListener('click', conversion);

let myFakeJson = '{"EUR":1.0,"GBP":0.86,"USD":1.21,"JPY":132.0,"CHF":1.1}';
let result = JSON.parse(myFakeJson);
console.log("result: ", result);
let EUR = result.EUR;
let GBP = result.GBP;
let USD = result.USD;
let JPY = result.JPY;
let CHF = result.CHF;

//convert from one currency to another
function conversion(){
    //get the amount to convert
    let amount = input.value;
    //get the input currency
    let inputCurrency = inputlist.value;
    //get the output currency
    let outputCurrency = outputlist.value;
    //get the conversion rate
    if(inputCurrency == 'EUR'){
        if(outputCurrency == 'EUR'){
            output.value = amount;
        }else if(outputCurrency == 'GBP'){
            output.value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            output.value = amount * EUR;
        }else if(outputCurrency == 'JPY'){
            output.value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            output.value = amount * CHF;
        }
    }else if(inputCurrency == 'GBP'){
        if(outputCurrency == 'EUR'){
            output.value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            output.value = amount;
        }else if(outputCurrency == 'USD'){
            output.value = amount * GBP;
        }else if(outputCurrency == 'JPY'){
            output.value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            output.value = amount * CHF;
        }
    }else if(inputCurrency == 'USD'){
        if(outputCurrency == 'EUR'){
            output.value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            output.value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            output.value = amount;
        }else if(outputCurrency == 'JPY'){
            output.value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            output.value = amount * CHF;
        }
    }else if(inputCurrency == 'JPY'){
        if(outputCurrency == 'EUR'){
            output.value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            output.value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            output.value = amount * USD;
        }else if(outputCurrency == 'JPY'){
            output.value = amount;
        }else if(outputCurrency == 'CHF'){
            output.value = amount * CHF;
        }
    }else if(inputCurrency == 'CHF'){
        if(outputCurrency == 'EUR'){
            output.value = amount * EUR;
        }else if(outputCurrency == 'GBP'){
            output.value = amount * GBP;
        }else if(outputCurrency == 'USD'){
            output.value = amount * USD;
        }else if(outputCurrency == 'JPY'){
            output.value = amount * JPY;
        }else if(outputCurrency == 'CHF'){
            output.value = amount;
        }
    }
}