var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quote = '', author='';
function openURL(){
  var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" -' + author);
   window.open(url);
}
function getQuote(){
  $.ajax({
    headers:{
      "X-Mashape-key":"r7ciesfYnFmsh4455gxRzX4vkuTDp1VsBVSjsnnzRSDDnNX0Wi",
      "Content-Type":"application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
    success: function(response){
      var body = JSON.parse(response);
      quote = body.quote;
      author = body.author;
      if(quote.split("").length > 125) getQuote();
      else{
        $(".text-box").animate(
          {opacity: 0},
          500,
          function(){
          $(this).animate({opacity:1},500);
          $("#text").html(quote);
        });
        $(".author-box").animate(
          {opacity: 0},
          500,
          function(){
          $(this).animate({opacity:1},500);
          $("#author").html(author);
        });
          var color= Math.floor(Math.random()*colors.length);
          $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
        $(".btn-circle").animate({
        backgroundColor: colors[color]
      }, 1000);
      }

    }
  });
}
$(document).ready(function(){
  getQuote();
  $(".new").click(getQuote);
  $(".tweet").click(openURL);
  
  
});