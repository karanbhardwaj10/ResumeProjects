let add=document.getElementById('add');
add.addEventListener("click",getandupdate);
update();
function getandupdate(){
    let username=document.getElementById('exampleFormControlInput1').value;
    let feedbackcomment=document.getElementById('exampleFormControlTextarea1').value;
    if(localStorage.getItem('comment-section')==null){
       let commentsectionArray=[];
       commentsectionArray.push([username,feedbackcomment]);
       localStorage.setItem('comment-section',JSON.stringify(commentsectionArray));
    }
    else{
        commentsectionstr =localStorage.getItem('comment-section');
        commentsectionArray =JSON.parse(commentsectionstr);
        commentsectionArray.push([username,feedbackcomment]);
        localStorage.setItem('comment-section',JSON.stringify(commentsectionArray));
    }
    update();
    }
    function update(){
        if(localStorage.getItem('comment-section')==null){
            commentsectionArray=[];
            commentsectionArray.push([username,feedbackcomment]);
            console.log(commentsectionArray);
            localStorage.setItem('comment-section',JSON.stringify(commentsectionArray));
        }
        else{
            console.log('iaminelse');
            commentsectionstr =localStorage.getItem('comment-section');
            commentsectionArray =JSON.parse(commentsectionstr);
        }
        // Filling the Comment Section
        let commentbody=document.getElementById("tableBody");
        let str='';
        commentsectionArray.forEach((element,index) => {
            str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td> 
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
            </tr>`;
        });
        commentbody.innerHTML=str;
    }
    function deleted(commentnum){
        console.log("Delete", commentnum);
        commentsectiostr = localStorage.getItem('comment-section')
        commentsectionArray = JSON.parse(commentsectiostr);
        // Delete itemIndex element from the array
        commentsectionArray.splice(commentnum, 1);
        localStorage.setItem('comment-section', JSON.stringify( commentsectionArray ));
        update();

    }
   
