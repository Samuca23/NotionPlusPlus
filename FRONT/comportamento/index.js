var req = new Request();

function adicionaCard() {
    //Cria um novo card a partir do ID cadastrado.
    req.addNote((data) => {
        new Card(data.title, data.content, data.id);
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
    }
    req.updateNote(data);
}

function loadNotations() {
    req.loadNotes((data) => {
        for(indice in data) {
            new Card(data[indice].title, data[indice].content, data[indice].id);
        }
    });
}
