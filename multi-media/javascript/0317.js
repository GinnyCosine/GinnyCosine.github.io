var mark_msg = ["DONE","DONE","DONE","DONE","DONE","DONE","DONE","DONE","DONE","DONE"];
var str = "<div class='item'>StudentID</div><div class='content'>0716018</div><br><br>" + 
    "<div class='item'>Name</div><div class='content' id='name'>簡妤璇</div><br><br>" +
    "<div class='item'>Dept.</div><div class='content'>Computer Science</div>";
var label_click = false;

function clickclick(label){
    var obj = document.getElementById(label);
    if (obj){
        obj.src='./images/a.png';
        obj.id = "clicked" + label;
    }
    else{
        obj = document.getElementById("clicked" + label);
        obj.src='./images/b.png';
        obj.id = label;
    }
}

function mouseIn(label){
    var mark = document.getElementById("mark_"+label);
    mark.innerHTML = mark_msg[Number(label)-1];
    if (mark_msg[Number(label)-1] == 'ONGOING')
        mark.style.backgroundColor = '#db641f';
    document.getElementById(label).src='./images/a.png';
}

function mouseOut(label){
    document.getElementById("mark_"+label).innerHTML = "";
    document.getElementById(label).src='./images/b.png';
}

function profileMouseIn(){
    if(!label_click)
        setTimeout(function() {
            var profileButtom = document.getElementById('label');
            document.getElementById('contain').innerHTML = str;
            profileButtom.style.width = '160px';
            profileButtom.innerHTML = 'Click to Hold';
        },200);
}

function profileMouseOut(){
    setTimeout(function() {
        if (!label_click){     //沒按
            var contain = document.getElementById('contain');
            var profileButtom = document.getElementById('label');
            contain.innerHTML = "";
            contain.style.border = '';
            profileButtom.innerHTML = 'Profile';
            profileButtom.style.width = '100px';
        }
    },200);
}

function profileMouseClick(){
    label_click = !(label_click);
    var profileButtom = document.getElementById('label');
    if (label_click){
        var contain = document.getElementById('contain');
        contain.innerHTML = str;
        contain.style.border = 'solid rgb(88, 75, 0)';
        profileButtom.innerHTML = 'Click to Close';
        profileButtom.style.color = 'rgb(88, 75, 0)';
        profileButtom.style.background = 'rgb(253, 239, 158)';
        profileButtom.style.border = 'dotted 2px rgb(88, 75, 0)';
    }
    else{
        document.getElementById('contain').style.border = '';
        profileButtom.innerHTML = 'Click to Hold';
        profileButtom.style.color = 'rgb(253, 239, 158)';
        profileButtom.style.background = 'rgb(88, 75, 0)';
        profileButtom.style.border = 'solid 2px #fffded';
    }
}
