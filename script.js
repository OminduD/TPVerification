function valid(){
let tpnum = document.getElementById("tp").value;
let len = tpnum.length;
let firstnum = tpnum.substr(0,2);
let lastnum = tpnum.substr(len -9,9)
let thnum = tpnum.substr(0,3)
let num;

if (len < 9){
    alert("Numbers Missing Please Check Again")
    document.getElementById("hello").innerHTML = "Invalid Number";
}
else if (len == 9 ){
    alert("Number Validation Succecfully")
    num = "+94" + tpnum
    document.getElementById("hello").innerHTML= num;
}
else if (len == 10 ){
    alert("Number Validation Succecfully")
    num = "+94" + lastnum
    document.getElementById("hello").innerHTML = num;
}
else if (len == 11 && firstnum == 94){
    alert("Number Validation Succecfully")
    num = "+" + tpnum
    document.getElementById("hello").innerHTML = num;
}
else if (len == 12 && thnum == "+94") {
    alert("Number Validation Succecfully")
    num =  tpnum
    document.getElementById("hello").innerHTML = num;
}else {
    alert("Number Validation Unsuccecfully")
}

}
