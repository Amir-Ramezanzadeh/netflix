const door = document.querySelector(".door");
const tablet = document.querySelector(".tablet");
const tag = document.querySelector(".tag");
const doorContent = document.querySelector(".door-content");
const tabletContent = document.querySelector(".tablet-content");
const tagContent = document.querySelector(".tag-content");
door.addEventListener("click", function () {
  doorContent.style.display = "block";
  tabletContent.style.display = "none";
  tagContent.style.display = "none";
  door.classList.add("current");
  tablet.classList.remove("current");
  tag.classList.remove("current");
});
tablet.addEventListener("click", function () {
  tabletContent.style.display = "block";
  doorContent.style.display = "none";
  tagContent.style.display = "none";
  tablet.classList.add("current");
  door.classList.remove("current");
  tag.classList.remove("current");
});
tag.addEventListener("click", function () {
  tagContent.style.display = "block";
  tabletContent.style.display = "none";
  doorContent.style.display = "none";
  tag.classList.add("current");
  door.classList.remove("current");
  tablet.classList.remove("current");
});
