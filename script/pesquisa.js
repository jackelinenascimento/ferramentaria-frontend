const cardSection = document.getElementById('resultado-pesquisa')

const selectFerramenta = document.getElementById('select-ferramenta')

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

const ferramentas = async () => {
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

ferramentas()

const filter = () => {

    let jsonFilter

    console.log(selectFerramenta.value)

    if(selectFerramenta.value == 0 || selectFerramenta.value == "Todas"){
        cardSection.innerHTML = "";
        ferramentas()
    }

    if(selectFerramenta.value != 0 && selectFerramenta.value != "Todas"){
        jsonFilter = json.filter(ferramenta => ferramenta.titulo === selectFerramenta.value)
        
        if(jsonFilter.length > 0){
            cardSection.innerHTML = "";
            for (let i=0; i<=jsonFilter.length; i++){
                cardSection.innerHTML += cards(jsonFilter[i])
            }
        }
    }
}

btnBuscar.addEventListener("click", (e) =>{
    filter() 
})



