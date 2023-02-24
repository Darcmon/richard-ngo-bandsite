const API_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "f575abc0-8435-4d40-9875-504561dd74ec";

const showsLog = [];
fetchShows();


function fetchShows(){
    const url = API_URL + `/showdates/?api_key=${API_KEY}`;
    axios
    .get(url)
    .then(
        (response) => {
            response.data.forEach(showsInfo => {
                showsLog.push(showsInfo);
            });

            showsLog.forEach(response => {
                response.date = formDate(response.date);

            })
                
            displayShows();

        })
    // .then(
    //     (response) => {
    //         removeSelect();
    //     }
    // )
    .catch(
        (error) => {
            console.error("Request failed: ", error);
        })
};

function formDate(timestamp){

    let d = new Date(timestamp);
    // find the weekday
    let days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    let dayOfWeek = days[d.getDay()]
    let day = d.getDate();
    // find the month (short)
    d.getMonth() + 1;
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    let monthShort = month[d.getMonth()]
    // find the year
    let year = d.getFullYear();

    if (day < 10) {
        day = "0" + day;
      }

    return dayOfWeek + " " + monthShort + " " + day + " " + year;
};

function displayShows(){
    const showSelect = document.querySelector(".shows");
    const showsAlignContainer = document.createElement("div");
    showsAlignContainer.className = "shows__realign";
    showSelect.appendChild(showsAlignContainer);

    let headerCounter = 0;

    let displayNextShow = document.querySelector(".shows__realign");

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
    //   showsText1.innerText = "Mon Sept 06 2021";

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
    //   showsText2.innerText = "Ronald Lane";

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
    //   showsText3.innerText = "San Francisco, CA";

      showsCategory3.appendChild(showsLabel3);
      showsCategory3.appendChild(showsText3);
      showsForm.appendChild(showsCategory3);

      const showsCategoryButton = document.createElement("div");
      showsCategoryButton.className = "shows__category--button";

      const showsSubmitButton = document.createElement("button");
      showsSubmitButton.className = "shows__submit--hidden";
      showsSubmitButton.setAttribute("type", "submit");
    //   showsSubmitButton.innerText = "BUY TICKETS";

      showsCategoryButton.appendChild(showsSubmitButton);
      showsForm.appendChild(showsCategoryButton);

      showsContainerHeader.appendChild(showsForm);
      showsAlignContainer.appendChild(showsContainerHeader);
    }
    showsLog.forEach(
    (shows) => {

const showToggleContainer = document.createElement("div");
showToggleContainer.className = "shows__container";
showToggleContainer.addEventListener("click", (event) => {
    if(showToggleContainer.classList.contains("shows__container--select"))
    {
        showToggleContainer.classList.remove("shows__container--select");
    }
    else{
    removeSelect();
    showToggleContainer.classList.add("shows__container--select");
    }
})


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
dateParam.innerText = shows.date;
dateCategory.appendChild(dateLabel);
dateCategory.appendChild(dateParam);
showForm.appendChild(dateCategory);

const placeCategory = document.createElement("div");
placeCategory.className = "shows__category";
const placeLabel = document.createElement("label");
placeLabel.className = "shows__labelheader--hidden";
placeLabel.setAttribute("for", "");
placeLabel.textContent = "place";
const placeParam = document.createElement("p");
placeParam.className = "shows__text";
placeParam.innerText = shows.place;
placeCategory.appendChild(placeLabel);
placeCategory.appendChild(placeParam);
showForm.appendChild(placeCategory);

const locationCategory = document.createElement("div");
locationCategory.className = "shows__category";
const locationLabel = document.createElement("label");
locationLabel.className = "shows__labelheader--hidden";
locationLabel.setAttribute("for", "");
locationLabel.textContent = "LOCATION";
const locationParam = document.createElement("p");
locationParam.className = "shows__text";
locationParam.innerText = shows.location;
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
    })
};

function removeSelect(){
    let showToggleContainerAll = document.querySelectorAll(".shows__container");
    console.log(showToggleContainerAll);
    showToggleContainerAll.forEach((element) =>{
        console.log(element);
        element.classList.remove("shows__container--select");
    })
};