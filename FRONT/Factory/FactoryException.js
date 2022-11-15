class FactoryException {

    /**
     * @param {Boolean} bError Tipo
     * @param {Boolean} bAlert Tipo Alerta
     * @param {String} sCustumize Tipo de erro com mensagem costumizada
     * @param {Boolean} bReturnConsole se deve retornar no console
     */
    constructor(bError = false, bAlert = false, sCustumize = '', bReturnConsole) {
        new Exception(bError, bAlert, sCustumize, bReturnConsole);
    }

}
