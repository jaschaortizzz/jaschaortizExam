$(document).ready(function(){

      $("#filterBtn").click(function(){
        $("#resultTableContainer").toggle();
        $("#resultFilterContainer").toggle();
        
      });

      $("#closeFilter").click(function(){
        $("#resultTableContainer").show();
        $("#resultFilterContainer").hide();
      });

      $("#searchBtn").click(function(){
        var searchVal = $("#searchInput").val();
        if (searchVal == "Hospital") {
            $(".trContainer").hide();
            $("#trHospital").show();
        }
        if (searchVal == "") {
            $(".trContainer").show();
        }
        alert(searchVal);
        $("#searchInput").val("");
        
      });

      $("#btnDropdown").change(function(){
        var dropdown = $('#btnDropdown option:selected').text();
        alert(dropdown);
     });

     $("#mapView").click(function (e) { 
      $("#mapView").addClass("active");
      $("#listView").removeClass("active");
      $("#mapView").removeClass("inactive");
      $("#mapMobile").show();
      $("#tableContainer").hide();
      e.stopPropagation();
    });

    $("#listView").click(function (e) { 
      $("#listView").addClass("active");
      $("#mapView").removeClass("active");
      $("#tableContainer").show();
      $("#mapMobile").hide();
      e.stopPropagation();
    });

    $(window).on('resize',function(){
      if($(this).width() > 801){
        $("#listView").addClass("active");
        $("#mapView").addClass("inactive");
        $("#mapView").removeClass("active");
        $("#tableContainer").show();
        $("#mapMobile").hide();
        e.stopPropagation();
      }
  });

});