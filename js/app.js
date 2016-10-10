$(function(){
$('#button').click(function(){
$.getJSON(
  "http://www.reddit.com/r/showerthoughts.json",
  function foo(data)
  {
    // $.each(
    //   data.data.children,
    //   function (i, post) {
    //     if(!post.data.stickied){

    //     $("#reddit-content").append( '<hr>' + post.data.title );
    //   }
    //   }
    // )
    var postNum = Math.floor(Math.random() * data.data.children.length);
    if(!data.data.children[postNum].data.stickied){
	$('#reddit-content').html('<a href="'+ data.data.children[postNum].data.url + '"> ' + data.data.children[postNum].data.title + "</a>");
	}
  }
);
});
});