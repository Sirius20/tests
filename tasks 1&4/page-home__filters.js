'use strict';

// 4 задание по JS.	

var checkAll = document.querySelector('#fieldcheck legend [type="checkbox"]');
var collectChecks = Array.from(document.querySelectorAll('#fieldcheck [type="checkbox"]'));
var colors = Array.from(document.querySelectorAll('#fieldcheck img'));

var update = function () {
  for (var i = 1; i < collectChecks.length; i++) {
    collectChecks[i].onchange = function() {
      var collectChecked = Array.from(document.querySelectorAll('#fieldcheck [type="checkbox"]:checked').length);
      checkAll.checked = collectChecked == collectChecks.length;
   
      var label = document.querySelector("label[for='" + this.id + "']");
      if (this.checked) {
        label.style.display = "none";
      } else {
        label.style.display = "inline-block";
      }
    };
  }
};

checkAll.onchange = function() {
  for (var j = 1; j < collectChecks.length; j++) {
    collectChecks[j].checked = this.checked;
    var label = document.querySelector("label[for='" + collectChecks[j].id + "']");
    if (collectChecks[j].checked) {
      label.style.display = "none";
    } else {
      label.style.display = "inline-block";
    }
  }
};

update();


// for (let box of boxes) {
//   box.onchange = function {
    
//   }
// }
