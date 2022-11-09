class Card {

    constructor(sTitleCard, sContentCard) {
        this.createLayout(sTitleCard, sContentCard);
    }

    createLayout = (sTitleCard, sContentCard) => {
        let oDivContainer = document.getElementById('container');

        let oDivCard = this.createDiv('', 'card');
        oDivCard.style.width = '18rem';
        let oDivCardBody = this.createDiv('', 'card-body');
        let oHeader = this.createHeader(sTitleCard, 5, '', 'card-title');
        let oParagraph = this.createParagraph(sContentCard, '', 'card-text');

        oDivContainer.appendChild(oDivCard);
        oDivCard.appendChild(oDivCardBody);
        oDivCardBody.appendChild(oHeader);
        oDivCardBody.appendChild(oParagraph);
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
        oDiv.setAttribute('id', sId);
        oDiv.setAttribute('class', sClass);

        return oDiv;
    }

    /**
     * Função para criar o Elemento de Parágrafo
     * 
     * @param {string} sContent 
     * @param {string} sClass 
     * @param {string} sId 
     * @returns 
     */
    createParagraph = (sContent = '', sId = '', sClass = '') => {
        let oParagraph = document.createElement('p');
        oParagraph.setAttribute('id', sId);
        oParagraph.setAttribute('class', sClass);
        oParagraph.innerText = sContent;

        return oParagraph;
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
    createHeader = (sContent = '', iSizeHeader = 1, sId = '', sClass = '') => {
        let oHeader = document.createElement('h' + iSizeHeader);
        oHeader.setAttribute('id', sId);
        oHeader.setAttribute('class', sClass);
        oHeader.innerText = sContent;

        return oHeader;
    }

}
