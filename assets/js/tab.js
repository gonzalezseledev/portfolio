// FILTERS

const /** [NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** [NodeElement} */ [lastActiveTab]= document.querySelectorAll("[data-tab-content]");

let /** [NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
  item.addEventListener("click", function () {

    lastActiveTab.classList.remove("active"); 
    lastActiveTabBtn.classList.remove("active");

  const /** {NodeElement) */ $tabContent = document.querySelector
  (`[data-tab-content="${item.dataset.tabBtn}"]`);
  $tabContent.classList.add("active");
  this.classList.add("active");

  lastActiveTab = $tabContent;
  lastActiveTabBtn = this;

});

});