
function cadastrar(){
    const placa = document.getElementById('Placa').value;
    const nome = document.getElementById('NomeProp').value;
    const numApartamento = document.getElementById('NumApartamento').value;
    const blocoApartamento = document.getElementById('BlocoApartamento').value;
    const modelo = document.getElementById('ModeloVeículo').value;
    const cor = document.getElementById('CorVeiculo').value;
    const numVaga = document.getElementById('IdVaga').value;



    alert("Vaga Registrada Com Sucesso");
    console.log("Placa: " + placa + "\nNome: " + nome+ "\nNúmero Apartamento: " + numApartamento+ "\nBloco Apartamento: " + blocoApartamento+ "\nModelo: " + modelo+ "\nCor: " + cor+ "\nNúmero Da Vaga: " + numVaga)
}


function limpar(){
    const placa = document.getElementById('Placa').value ="";
    const nome = document.getElementById('NomeProp').value ="";
    const numApartamento = document.getElementById('NumApartamento').value= "";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "";
    const modelo = document.getElementById('ModeloVeículo').value= "";
    const cor = document.getElementById('CorVeiculo').value= "";
    const numVaga = document.getElementById('IdVaga').value= "";
}

function Vaga01(){
    const placa = document.getElementById('Placa').value ="111";
    const nome = document.getElementById('NomeProp').value ="111";
    const numApartamento = document.getElementById('NumApartamento').value= "111";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "111";
    const modelo = document.getElementById('ModeloVeículo').value= "111";
    const cor = document.getElementById('CorVeiculo').value= "111";
    const numVaga = document.getElementById('IdVaga').value= "111";

}

function Vaga02(){
    const placa = document.getElementById('Placa').value ="MGTX-4020";
    const nome = document.getElementById('NomeProp').value ="João";
    const numApartamento = document.getElementById('NumApartamento').value= "214";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "B2";
    const modelo = document.getElementById('ModeloVeículo').value= "Nissan";
    const cor = document.getElementById('CorVeiculo').value= "Preto";
    const numVaga = document.getElementById('IdVaga').value= "66";

}

function Vaga03(){
    const placa = document.getElementById('Placa').value ="Placeholder";
    const nome = document.getElementById('NomeProp').value ="Placeholder";
    const numApartamento = document.getElementById('NumApartamento').value= "Placeholder";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "Placeholder";
    const modelo = document.getElementById('ModeloVeículo').value= "Placeholder";
    const cor = document.getElementById('CorVeiculo').value= "Placeholder";
    const numVaga = document.getElementById('IdVaga').value= "Placeholder";

}

function Vaga04(){
    const placa = document.getElementById('Placa').value ="Placeholder";
    const nome = document.getElementById('NomeProp').value ="Placeholder";
    const numApartamento = document.getElementById('NumApartamento').value= "Placeholder";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "Placeholder";
    const modelo = document.getElementById('ModeloVeículo').value= "Placeholder";
    const cor = document.getElementById('CorVeiculo').value= "Placeholder";
    const numVaga = document.getElementById('IdVaga').value= "Placeholder";

}

function remover(){
    alert("Cadastro Removido Com Sucesso")
    const placa = document.getElementById('Placa').value ="";
    const nome = document.getElementById('NomeProp').value ="";
    const numApartamento = document.getElementById('NumApartamento').value= "";
    const blocoApartamento = document.getElementById('BlocoApartamento').value= "";
    const modelo = document.getElementById('ModeloVeículo').value= "";
    const cor = document.getElementById('CorVeiculo').value= "";
    const numVaga = document.getElementById('IdVaga').value= "";

}