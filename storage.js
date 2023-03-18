/*
function Storage(){


}
*/

class Storage{

  static addFilmToStorage(newFilm){
  
    let films=this.getFilmsFromStorage();

    films.push(newFilm);
    /* 
    
    [
        {
            title:"ssssasasa",director:"sasaassaas",url:"3223232223"
        }
    ]
    şekllinde objeleri array  e  atıyoruz
    
    */
 
    localStorage.setItem("films",JSON.stringify(films));

}
static getFilmsFromStorage(){

    let films;

    if(localStorage.getItem("films")=== null){
      films=[];
    }else{
      films=JSON.parse(localStorage.getItem("films"));//stringden array e cevirdik
  
    }
    return films;
}
 static deleteFilmFromStorage(filmTitle){
//splice
  let films=this.getFilmsFromStorage();
  films.forEach(function(film,index){

    if(film.title===filmTitle){

      films.splice(index,1);
    }
  });
  localStorage.setItem("films",JSON.stringify(films));

  ui.displayMessages("silme işlemi basarılı","success");

}

static clearAllFilmsFromStorage(){

  localStorage.removeItem("films");
}


}
