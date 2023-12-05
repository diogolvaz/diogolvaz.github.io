

// JavaScript
const publications_more_button = document.querySelector("#publications-more-button");

publications_more_button.addEventListener("click", function() {
    if (publications_more_button.textContent=="more"){
        publications_more_button.textContent="less"
    }
    else{
        publications_more_button.textContent="more"
    }
});

/**************************************************************************************************************************** */

addPaper("Synthesis of Fault-Tolerant Reliable Broadcast Algorithms with Reinforcement Learning",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "IEEE Access Journal", "June 2023",
        true)

addPaper("Automatic Generation of Distributed Algorithms with Generative AI",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "The 53rd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (Disrupt Track)", "June 2023",
        true)

addPaper("Aprender a gerar algoritmos",
        "<u>Diogo Vaz</u>",
        "Público (Portuguese Journal)", "May 2023",
        false)

addPaper("Learning to generate Reliable Broadcast Algorithms",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "arXiv Preprint", "July 2022",
        false)

addPaper("MIRES: Intrusion Recovery for Applications based on Backend-as-a-Service",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "IEEE Transactions on Cloud Computing Journal", "May 2022",
        true)

addPaper("MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "7th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous)", "December 2020",
        false)

addPaper("MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
        "<u>Diogo Vaz</u>",
        "Master Thesis", "November 2020",false)

/* ADD PAPER TO LIST */
function addPaper(title,authors,publisher,date,selected_paper){
    var element='\
    <div class="d-flex">\
        <!--div>\
            <i class="fa-solid fa-star fa-xl star-icon"></i>\
        </div-->\
        <div class="container w-75">\
            <p class="paper-title"><b>&#9679 '+title+'</b></p>\
            <p class="paper-authors">'+authors+'</p>\
            <p class="paper-publisher">'+publisher+', '+date+'</p>\
        </div>\
        <div class="container w-25 ">\
            <div class="container d-flex justify-content-end">\
                <i class="fa-solid fa-file fa-xl icon"></i>\
            </div>\
        </div>\
    </div>'
    var paper_list = null

    /* add to the selected papers list */
    if (selected_paper){
        paper_list=document.getElementById('list-of-selected-papers')
        paper_list.innerHTML+=element
    }
    /* add to the all papers list */
    paper_list=document.getElementById('list-of-papers')
    paper_list.innerHTML+=element
}