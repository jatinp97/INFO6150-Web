$(document).ready(()=>{
    $('#add').click(()=>{
      var num1 = parseFloat($("#num1").val());
      var num2 = parseFloat($("#num2").val());
      var num3=num1+num2;
      document.forms.display.value = num3 ;
    });
  
    $('#subs').click(()=>{
      var num1 = parseFloat($("#num1").val());
      var num2 = parseFloat($("#num2").val());
      var num3=num1-num2;
      document.forms.display.value = num3 ;
    });
  
    $('#divide').click(()=>{
      var num1 = parseFloat($("#num1").val());
      var num2 = parseFloat($("#num2").val());
      var num3=num1/num2;
      document.forms.display.value = num3 ;
    });
  
    $('#multi').click(()=>{
      var num1 = parseFloat($("#num1").val());
      var num2 = parseFloat($("#num2").val());
      var num3=num1*num2;
      document.forms.display.value = num3 ;
    });
  
    
  
  })