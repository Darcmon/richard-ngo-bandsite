const commentLog = [
    {
        name: 'Sachie Sharma',
        date: '02/18/2021',
        message: 'This code definitely works. Pizza ipsum dolor amet chicken wing white pizza ham mushrooms Chicago style NY style green bell peppers pineapple mayo thin crust ranch extra cheese. Ranch lasagna personal extra cheese pie mayo pan garlic parmesan.'
    },
    {
        name: 'Richard Ngo',
        date: '02/17/2022',
        message: 'I wish this code worked. We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir.'
    },
    {
        name: 'Darth Vader',
        date: '02/19/2023',
        message: 'Nooooooooooooooo. Daijobu kimochi damaru arigatou fuzakeru Oniisan Ureshiii Otaku damasu. Doki doki chikara Senpai Daijobu Oniisan damaru chikara. Daijobu Kawaii Baka Daijobu okasan arigatou Ureshiii.'
    }
];

displayComment();
formDate();

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;

    let newComment = {
        name: name,
        date: date,
        message: message
    };
    commentLog.push(newComment);
    commentForm.reset();
    displayComment();
});


function formDate(){

    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    
    if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
    
    console.log(document.getElementById("date").value = month + "/" + day + "/" + year);
    return document.getElementById("date").value = month + "/" + day + "/" + year;
    
    };

function displayComment(){
    let displayNewComment = document.querySelector(".comment__new");
    displayNewComment.innerHTML = "";
    let dividerCounter = 0;

    for (let i = commentLog.length - 1; i >= 0; i--) {
        let newComment = commentLog[i];

        if(dividerCounter === 0){
        dividerCounter++;    
        const topDivider = document.createElement("hr");
        topDivider.classList.add("comment__divider");
        displayNewComment.appendChild(topDivider);
    }

        const commentContainerDiv = document.createElement("div");
        commentContainerDiv.classList.add("comment__container");
        displayNewComment.appendChild(commentContainerDiv);

        const profileDiv = document.createElement("div");
        profileDiv.classList.add("comment__profile");
        commentContainerDiv.appendChild(profileDiv);
        const profileImage = document.createElement("p");
        profileImage.classList.add("comment__image");
        profileImage.setAttribute = ("alt", "profile pic");
        profileDiv.appendChild(profileImage);

        const entryContainerDiv = document.createElement("div");
        entryContainerDiv.classList.add("comment__container--entry");
        commentContainerDiv.appendChild(entryContainerDiv);

        const entryHeaderDiv = document.createElement("div");
        entryHeaderDiv.classList.add("comment__entryheader");
        entryContainerDiv.appendChild(entryHeaderDiv);

        const nameParam = document.createElement("p");
        nameParam.classList.add("comment__name");
        nameParam.innerText = newComment.name;
        entryHeaderDiv.appendChild(nameParam);

        const dateParam = document.createElement("p");
        dateParam.classList.add("comment__timecode");
        dateParam.innerText = newComment.date;
        entryHeaderDiv.appendChild(dateParam);

        const messageParam = document.createElement("p");
        messageParam.classList.add("comment__text");
        messageParam.innerText = newComment.message;
        entryContainerDiv.appendChild(messageParam);

        const bottomDivider = document.createElement("hr");
        bottomDivider.classList.add("comment__divider");
        displayNewComment.appendChild(bottomDivider);

    }
};

// function formDate(){

// var d = new Date();
// var day = d.getDate();
// var month = d.getMonth() + 1;
// var year = d.getFullYear();

// if (day < 10) {
//     day = "0" + day;
//   }
//   if (month < 10) {
//     month = "0" + month;
//   }

// console.log(document.getElementById("date").value = month + "/" + day + "/" + year);
// return document.getElementById("date").value = month + "/" + day + "/" + year;

// };

/* <div class="comment__container">
<div class="comment__profile">
    <p class="comment__image" alt="profile pic"></p>
</div>
<div class="comment__container--entry">
    <div class="comment__entryheader">
        <p class="comment__name">Richard Ngo</p>
        <p class="comment__timecode">02/17/2023</p>
    </div>
    <p class="comment__text">Wish this code worked. Pizza ipsum. Pizza ipsum. Pizza ipsum. Pizza ipsum. Pizza ipsum.</p>
</div>
</div>
<hr class="comment__divider"> */

// function displayComment(){
//     let displayNewComment = document.querySelector(".comment__new");
//     console.log(displayNewComment);
//     displayNewComment.innerHTML = "";
//     let dividerCounter = 0
//     for (let i = 0; i < 0; i++) {
//         let newComment = commentLog[i];

//         if(dividerCounter === 0){
//         dividerCounter++;    
//         const topDivider = document.createElement("hr");
//             topDivider.classList.add("comment__divider");
//             displayNewComment.appendChild(topDivider);
//     }

//         const commentContainerDiv = document.createElement("div");
//         commentContainerDiv.classList.add("comment__container");
//         displayNewComment.appendChild(commentContainerDiv);



//         const profileDiv = document.createElement("div");
//         profileDiv.classList.add("comment__profile");
//         commentContainerDiv.appendChild(profileDiv);
//         const profileImage = document.createElement("p");
//         profileImage.classList.add("comment__image");
//         profileImage.setAttribute = ("alt", "profile pic");
//         profileDiv.appendChild(profileImage);

//         const entryContainerDiv = document.createElement("div");
//         entryContainerDiv.classList.add("comment__container--entry");
//         commentContainerDiv.appendChild(entryContainerDiv);

//         const entryHeaderDiv = document.createElement("div");
//         entryHeaderDiv.classList.add("comment__entryheader");
//         entryContainerDiv.appendChild(entryHeaderDiv);

//         const nameParam = document.createElement("p");
//         nameParam.classList.add("comment__name");
//         nameParam.innerText = newComment.name;
//         entryHeaderDiv.appendChild(nameParam);

//         const dateParam = document.createElement("p");
//         dateParam.classList.add("comment__timecode");
//         dateParam.innerText = newComment.date;
//         entryHeaderDiv.appendChild(dateParam);

//         const messageParam = document.createElement("p");
//         messageParam.classList.add("comment__text");
//         messageParam.innerText = newComment.message;
//         entryContainerDiv.appendChild(messageParam);

//         const bottomDivider = document.createElement("hr");
//         bottomDivider.classList.add("comment__divider");
//         displayNewComment.appendChild(bottomDivider);

//     }
// };