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
const testimonials = document.getElementById("testimonials");
const reverseCol = document.querySelector(".reverse");
const forwardCol = document.querySelectorAll(".forward");
const closeLocationListMobile = document.querySelector(".select-list-close");
const closeDurationListMobile = document.querySelector(".duration-list-close");
const saveServiceSelectionMobile = document.getElementById("save-selected");
const clearBtn = document.getElementById("clear-selected");
let reverseColTop = 100;
let forwardColTop = 0;
let currentScrollPos = 0;
let lastScrollPos = 0;
let servicesSelected = [];
const meetProvidersBottom = meetProviders.offsetTop + meetProviders.offsetHeight;
const testimonialsTop = testimonials.offsetTop;

/* DEBUG */
console.log(`meetProviders top: ${meetProviders.offsetTop}`);
console.log(`meetProviders bottom: ${meetProvidersBottom}`);
console.log(reverseColTop);
console.log(`forwardCol top: ${forwardCol[0].offsetTop}`);
console.log(`testimonials top: ${testimonialsTop}`);

let didScroll = false;

window.addEventListener("scroll", (event) => {
    if (window.scrollY > meetProviders.offsetTop && window.scrollY < testimonialsTop) {
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
}, 250)

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
        title: "Droid Builder",
        rating: "4.6",
        ratingCount: "12k",
        price: "$232"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=533d71e7733d1ad05ecdc25051eed663&sat=-100",
        title: "Gorgmonger",
        rating: "4.4",
        ratingCount: "23k",
        price: "$159"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=3c3a259ced051ff05ebf18363560f8a3&sat=-100",
        title: "Sabersmith",
        rating: "4.8",
        ratingCount: "14k",
        price: "$925"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=3628ed72497c3380a9d8ed5b28324b4e&sat=-100",
        title: "Flatstender",
        rating: "4.7",
        ratingCount: "42k",
        price: "$99"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=74431510267fc1f508e74102732677e6&sat=-100",
        title: "Pack Tracker",
        rating: "4.2",
        ratingCount: "10k",
        price: "$314"
    },
    {
        icon: "https://doodleipsum.com/200/abstract?i=f8b1abea359b643310916a38aa0b0562&sat=-100",
        title: "Roustabout",
        rating: "4.5",
        ratingCount: "44k",
        price: "$250"
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
        img: "https://doodleipsum.com/x300/avatar?i=c4dc7b95ebea00be8106260981c237e8",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=ba9624d2b59340525f879a0c738ba82e",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=c2a46927c51b9a0707dcd491590fe419",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=edbdee1810d4f521cee26aa6f4e911b5",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=f859cefbfe6dc6acca9189a5e2c4af0c",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=a08a6fd3e8db7c952e3f0b8bf21d772d",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=2b56fb33ea5f14f9b1d14f63fd748f81",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=1523c975b53f96fc9739704f2bab12be",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=6d9541ee20837edf1f2fc30a06b0c501",
        name: "Someone Someone",
        service: "What they do",
        location: "Where they are"
    },
    {
        img: "https://doodleipsum.com/x300/avatar?i=21ba150fa4c5288eaa0b59391e902fad",
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
    <p class="list-item" role="option" onclick="setButtonText(event)">${location}</p>
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
    locationSelect.parentElement.classList.toggle("hidden");
})

//TO-DO: Refactor to make this work for any button
const setButtonText = (event) => {
    console.log(locationBtn.firstElementChild);
    locationBtn.firstElementChild.innerText = event.target.innerText;
    locationSelect.parentElement.classList.toggle("hidden");
}

closeLocationListMobile.addEventListener("click", () => {
    locationSelect.parentElement.classList.toggle("hidden");
})

// Services

serviceBtn.addEventListener("click", () => {
    serviceSelect.parentElement.classList.toggle("hidden");
})

saveServiceSelectionMobile.addEventListener("click", () => {
    serviceSelect.parentElement.classList.toggle("hidden");
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
        serviceBtn.firstElementChild.innerText = "Services"
        checkCounter.innerText = "";
        checkCounter.classList.toggle("hidden");
    }

}

clearBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })

    //TO-DO: refactor to make an update services function
    servicesSelected = [];
    serviceBtn.firstElementChild.innerText = "Services"
    checkCounter.innerText = servicesSelected.length;
    checkCounter.classList.add("hidden")
})

// Duration

durationBtn.addEventListener("click", () => {
    durationSelect.parentElement.classList.toggle("hidden");
})

const setDurationText = (event) => {
    console.log(event);
    durationBtn.firstElementChild.innerText = event.target.innerText;
    durationSelect.parentElement.classList.toggle("hidden");
}

closeDurationListMobile.addEventListener("click", () => {
    durationSelect.parentElement.classList.toggle("hidden");
})

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