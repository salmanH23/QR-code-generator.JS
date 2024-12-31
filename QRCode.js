let imgBox = document.querySelector(".imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR() {
    const text = qrText.value.trim(); 
    if (text.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);

    
        imgBox.classList.add("show-img");

    
        qrText.classList.remove("error");
    } else {
        imgBox.classList.remove("show-img");

        qrText.classList.add("error");

        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000); 
    }
}
