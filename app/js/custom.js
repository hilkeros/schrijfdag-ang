$(document).ready(function(){
  $(".panel-click").click(function(){
    $(this).closest(".patat").find(".filler").removeClass("col-md-6");
    $(this).closest(".patat").find(".filler").addClass("col-md-3");
    $(this).closest(".col-xs-12").removeClass("col-md-3");
    $(this).closest(".col-xs-12").addClass("col-md-6");
    $(this).closest(".panel").css("width", "100%");
    $(this).parents(".panel").find(".description").fadeIn("slow");
    $(this).parents(".panel").find(".bio").fadeIn("slow");
  });

  $(".hoedje").click(function(){
    $(this).closest(".patat").find(".filler").removeClass("col-md-3");
    $(this).closest(".patat").find(".filler").addClass("col-md-6");
    $(this).closest(".col-xs-12").removeClass("col-md-6");
    $(this).closest(".col-xs-12").addClass("col-md-3");
    $(this).closest(".panel").css("width", "260px");
    $(this).parents(".panel").find(".description").hide();
    $(this).parent(".bio").hide();
  });
})
