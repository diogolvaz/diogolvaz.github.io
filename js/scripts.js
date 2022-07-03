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
  "Last update: " + document.lastModified;

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
  FILES_URL + "/Publications/Journal/Vaz_MIRES,2022.pdf",
  "https://github.com/diogolvaz/MIRES",
  "The Backend-as-a-Service (BaaS) cloud computing\
  model supports many modern popular mobile applications because it simplifies the development and management of services\
  such as data storage, user authentication, and notifications.\
  However, vulnerabilities and other issues may allow malicious\
  actions on the client side to have impact on the backend, i.e., to\
  corrupt the state of the application in the cloud. To deal with\
  these attacks – after they occur and are successful – it is necessary\
  to remove the direct effects of malicious requests and the effects\
  derived from later operations on corrupted data.\
  We introduce MIRES, the first intrusion recovery service for\
  mobile applications based on the BaaS model. MIRES uses a twostage recovery process that restores the integrity of the mobile\
  application and minimizes its unavailability. MIRES provides\
  multi-service recovery for applications that use more than one\
  data store. We implemented MIRES for Android and for the\
  Firebase cloud-based BaaS platform. We did experiments on 4\
  mobile applications which showed that MIRES can revert hundreds to thousands of operations in seconds, with an associated\
  unavailability of the application also in the range of seconds.",
  "May 2022"
);

renderPublication(
  "MIRES_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "7th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous)",
  FILES_URL + "/Publications/Conference/Vaz_MIRES,2020.pdf",
  "https://github.com/diogolvaz/MIRES",
  "Many popular mobile applications rely on the\
  Backend-as-a-Service(BaaS) cloud computing model to\
  simplify the development and management of services like\
  data storage, user authentication and notifications.\
  However, vulnerabilities and other issues may lead to\
  malicious operations on the mobile application client-side\
  and malicious requests being sent to the backend,\
  corrupting the state of the application in the cloud. To\
  deal with these attacks after they happen and are\
  successful, it is necessary to remove the immediate\
  effects created by the malicious requests and subsequent\
  effects derived from later requests. In this paper, we\
  present MIRES, an intrusion recovery service for mobile\
  applications based on BaaS. MIRES uses a two-phase recovery\
  process that restores the integrity of the mobile\
  application and minimizes its unavailability. We\
  implemented MIRES in Android and with the Firebase\
  platform and made experiments with 3 mobile applications\
  that showed results of 1000 operations reverted in less\
  than 1 minute and with the mobile application inaccessible\
  only for less than 15 seconds.",
  "December 2020"
);

renderPublication(
  "MIRES_MasterThesis_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>",
  "Master Thesis",
  FILES_URL + "/Publications/Education/Vaz_MasterThesis,2020.pdf",
  "https://github.com/diogolvaz/MIRES",
  "Many popular mobile applications rely on the Backend-as-a-Service (BaaS) cloud computing\
  model to simplify the development and management of services like data storage, user authentication and\
  notifications. However, vulnerabilities and other issues may lead to malicious\
  operations on the mobile application client-side that consequently generate malicious requests\
  being sent to the backend, corrupting the state of the application in the cloud. To deal with\
  these attacks after they happen and are successful, it is necessary to remove the immediate\
  effects created by the malicious requests and subsequent effects derived from later requests. In\
  this work, we present MIRES, an intrusion recovery service for mobile applications based on\
  BaaS. MIRES uses a two-phase recovery process that restores the integrity of the mobile application and\
  minimizes its unavailability. Besides the main intrusion recovery feature, MIRES\
  also provides a client-side mechanism that allows the mobile application users to revert their\
  own actions. We implemented MIRES in Android and with the Firebase platform and made\
  experiments with 4 mobile applications that showed results of 1000 operations reverted in less\
  than 1 minute and with the mobile application inaccessible only for less than 15 seconds.",
  "November 2020"
);

renderPublication(
  "ENSD_2022",
  "Learning to solve Distributed Problems",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "Encontro Nacional de Sistemas Distribuídos (Portuguese National Conference on Distributed Systems)",
  FILES_URL + "/Publications/Poster/ENSD,2022.pdf",
  "",
  "",
  "June 2022"
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
  abstract,
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
              </div>\
          <div\
            class="modal fade"\
            id="' +
    tag +
    '_Abstract"\
            tabindex="-1"\
            role="dialog"\
            aria-labelledby="exampleModalLabel"\
            aria-hidden="true"\
          >\
            <div class="modal-dialog modal-lg" role="document">\
              <div class="modal-content">\
                <div class="modal-header">\
                  <h5 class="modal-title" id="exampleModalLabel">Abstract</h5>\
                </div>\
                <div class="modal-body">\
                  <p class="publication-abstract">\
                    ' +
    abstract +
    '\
                  </p>\
                </div>\
              </div>\
            </div>\
          </div>\
          <div class="flex-shrink-0">\
          <div class="icons">\
              ' +
    this.renderIcons(tag, abstract, publication_link, code_link) +
    "\
            </div>\
          </div>\
        </div>";
}

function renderIcons(tag, abstract, publication_link, code_link) {
  icons = "";
  if (abstract !== "") {
    icons +=
      '<a\
                class="icon"\
                data-toggle="modal"\
                data-target="#' +
      tag +
      '_Abstract"\
                href="#' +
      tag +
      '_Abstract">\
                <div class="tooltip">\
                  <div>Abstract</div>\
                </div>\
                <i class="fa fa-align-justify"></i\
              ></a>';
  }
  if (publication_link !== "") {
    icons +=
      '<a\
    class="icon"\
    href="' +
      publication_link +
      '"\
    >\
    <div class="tooltip">\
      <div>File</div>\
    </div>\
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
                <div class="tooltip">\
                  <div>Code</div>\
                </div>\
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
  "Msc in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "November 2021 - February 2022",
  "Teaching Assistant in laboratory classes"
);

renderTeaching(
  "SD_2022",
  "Distributed Systems",
  "Bsc in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "March 2022 - May 2022",
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
    course_name +
    '</div>\
              <div class="publication-authors">\
                ' +
    institution +
    " | " +
    date +
    '\
              </div>\
            </div>\
            <div class="flex-shrink-0">\
            <div class="icons">\
            <a class="icon">\
              <div class="tooltip"><div>' +
    degree +
    '</div></div>\
              <i class="fa-solid fa-graduation-cap"></i>\
            </a>\
            <a class="icon">\
              <div class="tooltip"><div>' +
    role +
    '</div></div>\
              <i class="fa-solid fa-chalkboard-user"></i>\
            </a>\
          </div>\
            </div>\
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
  "2019_2019",
  "Internship",
  "Xpand-IT, Lisboa, Portugal",
  "Development of a web application using Microsoft Azure services",
  "June 2019 - August 2019"
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

renderEUProject(
  "DE4A_2021_2022",
  "Digital Europe For All (DE4A)",
  "INESC-ID, Lisboa, Portugal",
  "Development of a portal to allow the application of european students to european universities",
  "https://www.de4a.eu/",
  "February 2021 - Present"
);

/**
 *
 * RENDER PROJECT
 *
 */

function renderEUProject(tag, tittle, place, work_description, link, duration) {
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
      <div class="flex-child" style="margin-top: 5px">\
        <img\
          src="assets/img/european_union.jpeg"\
          width="50"\
          height="30"\
        />\
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
        <div class="tooltip">Link</div>\
        <i class="fa fa-link"></i>\
      </a>\
    </div>\
  </div>\
</div>';
}

//#########################################################################################################
//#########################################################################################################
