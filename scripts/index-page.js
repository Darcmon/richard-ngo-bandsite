const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "f575abc0-8435-4d40-9875-504561dd74ec";

// const commentLog = [
//     {
//         name: 'Sachie Sharma',
//         date: '02/18/2021',
//         message: 'This code definitely works. Pizza ipsum dolor amet chicken wing white pizza ham mushrooms Chicago style NY style green bell peppers pineapple mayo thin crust ranch extra cheese. Ranch lasagna personal extra cheese pie mayo pan garlic parmesan.'
//     },
//     {
//         name: 'Richard Ngo',
//         date: '02/17/2022',
//         message: 'I wish this code worked. We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir.'
//     },
//     {
//         name: 'Darth Vader',
//         date: '02/19/2023',
//         message: 'Nooooooooooooooo. Daijobu kimochi damaru arigatou fuzakeru Oniisan Ureshiii Otaku damasu. Doki doki chikara Senpai Daijobu Oniisan damaru chikara. Daijobu Kawaii Baka Daijobu okasan arigatou Ureshiii.'
//     }
// ];
const commentLog = [];

let dividerCounter = 0;

fetchComments();

const commentForm = document.querySelector(".comment__form");

function fetchComments(){
    const url = API_URL + `/comments/?api_key=${API_KEY}`;
    axios
    .get(url)
    .then(
        (response) => {
            response.data.forEach(commentInfo => {
                commentLog.push(commentInfo);
            });

            console.log(commentLog);
            // for (let i = commentLog.length - 1; i >= 0; i--) {
            // const getComment = commentLog[0].name;
            // console.log(getComment);
            // const getTimestamp = commentLog[0].timestamp;
            // console.log(getTimestamp);



            let sortByDate = commentLog.sort((commentInfo2, commentInfo1) =>
              commentInfo1.timestamp > commentInfo2.timestamp
                ? 1
                : commentInfo1.timestamp < commentInfo2.timestamp
                ? -1
                : 0
            );

            commentLog.forEach(response => {
                response.timestamp = formDate(response.timestamp);
                // console.log(response.timestamp);

            })

            commentLog.forEach(commentInfo => {
                displayComment(commentInfo);
            })

            // formDate(getTimestamp);
            // displayComment(getComment);
        })
    // .then(
    //     (response) => {
    //         const getName = response.data.name[1];
    //         console.log(getName);
    //     }
    // )
    .catch(
        (error) => {
            console.log('hi');
        })
};

// GET data here
function formDate(timestamp){

    let d = new Date(timestamp);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    
    if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

    return month + "/" + day + "/" + year;
    };

function displayComment(commentInfo){
    let displayNewComment = document.querySelector(".comment__new");
    // displayNewComment.innerHTML = "";

    // for (let i = commentInfo.length - 1; i >= 0; i--) {
        let newComment = commentInfo;
        // console.log(commentLog);

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
        dateParam.innerText = newComment.timestamp;
        entryHeaderDiv.appendChild(dateParam);

        const messageParam = document.createElement("p");
        messageParam.classList.add("comment__text");
        messageParam.innerText = newComment.comment;
        entryContainerDiv.appendChild(messageParam);

        const bottomDivider = document.createElement("hr");
        bottomDivider.classList.add("comment__divider");
        displayNewComment.appendChild(bottomDivider);
};


// POST DATA HERE
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
    displayComment();
    commentForm.reset();
});

