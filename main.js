

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
        true,
        "https://www.researchgate.net/publication/371705768_Synthesis_of_Fault-Tolerant_Reliable_Broadcast_Algorithms_with_Reinforcement_Learning")

addPaper("Automatic Generation of Distributed Algorithms with Generative AI",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "The 53rd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (Disrupt Track)", "June 2023",
        true,
        "https://www.researchgate.net/publication/371760975_Automatic_Generation_of_Distributed_Algorithms_with_Generative_AI")

/*addPaper("Aprender a gerar algoritmos",
        "<u>Diogo Vaz</u>",
        "Público (Portuguese Journal)", "May 2023",
        false)
*/

addPaper("Learning to generate Reliable Broadcast Algorithms",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "arXiv Preprint", "July 2022",
        false,
        "https://www.researchgate.net/publication/362410565_Learning_to_generate_Reliable_Broadcast_Algorithms")

addPaper("MIRES: Intrusion Recovery for Applications based on Backend-as-a-Service",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "IEEE Transactions on Cloud Computing Journal", "May 2022",
        true,
        "https://www.researchgate.net/publication/360965942_MIRES_Intrusion_Recovery_for_Applications_based_on_Backend-as-a-Service")

addPaper("MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
        "<u>Diogo Vaz</u>, David R. Matos, Miguel L. Pardal and Miguel Correia",
        "7th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous)", "December 2020",
        false,
        "https://www.researchgate.net/publication/353801489_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks")

addPaper("MIRES: Recovering Mobile Applications based on Backend-as-a-Service from Cyber Attacks",
        "<u>Diogo Vaz</u>",
        "Master Thesis", "November 2020",
        false,
        "https://www.researchgate.net/publication/367268385_MIRES_Recovering_Mobile_Applications_based_on_Backend-as-a-Service_from_Cyber_Attacks")

/* ADD PAPER TO LIST */
function addPaper(title,authors,publisher,date,selected_paper,link){
    var element='\
    <div class="d-flex">\
        <!--div>\
            <i class="fa-solid fa-star fa-xl star-icon"></i>\
        </div-->\
        <div class="container w-75">\
            <p class="paper-title"><b>&#9679 '+title+'</b></p>\
            <p class="paper-authors">'+authors+'</p>\
            <p class="container d-flex paper-publisher "><b>'+publisher+', '+date+'</b></p>\
        </div>\
        <div class="container w-25 ">\
            <div class="container d-flex justify-content-end">\
                <a href='+link+'>\
                <i class="fa-solid fa-file fa-xl icon"></i>\
                </a>\
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