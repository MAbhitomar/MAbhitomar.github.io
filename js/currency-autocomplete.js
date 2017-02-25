$(function(){
  var currencies = [
    { value: 'Afghan', data: 'AFN' },
    { value: 'Zimbabwean', data: 'ZWD' }, 
      { value: 'Indian', data: 'IND' }
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#city').autocomplete({
    lookup: currencies
   // onSelect: function (suggestion) {
     // var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + //suggestion.data;
      //$('#outputcontent').html(thehtml);
    //}
  });
  

});