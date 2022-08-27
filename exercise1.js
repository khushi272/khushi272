console.log("welcom to exercise 1");

// Add text to that created element
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addtitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addtxt.value,
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesObj);
    shownotes();
})

//datashow
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ${element.text}</p>
          <button id="${index}"onclick="deletenote(this.id)" href="#" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
      `;
    });
    let noteselm = document.getElementById('notes');
    if(notes.length != 0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = 'nothing to show! use "add a note"';
    }
}

function deletenote(index){
    console.log('i am deleting',index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
let serchtxt = document.getElementById('searchtxt');
serchtxt.addEventListener("input", function(){
    let inputval = serchtxt.value
    console.log("input event fired",inputval);
    let notecard = document.getElementsByClassName('')
})

let obj = {
    name: "khushi",
    occation: "web design",
    age: 18,
}
console.log(obj);


function Obj(givname){
    this.name = givname;
}
Obj.prototype.getName = function(){
    return this.name; 
}

Obj.prototype.setname = function(setName){
    this.name = setName;
}

// obj2.setname("khushi");
let obj2 = new Obj("yashi");
console.log(obj2);

class employee{
    constructor(givname,givexpersion,givdivision){
    this.name = givname
    this.expersion = givexpersion
    this.division = givdivision
    }
    slogn(){
        return `i am ${this.name} and this compny is the best`
    }
    joiningdate(){
        return 2020 - this.expersion;
    }
    static add(a,b){
        return a + b;
    }
}
class programmer extends employee{
    constructor(givname,givexpersion,givdivision,language,github){
        super(givname,givexpersion,givdivision)
        this.language = language;
        this.github = github;
    }
    favlanguage(){
        if(this.language == "python"){
            return 'python';
        }else{
            return 'javascript';
        }
    }
    static mul(a,b){
        return a*b;
    }
}
// harry = new employee("harry",56,"bca");
// console.log(harry.joiningdate())
// console.log(employee.add(5,6))
harry = new programmer("khushi",56,"bba","go","khushi272")
console.log(harry)
console.log(harry.favlanguage())
console.log(programmer.mul(20,5))