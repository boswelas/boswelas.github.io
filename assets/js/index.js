document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web development", "user experience"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });

  const navLinks = document.querySelectorAll("header .navbar ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
      const target = this.getAttribute("href");
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    });
  });


  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
      const sectionId = section.getAttribute("id");
      const sectionOffset = section.offsetTop - 200;

      if (scrollPosition >= sectionOffset) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        document.querySelector('.navbar ul li a[href="#' + sectionId + '"]').classList.add("active");
      }
    });
  });

  fetchData().then(data => {
    showSkills(data);
  });

  fetchData("projects").then(data => {
    showProjects(data);
  });



});


async function fetchData(type = "skills") {
  let response;
  type === "skills" ? response = await fetch("skills.json") : response = await fetch("./projects/projects.json");
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsRow");
  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
      <div class="bar">
        <div class="info">
          <img src=${skill.icon} alt="skill" />
          <span>${skill.name}</span>
        </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#project .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .forEach(project => {
      projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="./assets/images/projects/${project.image}.jpeg" alt="project" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`;
    });
  projectsContainer.innerHTML = projectHTML;
}

fetchData().then(data => {
  showSkills(data);
});

fetchData("projects").then(data => {
  showProjects(data);
});

// Listen for the form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  var formData = new FormData(this);

  // Create an object with the form data and other parameters for EmailJS
  var emailParams = {
    from_name: formData.get("from_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message")
  };

  // Send the email using EmailJS
  emailjs.send("service_djib4wr", "template_si2d1kk", emailParams, "C830ASSROArnGT3X_")
    .then(function (response) {
      console.log("Email sent successfully", response);
      alert("Your message has been sent!"); // Show a success message
      // Clear the form inputs if needed
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.error("Error sending email", error);
      alert("Oops... An error occurred."); // Show an error message
    });
});
