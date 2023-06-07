let countAcQuyInFrame = 0;
let countAcQuyOutFrame = 0;
let countAcQuyLoopFrame = 0;

let countThienThanInFrame = 0;
let countThienThanOutFrame = 0;
let countThienThanLoopFrame = 0;

const EFFECT_TYPE = {
  IN: 0,
  LOOP: 1,
  OUT: 2,
};

const THIEN_THAN_URL = "https://dotkich.goplay.vn/khacanthienthan/";
const AC_QUY_URL = "https://dotkich.goplay.vn/khacanthienthan/";

function renderFrameByFrame(frames, currentFrame) {
  frames.forEach(function (element, index) {
    if (index === currentFrame) return (element.style.display = "block");
    element.style.display = "none";
  });
}

function acQuyInFrame() {
  let acquyIn = document.querySelectorAll(".acquy_in");
  ++countAcQuyInFrame;
  const currentFrame = countAcQuyInFrame % 29;
  renderFrameByFrame(acquyIn, currentFrame);
}

function acQuyLoopFrame() {
  let acquyLoop = document.querySelectorAll(".acquy_loop");
  ++countAcQuyLoopFrame;
  const currentFrame = countAcQuyLoopFrame % 29;
  renderFrameByFrame(acquyLoop, currentFrame);
}

function acQuyOutFrame() {
  let acquyOut = document.querySelectorAll(".acquy_out");
  ++countAcQuyOutFrame;
  const currentFrame = countAcQuyOutFrame % 29;
  renderFrameByFrame(acquyOut, currentFrame);
}

function thienThanInFrame() {
  let thienThanIn = document.querySelectorAll(".thienthan_in");
  ++countThienThanInFrame;
  const currentFrame = countThienThanInFrame % 29;
  renderFrameByFrame(thienThanIn, currentFrame);
}

function thienThanLoopFrame() {
  let thienThanLoop = document.querySelectorAll(".thienthan_loop");
  ++countThienThanLoopFrame;
  const currentFrame = countThienThanLoopFrame % 29;
  renderFrameByFrame(thienThanLoop, currentFrame);
}

function thienThanOutFrame() {
  let thienThanOut = document.querySelectorAll(".thienthan_out");
  ++countThienThanOutFrame;
  const currentFrame = countThienThanOutFrame % 29;
  renderFrameByFrame(thienThanOut, currentFrame);
}

let acQuyLoopEffect = setInterval(() => {
  acQuyLoopFrame();
}, 1000 / 19);

let thienThanLoopEffect = setInterval(() => {
  thienThanLoopFrame();
}, 1000 / 19);

function showEffectByType(className, indexType) {
  const cardElement = document.querySelectorAll(`.${className}`);
  cardElement.forEach((card, cardIndex) => {
    if (cardIndex === indexType) {
      card.style.display = "block";
      return;
    }
    card.style.display = "none";
  });
}

function initialEffect() {
  let acQuyInEffect = setInterval(() => {
    acQuyInFrame();
  }, 1000 / 19);
  let thienThanInEffect = setInterval(() => {
    thienThanInFrame();
  }, 1000 / 19);

  setTimeout(() => {
    countAcQuyInFrame = 0;
    countThienThanInFrame = 0;

    clearInterval(acQuyInEffect);
    clearInterval(thienThanInEffect);

    showEffectByType("acquy_card_element", EFFECT_TYPE.LOOP);
    showEffectByType("thienthan_card_element", EFFECT_TYPE.LOOP);
  }, 3000);
}

initialEffect();

document
  .getElementById("thienthan_page")
  .addEventListener("click", function () {
    document.getElementById("acquy_card").classList.add("acquy_final--hidden");
    document
      .getElementById("thienthan_card")
      .classList.add("thienthan_final--show");
    document
      .getElementById("scene_transtion")
      .classList.add("scene_transtion--active");
    setTimeout(() => {
      clearInterval(acQuyLoopEffect);
      clearInterval(thienThanLoopEffect);
      showEffectByType("thienthan_card_element", EFFECT_TYPE.OUT);
      let thienThanOutEffect = setInterval(() => {
        thienThanOutFrame();
      }, 1000 / 19);
      setTimeout(() => {
        clearInterval(thienThanOutEffect);
        window.location.href = THIEN_THAN_URL;
      }, 1800);
    }, 1000);
  });

document.getElementById("acquy_page").addEventListener("click", function () {
  document.getElementById("acquy_card").classList.add("acquy_final--show");
  document
    .getElementById("thienthan_card")
    .classList.add("thienthan_final--hidden");
  document
    .getElementById("scene_transtion")
    .classList.add("scene_transtion--active");
  setTimeout(() => {
    clearInterval(acQuyLoopEffect);
    clearInterval(thienThanLoopEffect);
    showEffectByType("acquy_card_element", EFFECT_TYPE.OUT);
    let acQuyOutEffect = setInterval(() => {
      acQuyOutFrame();
    }, 1000 / 19);
    setTimeout(() => {
      clearInterval(acQuyOutEffect);
      window.location.href = AC_QUY_URL;
    }, 1800);
  }, 1000);
});

$(document).ready(function () {});
