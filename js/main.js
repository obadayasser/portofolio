// ----------------- Setting box -----------------
// Open or close setting box when click on setting icon
let settingBox = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".setting-icon");
settingIcon.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  if (settingBox.classList.contains("open")) {
    settingIcon.style.background =
      "linear-gradient(95deg, rgba(11,5,29,1) 49%, rgba(97,49,223,1) 100%)";
  } else {
    settingIcon.style.background = "#fff";
    settingIcon.style.boxShadow = "none";
  }
});
// Close setting box when click on it or outside
document.addEventListener("click", (event) => {
  if (
    !settingIcon.contains(event.target) &&
    !settingBox.contains(event.target)
  ) {
    settingBox.classList.remove("open");
    settingIcon.style.background = "#fff";
    settingIcon.style.boxShadow = "none";
  }
});
// Check if there is a main color in local storage
const mainColor = localStorage.getItem("colorOption");
if (mainColor) {
  // Set main color to root
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    // Add active class to main color
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}
// Switch color
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Add active class to clicked color li in colors list
    localStorage.setItem("colorOption", e.target.dataset.color);
    // Add or remove active class from all lis in colors list
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// Array background image
let landing = document.querySelector(".landing-page");
let bgImages = [
  "07.webp",
  "06.webp",
  "05.webp",
  "04.webp",
  "03.webp",
  "02.webp",
  "01.webp",
];
// Random Background option
let bgOption = true;
let backgroundInterval;
// Check if there is a background image in local storage
let bgOptionLocalStorage = localStorage.getItem("bgImageOption");
if (bgOptionLocalStorage !== null) {
  // Check if bgOption is true or false from local storage
  if (bgOptionLocalStorage === "true") {
    bgOption = true;
    document
      .querySelector(".option-box .btn button[data-bg='on']")
      .classList.add("active");
  } else {
    bgOption = false;
    document
      .querySelector(".option-box .btn button[data-bg='off']")
      .classList.add("active");
  }
}
function randomBgImg() {
  if (bgOption === true) {
    backgroundInterval = setInterval(() => {
      // Get random number
      let random = Math.floor(Math.random() * bgImages.length);
      // Set background image by random number
      landing.style.backgroundImage = `url("images/${bgImages[random]}")`;
    }, 7000);
  }
}
// Set active class in cliked button on setting box random background
let btns = document.querySelectorAll(".option-box .btn button");
btns.forEach((button) => {
  button.addEventListener("click", (btn) => {
    btn.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    // Add active class to clicked button
    btn.target.classList.add("active");
    if (btn.target.dataset.bg === "on") {
      bgOption = true;
      // Set background option to true in local storage
      localStorage.setItem("bgImageOption", true);
      randomBgImg();
    } else {
      bgOption = false;
      // Set background option to false in local storage
      localStorage.setItem("bgImageOption", false);
      clearInterval(backgroundInterval);
    }
  });
});
randomBgImg();
// Reset setting local storage
let resetBtn = document.querySelector(".setting-box .option-box .reset");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
// ----------------- End Setting box ----------------
// Go to the section when click on links nav or bullet nav
const linksNav = document.querySelectorAll("header ul li a");
const bullets = document.querySelectorAll(".nav-bullets .bullet");
const linkfoot = document.querySelectorAll("footer ul li a");
function scrollToElement(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.preventDefault();
      document
        .querySelector(event.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
      // Add active class to clicked bullet
      elements.forEach((ele) => {
        ele.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });
}
scrollToElement(bullets);
scrollToElement(linksNav);
scrollToElement(linkfoot);
// ----- Active nav link and nav bullet when scroll At the apparent section ----
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionOffsetTop = section.offsetTop;
    let sectionOuterHeight = section.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    if (
      windowScrollTop >
      sectionOffsetTop - sectionOuterHeight + windowHeight
    ) {
      current = section.getAttribute("id");
      let bullets = document.querySelectorAll(".nav-bullets .bullet");
      bullets.forEach((bullet) => {
        if (bullet.dataset.section === `.${current}`) {
          bullet.classList.add("active");
        } else {
          bullet.classList.remove("active");
        }
      });
      linksNav.forEach((link) => {
        if (link.dataset.section === `.${current}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});
// ----------------- Toggle menu ---------------------
// Active toggle menu
const toggle = document.querySelector(".menu");
toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggle")) {
    toggle.classList.remove("toggle");
  } else {
    toggle.classList.add("toggle");
  }
});

// -------- Set background to header when scroll ------
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
// ----------------- End Navigation bar ----------------
// ----------------- Effect on typing text -------------
let typeEffect = new Typed(".type", {
  strings: [
    "Obada Yasser",
    "Web Developer",
    "Front-End Developer",
    "Web Designer",
    "Freelancer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  showCursor: true,
  smartBackspace: false,
  shuffle: true,
  loopCount: Infinity,
  contentType: "html",
});
// ----------- End Effect on typing text --------------
// ----------------- Projects -------------------------
let projects = document.querySelector(".project-box");
let myProjects = [
  {
    id: 1,
    title: "Restaurant",
    discription: "This is Restaurant , Buy Restaurant",
    link: "https://obadayasser.github.io/restourant1/",
  },
  {
    id: 2,
    title: "Scroll ",
    discription: "Scroll JS- mu scroll",
    link: "https://obadayasser.github.io/scroll/",
  },
  {
    id: 3,
    title: "Portfolio",
    discription: "This is my Portfolio",
    link: "#",
  },
  {
    id: 4,
    title: "Spiro Spates",
    discription: "Spiro Spates-Shop for sale ",
    link: "https://obadayasser.github.io/spiro-spates/",
  },
  {
    id: 5,
    title: "Planets",
    discription: "This is animatin",
    link: "https://obadayasser.github.io/plan/",
  },
  {
    id: 6,
    title: " Travel",
    discription: " Travel about world ",
    link: "https://obadayasser.github.io/travel2/",
  },

];

for (let i = 0; i < myProjects.length; i++) {
  projects.innerHTML += `
  <div class="project">
          <div class="image">
            <div class="overlay"></div>
            <img width="100px" src=./images/Project-${myProjects[i].id}.webp alt="${myProjects[i].title}" />
          </div>
          <div class="content">
            <div class="text">
              <h3>${myProjects[i].title}</h3>
              <p>${myProjects[i].discription}</p>
              <a href="${myProjects[i].link}" target="_blank"><i class="fa-solid fa-up-right-from-square" target="_blank"></i></a>
            </div>
          </div>
        </div>
  `;
}

// ----------------- End Projects ---------------------
// ----------------- Skills ---------------------------
const skills = document.querySelector(".skills");
window.addEventListener("scroll", () => {
  let skillOffsetTop = skills.offsetTop;
  let skillOuterHeight = skills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.scrollY;
  if (
    windowScrollTop >
    skillOffsetTop - skillOuterHeight + windowHeight
  ) {
    let skillSpans = document.querySelectorAll(
      ".skills .skill .skill-progress span"
    );
    skillSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
      span.innerHTML = span.dataset.progress;
    });
  }
});
// ----------------- End Skills ----------------------
// ----------------- Contact -------------------------
function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_jsibvw8", "template_g3y1i4m", params)
    .then((res) => {
      document.getElementById("success").style.display = "flex";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => (document.getElementById("error").style.display = "flex"));
}
let sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", () => {
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";
  if (document.getElementById("name").value == "") {
    alert("Please Enter Your Name");
  } else if (document.getElementById("email").value == "") {
    alert("Please Enter Your Email");
  } else if (document.getElementById("message").value == "") {
    alert("Please Enter Your Message");
  } else {
    // CHECK IF EMAIL IS VALID
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !re.test(String(document.getElementById("email").value).toLowerCase())
    ) {
      alert("Please Enter A Valid Email");
      return false;
    } else {
      sendMail();
    }
  }
}); // ----------------- End Contact ---------------------
// ----------------- Year footer -----------------
const year = document.querySelector("footer .year");
year.innerHTML = new Date().getFullYear();
// ----------------- End Year footer ------------
