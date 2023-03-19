let comments = [];

document.getElementById("submit").onclick = function(){

    let inputName = document.getElementById ("input-name").value;
    let inputText = document.getElementById ("input-text").value;
    let inputDate = document.getElementById ("input-date").value;
    inputDate = dateValidation(inputDate);

    let comment = {
        name : inputName,
        text: inputText,
        date : inputDate
    }

    console.log(comment);

    comments.push(comment);
    showComment(comment);
}

function dateValidation (inputDate) {
    let now = new Date;
    let commentDate = new Date(inputDate);
    if (commentDate == now || commentDate == '' || commentDate == null) { return 'Сегодня'; }
    else return inputDate;
}

function showComment(comment){

    let div = document.createElement('div');
    div.class = "comment-field";

    div.style.backgroundColor = "#ffffff";
    div.style.borderRadius = "5px";
    div.style.boxSizing = "border-box";
    div.style.padding = "35px 40px";
    div.style.minWidth = "300px";
    div.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    div.style.marginTop = "30px";
    div.style.paddingBottom = "55px";

    let commentName = document.createElement('span');
    commentName.appendChild(document.createTextNode(comment.name)); 
    commentName.style.display = "block";
    commentName.style.fontSize = "15px";
    commentName.style.fontWeight = "600";
    commentName.style.marginBottom = "10px";
    commentName.style.fontFamily = "Gill Sans, sans-serif";
    commentName.class = "comment-name";
    div.appendChild(commentName);

    let commentDate = document.createElement('span');
    commentDate.appendChild(document.createTextNode(comment.date)); 
    commentDate.style.display = "block";
    commentDate.style.fontSize = "11px";
    commentDate.style.fontWeight = "500";
    commentDate.style.color = "#959595";
    commentDate.style.marginBottom = "10px";
    commentDate.style.fontFamily = "Gill Sans, sans-serif";
    commentDate.class = "comment-date";
    div.appendChild(commentDate);

    let commentText = document.createElement('span');
    commentText.appendChild(document.createTextNode(comment.text)); 
    commentText.style.display = "block";
    commentText.style.textAlign = "justify";
    commentText.style.marginBottom = "20px";
    commentText.style.fontFamily = "Gill Sans, sans-serif";
    commentText.style.fontSize = "13px";
    commentText.class = "comment-text";
    div.appendChild(commentText);
    
    let btnLike = document.createElement('button');
    btnLike.class = "btn-like";
    let imgLike = document.createElement('img');
    imgLike.src = "img/like.svg";
    imgLike.id = "like";
    imgLike.width = "25";
    imgLike.height = "25";
    btnLike.style.border = "0px";
    btnLike.style.backgroundColor = "#fff";
    btnLike.style.float = "right";
    btnLike.style.marginLeft = "10px";
    btnLike.style.opacity = "0.8";
    btnLike.appendChild(imgLike);
    div.appendChild(btnLike);

    btnLike.onmouseover = function() { 
        btnLike.style.opacity = "0.9";
        btnLike.style.transition = "all 0.4s ease";
     }
    btnLike.onmouseout = function() { 
        btnLike.style.opacity = "0.8";
        btnLike.style.transition = "all 0.4s ease";
     }
     
     let count = 1;

     btnLike.onclick = function() {
        if (count % 2 != 0) {
            imgLike.src = "img/blue-like.svg";
            count += 1;
        }
        else if (count % 2 == 0) {
            imgLike.src = "img/like.svg";
            count += 1;
        }
    }

    let btnTrash = document.createElement('button');
    btnTrash.class = "btn-trash";
    let imgTrash = document.createElement('img');
    imgTrash.src = "img/trash.svg";
    imgTrash.width = "25";
    imgTrash.height = "25";
    btnTrash.style.border = "0px";
    btnTrash.style.backgroundColor = "#fff";
    btnTrash.style.float = "right";
    btnTrash.style.marginLeft = "10px";
    btnTrash.style.opacity = "0.8";
    btnTrash.appendChild(imgTrash);
    div.appendChild(btnTrash);

    btnTrash.onmouseover = function() { 
        btnTrash.style.opacity = "0.9";
        btnTrash.style.transition = "all 0.4s ease";
     }
     btnTrash.onmouseout = function() { 
        btnTrash.style.opacity = "0.8";
        btnTrash.style.transition = "all 0.4s ease";
     }

     btnTrash.onclick = function() {
        div.remove();
     }

    document.body.appendChild( div ); 
} 






