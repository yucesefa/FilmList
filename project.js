const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");

/*
//UI objesinini baslatma

const ui=new UI();
//Storage  objesi üret
const storage=new Storage();

*/

//tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){

        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}
function addFilm(e){

    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    
    if(title===""|| director==="" || url===""){
        //hata
        UI.displayMessages("tum alanları doldurun","danger");
    }else{
        //yeni film
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);//arayuze film ekleme
        Storage.addFilmToStorage(newFilm);//storage a film ekleme
        UI.displayMessages("film basarıyla eklendi..","succes");
    }


    UI.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}
function deleteFilm(e){

    if(e.target.id==="delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    }
}
function clearAllFilms(){

    if(confirm("Emin misiniz ?")){

    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    }
}