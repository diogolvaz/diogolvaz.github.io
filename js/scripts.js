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
  "Last update: " + [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ][new Date(document.lastModified).getMonth()] + " " + new Date(document.lastModified).getFullYear();

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
  "May 2022",
  true
);

renderPublication(
  "IEEE_Access_2023",
  "Synthesis of Fault-Tolerant Reliable Broadcast Algorithms with Reinforcement Learning",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "IEEE Access",
  "https://www.researchgate.net/publication/371705768_Synthesis_of_Fault-Tolerant_Reliable_Broadcast_Algorithms_with_Reinforcement_Learning",
  "",
  "June 2023",
  true
);

renderPublication(
  "MIRES_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "7th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous)",
  "https://www.researchgate.net/publication/353801489_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks",
  "https://github.com/diogolvaz/MIRES",
  "December 2020",
  false
);

renderPublication(
  "DSN_2023",
  "Automatic Generation of Distributed Algorithms with Generative AI",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "The 53rd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (Disrupt Track)",
  "https://www.researchgate.net/publication/371760975_Automatic_Generation_of_Distributed_Algorithms_with_Generative_AI",
  "",
  "June 2023",
  true
);

renderPublication(
  "MIRES_MasterThesis_2020",
  "MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
  "<b>Diogo Vaz</b>",
  "Master Thesis",
  "https://www.researchgate.net/publication/367268385_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks",
  "https://github.com/diogolvaz/MIRES",
  "November 2020",
  false
);

renderPublication(
  "Extra_1",
  "Learning to generate Reliable Broadcast Algorithms",
  "<b>Diogo Vaz</b>, David R. Matos, Miguel L. Pardal and Miguel Correia",
  "arXiv Preprint",
  "https://www.researchgate.net/publication/362410565_Learning_to_generate_Reliable_Broadcast_Algorithms",
  "",
  "July 2022",
  false
);

renderPublication(
  "Extra_2",
  "Aprender a gerar algoritmos",
  "<b>Diogo Vaz</b>",
  "Público (Portuguese Journal)",
  "https://www.publico.pt/2023/05/02/ciencia/noticia/aprender-gerar-algoritmos-2048140",
  "",
  "May 2023",
  false
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
  date,
  selected
) {
  document.getElementById(tag).innerHTML =
    '<div class="d-flex flex-column flex-md-row justify-content-between mb-5">\
          <div class="flex-grow-1">\
            <div class="publication-tittle">\
              ' +
    renderSelected(selected) + ' ' +
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

function renderSelected(selected) {
  if (selected) {
    return '<i class="fa fa-star selected-star"></i>';
  }
    return '';
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
  "Master in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "November 2021 - February 2022",
  "Teaching Assistant in laboratory classes"
);

renderTeaching(
  "SD_2022",
  "Distributed Systems",
  "Bachelor in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "March 2022 - Present",
  "Teaching Assistant in laboratory classes"
);

renderTeaching(
  "OS_2023",
  "Operating Systems",
  "Bachelor in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "November 2022 - February 2023",
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
  "Ph.D. Student Researcher",
  "INESC-ID, Lisboa, Portugal",
  "I'm conducting research on the field of fault-tolerant distributed algorithms. More specifically, I'm trying to <b>use machine learning techniques to develop known and new fault-tolerant distributed algorithms</b> such as Consensus.",
  "February 2020 - Present"
);

renderExperience(
  "2021_Present",
  "Teaching Asssistant",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "I'm responsible for the laboratory classes. Until now, I have taught the courses of <b>Systems and Network Security (Master's Degree)</b>, <b>Distributed Systems (Bachelor's Degree)</b> and <b>Operating Systems (Bachelor's Degree)</b>.",
  "November 2021 - Present"
);

renderExperience(
  "2020_2021",
  "IT Analyst",
  "Vodafone, Lisboa, Portugal",
  "I have integrated the team responsible for the application used by Vodafone's salespersons. The application was built using <b>OutSystems' low code</b>.",
  "September 2020 - January 2021"
);

renderExperience(
  "2019_2020",
  "Master's Student Researcher",
  "INESC-ID, Lisboa, Portugal",
  "I have conducted research in the field of intrusion recovery. More precisely, I developed an intrusion recovery service for mobile applications based on Backend-as-a-Service (e.g. Firebase). The service was built using <b>NodeJS, Typescript, Javascript, HTML, CSS, and Firebase</b>.",
  "September 2019 - November 2020"
);

renderExperience(
  "2018_2018",
  "Internship",
  "Xpand-IT, Lisboa, Portugal",
  "I have participated in the development of two different applications: (1) an application that, based on a photo, could identify the feelings expressed by those in that photo and (2) an application capable of identifying if the documents inserted by the users were correctly filled. Both applications were built using <b>C#, HTML, and AI solutions from Microsoft Azure</b>.",
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
    <ul>\
    <li>" +
    work_description +
    '\
    </li>\
    </ul>\
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
  "Responsible to develop a portal connecting the Portuguese public administration and university to public administrations of other countries",
  "https://www.de4a.eu/",
  "February 2021 - May 2023"
);

renderProject(
  "FAULTAGE",
  "Generating Fault-Tolerant Distributed Algorithms using Generative AI (FAULTAGE)",
  "INESC-ID, Lisboa, Portugal",
  "My PhD work where I'm developing automatic processes to generating fault-tolerant distributed algorithms using machine learning techniques",
  "https://diogolvaz.github.io/FAULTAGE/",
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
    <ul>\
  <li>" +
    work_description +
    '\
    </li>\
    </ul>\
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

//#########################################################################################################
//#########################################################################################################


/**
 *
 * EDUCATION
 *
 */

renderEducation(
  "PhD",
  "Ph.D. in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "February 2021 - Present",
  "<ul>\
  <li>Researching <b>fault-tolerant algorithms with machine learning</b> techniques</li>\
  <li>Supported by an <b>FCT Scholarship</b></li>\
  </ul>"
)

renderEducation(
  "BSc",
  "Bachelor in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "September 2015 - January 2019",
  "<ul>\
  <li>Final grade of 14/20</li>\
  </ul>"
);

renderEducation(
  "MSc",
  "Master in Information Systems and Computer Engineering",
  "Instituto Superior Técnico, Lisboa, Portugal",
  "September 2018 - November 2020",
  "<ul>\
    <li>Specialization in <b>Distributed Systems</b>, <b>Artificial Intelligence</b> and <b>Cybersecurity</b></li>\
    <li>Thesis focused on the field of <b>intrusion recovery for mobile applications</b> with a grade of <b>20/20</b></li>\
    <li>Final grade of 17/20</li>\
  </ul>"
);


function renderEducation(tag, title, place, duration, extra) {
  document.getElementById(tag).innerHTML = '<div\
  class="d-flex flex-column flex-md-row justify-content-between mb-7"\
  >'+
  '<div class="flex-grow-1">\
    <div class="publication-tittle mb-0">\ '
    +
    title
    +
    '</div>\
    <div class="publication-authors mb-3">\ '
    +
    place
    +
    ' | '
    +
    duration
    +
    '</div>\ '
    +
    extra
    +
  '</div>\
  </div>';
}
