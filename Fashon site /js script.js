function toggleCB(cb){
    if (cb.dataset.checked == 0){
        cb.style.background = "#89D814";
        cb.dataset.checked =1;
    }
    else {
        cb.style.background = "#EEE";
        cb.dataset.checked = 0;
    }
}

cb.previousElementSibling.value = cb.dataset.checked;


function submitValues(){
    alert ("cb1=  "+cb1.dataset.checked+"  cb2 = "+cb2.dataset.checked);
}

var wrapper = document.querySelector('.typeAhead');
var input = document.querySelector('input');
    list,
    predifiedValues;

predifendValues= [
    "Capital letter",
     "One word",
     "Without extra sign"
];
var createList= function (values){
   var ul = document.createElement('ul');
   values.forEach(function (value) {
    var li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
   });
   return ul;
}

var manageList = function (string){
    var showValues = predifendValues.filter(function (value) {
        return value.indexOf(string) == 0;
    });
    if (showValues.length){
        list = createList(showValues);
        wrapper.appendChild(list);
    }
};
var onType = function () {
  manageList(this.value);
}

input.addEventListener('keyup', onType);
