//Selector for What? (Erin Q)
$("#info").html("<p>The info will go here.</p>");

let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text:  "What", info: "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of What in the first four lines."}, 
    {text: "hurrying"}, {text: "human"}, {text: "tides"}, 
    {text: "or"}, {text: "day"}, {text: "or"}, {text: "night!"}];

// Create a blank string that opens two tags.
line1Text = "<blockquote><p>"; // opening tags for blockquote and p, we close them in the loop below

line1.map(function(word){
  // Add in the word object’s .text property plus a space.
  line1Text = line1Text + word.text + " ";
});
// Break the line and close the two tags.
line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#poem").html(line1Text);

line1.map(function(word){
    // Define a variable that will be the entirety of a single
    // word-sized chunk of information.
    let wordString;
    wordString = word.text;
    // Test to see if the .info property exists.
    if (word.info){
      // Add the data-info attribute to the word.
      wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
    }
    // Add wordString plus a space to the line1Text.
    line1Text = line1Text + wordString + " ";
  });


  $("#poem").html(line1Text);

  $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo; //variables to capture the info text and the clicked text/info
    clickedWord = $( this ).text(); // get the clicked word
    // .data("info") looks for the data-info HTML attribute.
    clickedInfo = $( this ).data("info"); // get the info from the clicked word using .data
    infoText = clickedInfo; // set the info text var to the clicked info
    $("#info").html(infoText); // change the info div to the info text
  });


  