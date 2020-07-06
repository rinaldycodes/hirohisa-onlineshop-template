      $('.form-group').on('input','.prc',function(){
        var totalSum = 0;
        $('.form-group .prc').each(function(){
          var inputVal = $(this).val();
          if($.isNumeric(inputVal)){
            totalSum += parseFloat(inputVal);
          }
        });
        $('#result').val(totalSum);
      });

