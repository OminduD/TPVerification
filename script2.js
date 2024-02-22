function valid() {
    let tpnum = document.getElementById("tp").value;
    let len = tpnum.length;
    let firstnum = tpnum.substr(0, 2);
    let lastnum = tpnum.substr(len - 9, 9)
    let thnum = tpnum.substr(0, 3)
    let num;
    switch(len){
        case 9:
            num = "+94" + tpnum
            document.getElementById("hello").innerHTML = num;
            break;
        case 10:
            num = "+94" + lastnum
            document.getElementById("hello").innerHTML = num;
            break;
        case 11:
            if (firstnum == 94){
            num = "+" + tpnum
            document.getElementById("hello").innerHTML = num;
            }
            else {
                alert("Number Validation Unsuccecfully")
            }   
            break;
        case 12:
            if (thnum == "+94"){
            num = tpnum
            document.getElementById("hello").innerHTML = num;
            }
            else{
                alert("Number Validation Unsuccecfully")  
            }
            break;
        default:
            alert("Number Validation Unsuccecfully")
    }
}