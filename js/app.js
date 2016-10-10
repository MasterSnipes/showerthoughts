$(function(){
$('#button').click(function(){
$.getJSON(
  "https://www.reddit.com/r/showerthoughts.json",
  function foo(data)
  {
    var postNum = Math.floor(Math.random() * data.data.children.length);
    if(!data.data.children[postNum].data.stickied && !data.data.children[postNum].data.over_18){
	$('#reddit-content').html('<h4><a href="'+ data.data.children[postNum].data.url + '"> ' + data.data.children[postNum].data.title + "</a></h4>");
	}
  }
);
});
});
