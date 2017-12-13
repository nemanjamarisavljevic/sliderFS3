let ul = $('ul'),
    images = $('img'),
    current = 1,
    imgLen = images.length,
    btns = $('button'),
    imgWidth = images.eq(0).width();

    btns.on('click', function() {
      let dir = $(this).data('dir'),
          w = imgWidth;
      (dir == 'next') ? ++current : --current;
      if (current == 0) {
        current = imgLen;
        dir = "next";
        w = (imgLen * imgWidth) - imgWidth;
      }
      if (current == imgLen + 1) {
        current = 1;
        dir = 'prev';
        w = 0;
      }
      slideUl(dir,w)
    });
function slideUl(dir,w) {
  let u;
  if (dir == "next" && w != 0) {
    u = "-=";
  }else if(dir == "prev" && w != 0){
    u = "+=";
  }
  ul.animate({
    'margin-left' : u ? u+w : w
  }, 1000)
}
