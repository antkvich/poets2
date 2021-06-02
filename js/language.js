let btnRU = document.getElementById("ru");
let btnEN = document.getElementById("en");
let elPoets = document.getElementById("poets");
let elMain = document.getElementById("main");
let elBrand = document.getElementById("brand");

btnEN.addEventListener('click', function (){
    elPoets.innerHTML = "Poets";
    elMain.innerHTML = "Home";
    elBrand.innerHTML = "Belorussian poets";
})
btnRU.addEventListener('click', function (){
    elPoets.innerHTML = "Поэты";
    elMain.innerHTML = "Главная";
    elBrand.innerHTML = "Поэты беларуси";
})



function findN(){
    let poetNames =["Якуб Колас", "Максим Танк", "Кондрат Крапива", "Змитрок Бядуля", "Петрусь Бровка"];
    let poetLinks =["kolas.html", "tank.html", "krapiva.html", "biadulia.html", "browka.html"];

    let btnF = document.getElementById('findBtn');
    let name = document.getElementById('text-to-find').value;


    btnF.addEventListener('click', FindPoet(name, poetNames, poetLinks));
    
}

function FindPoet(findName, poetNames, poetLinks){
    for (let i = 0; i < poetNames.length; i++){
        if (poetNames[i].includes(findName)){
            window.open(poetLinks[i]);
        }
    }
}





