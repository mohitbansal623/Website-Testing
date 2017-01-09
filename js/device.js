$(document).ready(function() {
  $(".select_device").change(function() {
    var select=$('.select_device').val();
	if(select == "Select") {
	  $(".display_url").css("visibility","hidden");
	  $("#frame").css("visibility","hidden");
	}

	if(select == "iphone5") {
	  $(".display_url").css({"background-image":"url('images/iphone52.png')","width":"400px","height":"810px","visibility":"visible","margin-left":"200px"});
	  $("#frame").css({"width":"313px", "height":"543px","margin-left":"28px","margin-top":"147px","visibility":"visible"});
	}
	if(select == "iphone6") {
	  $(".display_url").css({"background-image":"url('images/iphone6transparent.png')","height":"400px","visibility":"visible"});
	  $("#frame").css({"width":"152", "height":"266","margin-left":"95px","margin-top":"40px","visibility":"visible"});
	}
	if(select == "motog") {
	  $(".display_url").css({"background-image":"url('images/nexus5.png')","height":"647px","visibility":"visible"});
	  $("#frame").css({"width":"261px", "height":"470px","margin-left":"103px","margin-top":"100px","visibility":"visible"});
	}
	if(select == "nexus5") {
	  $(".display_url").css({"background-image":"url('images/nexus5.png')","height":"647px","visibility":"visible"});
	  $("#frame").css({"width":"261px", "height":"470px","margin-left":"103px","margin-top":"100px","visibility":"visible"});
    }
});

 $(".submit").click(function(){
   var select=$('.select_device').val();	
   var textvalue=$('.url').val();
   console.log(select+"    "+textvalue);
   if(select == "iphone5") {
     $("#frame").attr("src", textvalue);	
   }
   if(select == "iphone6") {
     $("#frame").attr("src", textvalue);	
   }	
   if(select == "motog") {
     $("#frame").attr("src", textvalue);	
   }	
   if(select == "nexus5") {
	 $("#frame").attr("src", textvalue);	
   }		
 });
});