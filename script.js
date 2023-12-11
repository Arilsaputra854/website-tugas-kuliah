var array = [];
array = JSON.parse(localStorage.getItem("dataarray"));
console.log("array: " + array);

function operasiarray() {
    arrayInfo2();
    var input = document.getElementById("arrayInput").value;
    if (input == "") {
        return
    }
    if (array == null) {
        array = [];
    }


    array.push(input);
    console.log("data input:" + input);


    var removedDuplicatedValue = [...new Set(array)];
    console.log(removedDuplicatedValue);

    document.getElementById("arrayInput").value = ""
    document.getElementById("hasil").innerText = "Hasil: " + removedDuplicatedValue;

    localStorage.setItem("dataarray", JSON.stringify(removedDuplicatedValue));
    arrayInfo2();
}
function arrayInfo2() {
    array = JSON.parse(localStorage.getItem("dataarray"));
    if(array ==null){document.getElementById("arrayinfo").innerText = "Isi dalam Array: " + "[]"
        return 
    }
    document.getElementById("arrayinfo").innerText = "Isi dalam Array: " + "[" +
        JSON.parse(localStorage.getItem("dataarray")) + "]";
}
function arrayInfo() {
    document.getElementById("arrayinfo").innerText = "Array Sebelum Diurutkan: " + "[" + array + "]";

    // Mengurutkan Data
    array.sort((a, b) => a - b);
    document.getElementById("array").innerText = "Array Setelah Diurutkan: " + JSON.stringify(array).replace(/["']/g, "");
}

function binarySearch() {

    // Menghapus baris:
    document.getElementById("array").innerText = " ";
    document.getElementById("step").innerText = " ";

    if (array != null) {
        array = JSON.parse(localStorage.getItem("dataarray"));
        var inputCari = document.getElementById("inputCari").value;

        let low = 0;
        let high = array.length - 1;

        // Mengurutkan Data
        array.sort((a, b) => a - b);

        // Menampilkan array setelah diurutkan
        document.getElementById("array").innerText = "Array Setelah Diurutkan: " + JSON.stringify(array).replace(/["']/g, "");

        let steps = "";
        let angka = 0;
        let found = false;

        while (low <= high) {
            angka++; // Menambah angka dengan 1 setiap kali loop
            let mid = Math.floor((low + high) / 2);
            let guess = array[mid];

            // Menampilkan langkah-langkah pencarian biner
            steps += "Langkah " + angka + ": " + "nilai tengah: " + mid + "   Memeriksa indeks " + mid + " dengan nilai " + guess + "\n";
            if (guess === inputCari) {
                // Menampilkan hasil jika data ditemukan
                document.getElementById("hasil").innerText = "Ditemukan, indeks berada di: " + mid;
                found = true;
                break;
            } else if (guess < inputCari) {
                low = mid + 1; // Pencarian dilanjutkan di setengah kanan
            } else {
                high = mid - 1; // Pencarian dilanjutkan di setengah kiri
            }
        }

        // Menampilkan langkah-langkah pencarian biner yang terurut
        if (found) {
            document.getElementById("step").innerText = steps;
        }

        // Menampilkan pesan jika data tidak ditemukan
        if (!found) {
            document.getElementById("hasil").innerText = "Data tidak ditemukan.";
        }
    } else {
        // Menampilkan pesan jika array kosong
        document.getElementById("hasil").innerText = "Array kosong.";
    }
}

function hapusArray() {
    document.getElementById("hasil").innerText = "Hasil:";
    array = localStorage.removeItem("dataarray");
    arrayInfo2();
}

function selectionSort() {
    array = JSON.parse(localStorage.getItem("dataarray"));
    var arraySorted = [];
    if (array != null) {
        var len = array.length;

        // Menampilkan array sebelum pengurutan
        document.getElementById("before").innerText = "Sebelum: " + JSON.stringify(array).replace(/["']/g, "");

        for (var i = 0; i < len - 1; i++) {
            var minIndex = i;

            // Temukan indeks nilai terkecil di sisa array
            for (var j = i + 1; j < len; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            // Tukar nilai terkecil dengan elemen pertama atau elemen saat ini
            var temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;

            // Menampilkan langkah-langkah pengurutan
            document.getElementById("step").innerText += "Langkah " + (i + 1) + ": " + JSON.stringify(array).replace(/["']/g, "") + "\n";
        }

        arraySorted = array.slice();

        // Menampilkan array setelah pengurutan
        document.getElementById("after").innerText = "Setelah: " + JSON.stringify(arraySorted).replace(/["']/g, "");
    }
}


function insertionSort(array) {
    array = JSON.parse(localStorage.getItem("dataarray"));

    // Menampilkan array sebelum pengurutan
    document.getElementById("before").innerText = "Sebelum: " + JSON.stringify(array).replace(/["']/g, "");

    // Menyimpan setiap langkah dalam array
    const steps = [JSON.parse(JSON.stringify(array))];

    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let lastIndex = i - 1;

        while (lastIndex >= 0 && array[lastIndex] > currentElement) {
            array[lastIndex + 1] = array[lastIndex];
            lastIndex--;
        }
        array[lastIndex + 1] = currentElement;

        // Menyimpan setiap langkah dalam array
        steps.push(JSON.parse(JSON.stringify(array)));
    }


    // Menampilkan langkah-langkah pengurutan
    for (let i = 0; i < steps.length; i++) {
        document.getElementById("step").innerText += "Langkah " + Number(i + 1) + ": " + JSON.stringify(steps[i]).replace(/["']/g, "") + "\n";
    }

    // Menampilkan array setelah pengurutan
    document.getElementById("after").innerText = "Setelah: " + JSON.stringify(array).replace(/["']/g, "");

    return;
}


var pilihan = 1;
function HitungLuas() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (pilihan) {
        case 1:
            if (num1 != null && num1 != "" && num2 != null && num2 != "") {
                document.getElementById("output").innerText = "Hasil:" + (num1 * num2);
            }
            break;
        case 2:

            if (num1 != null && num1 != "" && num2 != null && num2 != "") {
                document.getElementById("output").innerText = "Hasil:" + ((num1 * num2) / 2);
            }
            break;
        case 3:

            if (num1 != null && num1 != "") {
                document.getElementById("output").innerText = "Hasil:" + ((num1 * num1) * 3.14);
            }
            break;
        default:
            break;
    }
}

function hitPersegi() {
    document.getElementById("rumus").innerText = "Rumus: Luas(L) = panjang (p) x lebar (l)"
    document.getElementById("output").innerText = " "
    pilihan = 1;
    console.log("Menghitung Persegi Panjang")
    document.getElementById("title1").innerText = "Panjang"
    document.getElementById("title2").innerText = "Lebar"
    document.getElementById("title2").style.visibility = 'visible'
    document.getElementById("num2").style.display = 'inline'
}

function hitSegitiga() {
    document.getElementById("rumus").innerText = "Rumus: Luas(L) = 1/2 x alas (a) x tinggi (t)"
    document.getElementById("output").innerText = " "
    pilihan = 2;
    console.log("Menghitung Persegi Panjang")
    document.getElementById("title1").innerText = "Panjang"
    document.getElementById("title2").innerText = "Lebar"
    document.getElementById("title2").style.visibility = 'visible'
    document.getElementById("num2").style.display = 'inline'
}
function hitLingkaran() {
    document.getElementById("rumus").innerText = "Rumus: Luas(L) = Pi (3,14) x r x r"
    document.getElementById("output").innerText = " "
    pilihan = 3;
    console.log("Menghitung Persegi Panjang")
    document.getElementById("title1").innerText = "Jari Jari"
    document.getElementById("title2").style.visibility = 'hidden'
    document.getElementById("num2").style.display = 'none'
}


let expression = ""; // Menyimpan seluruh ekspresi matematika

function appendNumber(number) {
    expression += number;
    updateResult();
}

function appendOperator(operator) {
    expression += operator;
    updateResult();
}

function clearResult() {
    expression = "";
    updateResult();
}
function calculateResult() {
    try {
        let result = eval(expression);
        // Menggunakan toFixed(10) untuk membulatkan hasil ke 10 digit desimal
        expression = parseFloat(result.toFixed(10)).toString();
        updateResult();
    } catch (error) {
        expression = "Error";
        updateResult();
    }
}
function updateResult() {
    document.getElementById("result").value = expression;
}

function backspace() {
    expression = expression.slice(0, -1);
    updateResult()
}