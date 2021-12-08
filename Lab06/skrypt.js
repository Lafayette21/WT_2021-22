var xmlHttp;

function getRequestObject()      {
	if ( window.ActiveXObject)  {
            return ( new ActiveXObject("Microsoft.XMLHTTP")) ;
        }
        else if (window.XMLHttpRequest)  {
           return (new XMLHttpRequest())  ;
        }
        else {
           return (null) ;
        }
}

function send(){
   xmlHttp = getRequestObject() ;
       if (xmlHttp) {
         try {
           var autor = document.getElementById("autor").value ;
	         var tytul = document.getElementById("tytul").value ;
           var url = "../cgi-bin/append.py" ;
           url += "?autor=" + autor + "&" + "tytul=" + tytul;
           xmlHttp.onreadystatechange = handleResponse ;
           xmlHttp.open("GET", url, true);
           xmlHttp.send(null);
         }
         catch (e) {
           alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
         }
       }
       else {
         alert ("Blad") ;
       }
}

function handleResponse()      {
    if (xmlHttp.readyState == 4) {
         if ( xmlHttp.status == 200 )  {
             alert("Dodano do bazy");
         }
    }
}

function newRecord(){
      var zmiana=document.getElementById("arkusz");
      //first row
      var row=document.createElement("tr");
      var cell=document.createElement("td");
      var node = document.createTextNode("Tytul");
      cell.appendChild(node);
      row.appendChild(cell);
      var field = document.createElement("input");
      field.setAttribute("type","text");
      field.setAttribute("name","tytul");
      field.setAttribute("id","tytul");
      cell.appendChild(field);
      row.appendChild(cell);
      zmiana.appendChild(row);
      zmiana.appendChild(row);
      //second row
      row=document.createElement("tr");
      cell=document.createElement("td");
      node = document.createTextNode("Autor");
      cell.appendChild(node);
      row.appendChild(cell);
      field= document.createElement("input");
      field.setAttribute("type","text");
      field.setAttribute("name","autor");
      field.setAttribute("id","autor");
      cell.appendChild(field);
      row.appendChild(cell);
      zmiana.appendChild(row);
      //Przetworzenie diva
      row=document.createElement("tr");
      var button=document.createElement("input");
      button.setAttribute("type","button");
      button.setAttribute("value","Wyslij");
      button.setAttribute("onclick","send()");
      row.appendChild(button);
      row.setAttribute("colspan","2");
      zmiana.appendChild(row);
}

function recordList() {
      
       xmlHttp = getRequestObject();
       if (xmlHttp) {
         try {
           var url = "../cgi-bin/load.py" ;
           xmlHttp.onreadystatechange = handleRecordList;
           xmlHttp.open("GET", url, true);
           xmlHttp.send(null);
         }
         catch (e) {
           alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
         }
       }
       else {
       	alert ("Blad") ;
       }
}

function handleRecordList() {
    if (xmlHttp.readyState == 4) {
        if ( xmlHttp.status == 200 ) {
	          var div = document.getElementById('container');
            var data = "<h3> Rekordy dostepne w bazie danych </h3>";
            data += xmlHttp.responseText;
            div.innerHTML = data;
        }
    }
}