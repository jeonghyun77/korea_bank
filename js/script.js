


$(function(){
    $(".ms_inner>ul:last").prependTo(".ms_inner>ul");
    $(".right").click(function(){
        $(".ms_inner>ul").animate({marginLeft:"-=500px"},1000,function(){
            $(".ms_inner>ul>li:first").appendTo(".ms_inner>ul");
            $(".ms_inner>ul").stop(false, false).css("margin-left", "0px");
        })
     
    });
    
    $(".left").click(function(){
        $(".ms_inner_box>ul").animate({marginLeft:"+=500px"},1000,function(){
            $(".ms_inner_box>ul>li:first").appendTo(".ms_inner_box>ul");
            $(".ms_inner_box>ul").stop(false, false).css("margin-left", "0px");
        })
      
    });
    
    
}); 







