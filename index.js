
$(document).ready(function() {
    var marks = 0;
    $("label").click(function(){
        $(this).parent().addClass("disabled");
        
        // get id of the selected option
        var id = $(this).attr('id');

        // get id of the correct option
        var correct = $(this).parent().find('div#correctoption').html();
        
        // check if it is true
        if(id === correct) {
            $(this).addClass("correct");
            marks = marks + 1;
        }
        else {
            $(this).addClass("incorrect");
        }
        value = $("#myMeter").val();
        value++;
        $("#myMeter").val(value); 

        // replace 20 by the maximum value of the meter
        if ($("#myMeter").val() == 20) {
            alert("You scored " + marks/2 + "/10");
        }

    $('html, body').animate({
        scrollTop: $(this).parent().next().offset().top-100}, 500);
    });

    
    
    $(window).scroll(function() 
    {
        if ($(this).scrollTop() > 100)
        {
        $('#myMeter').addClass("sticky_header");
        }
        else
        {
        $('#myMeter').removeClass("sticky_header");
        }
    });

})