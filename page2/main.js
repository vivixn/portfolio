var points = [
  {
    "name": "&nbsp&nbsp <a href='images/pace.png'>pace gallery guide</a>",
    "emoji":"🎨",
    "pic":"<a href='images/pace.png'><img src='images/1.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/sweetgreenvis.jpeg'>anatomy of sweetgreen</a>",
    "emoji":"🥗",
    "pic":"<a href='images/sweetgreenvis.jpeg'><img src='images/4.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/Momabrochure.pdf'>moma handles brochure</a>",
    "emoji":"🖼️",
    "pic":"<a href='images/Momabrochure.pdf'><img src='images/5.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/bakebook.pdf'>typeset recipe book</a>",
    "emoji":"🍰",
    "pic":"<a href='images/bakebook.pdf'><img src='images/3.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/tie.jpeg'>how to tie a tie</a>",
    "emoji":"👔",
    "pic":"<a href='images/tie.jpeg'><img src='images/10.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/debatefinal.pdf'>wim crouwel vs. van toorn</a>",
    "emoji":"🤼",
    "pic":"<a href='images/debatefinal.pdf'><img src='images/8.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/colorfilm.pdf'>color 35mm</a>",
    "emoji":"🍭",
    "pic":"<a href='images/colorfilm.pdf'><img src='images/6.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/bwfilm.pdf'>b/w 35mm</a>",
    "emoji":"🎞️",
    "pic":"<a href='images/bwfilm.pdf'><img src='images/7.png' width='100%' height='100%'></a>",
  },
  {
    "name":"&nbsp&nbsp <a href='images/digitalpics.pdf'>digital photography</a>",
    "emoji":"📷",
    "pic":"<a href='images/digitalpics.pdf'><img src='images/2.png' width='100%' height='100%'></a>",
  },
   {
    "name":"&nbsp&nbsp <a href='images/vid2.mp4'>videography</a>",
    "emoji":"📹",
    "pic":"<a href='images/vid2.mp4'><img src='images/11.png' width='100%' height='100%'></a>",
  },
   {
    "name":"&nbsp&nbsp <a href='images/wtc2.pdf'>wtc socials + oculus signage</a>",
    "emoji":"🍎",
    "pic":"<a href='images/wtc2.pdf'><img src='images/12.png' width='100%' height='100%'></a>",
  },
   {
    "name":"&nbsp&nbsp <a href='images/wtc1.pdf'>wtc merchandise</a>",
    "emoji":"👕",
    "pic":"<a href='images/wtc1.pdf'><img src='images/9.png' width='100%' height='100%'></a>",
  },]

 for(var i=0; i<points.length; i++){
    var fruitDiv = $('<div/>', {
        'class': 'hoverBox'
      })
      .html(
         points[i].pic
         )
      .css({'left': Math.floor(Math.random() * 90) + "%",
          'top': Math.floor(Math.random() * 90) + "%"})
      .hover(function(){
        $(this).css({'opacity': .95 })
        .html(
        points[i].pic

        )
      })

    $('body').append(fruitDiv)
  }


points.forEach(function(points){
$("#info").append("<div class=name>"+ points.name+ "</div>"+ "<div class=emoji>"+points.emoji+"</div>")
})


