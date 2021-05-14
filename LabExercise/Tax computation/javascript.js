document.getElementById('monthIncome').value;
document.getElementById('dependents').value;

//main function
function calcPayableTax() {

  //Inputs
  var income = document.getElementById('monthIncome').value;
  var dep = document.getElementById('dependents').value;

  //storing as objects
  let objects = {
    monthlyIncome: income,
    dependentsNo: dep,
  }

  //setting objects content to number
  let monthIncome = Number(objects.monthlyIncome);
  let dependents = Number(objects.dependentsNo);
  let main = Number(objects.work)

  //function for ape
  let ape = function(dependents){

    if (dependents <= 4){
      dep =  dependents*50000;
    }
    else if (dependents > 4){
      dep = 200000;
    }
    return dep;
  }

  let apeNum = ape(dependents);

  //function that solves the payable tax depending on their conditions
  let payableTax = function(netTaxableIncome){

      var tax=0;

      if (netTaxableIncome >= 0 && netTaxableIncome <= 250000){
        tax = 0;
      }
      else if (netTaxableIncome > 250000 && netTaxableIncome <= 400000) {
        tax = (netTaxableIncome-250000) * 0.20;
      }
      else if (netTaxableIncome > 400000 && netTaxableIncome <= 800000){
        tax = (netTaxableIncome-400000) * 0.25 + 30000;
      }
      else if (netTaxableIncome > 800000 && netTaxableIncome <= 2000000){
        tax = (netTaxableIncome-800000) * 0.30 +  130000;
      }
      else if (netTaxableIncome > 2000000 && netTaxableIncome <= 8000000){
        tax = (netTaxableIncome-2000000) * 0.32 + 490000;
      }
      else if  (netTaxableIncome > 8000000) {
        tax = (netTaxableIncome-8000000) * 0.35 + 2410000;
      }
      return tax;
    }

    //assigning value to the variables
    let gsis = monthIncome * 0.09;
    let sss = monthIncome * 0.11;
    let pg = monthIncome * 0.01375;
    let ph = monthIncome * 0.035;

  //Government worker
  if (document.getElementById('govWorkYes').checked) {

    let govDeduct = 50000 + apeNum + ((gsis + pg + ph)*12);
    let netTaxableIncome =  (monthIncome*13) - govDeduct;
    let payableTot = payableTax(netTaxableIncome);
    //output of payable tax
    document.getElementById("payableTax").innerHTML = payableTot;
  }
  //non government worker
  else if (document.getElementById('govWorkNo').checked) {

    let privDeduct = 50000 + apeNum + ((sss + pg + ph)*12);
    let netTaxableIncome =  (monthIncome*13) - privDeduct;
    // // Mao ning kailangan para ma run nimo imong function na payableTax
    let payableTot = payableTax(netTaxableIncome);
    //output of payable tax
    document.getElementById("payableTax").innerHTML = payableTot;
  }
}
