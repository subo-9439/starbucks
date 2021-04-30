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
    //gsap.to(요소,지속시간, 옵션);
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