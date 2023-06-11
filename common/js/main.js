// Create HTML5 elements for IE
document.createElement("article");
document.createElement("section");

new WOW().init();

/** header 즉시 실행 (IIFE) */
(function () {
  $("header").load("../common/header.html");
})();

$(window).scroll(function () {
  var M_txt = $(".M_txt");

  if (scrollY > 20) {
    M_txt.addClass("M_txt_Out");
    M_txt.removeClass("M_txt_In");
  } else {
    M_txt.addClass("M_txt_In");
    M_txt.removeClass("M_txt_Out");
    modal.classList.remove("show");
  }
});

/**
 * title : Scroll Event
 * description : Main, section 02 Text scroll event
 */

function textScroll(e) {
  var skill = $("#skill").offset().top;

  scrollY >= skill - 450
    ? ($(".o_txt ").stop().animate({
        opacity: "1",
      }),
      $(".o_cle").fadeOut().css({
        zIndex: "0",
      }))
    : ($(".o_cle").fadeIn().css({
        zIndex: "1",
      }),
      $(".o_txt ").stop().animate({
        opacity: "0",
      }));
}
window.addEventListener("scroll", textScroll);

/**
 * title : Cursor Event
 * description : 커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
 */

function cursor(e) {
  let mouseCursor = document.querySelector(".cursor");
  let cursorText = document.querySelectorAll(".cursor_text");

  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY + "px";

  cursorText.forEach((item) => {
    item.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");

      item.classList.add("hovered-link");
    });
    item.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      mouseCursor.style.zIndex = "1000";
      item.classList.remove("hovered-link");
    });
  });
}
window.addEventListener("mousemove", cursor);
/**
 * title : Modal
 * description : Skill Modal Event
 */

let cursorTexts = document.querySelectorAll(".cursor_text");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".closeBtn");
let modalTitle = document.querySelector(".modal_title");
let imgs = document.querySelectorAll(".skillImg img");

// 피그마 링크처리
let linkEl = document.createElement("a");

linkEl.id = "figmaLink";
linkEl.innerText = "프로젝트 바로보기 ";
linkEl.setAttribute(
  "href",
  `https://www.figma.com/file/GYMvm4fctyWro9qk93Hqaa/%F0%9F%A7%A0-RBrain?type=design&node-id=128%3A8914&t=zhRk8UDJVIJeaxgO-1`
);
linkEl.setAttribute("target", "_blank");

// 모달 클릭 이벤트
cursorTexts.forEach((text) => {
  text.addEventListener("click", function (e) {
    let target = e.target.innerText;

    target === text.textContent
      ? ((modalTitle.innerText = `${target} ✍`),
        text.textContent === "Figma" && modalTitle.appendChild(linkEl),
        modal.classList.add("show"),
        imgs.forEach((img) => {
          let h1El = document.querySelector("#skill h1");
          let imgEl = document.createElement("img");
          h1El.append(imgEl);
          let targetImg = `../common/img/${img.name.toLowerCase()}.png`;
          imgEl.setAttribute("src", targetImg);
          target === img.name
            ? (img.classList.add("showImg"), img.setAttribute("src", targetImg))
            : null;
        }))
      : null;
  });
});

// 모달 클로즈 이벤트

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
  imgs.forEach((img) => ((img.src = ""), img.classList.remove("showImg")));
});

/**
 * title : Portfolio
 * description :  Portfolio swiper event
 */

//---------- sct03 / Share swiper ----------//
$(function () {
  var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 0,
    autoplayDisableOnInteraction: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
