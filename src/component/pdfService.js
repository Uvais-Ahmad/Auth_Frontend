const { default: axios } = require("axios");

const apiUrl = 'http://localhost:8000/api/v1/downloadInvoice';

const pdfService = {
    downloadPDF : function(){
        return axios.get(apiUrl , {
            responseType:'blob',
            headers:{
                'Accept':'application/pdf'
            }
        })
    }
}

export default pdfService;
