let num = 5;
alert(num);

let anotherNum = 17
console.log(anotherNum / 3);

function multiplysThreeNumbers(n1, n2, n3) {
    const product = n1 * n2 * n3
    alert(product)
}

function fourNumsAddTwoSubTwo(n1, n2, n3, n4) {
    const result = n1 + n2 - n3 - n4
    console.log(result)
}

function determinWinna(n1,n2,n3) {
    const result = (100 + n1 -n2) / n3
    if(result > 25){
        console.log("winna")
    }
}

function dayOfWeek(day) {
    const dayOfWeek = day.toLowerCase();
    if(dayOfWeek === 'saturday' || dayOfWeek === "sunday"){
        alert("weekend")
    }
}