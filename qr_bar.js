
function qr_btn_clicked()
{
    /*console.log("clicked!");*/
    let qr_txt = document.getElementById("qr_input_id");
    let qr_txt_value = qr_txt.value;
    /*console.log(qr_txt_value);*/
    let btn_txt = document.getElementById("qr_submit");
    /*btn_txt.innerText = "Generating..";*/
    let qr_image = document.getElementById("qr_img");
    qr_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_txt_value}`
    /*btn_txt.innerText = "Generate QR";*/
    /*qr_txt.value = "";*/
}
function bar_btn_clicked()
{
    /*console.log("clicked!");*/
    let bar_txt = document.getElementById("bar_input_id");
    let bar_txt_value = bar_txt.value;
    /*console.log(qr_txt_value);*/
    let bar_btn_txt = document.getElementById("bar_submit");
    /*bar_btn_txt.innerText = "Generating..";*/
    let bar_image = document.getElementById("bar_img");
    JsBarcode("#bar_img", bar_txt_value);
    /*btn_txt.innerText = "Generate QR";*/
    bar_txt.value = "";
}