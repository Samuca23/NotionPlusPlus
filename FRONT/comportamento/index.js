var req = new Request();

function adicionaCard() {
    //Cria um novo card a partir do ID cadastrado.
    req.addNote((data) => {
        new FactoryCard(data.title, data.content, data.id, data.date);
    });
}

function removeCard(id) {
    req.removeNote(id);
    document.getElementById('divcardDiv'+id).innerHTML = '';
}

function updateCard(id) {
    let data = {
        "id": id,
        "title": document.getElementById(`inputHeader${id}`).value,
        "content": document.getElementById(`inputDescricao${id}`).value,
        "date": new Date().getTime(),
    }
    req.updateNote(data);
    document.getElementById('paragraphDataHora'+id).innerHTML = Card.getDateTratado(data.date);
}

function loadNotations() {
    req.loadNotes((data) => {
        for(indice in data) {
            new FactoryCard(data[indice].title, data[indice].content, data[indice].id, data[indice].date);
        }
    });
}
