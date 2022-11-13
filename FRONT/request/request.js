class Request {

    constructor() {
        
    }

    get URL() {
        return 'http://localhost:8282/notes';
    }

    addNote(fnSucess) {
        let dataToInsert = {
            "title" : "newNote",
            "content" : "exemple content" 
        };

        fetch(this.URL, 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToInsert)
            }
        ).then(response => response.json())
        .then(
            (data) => {
                fnSucess(data);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    removeNote(id) {
        console.log('removeu ' + id);
        
        fetch(this.URL+'/'+id, 
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
        ).then(response => response.json())
        .then(
            (data) => {
                console.log(data);
                //Remove o card a partir do ID.
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    updateNote(dados) {
        fetch(this.URL+'/'+dados.id, 
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            }
        ).then(response => response.json())
        .then(
            (data) => {
                console.log(data);
                //Não faz nada pois a tela já está atualizada.
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

    loadNotes(fnSucess) {
        fetch(this.URL, 
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        ).then(response => response.json())
        .then(
            (data) => {
                fnSucess(data);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }

}