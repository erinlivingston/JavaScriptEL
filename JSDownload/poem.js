//Part 1 - Define the extra information section for the poem
$("#info").html("<p>Extra info will go here.</p>");



// Part 2 - Display the first line of the poem and access info from the poem object if it exists
$.getJSON("poem.json", function(data){
  let poemText;
  poemText = "<blockquote><p>";
  data.lines.map(function(line){
    let lineText = "";
    line.map(function(word){
      let wordString;
      wordString = word.text;
      if (word.info){
        wordString = "<a href='#' data-info='" + word.info + 
        "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    poemText = poemText + lineText + "<br/>";
  });
  poemText = poemText + "</p></blockquote>";
  $("#poem").html(poemText);

  //click event added to poem
  $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    infoText = clickedInfo;
    $("#info").html(infoText);

  });
});






  