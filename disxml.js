/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile = 'store.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
            myFunction(xmlDoc);
           
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}

function myFunction(xml) {
   
    document.getElementById("dis").innerHTML =
    xmlDoc.getElementsByTagName("STU-NAME")[0].nodeName;
    

   
    }
