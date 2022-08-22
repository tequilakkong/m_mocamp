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


//메뉴 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn_menu_all").addEventListener("click", function(e){
      if (document.querySelector(".menu_wrap").classList.contains("on")) {
        //메뉴 slide
        document.querySelector(".menu_wrap").classList.remove("on");
        document.getElementById("btnAll").src = "assets/img/icon/icon_hamburger_menu_thin.svg"; 
        document.querySelector(".btn_menu_all_icon").classList.remove("btnRotate");
      } else {
        //메뉴 slideIn
        document.querySelector(".menu_wrap").classList.add("on");
        document.getElementById("btnAll").src = "assets/img/icon/icon_close_thin.svg"; //문자 그대로를 바꿔주므로 경로는 동일하게 입력
        document.querySelector(".btn_menu_all_icon").classList.add("btnRotate");
      }
    });
});
//출처: https://pannchat.tistory.com/entry/javascript-left-slide-menubar-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%A9%94%EB%89%B4%EB%B0%94-%EB%A7%8C%EB%93%A4%EA%B8%B0


//아코디언 메뉴
// var tgMenu = document.getElementsByClassName("toggle_menu"); //아코디언클래스리스트를 가져온다.
// var i;

// for (i = 0; i < tgMenu.length; i++) {
//   tgMenu.addEventListener('click', function() {
//     document.querySelector('.collapsible').classList.toggle('open');
//   });
  
// };
//출처: https://juein.tistory.com/42


//출처: https://s00741.tistory.com/entry/자바스크립트-아코디언-accordion-javascript [꿈꾸는 자:티스토리]

//뭔가 단순 한가지 기능이 여러개에 적용되어 있을때는 대부분 for문을 사용해야하는 경우가 많다...

















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


