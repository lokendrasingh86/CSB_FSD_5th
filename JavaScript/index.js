
// var a = 23;
// console.log(a)
// const data = function msg(name){
//     return name +"Welcome To JS"
// }
// const msg = data ("Rahul");
// console.log(msg)

// const man = (peroo)=>{
//     console.log("first")
//     return peroo+"suresh"
// }
// console.log(man("loki"))

// (()=>(
//     console.log("Welcome To CS")
// ))();

// function greetings(msg="Welcome"){
//     console.log("Hii" + msg)
// }
// greetings("rahull")

function selectLanguage(lang){
    var data;
    if(lang=="java"){
        function javaCompiler(){
            return "Java compiler Selected"
        }
    }else if(lang=="C"){
        function cCompiler(){
            return "C Compiler Selected"
        }
    }
    else{
        data="no such compiler available"
    }
}