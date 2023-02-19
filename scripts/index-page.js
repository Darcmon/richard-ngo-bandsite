const commentLog = [
    {
        name: 'Sachie Sharma',
        date: '02/18/2023',
        comment: 'This code definitely works.'
    },
    {
        name: 'Richard Ngo',
        date: '02/17/2023',
        comment: 'I wish this code worked.'
    }
];

document.querySelector(".comment__form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let comment = document.getElementById("comment").value;

    let newComment = {
        name: name,
        date: date,
        comment: comment
    };

    commentLog.push(newComment);

    displayComment();
});

// // Append label and input elements to form, then append form to container
// form.appendChild(nameLabel);
// form.appendChild(nameInput);
// form.appendChild(commentLabel);
// form.appendChild(commentInput);
// form.appendChild(submitButton);
// container.appendChild(profile);
// container.appendChild(form);

// // Create first divider element
// const divider1 = document.createElement("hr");
// divider1.classList.add("comment__divider");

// // Create second container element for comment entry
// const container2 = document.createElement("div");
// container2.classList.add("comment__container", "margin");
// const profile2 = document.createElement("div");
// profile2.classList.add("comment__profile");
// const profileImage2 = document.createElement("img");
// profileImage2.classList.add("comment__image");
// profileImage2.src = "#";
// profileImage2.alt = "profile pic";
// profile2.appendChild(profileImage2);
// const entryHeader = document.createElement("div");
// entryHeader.classList.add("comment__entryheader");
// const name = document.createElement("p");
// name.classList.add("comment__name");
// name.textContent = "Richard Ngo";
// const timecode = document.createElement("p");
// timecode.classList.add("comment__timecode");
// timecode.textContent = "02/17/2023";
// entryHeader.appendChild(name);
// entryHeader.appendChild(timecode);
// const text = document.createElement("p");
// text.classList.add("comment__text");
// text.textContent = "Wish this code worked. Pizza ipsum do";

let sectionAll = document.querySelector("section.comment.margin");
console.log(sectionAll);

function formDate(){
    // Get today's date
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1; // The months are 0-based
var year = d.getFullYear();
// Prepend the day and month with 0
// Comment this out/remove it, to use the day and month as-is
if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
// Set the date field to the current date
console.log(document.getElementById("date").value = month + "/" + day + "/" + year);
return document.getElementById("date").value = month + "/" + day + "/" + year;

};

console.log(formDate());

/* <div class="comment__new margin">
<hr class="comment__divider">
<div class="comment__container">
    <div class="comment__profile">
        <img class="comment__image" src="#" alt="profile pic">
    </div>
    <div class="comment__container--entry">
        <div class="comment__entryheader">
            <p class="comment__name">Richard Ngo</p>
            <p class="comment__timecode">02/17/2023</p>
        </div>
        <p class="comment__text">Wish this code worked. Pizza ipsum dolor amet lasagna pan sausage chicken
             and bacon garlic parmesan white pizza. Meat lovers large pizza roll, thin crust bacon red
             onions hand tossed. Garlic sauce melted cheese banana peppers stuffed red onions garlic.
             Stuffed crust extra cheese ranch chicken and bacon, lasagna philly steak chicken. Red onions
             large deep crust, melted cheese bbq rib chicken and bacon marinara mushrooms onions pizza roll
             bacon ham white garlic green bell peppers. Beef garlic sauce mushrooms personal.</p>
    </div>
</div>
<hr class="comment__divider">
</div> */

function displayComment(){
    let displayNewComment = document.querySelector(".comment__new margin");
    displayNewComment.innerHTML = "";

    for (let i = 0; i < commentLog.length; i++) {
        let newComment = commentLog[i];

        const container = document.createElement("div");
        container.classList.add("comment__container");
        const profile = document.createElement("div");
        profile.classList.add("comment__profile");
        const profileImage = document.createElement("img");
        profileImage.classList.add("comment__image");
        profileImage.src = "#";
        profileImage.alt = "profile pic";
        profile.appendChild(profileImage);
        const entryHeader = document.createElement("div");
        entryHeader.classList.add("comment__entryheader");
        const name = document.createElement("p");
        name.classList.add("comment__name");
        name.textContent = "Richard Ngo";
        const timecode = document.createElement("p");
        timecode.classList.add("comment__timecode");
        timecode.textContent = "02/17/2023";
        entryHeader.appendChild(name);
        entryHeader.appendChild(timecode);
        const text = document.createElement("p");
        text.classList.add("comment__text");
        text.textContent = newComment.comment;

    }
};