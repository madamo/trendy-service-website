const locationBtn = document.getElementById("location-btn");
const locationSelect = document.getElementById("location-select");
const serviceBtn = document.getElementById("service-btn");
const serviceSelect = document.getElementById("service-select");
const checkCounter = document.getElementById("check-counter");
const durationBtn = document.getElementById("duration");
const durationSelect = document.getElementById("duration-select");
const serviceCardContainer = document.getElementById("service-card-container");
const providerCardContainer = document.getElementById("provider-card-container");
const meetProviders = document.getElementById("meet-providers");
const reverseCol = document.querySelector(".reverse");
const forwardCol = document.querySelectorAll(".forward");
let reverseColTop = 100;
let forwardColTop = 0;
let currentScrollPos = 0;
let lastScrollPos = 0;
let servicesSelected = [];
const meetProvidersBottom = meetProviders.offsetTop + meetProviders.offsetHeight;

/* DEBUG */
console.log(`meetProviders top: ${meetProviders.offsetTop}`);
console.log(`meetProviders bottom: ${meetProvidersBottom}`);
console.log(reverseColTop);
console.log(`forwardCol top: ${forwardCol[0].offsetTop}`);

let didScroll = false;

window.addEventListener("scroll", (event) => {
    if (window.scrollY > meetProviders.offsetTop && window.scrollY < 1700) {
        //console.log("meeting providers!");
        didScroll = true;
       // console.log(window.scrollY);
        //reverseColTop-=1;
        //console.log(reverseCol);
        //reverseScroll(reverseColTop);
    //} else {
      //  didScroll = false;
        //reverseCol.style.transform = `translateY(${50}px)`;
    }
});

setInterval(() => {
    if (didScroll) {
        console.log("scrolled");
        console.log(`scrollY: ${window.scrollY}`);
        didScroll = false;
        currentScrollPos = window.scrollY;
        if (currentScrollPos > lastScrollPos) {
            reverseColTop-=1;
            forwardColTop+=1;
            console.log("scrolling down")
            reverseScroll(reverseColTop, "down");
            forwardScroll(forwardColTop, "down");
        } else if (currentScrollPos < lastScrollPos) {
            console.log("scrolling up");
            reverseColTop+=1;
            forwardColTop-=1;
            reverseScroll(reverseColTop, "up");
            forwardScroll(forwardColTop, "up");
        }

        lastScrollPos = currentScrollPos;

    }
}, 150)

const reverseScroll = (pos, dir) => {
    //console.log("reversing scroll");
    if (reverseColTop > 0 && dir === "down") {
        reverseCol.style.transform = `translateY(${pos}px)`;
    } else if (reverseColTop >= 0 && dir === "up") {
        reverseCol.style.transform = `translateY(${pos}px)`;

    } else {
        return;
    }
    //reverseCol.style.border = "2px solid magenta";
}

const forwardScroll = (pos, dir) => {
    //console.log("reversing scroll");
    if (forwardColTop < 50 && dir === "down") {
        forwardCol.forEach((col) => {
            col.style.transform = `translateY(${pos}px)`
            console.log(forwardColTop);
        })
    } else if (forwardColTop > 0 && dir === "up") {
        forwardCol.forEach((col) => {
            col.style.transform = `translateY(${pos}px)`;
        })
    } else {
        return;
    }
    //reverseCol.style.border = "2px solid magenta";
}




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

/* Data for Provider Cards */
const providers = [
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
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
/*popularServices.forEach((service) => {
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
})*/

/* Populate Provider Card Area */

/*providers.forEach((provider) => {
    providerCardContainer.innerHTML += `
    <div class="provider-card">
        <img src="${provider.img}" />
        <span class="status">Available</span>
        <p class="provider-name">${provider.name}</p>
        <p class="provider-service">${provider.service}</p>
        <p class="provider-location">${provider.location}</p>
    </div>
    `
})*/

/*for (let i=0; i<9; i+=3) {
    providerCardContainer.innerHTML += `<div class="card-col">`
    for (let j=i; j<i+3; j++) {
       providerCardContainer.innerHTML += `
        <div class="provider-card">
            <img src="${providers[j].img}" />
            <span class="status">Available</span>
            <p class="provider-name">${providers[j].name}</p>
            <p class="provider-service">${providers[j].service}</p>
            <p class="provider-location">${providers[j].location}</p>
        </div>`
    }
    providerCardContainer.innerHTML += `</div>`

}*/

/*
<div class="provider-card">
    <img src="https://doodleipsum.com/x300/avatar?i=3533bd4fd20e8ae0528f2006722f958a" />
    <span class="status">Available</span>
    <p class="provider-name">Someone Someone</p>
    <p class="provider-service">What they do</p>
    <p class="provider-location">Where they are</p>
</div>
*/

const showPanel = (event) => {
    //console.log(event.target.firstElementChild);
    const panel = event.target.nextElementSibling
    const chevron = event.target.firstElementChild;
    //event.target.nextElementSibling.classList.toggle("hidden");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        chevron.className = "fa-solid fa-chevron-down"
    } else {
        chevron.className = "fa-solid fa-chevron-up"
        panel.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
    }
}