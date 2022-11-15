/**
 * Classe responsável por montar os cards
 */
class Card {

    constructor(sTitleCard, sContentCard, iId, sDate) {
        this.createLayout(sTitleCard, sContentCard, iId, sDate);
    }

    /**
     * Adiciona o card na tela.
     * @param {String} sTitleCard 
     * @param {String} sContentCard 
     * @param {Integer} iIdNote 
     */
    createLayout = (sTitleCard, sContentCard, iIdNote, sDate) => {
        let oDivContainer = document.getElementById('container');

        let oDivCard = this.createDiv(`cardDiv${iIdNote}`, 'card');
        oDivCard.style.width = '18rem';
        let oDivCardBody = this.createDiv(`cardBody${iIdNote}`, 'card-body');
        let oHeader = this.createHeader(sTitleCard, iIdNote, 'card-title');
        let oInput = this.createInput(sContentCard, iIdNote, 'card-text');
        let oButton = this.createButton('x', iIdNote, 'button');
        let oDivDate = this.createParagraph(this.getDateTratado(sDate), iIdNote, 'datahora');

        oDivContainer.appendChild(oDivCard);
        oDivCard.appendChild(oDivCardBody);
        oDivCardBody.appendChild(oDivDate);
        oDivCardBody.appendChild(oHeader);
        oDivCardBody.appendChild(oInput);
        oDivCardBody.appendChild(oButton);
    }

    /**
     * Função para criar div.
     * 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createDiv = (sId, sClass) => {
        let oDiv = document.createElement('div');
        oDiv.setAttribute('id', `div${sId}`);
        oDiv.setAttribute('class', sClass);

        return oDiv;
    }

    /**
     * Função para criar o Elemento de Input
     * 
     * @param {string} sContent 
     * @param {string} sClass 
     * @param {string} sId 
     * @returns 
     */
    createInput = (sContent = '', sId = '', sClass = '') => {
        let oInput = document.createElement('input');
        oInput.setAttribute('id', `inputDescricao${sId}`);
        oInput.setAttribute('class', sClass);
        oInput.value = sContent;
        oInput.addEventListener('change', () => {
            updateCard(sId)
        })

        return oInput;
    }

    /**
     * Função para criar o Elemento de paragrafo
     * 
     * @param {string} sContent 
     * @param {string} sClass 
     * @param {string} sId 
     * @returns 
     */
    createParagraph = (sContent = '', sId = '', sClass = '') => {
        let oInput = document.createElement('p');
        oInput.setAttribute('id', `paragraph${sId}`);
        oInput.setAttribute('class', sClass);
        oInput.innerHTML = sContent;

        return oInput;
    }

    /**
     * Função para criar o Elemento de H
     * 
     * @param {string} sContent 
     * @param {integer} iSizeHeader 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createHeader = (sContent = '', sId = '', sClass = '') => {
        let oHeader = document.createElement('input');
        oHeader.setAttribute('id', `inputHeader${sId}`);
        oHeader.setAttribute('class', sClass);
        oHeader.value = sContent;

        return oHeader;
    }

    /**
     * Função para criar o Elemento de Button
     * 
     * @param {string} sContent 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createButton = (sContent = '', sId = '', sClass = '') => {
        let oButton = document.createElement('button');
        oButton.setAttribute('id', `buttonCard${sId}`);
        oButton.setAttribute('class', sClass);
        oButton.innerText = sContent;
        oButton.addEventListener('click', () => {
            removeCard(sId)
        });

        return oButton;
    }

    /**
     * Retorna a data tratada
     */
    getDateTratado = (sDate) => {
        let oDate = new Date(sDate);
        return oDate.toLocaleDateString() + ' ' + oDate.toLocaleTimeString();
    }

}