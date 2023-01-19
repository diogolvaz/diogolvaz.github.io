/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

document.getElementById("last_update").innerHTML =
  "Last update: " + document.lastModified.substring(0, 10);

//#########################################################################################################
//#########################################################################################################

/**
 *
 * VARIABLES
 *
 */

FILES_URL = "https://diogolvaz.github.io/Files";

//#########################################################################################################
//#########################################################################################################

function showConferencePublications() {
  document.getElementById("conference_publications").style.display = "inline";
  document.getElementById("journal_publications").style.display = "none";
  document.getElementById("education_publications").style.display = "none";
}

function showJournalPublications() {
  document.getElementById("conference_publications").style.display = "none";
  document.getElementById("journal_publications").style.display = "inline";
  document.getElementById("education_publications").style.display = "none";
}

function showEducationPublications() {
  document.getElementById("conference_publications").style.display = "none";
  document.getElementById("journal_publications").style.display = "none";
  document.getElementById("education_publications").style.display = "inline";
}

/**
 *
 * PUBLICATIONS
 *
 */

renderPublication(
  "MIRES_2022",
  "MIRES: Intrusion Recovery for Applications based on Backend-as-a-Service",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "IEEE Transactions on Cloud Computing",
  "https://www.researchgate.net/publication/360965942_MIRES_Intrusion_Recovery_for_Applications_based_on_Backend-as-a-Service",
  "https://github.com/diogolvaz/MIRES",
  "May 2022"
);

renderPublication(
  "MIRES_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "7th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous)",
  "https://www.researchgate.net/publication/353801489_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks",
  "https://github.com/diogolvaz/MIRES",
  "December 2020"
);

renderPublication(
  "MIRES_MasterThesis_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>",
  "Master Thesis",
  "https://www.researchgate.net/publication/367268385_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks",
  "https://github.com/diogolvaz/MIRES",
  "November 2020"
);

renderPublication(
  "Extra_1",
  "Learning to generate Reliable Broadcast Algorithms",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "arXiv Preprint",
  "https://www.researchgate.net/publication/362410565_Learning_to_generate_Reliable_Broadcast_Algorithms",
  "",
  "July 2022"
);

/**
 *
 * RENDER PUBLICATION
 *
 */

function renderPublication(
  tag,
  tittle,
  authors,
  place,
  publication_link,
  code_link,
  date
) {
  document.getElementById(tag).innerHTML =
    '<div class="d-flex flex-column flex-md-row justify-content-between mb-5">\
          <div class="flex-grow-1">\
            <div class="publication-tittle">\
              ' +
    tittle +
    '\
            </div>\
            <div class="publication-authors mb-1">\
              ' +
    authors +
    '\
            </div>\
            <div class="publication-place mb-2">\
              ' +
    place +
    ", " +
    date +
    '\
            </div>\
              </div>'+
    '<div class="flex-shrink-0">\
          <div class="icons">\
              ' +
    this.renderIcons(publication_link, code_link) +
    "\
            </div>\
          </div>\
        </div>";
}

function renderIcons(publication_link, code_link) {
  icons = "";
  if (publication_link !== "") {
    icons +=
      '<a\
    class="icon"\
    href="' +
      publication_link +
      '"\
    >\
    <i class="fab fa fa-file-text"></i\
  ></a>';
  }
  if (code_link !== "") {
    icons +=
      '<a\
                class="icon"\
                href="' +
      code_link +
      '"\
                >\
                <i class="fab fa fa-code"></i\
              ></a>';
  }
  return icons;
}

//#########################################################################################################
//#########################################################################################################

/**
 *
 * EDUCATION
 *
 */

//#########################################################################################################
//#########################################################################################################

/**
 *
 * TEACHING
 *
 */

renderTeaching(
  "SIRS_2022",
  "Network and Systems Security",
  "MSc in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "November 2021 - March 2022",
  "Teaching Assistant in laboratory classes"
);

renderTeaching(
  "SD_2022",
  "Distributed Systems",
  "BSc in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "March 2022 - July 2023",
  "Teaching Assistant in laboratory classes"
);

renderTeaching(
  "OS_2023",
  "Operating Systems",
  "BSc in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "November 2022 - March 2023",
  "Teaching Assistant in laboratory classes"
);

/**
 *
 * RENDER TEACHING
 *
 */

function renderTeaching(tag, course_name, degree, institution, date, role) {
  document.getElementById(tag).innerHTML =
    '<div class="d-flex flex-column flex-md-row justify-content-between mb-7">\
            <div class="flex-grow-1">\
              <div class="publication-tittle mb-0">' +
    course_name + " | " + degree +
    '</div>\
              <div class="publication-authors">\
                ' +
    institution +
    " | " +
    date +
    '\
              </div>\
            </div>\
            <div class="flex-shrink-0">'+
    '</div>\
          </div>';
}

//#########################################################################################################
//#########################################################################################################

/**
 *
 * EXPERIENCE
 *
 */

renderExperience(
  "2020_Present",
  "Junior Researcher",
  "INESC-ID, Lisboa, Portugal",
  "Junior researcher working on machine learning techniques to solve distributed problems",
  "February 2020 - Present"
);

renderExperience(
  "2020_2021",
  "IT Analyst",
  "Vodafone, Lisboa, Portugal",
  "OutSytems developer working on the mobile application used by Vodafone commercials",
  "September 2020 - January 2021"
);

renderExperience(
  "2019_2020",
  "Student Researcher",
  "INESC-ID, Lisboa, Portugal",
  "Master's student researching intrusion recovery applied to mobile application and Backend-as-a-Service",
  "September 2019 - November 2020"
);

renderExperience(
  "2018_2018",
  "Internship",
  "Xpand-IT, Lisboa, Portugal",
  "Development of a web application using Microsoft Azure services",
  "June 2018 - August 2018"
);

/**
 *
 * RENDER EXPERIENCE
 *
 */

function renderExperience(tag, role, place, work_description, duration) {
  document.getElementById(tag).innerHTML =
    '<div\
  class="d-flex flex-column flex-md-row justify-content-between mb-5"\
>\
  <div class="flex-grow-1">\
    <div class="publication-tittle mb-0">' +
    role +
    '</div>\
    <div class="publication-authors mb-3">' +
    place +
    " | " +
    duration +
    "</div>\
    <p>" +
    work_description +
    '\
    </p>\
  </div>\
  <div class="flex-shrink-0">\
  </div>\
</div>';
}

//#########################################################################################################
//#########################################################################################################

/**
 *
 * PROJECTS
 *
 */
renderProject(
  "MIRES_2020_2021",
  "Mobile Applications Intrusion Recovery Service (MIRES)",
  "INESC-ID, Lisboa, Portugal",
  "A service to recover the state of mobile applications using Firebase",
  "https://github.com/diogolvaz/MIRES",
  "September 2019 - September 2020"
);

renderProject(
  "DE4A_2021_2022",
  "Digital Europe For All (DE4A) | European Project",
  "INESC-ID, Lisboa, Portugal",
  "Developing a portal connecting the Portuguese public administration and university to public administrations of other countries",
  "https://www.de4a.eu/",
  "February 2021 - Present"
);

/**
 *
 * RENDER PROJECT
 *
 */

function renderProject(tag, tittle, place, work_description, link, duration) {
  document.getElementById(tag).innerHTML =
    '<div\
  class="d-flex flex-column flex-md-row justify-content-between mb-5"\
  >\
  <div class="flex-grow-1">\
    <div class="flex-container">\
      <div class="flex-child">\
        <div class="publication-tittle mb-0">' +
    tittle +
    '</div>\
      </div>\
    </div>\
    <div class="publication-authors mb-3">' +
    place +
    " | " +
    duration +
    "</div>\
    <p>" +
    work_description +
    '\
    </p>\
  </div>\
  <div class="flex-shrink-0">\
  <div class="icons">\
      <a class="icon" href="' +
    link +
    '">\
        <i class="fa fa-link"></i>\
      </a>\
    </div>\
  </div>\
</div>';
}

//#########################################################################################################
//#########################################################################################################


/**
 *
 * CERTIFICATES
 *
 */

function renderCertificate(tag, place, work_description, link, duration) {
  document.getElementById(tag).innerHTML =
    '<div\
  class="d-flex flex-column flex-md-row justify-content-between mb-5"\
  >\
  <div class="flex-grow-1">\
    <div class="flex-container">\
    <div class="publication-authors mb-3">' +
    place +
    " | " +
    duration +
    "</div>\
    <p>" +
    work_description +
    '\
    </p>\
  </div>\
  <div class="flex-shrink-0">\
  <div class="icons">\
      <a class="icon" href="' +
    link +
    '">\
        <div class="tooltip">Link</div>\
        <i class="fa fa-link"></i>\
      </a>\
    </div>\
  </div>\
</div>';
}