// CEP 08372-209

let url = `https://viacep.com.br/ws/08372209/json/`;

let xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4){
        if(xhttp.status == 200){
            console.log(xhttp.responseText);
        }
    }
    xhttp.send();
}






