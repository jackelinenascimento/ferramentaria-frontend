const cardSection = document.getElementById('resultado-pesquisa')
const btnBuscar = document.getElementById('btn_buscar')

let json

function cards(json){
    return `
    <div class="card">
        <img class="card-img-top" src="../mock/ferramentas/${json.img}" alt="${json.alt}">   
        <h5 class="card-title text-center mt-4"><strong><u>${json.titulo}</u></strong></h5>
        <p class="card-text">Tensão:<strong> ${json.tensao}</strong></p>    
        <p class="card-text">Modalidade:<strong> ${json.modalidade}</strong></p> 
        <p class="card-text">Descrição:<strong> ${json.descricao}</strong></p>
        <p class="card-text">Disponibilidade:<strong> ${json.disponibilidade}</strong></p> 
    </div>`
}

const books = async () => {
    try{
        const response = await fetch('../mock/ferramentas/mock.json')
        if(!response.ok) throw `com o status: ${response.status}`
        json = await response.json()
        for (let i=0; i<=json.length; i++){
            cardSection.innerHTML += cards(json[i])
        }
    }catch(e){
        // console.log('Erro ao acessar o array')
    }
}

const filter = () => {
    let result = json.filter(function(){
        
    })
}
books()



