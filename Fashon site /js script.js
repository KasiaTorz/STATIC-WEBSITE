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




function submitValues(){
    alert ("cb1=  "+cb1.dataset.checked+"  cb2 = "+cb2.dataset.checked);
}