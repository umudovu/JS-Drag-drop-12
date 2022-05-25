let dragboxAll = document.querySelectorAll(".box");
let dropboxAll = document.querySelectorAll(".drop");
let drop1=document.getElementById("drop1");
let drop2=document.getElementById("drop2");
let drop3=document.getElementById("drop3");
let id;

dragboxAll.forEach(i => {
    i.ondragstart = function (e) {
        //e.dataTransfer.setData("id", this.id);
        id=this.id;
    }
});



dropboxAll.forEach(i => {
    i.ondragover=function(e){
        switch (i.id) {
            case "drop1":
            if (id=="box1"||id=="box2"||id=="box3"||id=="box4") {
                e.preventDefault();
            }
                break;
            case "drop2":
            if (id=="box5"||id=="box6"||id=="box7"||id=="box8") {
                e.preventDefault();
            }
                break;
            case "drop3":
            if (id=="box9"||id=="box10"||id=="box11"||id=="box12") {
                e.preventDefault();
            }
                break;
        
        }
    }

    i.ondrop=(e)=>{
        //let id= e.dataTransfer.getData("id");
        let el=document.getElementById(id);
        i.append(el);
        
    }
});


// dropboxAll[0].ondragover=function(e){
//     //let id= e.dataTransfer.getData("id");
//     if (id=="box1"||id=="box2"||id=="box3"||id=="box4") {
//         e.preventDefault();
//     }
// }
// dropboxAll[1].ondragover=function(e){
//     //let id= e.dataTransfer.getData("id");
//     if (id=="box5"||id=="box6"||id=="box7"||id=="box8") {
//         e.preventDefault();
//     }
// }
// dropboxAll[2].ondragover=function(e){
//     //let id= e.dataTransfer.getData("id");
//     if (id=="box9"||id=="box10"||id=="box11"||id=="box12") {
//         e.preventDefault();
//     }
// }







