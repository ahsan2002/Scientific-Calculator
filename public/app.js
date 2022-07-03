var inputData= document.getElementById("input");

function getvalue(val){
    var value=val;
    display(val);

}

function display(v) {
    if (v === "=") {
        let data=inputData.innerText;
        // let b=data.match(/\d+/);
        let total = eval(data) // 1 + 1
        inputData.innerText = total;
        // let c=Math.sin(b);
        // inputData.innerText=c;
    }

    else{
        inputData.innerText += v;
    }
}

function sint() {
    let a=inputData.innerText;
    console.log(a);
    let b=Math.sin(a);
    console.log(b);
    inputData.innerText=b;
}

function cost() {
    let c=inputData.innerText;
    let d=Math.cos(c);
    inputData.innerText=d;
}

function tant() {
    let e=inputData.innerText;
    let f=Math.tan(e);
    inputData.innerText=f;
}




function pow2() {
    let g=inputData.innerText;
    let h=Math.pow(g,2);
    inputData.innerText=h;
}

function pow3() {
    let g=inputData.innerText;
    let h=Math.pow(g,3);
    inputData.innerText=h;
}

function square() {
    let i=inputData.innerText;
    let j=Math.sqrt(i);
    inputData.innerText=j;
}

function factorial(){
    var y, num, z;
    z=1;
    num=inputData.innerText;
    for(y=1; y<=num; y++)
    {
     z=z*y;
    }
    y=y-1;
    inputData.innerText=z;
 }

 function inverse(){
    var s,t;
    s=inputData.innerText;
    t=1/s;
    inputData.innerText=t;
}

function exponent(){
    let k=inputData.innerText;
    let l=Math.exp(k);
    inputData.innerText=l;
}

function clearval() {
        inputData.innerText="";
    
}

function remove() {

    var rev = inputData.innerText;
    inputData.innerText = rev.substring(0, rev.length - 1);

}