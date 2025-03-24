alert('My project is going to be awesome!');
$("#noShow").hide();
$("h1").html("current thoughts"); // changes all h1 tags on the page

$("#love").append("<p> More thoughts loading ... <br /> just kidding, too sleepy")

//modify css styles for a button
$("#toggleThoughts").css({
    "background-color": "yellow",
    "color": "black",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});
// preferred to style within the CSS stylesheet 
// but JavaScript is capable too 

$("#toggleThoughts").click(function() {
    $("#love").toggle();
  });