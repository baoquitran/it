// collap functions
var  coll = document.getElementsByClassName('panel-heading');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('collap-active');
    var panelbody = this.nextElementSibling;
    if (panelbody.style.maxHeight) {
      panelbody.style.maxHeight = null;
    } else {
      panelbody.style.maxHeight = panelbody.scrollHeight + 'px';
    }
  });
}
