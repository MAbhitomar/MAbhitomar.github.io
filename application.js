searchButton.addEventListener('click', TrackOrder);

function TrackOrder() {
   loadingText.style.display = 'block';
    StatusInfo.style.display= 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a Order Id');
         loadingText.style.display ='none';
    }
    var http = new XMLHttpRequest();
    var url = "j.json";
    var method ="GET";
  
    http.open(method,url,true);
    http.setRequestHeader('content-type','application/json');
    http.onreadystatechange = function()
    {
        if(http.readyState=== XMLHttpRequest.DONE && http.status===200)
        {
            var content =JSON.parse(http.responseText);
            content.pDate = new Date(content.pDate);
            content.dDate = new Date(content.dDate);
           
             pickupInfo.innerHTML= "<h2>PickUP Info</h2>"+"Pickup Executive"+" "+content.firstName+"<br>"+"Pickup Executive number"+" "+ content.number+"<br>"+"Pickup Date"+content.pDate;
             RepairInfo.innerHTML =" <h2> Repair Info</h2>"+"It Will have"+" "+content.rTime+"days to Repair"+"<br>"+content.rcomments;
            DeliveryInfo.innerHTML=" <h2> Delivery Info</h2>"+"Delivery Executive"+" "+content.deliveryexecutive+"<br>"+content.dnumber+"<br>"+"Delivery Date"+content.dDate;
            
             loadingText.style.display = 'none';
             StatusInfo.style.display= 'block';
        }
        else if(http.readyState===XMLHttpRequest.DONE && http.status!==200){
            pickupInfo.innerHTML=Error;
        }
    };
    http.send();
    
}