console.log("postman project");

let addcounter = 0;

function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = "none";

let paramRadio = document.getElementById('paramsRadio');
paramRadio.addEventListener('click',() =>{
document.getElementById('parametersBox').style.display = "block";
document.getElementById('requestJsonBox').style.display = "none";
})

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () =>{
    document.getElementById('parametersBox').style.display = "none";
document.getElementById('requestJsonBox').style.display = "block";
})

let addparm = document.getElementById('addParam');
addparm.addEventListener('click',() =>{
    let params = document.getElementById('params');
    let string = `<div class="form-row">
    <label for="url" class="col-sm-2 col-form-label">Parameter${addcounter + 2}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey${addcounter + 2}" placeholder="Enter Parameter${addcounter + 2} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${addcounter + 2}" placeholder="Enter Parameter ${addcounter + 2} Value">
    </div>
    <button class="btn btn-primary deleteParam">-</button>
</div>`;
let paramElement = getElementFromString(string);
params.appendChild(paramElement);
let deleteParam = document.getElementsByClassName('deleteParam');
for(item of deleteParam){
    item.addEventListener('click',(e)=>{
       var z = confirm("do you remove this element?");
       if(z==true){
        e.target.parentElement.remove();
       }
       else{
        alert('please cheack this');
       }
    })
}
addcounter++;
})

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";

    let url = document.getElementById('url').value;
    let requesttype = document.querySelector("input[name='requestType']:checked").value;
    let contenttype = document.querySelector("input[name='contentType']:checked").value;

    if(contenttype == 'params'){
        data ={};
        for(let i=0; i<addcounter+1; i++){
            if(document.getElementById('parameterKey' + (i+1)) != undefined){
                let key = document.getElementById('parameterKey' + (i+1)).value;
                let value = document.getElementById('parameterValue' + (i+1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;
    }
    console.log("url:",url);
    console.log("requestType:",requesttype);
    console.log("contentType:",contenttype);
    console.log("data: ",data);

    if(requesttype == 'GET'){
        fetch(url,{
            method : 'GET',
        })
        .then(Response=>Response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML = text;
        })
    }else{
        fetch(url,{
            method : 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(Response=>Response.text())
        .then((text)=>{
            document.getElementById('responsePrism').innerHTML = text;
        })
    }
});

