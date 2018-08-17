// Test Vars
var PreviewSettings = {
    "NumberOfLines" : 50
}
// Page properties
var page = document.getElementsByClassName('page')[0];
var htmlPages = document.getElementById('html-pages');

// Define all the things we need
var header = document.getElementsByClassName('header')[0];
var headerHeight = header.offsetHeight;

var headerSpacer = document.getElementsByClassName('header-spacer')[0];

var footer = document.getElementsByClassName('footer')[0];
var footerHeight = footer.offsetHeight;

var invoiceLinesPrevPage = document.getElementsByClassName('invoice-lines-previous-page')[0];
var invoiceLinesNextPage = document.getElementsByClassName('invoice-lines-next-page')[0];
var invoiceLinesPrevPageHeight = invoiceLinesPrevPage.offsetHeight;

var invoiceDetails = document.getElementsByClassName('invoice-details')[0];
var invoiceDetailsHeight = invoiceDetails.offsetHeight;
var content = document.getElementsByClassName('content')[0];
var contentHeight = content.offsetHeight;

var invoiceLines = document.getElementsByClassName('invoice-lines-body')[0];

for(var i = 1; i <PreviewSettings.NumberOfLines;i++){

    // Calculate how much room there is to fill the table with invoicelines
    var roomtoPrint = page.offsetHeight - invoiceLines.getBoundingClientRect().bottom

    // When theres no more room on the page, add a new Page.
    if(roomtoPrint < 30){
        /* ADD NEW PAGE */
        addPage(i);
        footer.style.display = "none"
    }else{
        footer.style.display = "block"
        invoiceLines.insertAdjacentHTML("beforeend",addInvoiceLine(i));

    }
}


function addPage(page){
    htmlPages.insertAdjacentHTML('beforeend','<div class="page" id="page-'+ page+ '"></div>');
    /* Import the header and invoice details to the new page */
    var page = document.getElementById('page-' + n);
    page.insertAdjacentHTML("beforeend",header.outerHTML);
    page.insertAdjacentHTML("beforeend",headerSpacer.outerHTML)
    page.insertAdjacentHTML("beforeend",invoiceDetails.outerHTML)

}
// Add invoice lines
function addInvoiceLine(l){
    var strVar="";
        strVar += "<tr>";
        strVar += " <td class=\"text-left padding-left\" width=\"120px\">KV 7846" + l + "<\/td>";
        strVar += " <td class=\"text-left\">oliefilter<\/td>";
        strVar += " <td class=\"text-right\" width=\"52px\">3.00<\/td>";
        strVar += " <td class=\"text-right\" width=\"80px\">€ 12.56<\/td>";
        strVar += " <td class=\"text-right\" width=\"80px\"> € 30.00<\/td>";
        strVar += " <td class=\"text-right\" width=\"80px\">€ 7.68<\/td>";
        strVar += " <td class=\"text-right padding-right\" width=\"30px\">1<\/td>";
        strVar += " <\/tr>";
    return strVar
}

function prepareInvoiceTable(){

}