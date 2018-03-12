/* add styles
$("h3").css({border:"3px solid blue"});
$(".wrapper").css({border:"5px solid red"});
$("#clients").css({border:"4px solid yellow"});*/

/* first and last
$("header nav li:first").css({ border:"2px solid red"});
$("header nav li:last").css({ border:"2px solid red"});
*/

/*$("contact ul:first").css({border: "2px solid red"});

$("header nav li:even").css({border:" 2px solid yellow"});

$("div[class]").css({border:" 2px solid yellow"});*/

/*in one line changed css for 2 elements
$("#contact-methods").css({border:"2px solid red"})
    .next().css({border:"2 px solid green"})
    .closest("section").css ({ border:"2px solid blue"});


/*text content on div- przed ,za ,nastepny, tekst itp
var tweet= "<div> the big metter</div>"
$("#tweets div").append(tweet);
$("#tweets div").prepend(tweet);
$("#tweets div p").before(tweet);
$("#tweets div p").after(tweet);
$("#tweets div p").html(tweet);
$("#tweets div p").text(tweet);

/*removing- usuwanie konkretnych elementow z html'a
$("#contact-methods").empty();
$("#social-nav").remove();

$("#social-nav").css("top")

-------------------------ONE MORE TIME-------------------1-7
/*$("h3").css({border:'3px solid blue'});
$(".wrapper").css({border:'3px solid red'});
$("#clients").css({border:"3px solid yellow"});

$("header nav li:first").css({border:"2px solid red"});
$("header nav li:last").css({border:"2px solid red"});

/*first child-last child
$("content ul:first- child").css({border:"2px solid blue"});
$("content ul:last- child").css({border:"2px solid blue"});

$("#social-nav ").css({border: "2px solid green"});

/*css style
$("div class").css({border:"4px solid pink"});

/* add and remove content of element*/
/*
$('.button').empty();
$('points-of-sale').empty();
*/

/* atrr with special value

 */
$("img[alt = quote]").css({border:"10 px border purple"});


/*$("#contact-methods").next().css({border:"3px solid red"});
$("#contact-methods").prev().css({border:"3px solid red"});

/*parent*/

/*$("#banner-title").parents().css({border:"4px solid red"});
$("#social-nav").children().css({border:"4px solid red"});

$("#contact").find(".facebook").css({border:"4px solid red"});

/*remove attribute*/
$("contact img").atrr("alt");
$('contact img').remove("alt");
/* add and remove content of element*/

/* add and remove class*/
$('header .wrapper').removeClass("wrapper");
$(header > div).addClass("wrapper");

/*change Classes*/
var button= $("lead-banner a");
button[0].onclick= function () {
    $("#points-of-sale").toggleClass("open");
    return false;
}

/*bind of events

var myLis= $("#points-of-sale li");
myLis.on("click", function(){
    $(this).css({"background":"pink"});

});*/