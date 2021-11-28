function update(){
    var stringN=document.form1.nazwisko.value;
    var stringI=document.form1.imie.value;
    var stringE=document.form1.email.value;
    var stringR=document.form1.rok.value;
    var stringU=document.form1.uwagi.value;
    var tabelka="<table><tr><th>Walidacja niepoprawna</th></tr>"
    if (stringN.length<4){
        tabelka+="<tr><td>Za krótkie nazwisko </td></tr>";
    }
    if(stringI.length<4){
        tabelka+="<tr><td>Za krótkie imie </td></tr>";
    }
    if(stringE==""){
        tabelka+="<tr><td>Adres email jest wymagany</td></tr>";
    }
    if(stringR=="Wybierz rok"){
        tabelka+="<tr><td>Należy określić rok </td></tr>";
    }
    tabelka+="</table>";
    //var tabelka="<table><tr> <td>"+bladN+"</td> </tr><tr> <td>"+bladI+"</td></tr><tr> <td>"+bladE+"</td></tr><tr> <td>"+bladR+"</td></tr></table>";
    
    if(tabelka!="<table><tr><th>Walidacja niepoprawna</th></tr></table>"){

        document.getElementById("test").innerHTML=tabelka;
        return false;
    } 
    else{
        /*var strA="Nazwisko: "+stringN+"\n"+
        "Imie: " +stringI+"\n"+
        "E-mail: "+stringE+"\n"+
        "Rok: "+stringR+"\n"+
        "Uwagi: "+stringU;*/
        var poprawne="<table>\
                        <tr><th>Walidacja poprawna </th></tr>\
                        <tr><td>Nazwisko: </td><td>"+stringN+"</td></tr>\
                        <tr><td>Imie: </td><td>"+stringI+"</td></tr>\
                        <tr><td>Adres e-mail: </td><td>"+stringE+"</td></tr>\
                        <tr><td>Rok: </td><td>"+stringR+"</td></tr>\
                        <tr><td>Uwagi: </td><td>"+stringU+"</td></tr>\
                    </table>";
        document.getElementById("test").innerHTML=poprawne;
        return false;
    }

}