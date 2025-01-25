const locationBtn = document.getElementById("location-btn");
const locationSelect = document.getElementById("location-select");
const serviceBtn = document.getElementById("service-btn");
const serviceSelect = document.getElementById("service-select");
const checkCounter = document.getElementById("check-counter");
const durationBtn = document.getElementById("duration");
const durationSelect = document.getElementById("duration-select");
const serviceCardContainer = document.getElementById("service-card-container");
let servicesSelected = [];


/* Data for select boxes */
const locations = ["Alabama",
    "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina",
    "North Dakota", "Ohio", "Oklahoma","Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

const services = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
    "Service 7",
    "Service 8",
    "Service 9",
    "Service 10"
]

const durations = [
    "One-time",
    "Recurring",
]

/* Data for Service Cards */
const popularServices = [
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f701b63cfe38e57fa0408c238af32027&sat=-100",
        title: "Service Title 2",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    }
]

/* 
<div class="service-card">
    <div class="service-icon">Icon</div>
    <div class="service-title">Title</div>
    <div class="service-stats">
        <div class="reviews">5 stars</div>
        <div class="price">$100</div>
    </div>
</div>
*/

/* Initialize select boxes */

locations.forEach((location) => {
    locationSelect.innerHTML += `
    <p class="list-item" onclick="setButtonText(event)">${location}</p>
    `
})

services.forEach((service) => {
    serviceSelect.innerHTML += `
    <p class="list-item">
        <label for="${service}"><input type="checkbox" name="${service}" onchange="updateServicesSelected(this)" />
        ${service}</label>
    </p>`
})

durations.forEach((duration) => {
    durationSelect.innerHTML += `
    <p class="list-item" onclick="setDurationText(event)">${duration}</p>
    `
})

 
/* Add click events and update functions to select box elements */

// Location
locationBtn.addEventListener("click", () => {
    locationSelect.classList.toggle("hidden");
})

//TO-DO: Refactor to make this work for any button
const setButtonText = (event) => {
    console.log(locationBtn.firstElementChild);
    locationBtn.firstElementChild.innerText = event.target.innerText;
    locationSelect.classList.toggle("hidden");
}

// Services

serviceBtn.addEventListener("click", () => {
    serviceSelect.classList.toggle("hidden");
})

const updateServicesSelected = (target) => {
    console.log(target);
    if (target.checked) {
        servicesSelected.push(target);
    } else {
        let index = servicesSelected.indexOf(target)
        servicesSelected.splice(index, 1);
    }
    console.log(servicesSelected);
    if (servicesSelected.length > 0 ) {
        serviceBtn.firstElementChild.innerText = servicesSelected[0].parentElement.innerText;
        checkCounter.innerText = servicesSelected.length;
        checkCounter.classList.remove("hidden");
    } else {
        serviceBtn.innerText = "Services"
        checkCounter.innerText = "";
        checkCounter.classList.toggle("hidden");
    }

}

// Duration

durationBtn.addEventListener("click", () => {
    durationSelect.classList.toggle("hidden");
})

const setDurationText = (event) => {
    console.log(event);
    durationBtn.firstElementChild.innerText = event.target.innerText;
    durationSelect.classList.toggle("hidden");
}

// Populate Service Card Area
popularServices.forEach((service) => {
    serviceCardContainer.innerHTML += `
        <div class="service-card">
        <div class="service-icon">
            <img src="${service.icon}" />
        </div>
        <div class="service-details-container">
            <div class="service-title">${service.title}</div>
            <div class="service-stats">
                <div class="reviews">
                    <i class="fa-solid fa-star"></i><span class="rating">${service.rating}</span><span class="review-count">(${service.ratingCount})</span></div>
                <div class="price">from ${service.price}</div>
            </div>
        </div>
    </div>
    `
})