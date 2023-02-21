const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "a63ff70f-ba6d-4468-bbfb-b3f45108bc35";

const showList = [
    {
        date: 'Mon Sept 06 2023',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 21 2023',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2023',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2023',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2023',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2023',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];

displayShows();

// Add/remove class based on active state class
let clickSelector = false;
let showToggleContainer = document.querySelector(".shows__container");
console.log(showToggleContainer);
showToggleContainer.addEventListener("click", (event) => {
    console.log(event);
if (clickSelector === false){
    clickSelector = true;
    this.classList.add("shows__container--select");
    this.classList.remove("shows__container");

}
else if (clickSelector === true){
    this.classList.remove("shows__container--select");
    this.classList.add("shows__container");
    clickSelector = false;
}
else{
 clickSelector = false;
}
});

function displayShows(){
    const showSelect = document.querySelector(".shows");
    const showsAlignContainer = document.createElement("div");
    showsAlignContainer.className = "shows__realign";
    showSelect.appendChild(showsAlignContainer);

    let displayNextShow = document.querySelector(".shows__realign");
    let headerCounter = 0;


    if (headerCounter === 0) {
      headerCounter++;
      const showsContainerHeader = document.createElement("div");
      showsContainerHeader.className = "shows__container--header";

      const showsForm = document.createElement("form");
      showsForm.className = "shows__form";

      const showsCategory1 = document.createElement("div");
      showsCategory1.className = "shows__category";

      const showsLabel1 = document.createElement("label");
      showsLabel1.className = "shows__labelheader";
      showsLabel1.setAttribute("for", "date");
      showsLabel1.innerText = "DATE";

      const showsText1 = document.createElement("p");
      showsText1.className = "shows__text--hidden";
      showsText1.innerText = "Mon Sept 06 2021";

      showsCategory1.appendChild(showsLabel1);
      showsCategory1.appendChild(showsText1);
      showsForm.appendChild(showsCategory1);

      const showsCategory2 = document.createElement("div");
      showsCategory2.className = "shows__category";

      const showsLabel2 = document.createElement("label");
      showsLabel2.className = "shows__labelheader";
      showsLabel2.setAttribute("for", "");
      showsLabel2.innerText = "VENUE";

      const showsText2 = document.createElement("p");
      showsText2.className = "shows__text--hidden";
      showsText2.innerText = "Ronald Lane";

      showsCategory2.appendChild(showsLabel2);
      showsCategory2.appendChild(showsText2);
      showsForm.appendChild(showsCategory2);

      const showsCategory3 = document.createElement("div");
      showsCategory3.className = "shows__category";

      const showsLabel3 = document.createElement("label");
      showsLabel3.className = "shows__labelheader";
      showsLabel3.setAttribute("for", "");
      showsLabel3.innerText = "LOCATION";

      const showsText3 = document.createElement("p");
      showsText3.className = "shows__text--hidden";
      showsText3.innerText = "San Francisco, CA";

      showsCategory3.appendChild(showsLabel3);
      showsCategory3.appendChild(showsText3);
      showsForm.appendChild(showsCategory3);

      const showsCategoryButton = document.createElement("div");
      showsCategoryButton.className = "shows__category--button";

      const showsSubmitButton = document.createElement("button");
      showsSubmitButton.className = "shows__submit--hidden";
      showsSubmitButton.setAttribute("type", "submit");
      showsSubmitButton.innerText = "BUY TICKETS";

      showsCategoryButton.appendChild(showsSubmitButton);
      showsForm.appendChild(showsCategoryButton);

      showsContainerHeader.appendChild(showsForm);
      showsAlignContainer.appendChild(showsContainerHeader);
    }



    for (let i = 0; i < showList.length; i++) {
        let newShow = showList[i];

const showToggleContainer = document.createElement("div");
showToggleContainer.className = "shows__container";

const showForm = document.createElement("form");
showForm.className = "shows__form";

const dateCategory = document.createElement("div");
dateCategory.className = "shows__category";
const dateLabel = document.createElement("label");
dateLabel.className = "shows__labelheader--hidden";
dateLabel.setAttribute("for", "date");
dateLabel.textContent = "DATE";
const dateParam = document.createElement("p");
dateParam.className = "shows__date";
dateParam.innerText = newShow.date;
dateCategory.appendChild(dateLabel);
dateCategory.appendChild(dateParam);
showForm.appendChild(dateCategory);

const venueCategory = document.createElement("div");
venueCategory.className = "shows__category";
const venueLabel = document.createElement("label");
venueLabel.className = "shows__labelheader--hidden";
venueLabel.setAttribute("for", "");
venueLabel.textContent = "VENUE";
const venueParam = document.createElement("p");
venueParam.className = "shows__text";
venueParam.innerText = newShow.venue;
venueCategory.appendChild(venueLabel);
venueCategory.appendChild(venueParam);
showForm.appendChild(venueCategory);

const locationCategory = document.createElement("div");
locationCategory.className = "shows__category";
const locationLabel = document.createElement("label");
locationLabel.className = "shows__labelheader--hidden";
locationLabel.setAttribute("for", "");
locationLabel.textContent = "LOCATION";
const locationParam = document.createElement("p");
locationParam.className = "shows__text";
locationParam.innerText = newShow.location;
locationCategory.appendChild(locationLabel);
locationCategory.appendChild(locationParam);
showForm.appendChild(locationCategory);

const submitCategory = document.createElement("div");
submitCategory.className = "shows__category--button";
const submitButton = document.createElement("button");
submitButton.className = "shows__submit";
submitButton.setAttribute("type", "submit");
submitButton.textContent = "BUY TICKETS";
submitCategory.appendChild(submitButton);
showForm.appendChild(submitCategory);

showToggleContainer.appendChild(showForm);
showsAlignContainer.appendChild(showToggleContainer);
showsAlignContainer.appendChild(document.createElement("hr")).className =
  "shows__divider";

    }
};
