const zmw_to_one_usd = fetch('https://v6.exchangerate-api.com/v6/7d21bef9faea7530fc25e5f4/latest/USD')
.then(response => response.json());


function usd_five_percent_reduced() {    

           zmw_to_one_usd.then(data => {
                    // console.log(data.conversion_rates.ZMW);
                     document.getElementById("price").innerHTML = "Aproximately  $"
                  +  (zmw_five_percent_reduced(zmwCharge(2000))/ data.conversion_rates.ZMW)
                     .toFixed(2);
                   })
}


function usd_eight_percent_reduced() {    

  zmw_to_one_usd.then(data => {
           
            document.getElementById("price").innerHTML = "Aproximately  $"
         +  (zmw_eight_percent_reduced(zmwCharge(2000))/ data.conversion_rates.ZMW)
            .toFixed(2);
          })
}



function zmwCharge(zmw_charge){
  return zmw_charge;
}



function prices()
{
  const zmw_charge = zmwCharge(2000);
 var country = document.getElementById("country").value;

if (country =="Zambia") {

  var number_Of_Tourist = document.getElementById("numberOfTourists").value;

  if (20 <= number_Of_Tourist && 40 >= number_Of_Tourist) {
    document.getElementById("price").innerHTML= "K" +  zmw_five_percent_reduced(zmw_charge); ;
   
   }
   else if(number_Of_Tourist > 40 ){
    document.getElementById("price").innerHTML= "K" +  zmw_eight_percent_reduced(zmw_charge)  ;
    
   }
 else{
   document.getElementById("price").innerHTML= "K" + zmw_charge;
   };
  }


else if(country !=="Zambia") {

    var number_Of_Tourist = document.getElementById("numberOfTourists").value;
    
     if (20 <= number_Of_Tourist && 40 >= number_Of_Tourist) {
      
      usd_five_percent_reduced();
     }
     else if(number_Of_Tourist > 40 ){
      usd_eight_percent_reduced();
     }
   else{
      usd_price(zmw_charge);
     };
    }
   

}

function usd_price(zmw_charge){
  
 return zmw_to_one_usd.then(data => {
  data.conversion_rates.ZMW 
   document.getElementById("price").innerHTML = "Approximately $" 
   + (zmw_charge/data.conversion_rates.ZMW).toFixed(2);
   })
}


function zmw_five_percent_reduced(charge){
  charge -= 0.05*charge;
  console.log(charge.toFixed(2));
  return charge.toFixed(2);
}

function zmw_eight_percent_reduced(charge){
    charge -= 0.08*charge;
    console.log(charge.toFixed(2));
    return  charge.toFixed(2);
  }




