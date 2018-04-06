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
    console.log ('wrapper');
    input = wrapper.querySelector('#input');
    list,
        predifendValues;

predifendValues= [
    "Capital letter",
     "One word",
     "Without extra sign"
];

var createList= function (values){
    if (list) {
        wrapper.removeChild(list);
    }
   var ul = document.createElement('ul');
    console.log('ul');

   values.forEach(function (value) {
    var li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
   });

   return ul;
};

var manageList = function (string){
    var showedValues = predifendValues.filter(function (value) {
        return value.indexOf(string) == 0;
    });

    if (showedValues.length){
        list = createList(showedValues);
        wrapper.appendChild(list);
    } else if (list != null){
        wrapper.removeChild(list);
        list = null;
    }
};
var onType = function () {
  manageList(this.value);
};

input.addEventListener('keyup', onType);
