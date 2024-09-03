// console.log("shyam");
// alert("shyam");
// var a;
// a=45;
// console.log(a);

var courseName = "javaScript";
let courseID = 123;
const courseDpt ="cs";

// console.log(courseName)
// console.log(courseID)
// console.log(courseDpt)

// var courseName = "javaScript";
// let courseID = 123;
// const courseDpt ="cse";
// console.table([courseName,courseID,courseDpt])

// global scope

// var a=41;
// function globalscope(){ 
//     console.log(a);
// }

// globalscope()
// console.log(a)


// local scope

// function localScope(){
//     let a=45;
//      console.log(a)
// }
// console.log(a)  gice error bcz it's local scope
// localScope()

// function scope

// function functionScope(){
//     if(true){
//         var a=72;
//         console.log("inner a:",a)
//     }
   
//     console.log("outer a:",a )
// }

// functionScope() 


function blockScope(){
    if(true){
        let a=72;
        const b=34;
        console.log("inner a:",a)
        console.log("inner b:",b)
    }
   
    // console.log("outer a:",a )
}

blockScope()