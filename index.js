var listT= document.getElementsByClassName('list-group-item');

listT[2].style.backgroundColor='green';
for(var i=0;i<listT.length;i++) {
    listT[i].style.fontWeight='bold';
    listT[i].style.color='red';
}