const rightClip = document.getElementById("rightClip");

const rightClipControl = document.getElementById("rightClipControl");

rightClipControl.addEventListener("mouseenter", () => {
  rightClip.play();
});

rightClipControl.addEventListener("mouseout", () => {
  rightClip.pause();
});

// left

const leftClip = document.getElementById("leftClip");

const leftClipControl = document.getElementById("leftClipControl");

leftClipControl.addEventListener("mouseenter", () => {
  leftClip.play();
});

leftClipControl.addEventListener("mouseout", () => {
  leftClip.pause();
});
