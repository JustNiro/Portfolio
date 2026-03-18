function calculateTotal() {
    
    let qty1 = parseInt(document.getElementById("qty1").value) || "";
    let price1 = parseInt(document.getElementById("price1").value) || "";
    let qty2 = parseInt(document.getElementById("qty2").value) || "";
    let price2 = parseInt(document.getElementById("price2").value) || "";
    let qty3 = parseInt(document.getElementById("qty3").value) || "";
    let price3 = parseInt(document.getElementById("price3").value) || "";

    
    let result1 = qty1 * price1;
    let result2 = qty2 * price2;
    let result3 = qty3 * price3;

    
    document.getElementById("result1").innerText = result1;
    document.getElementById("result2").innerText = result2;
    document.getElementById("result3").innerText = result3;

    
    let total = result1 + result2 + result3;
    document.getElementById("total").innerText = total;
}

function resetForm() {
    document.getElementById("qty1").value = "";
    document.getElementById("price1").value = "";
    document.getElementById("result1").innerText = "";

    document.getElementById("qty2").value = "";
    document.getElementById("price2").value = "";
    document.getElementById("result2").innerText = "";

    document.getElementById("qty3").value = "";
    document.getElementById("price3").value = "";
    document.getElementById("result3").innerText = "";

    document.getElementById("total").innerText = "";
}