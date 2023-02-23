const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "f575abc0-8435-4d40-9875-504561dd74ec";

let commentLog = [];

let dividerCounter = 0;
let refreshCounter = 0;

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

            let sortByDate = commentLog.sort((commentInfo2, commentInfo1) =>
              commentInfo1.timestamp > commentInfo2.timestamp
                ? 1
                : commentInfo1.timestamp < commentInfo2.timestamp
                ? -1
                : 0
            );

            commentLog.forEach(response => {
                response.timestamp = formDate(response.timestamp);
            })

            commentLog.forEach(commentInfo => {
                displayComment(commentInfo);
            })
        })
    .catch(
        (error) => {
            console.error("Request failed: ", error);
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

function resetComments(){
  let displayNewComment = document.querySelector(".comment__new");
  refreshCounter = 0;
  dividerCounter = 0;
  fetchComments();
  if(refreshCounter === 0){
    refreshCounter++;
    commentLog = [];
    displayNewComment.innerHTML = "";
}
};

function displayComment(commentInfo){
    let displayNewComment = document.querySelector(".comment__new");

    let newComment = commentInfo;

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
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let comment = document.getElementById("message").value;

  let newComment = {
    name: name,
    comment: comment,
  };

  console.log(newComment);

  const url = API_URL + `/comments/?api_key=${API_KEY}`;
  axios
    .post(url, {
      name: name,
      comment: comment,
    })
    .then((newComment) => {
      console.log(newComment.data);
      commentForm.reset();
      resetComments();
    })
    .catch((error) => {
      console.error("Request failed: ", error);
    });
});