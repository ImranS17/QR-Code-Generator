const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form #Name"),
erInput = wrapper.querySelector(".form #Email"),
prInput = wrapper.querySelector(".form #Phone"),
frInput = wrapper.querySelector(".form #File"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    let qrValue1 = erInput.value.trim();
    if(!qrValue1 || preValue === qrValue1) return;
    preValue = qrValue1;
    let qrValue2 = prInput.value.trim();
    if(!qrValue2 || preValue === qrValue2) return;
    preValue = qrValue2
    let qrValue3 = frInput.value.trim();
    if(!qrValue3 || preValue === qrValue3) return;
    preValue = qrValue3;
    generateBtn.innerText = "Generating QR Code...";
    // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.src = `https://quickchart.io/qr?text=${qrValue}, ${qrValue1}, ${qrValue2}, ${qrValue3} &centerImageUrl=https://cdn-icons-png.flaticon.com/512/1389/1389234.png`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});