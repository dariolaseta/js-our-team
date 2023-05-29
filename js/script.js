const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    },
];

const divElement = document.getElementById("team-members");

console.log(teamMembers);

for(let i = 0; i < teamMembers.length; i++){
    console.log("Nome: " + teamMembers[i].name, "Ruolo: " + teamMembers[i].role, "Stringa della foto: " + teamMembers[i].picture);
}

for(let i = 0; i < teamMembers.length; i++){
    divElement.appendChild(createElement());
}

function createElement(){
    let element = document.createElement("p");
    element.innerHTML = "Test";

    return element;
}