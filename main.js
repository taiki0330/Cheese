'use strict'




// それぞれのセレクターを取得
const header = document.querySelector('.header');

const btnScrollToAbout = document.querySelector('.link_about');
const btnScrollToCourse = document.querySelector('.link_course');
const btnScrollToNews = document.querySelector('.link_news');
const btnScrollToAccess = document.querySelector('.link_access');
const btnScrollToContact = document.querySelector('.link_contact');
const btnScrollToTop = document.querySelector('.return_top');

const main = document.querySelector('.mainbisual');
const about = document.querySelector('.about');
const course = document.querySelector('.course');
const news = document.querySelector('.news');
const access = document.querySelector('.access');
const contact = document.querySelector('.contact');


// セクションフェードイン
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});



// ハンバーガーメニュー
const headerNav = document.querySelector('.header_nav');
const toggleBtn = document.querySelector('.toggle_btn');
const mask = document.querySelector('.mask');

toggleBtn.addEventListener('click', function() {
      headerNav.classList.toggle('open');
      toggleBtn.classList.toggle('open')
      mask.classList.toggle('open');
})


mask.addEventListener('click', function() {
      headerNav.classList.toggle('open');
})


// 各セクションにスクロール
btnScrollToAbout.addEventListener('click', function(e) {
      const aboutcoords = about.getBoundingClientRect();
      
      // console.log(aboutcoords);
      // console.log(e.target.getBoundingClientRect());
      // // スクロールしたときのx座標、y座標
      // console.log(window.pageXOffset, pageYOffset);
      // // 現在のウィンドウの高さ、幅
      // console.log(document.documentElement.clientHeight, 
      //             document.documentElement.clientWidth);

      // window.scrollTo({
      //       left: aboutcoords.left, 
      //       top: aboutcoords.top,
      //       behavior:'smooth',
      // });

      about.scrollIntoView({ behavior: 'smooth' });
});
btnScrollToCourse.addEventListener('click', function(e) {
      const coursecoords = course.getBoundingClientRect();
      
      // window.scrollTo({
      //       left: coursecoords.left, 
      //       top: coursecoords.top,
      //       behavior:'smooth',
      // });
      course.scrollIntoView({ behavior: 'smooth' });

});
btnScrollToNews.addEventListener('click', function(e) {
      const newscoords = news.getBoundingClientRect();
      // window.scrollTo({
      //       left: newscoords.left, 
      //       top: newscoords.top,
      //       behavior:'smooth',
      // });
      news.scrollIntoView({ behavior: 'smooth' });
});
btnScrollToAccess.addEventListener('click', function(e) {
      const accesscoords = access.getBoundingClientRect();
      
      // window.scrollTo({
      //       left: accesscoords.left, 
      //       top: accesscoords.top,
      //       behavior:'smooth',
      // });
      access.scrollIntoView({ behavior: 'smooth' });
});
btnScrollToContact.addEventListener('click', function(e) {
      const contactcoords = contact.getBoundingClientRect();
      
      // window.scrollTo({
      //       left: contactcoords.left, 
      //       top: contactcoords.top,
      //       behavior:'smooth',
      // });
      contact.scrollIntoView({ behavior: 'smooth' });
});
btnScrollToTop.addEventListener('click', function(e) {
      main.scrollIntoView({ behavior: 'smooth' });      
})


// モザイク画像
// const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets)

// const loadImg = function(entries, observer) {
//       const [entry] = entries;
//       console.log(entry)

//       if(!entry.isIntersecting) return;
//       entry.target.src = entry.target.dataset.src;
//       entry.target.addEventListener('load', function() {
//             entry.target.classList.remove('lazy-img');
//             entry,target.classList.add('fukkeikunn')
//       });
//       observer.unobserve(entry.target);
// }

// const imgObserver = new IntersectionObserver(loadImg, {
//       root: null,
//       threshold: 0,
//       rootMargin: '-200px',
// })

// imgTargets.forEach(img=>imgObserver.observe(img))


// これも上手くいかん！！
// 各セクションがそっと出てくる
// const allSections = document.querySelectorAll('.section');

// const revealSection = function(entries, observer) {
//       const [entry] = entries;
//       if(!entry.isIntersecting) return;
//       entry.target.classList.remove('section--hidden');
//       observer.unobserve(entry,target)
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//       root: null,
//       threshold: 0.15,
// });

// allSections.forEach(function(section) {
//       sectionObserver.observe(section);
//       section.classList.add('section--hidden');
// })



// できん！
// ヘッダーアイテムを選択したら、他は少し透明にする
// const handleHover = function(e, opacity) {
//       // console.log(this)
//       if (e.target.classList.contains('._nav-item')) {
//             const link = e.target;
//             const siblings = link.closest('.header').querySelectorAll('.header_nav-item');
//             const logo = link.closest('.header').querySelector('img');

//             siblings.forEach(el => {
//                   if(el !== link) el.style.opacity = this;
//             });
//             logo.style.opacity = this;
//       }
// };
// header.addEventListener('mouseover', handleHover.bind(0.5));
// header.addEventListener('mouseout', handleHover.bind(1));





// んーーこれもできん！！
// コースセクションに差し掛かったら、ヘッダーを表示させる
// const courseCoords = course.getBoundingClientRect()
// console.log(courseCoords);
// window.addEventListener('scroll', function() {
//       console.log(window.scrollY);

//       if (this.window.screenY > courseCoords.top) header.classList.add('stickey');
//       else header.classList.remove('stickey')
// })

// const obsCallback = function(entries, observer) {
//       entries.forEach(entry => {
//             console.log(entry);
//       })
// }

// const obsOptions = {
//       root: null,
//       threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(course);
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function(entries) {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) header.classList.add('sticky');
      else header.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver
(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(header);







2
// 背景をランダムな色に変える
// 乱数を生成
const randInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
// ランダムなrgb()を生成
const randColor = () => 
      `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// 背景を変更
document.querySelector('.bg_box').addEventListener('click', function() {
      document.body.style.backgroundColor = randColor();
});





// リターントップボタン
const returnTop = document.querySelector('.return_top_button');  
	
window.addEventListener('scroll', () => {
   let scrollY = window.scrollY;
   if(scrollY >= 150) {
         //classにactive付与
         returnTop.classList.add('active');
   }
   else {
         //classからactive削除
         returnTop.classList.remove('active');
   }})