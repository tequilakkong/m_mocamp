//visual_wrap 이미지 슬라이드
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    autoplay: {
        delay: 3000,
        disableOnInteraction: false //*memo*
                                    //autoplay: true;로 옵션 설정을 했을 시, 슬라이더가 자동으로 멈추는 현상이 있음
                                    //이는 default로 자동 멈춤을 해놓았기 때문! 
                                    //autoplay 옵션을 변경하면 swiper-pagination-bullet swiper-button-next swiper-button-prev 를 클릭 했을 때 슬라이더 자동 멈춤이 사라진다.
    }

  });


//section1 -theme_recommd_wrap (multiple slide)
let curPos = 0;
let postion = 0;
let start_x, end_x;
const IMAGE_WIDTH = 375;
const images = document.querySelector(".images") 
 
images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);
 
function prev(){
  if(curPos > 0){
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
}
function next(){
  if(curPos < 3){
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
}
 
function touch_start(event) {
  start_x = event.touches[0].pageX
}
 
function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    next();
  }else{
    prev();
  }
}