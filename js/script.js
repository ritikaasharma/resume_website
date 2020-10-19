mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/*$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});*/
$("body").on("profile", "img", function(e) {
  return false;
});

//to show loading icon
var showLoading = function (selector) {
  var html = "<div class='content'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

/**to shut the menu when user taps on something else**/
 $(document).ready(function(){
        // Show hide popover
        $(".navbar-toggle").click(function(){
            $(this).find(".collapse navbar-collapse").slideToggle("fast");
        });
});
$(document).on("click", function(event){
        var $trigger = $(".navbar-toggle");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".collapse navbar-collapse").slideUp("fast");
        }            
});


