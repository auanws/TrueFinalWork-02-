let observe1 = document.getElementById("Gfood");
let observe2 = document.getElementById("Gfoodplus");
let observe3 = document.getElementById("Gtool");
function fetchDataFood() {
    observe1.style.color = "#454545";
    observe1.style.backgroundColor = "#ff90e7";
    observe2.style.color = "#979797";
    observe2.style.backgroundColor = "#f6f6f6";
    observe3.style.color = "#979797";
    observe3.style.backgroundColor = "#f6f6f6";
    fetch("JSON.json")
        .then(response => response.json())
        .then(data => {
            for (var i=0; i<data[0].length; i++){
                document.getElementById("name"+[i]).innerHTML = data[0][i].name;
                document.getElementById("price"+[i]).innerHTML = data[0][i].price;
                document.getElementById("image"+[i]).src = data[0][i].image;
            }
        })
        .catch(error => console.error(error));
}
function fetchDataFoodplus() {
    observe1.style.color = "#979797";
    observe1.style.backgroundColor = "#f6f6f6";
    observe2.style.color = "#454545";
    observe2.style.backgroundColor = "#ff90e7";
    observe3.style.color = "#979797";
    observe3.style.backgroundColor = "#f6f6f6";
    fetch("JSON.json")
        .then(response => response.json())
        .then(data => {
            for (var i=0; i<data[1].length; i++){
                document.getElementById("name"+[i]).innerHTML = data[1][i].name;
                document.getElementById("price"+[i]).innerHTML = data[1][i].price;
                document.getElementById("image"+[i]).src = data[1][i].image;
            }
        })
        .catch(error => console.error(error));
}
function fetchDatatool() {
    observe1.style.color = "#979797";
    observe1.style.backgroundColor = "#f6f6f6";
    observe2.style.color = "#979797";
    observe2.style.backgroundColor = "#f6f6f6";
    observe3.style.color = "#454545";
    observe3.style.backgroundColor ="#ff90e7";
    fetch("JSON.json")
        .then(response => response.json())
        .then(data => {
            for (var i=0; i<data[2].length; i++){
                document.getElementById("name"+[i]).innerHTML = data[2][i].name;
                document.getElementById("price"+[i]).innerHTML = data[2][i].price;
                document.getElementById("image"+[i]).src = data[2][i].image;
            }
        })
        .catch(error => console.error(error));
}
