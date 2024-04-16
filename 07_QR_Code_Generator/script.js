const getform = document.getElementById('qrform');
const qrImage = document.getElementById('image');
const qrContainer = document.getElementById('qrcontainer');
const button = document.getElementById("btn");
const Input = document.getElementById("qrText");



const renderQRCode = (url) => {

    if (!url) return;

    button.innerText = "Generating Qr Code...";
    qrImage.src = url;

    const onImageLoad = () => {

        const interval = setInterval(() => {

            qrContainer.classList.add("show");
            clearInterval(interval);
            button.innerText = "Genrate QR Code";

        }, 500);
    };

    qrImage.addEventListener("load", onImageLoad);
};

getform.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(getform);
    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    renderQRCode(qrCodeUrl);
});

Input.addEventListener("keyup", () => {

    if (!Input.value.trim()) {

        qrContainer.classList.remove("show");
    }
});
