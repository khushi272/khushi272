console.log("hellow time");

function updateclock(){
    let currenttime = new Date();
    let currenthours = currenttime.getHours();
    let currentminites = currenttime.getMinutes();
    let currentsecond = currenttime.getSeconds();
    let timeofday = (currenthours > 12) ? "am" : "pm" ;
    let currtimestr = currenthours + ":" + currentminites + ":" + currentsecond + ":" + timeofday;
    document.getElementById('clock').innerHTML = currtimestr;
}

[a,b,c,...d] = [2,3,4,5,6];
console.log(a,b,c,d);

//array Destructuring
[{a,b,...c} = {a:20,b:40,c:76,d:45}]
console.log(a,b,c);

const fruites = ["apple","banana","mangoes"];
[a,b,c] = fruites;
console.log(a,b,c);

//objcet destructuring
const laptop = {
    name: "harry",
    range: 35000,
    port:8080,
    stsrt : function(){
        console.log("welcome to home");
    }
}

const {name,range,port,stsrt} = laptop;
console.log(name,range,port,stsrt);
stsrt();

const myset = new Set();
console.log(myset);

myset.add("khushi");
myset.add("khyati");
myset.add(true);
myset.add(18);
console.log(myset);

console.log(myset.has("khushi"));
myset.delete("khyati");
console.log(myset.has("khyati"));

// for(let item of myset){
//     console.log('item is:', item);
// }

myset.forEach((item)=>{
    console.log('item is', item)
})

let myarry = Array.from(myset);
console.log("array is", myarry);


try {
    console.log('they are hear',key);
} catch (error) {
    console.log('bghgyjbhukj');
}finally{
    console.log("this is run");
}
function getdata() {
    url = "https://api.github.com/users";
    fetch(url).then((Response) => {
        return Response.text();
    }).then((data) => {
        // console.log(data);
        document.getElementById('content').innerHTML = data;
    });
}
getdata()
function postdata() {
    url = "https://jsonplaceholder.typicode.com/posts";
    data = '[{"name":"khushi","gender":"female","age":"23"},{"name":"heli","gender":"female","age":"19"}]'
    parms = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(url,parms).then((Response) => {
        return Response.text();
    }).then((data) => {
        // console.log(data);
        document.getElementById('content').innerHTML = data;
    });
}

postdata()