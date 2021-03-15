function personajes(){
    
    let program = document.getElementById("capturar").value

    let url =`https://rickandmortyapi.com/api/character/${parseInt(program)}`


     for (i = 1; i  <= parseInt(program) ;i++) {
      
        fetch(`${url}${i}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
           let component = `<div class="card ml-2" style="width: 18rem;-webkit-box-shadow: 5px 5px 15px 5px #000000; 
           box-shadow: 5px 5px 15px 5px #000000; " >
           <img  id="imgCard" class="card-img-top"  src="${data.image}" alt="Card image cap">
              <div class="card-body">
                   <p class="card-text text-center" id="chardName">${data.name}</p>
                   <p class="card-text text-center" id="chardEspecie">${data.species}</p>
               </div>
         </div>`

         
           document.getElementById("capturar").value += component
           document.getElementById("consume").innerHTML += component
           
        })
         
     }                      
           
         
            
         
        

        
     

    
}

