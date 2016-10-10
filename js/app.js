$(function(){
$('#button').click(function(){
$.getJSON(
  "https://www.reddit.com/r/showerthoughts.json",
  function foo(data)
  {
    var postNum = Math.floor(Math.random() * data.data.children.length);
    if(!data.data.children[postNum].data.stickied && !data.data.children[postNum].data.over_18){
	$('#reddit-content').html('<h4><a href="'+ data.data.children[postNum].data.url + '"> ' + data.data.children[postNum].data.title + '</a></h4><div class="row"><div class="container"><div class="col s4"><p>/u/' + data.data.children[postNum].data.author + '</p></div><div class="col s4"><p><i class="material-icons">thumb_up</i> ' + data.data.children[postNum].data.ups + '</p></div><div class="col s4"><p><i class="material-icons">chat</i> ' + data.data.children[postNum].data.num_comments + '</p></div></div></div>');
	}
  }
);
});
});
