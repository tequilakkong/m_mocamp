//visual_wrap 이미지 슬라이드
const swiper = new Swiper('.main_visual', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false 
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


//section1 - theme_recommd_wrap (multiple slide)
const swiper2 = new Swiper(".recommend", {
  slidesPerView: "auto",
  spaceBetween: 8,
  grabCursor: true,
});


//section2 - theme_popular_wrap (tab)
const tabBtn2 = document.querySelectorAll('.theme_popular_wrap .tabs li')
const tabBody2 = document.querySelectorAll('.theme_popular_wrap .tabsBody > div');

tabBtn2.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 5; i++){
            tabBtn2[i].classList.remove('selected');
            tabBody2[i].style.display='none';
        }

        item.classList.add('selected');
        tabBody2[aa].style.display='flex';
    }
});

//section4 - theme_activity_wrap (tab)
const tabBtn3 = document.querySelectorAll('.theme_activity_wrap .tabs li')
const tabBody3 = document.querySelectorAll('.theme_activity_wrap .tabsBody > div');

tabBtn3.forEach(function(item,aa){
    item.onclick = function(e){
        e.preventDefault();

        for(let i = 0; i < 3; i++){
            tabBtn3[i].classList.remove('selected');
            tabBody3[i].style.display='none';
        }

        item.classList.add('selected');
        tabBody3[aa].style.display='flex';
    }
});

//section4 - theme_activity_wrap (slide)
const swiper3 = new Swiper(".activity", {
  slidesPerView: "auto",
  spaceBetween: 8,
  grabCursor: true,
});

const swiper4 = new Swiper(".activity_tab", {
  slidesPerView: "auto",
  spaceBetween: 6,
  grabCursor: true,
});


//section5 - event_banner_wrap (slide)
const swiper5 = new Swiper(".event", {
  slidesPerView: "auto",
  spaceBetween: 8,
  grabCursor: true,
});




// 아래는 사용 보류!!
//section1 -theme_recommd_wrap (multiple slide)
// let curPos = 0;
// let postion = 0;
// let start_x, end_x;
// const IMAGE_WIDTH = 280;
// const images = document.querySelector(".section_01 .item_box") 
 
// images.addEventListener('touchstart', touch_start);
// images.addEventListener('touchend', touch_end);
 
// function prev(){
//   if(curPos > 0){
//     postion += IMAGE_WIDTH;
//     images.style.transform = `translateX(${postion}px)`;
//     curPos = curPos - 1;
//   }
// }
// function next(){
//   if(curPos < 3){
//     postion -= IMAGE_WIDTH;
//     images.style.transform = `translateX(${postion}px)`;
//     curPos = curPos + 1;
//   }
// }
 
// function touch_start(event) {
//   start_x = event.touches[0].pageX
// }
 
// function touch_end(event) {
//   end_x = event.changedTouches[0].pageX;
//   if(start_x > end_x){
//     next();
//   }else{
//     prev();
//   }
// }