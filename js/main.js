console.log("hi");
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){ 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');

});
searchInputEl.addEventListener('blur',function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');

});

//badge
const badgeEL = document.querySelector('header .badges');

// _.throttle(함수,시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //gsap.to(요소,지속시간, 옵션:보통객체데이터);
    gsap.to(badgeEL, .6 ,{
      opacity: 0,
      display: 'none'
    });
    //배지 숨기기
    //badgeEL.style.display = 'none';
  } else{
    gsap.to(badgeEL, .6 ,{
      opacity: 1,
      display: 'block'
    });

    //배지 보이기
    //badgeEL.style.display = 'block';
  }
},300));

//이미지 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fdaeEl,index){
  gsap.to(fdaeEl, 1, {
    delay: (index+1) * .7,  //0.7 1.4 2.1 2.7
    opacity:1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  //기본값이라 명시하지 않아도 됨 direction
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSliders: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay:{
    delay: 1000

  }
})