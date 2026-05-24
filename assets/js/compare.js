//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome            = nome;
        this.preco           = preco;
        this.alturaCacamba   = alturaCacamba;
        this.alturaVeiculo   = alturaVeiculo;
        this.alturaSolo      = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor           = motor;
        this.potencia        = potencia;
        this.volumeCacamba   = volumeCacamba;
        this.roda            = roda;
        this.image           = image;
    }
}

// Varre o array retornando a posição do objeto, ou -1 se não encontrar
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

// Insere ou remove o Car no array conforme estado do checkbox (máx. 2)
function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                alert("Só é permitido comparar 2 carros por vez.");
                el.checked = false;
                return;
            }
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }
        } else {
            let pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        let car = carArr[i];

        document.getElementById("compare_image_" + i).innerHTML =
            "<img src='" + car.image + "' style='width:185px; height:auto;'>";

        document.getElementById("compare_modelo_" + i).innerHTML         = car.nome;
        document.getElementById("compare_alturacacamba_" + i).innerHTML  = car.alturaCacamba;
        document.getElementById("compare_alturaveiculo_" + i).innerHTML  = car.alturaVeiculo;
        document.getElementById("compare_alturasolo_" + i).innerHTML     = car.alturaSolo;
        document.getElementById("compare_capacidadecarga_" + i).innerHTML = car.capacidadeCarga;
        document.getElementById("compare_motor_" + i).innerHTML          = car.motor;
        document.getElementById("compare_potencia_" + i).innerHTML       = car.potencia;
        document.getElementById("compare_volumecacamba_" + i).innerHTML  = car.volumeCacamba;
        document.getElementById("compare_roda_" + i).innerHTML           = car.roda;
        document.getElementById("compare_preco_" + i).innerHTML          =
            "R$ " + car.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    }
}
