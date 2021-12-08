function Ferramenta(nome, descricao, tensao, modalidade, disponibilidade, st, imagem){
    this.nome = nome;
    this.descricao = descricao;
    this.tensao = tensao;
    this.modalidade = modalidade;
    this.disponibilidade = disponibilidade;
    this.st = st;
    this.imagem = imagem;
}



const cardSection = document.getElementById('relacao-anuncios');

function cards(json){
    return `
        <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="../mock/ferramentas/${json.imagem}" >
            <div class="card-body">
                <h5 class="card-title">${json.nome}</h5>
                <p class="card-text">${json.descricao}</p>
                <p class="card-text">Modalidade: ${json.modalidade}</p>
                <p class="card-text">Disponiilidade: ${json.disponibilidade}</p>
                <p class="card-text">Status: ${json.st}</p>
                <a href="#" class="btn btn-primary">Editar</a>
            </div>
            
        </div>`
}


function adicionarFerramenta(){
    var obj = lerDados();
    cardSection.innerHTML += cards(obj);

}

function lerDados(){ 
    
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var tensao = document.getElementById("tensao").value;
    var modalidade = document.getElementById("modalidade").value;
    var disponibilidade = document.getElementById("disponibilidade").value;
    var st = document.querySelector('input[name=status]:checked').value;
    
    var imagem = document.getElementById("imagem").value;
    var nomeImagem = imagem.split('\\');
    imagem = nomeImagem[nomeImagem.length - 1];

    var minhaFerramenta = new Ferramenta(nome, descricao, tensao, modalidade, disponibilidade, st, imagem);

    return minhaFerramenta;

}