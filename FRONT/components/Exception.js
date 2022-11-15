class Exception {

    /**
     * @param {Boolean} bError Tipo
     * @param {Boolean} bAlert Tipo Alerta
     * @param {String} sCustumize Tipo de erro com mensagem costumizada
     * @param {Boolean} bReturnConsole se deve retornar no console
     */
    constructor(bError = false, bAlert = false, sCustumize = '', bReturnConsole) {
        if (bReturnConsole) {
            this._returnConsole = bReturnConsole;
        }

        if (bError) {
            this.getExceptionError();
        }

        if (bAlert) {
            this.getExceptionAlert();
        }

        if (sCustumize) {
            this.getExceptionCustumize(sCustumize);
        }

    }

    /**
     * Seta se deve retornar no console.
     */
    set returnConsole(bReturn) {
        this._returnConsole = bReturn;
    }

    /**
     * Retorna se deve ir para o console.
     */
    get returnConsole() {
        return this._returnConsole;
    }

    /**
     * Dispara um alerta do tipo Erro
     */
    getExceptionError = () => {
        let oError = new Error('Erro interno. Contante o administrador');
        oError.name = "Error";
        window.alert(oError);
        this.isReturnConsole();
    }
    
    /**
     * Dispara um alerta com o Erro do tipo Alerta.
     */
    getExceptionAlert = () => {
        let oAlert = new Error('Isso poderá causar problemas com o sistema.');
        oAlert.name = "Alerta";
        window.alert(oAlert);
        this.isReturnConsole();
    }
    
    /**
     * Dispara um alerta de Erro costumizado.
     * 
     * @param {String} sException 
     */
    getExceptionCustumize = (sException) => {
        let oError = new Error(sException);
        oError.name = "Error Custimized";
        window.alert(oError);
        this.isReturnConsole();
    }

    /**
     * Retorna o tipo do erro no console.
     * 
     * @param {Object} oError 
     */
    isReturnConsole() {
        if (this._returnConsole) {
            console.log(this._returnConsole);
        }
    }

}
