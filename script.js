function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;

    // Principal validation
    if(!(principal > 0)){ // if principal is not more than 0
          alert("Enter a positive number");
          return; // do not continue executing
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result =  document.getElementById("result")
    result.innerHTML =
        `If you deposit ${principal},<br>
        at an interest rate of ${rate}.<br>
        You will receive an amount of ${interest},<br>
        in the year ${year}<br>`
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
