function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

var _targettedModal,
    _triggers = document.querySelectorAll('[data-modal-trigger]'),
    _dismiss = document.querySelectorAll('[data-modal-dismiss]'),
    modalActiveClass = "is-modal-active";

function showModal(el){
    _targettedModal = document.querySelector('[data-modal-name="'+ el + '"]');
    _targettedModal.classList.add(modalActiveClass);
}

function hideModal(event){
    if(event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
        _targettedModal.classList.remove(modalActiveClass);
    }
}

function bindEvents(el, callback){
    for (i = 0; i < el.length; i++) {
        (function(i) {
            el[i].addEventListener('click', function(event) {
                callback(this, event);
            });
        })(i);
    }   
}

function triggerModal(){
    bindEvents(_triggers, function(that){
        showModal(that.dataset.modalTrigger);
    });
}

function dismissModal(){
    bindEvents(_dismiss, function(that){
        hideModal(event);
    });
}

function initModal(){
    triggerModal();
    dismissModal();
}

initModal();
