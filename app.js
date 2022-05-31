function gotowhatsapp() {
  var name = document.getElementById("formName").value;
  var phone = document.getElementById("phonenumber").value;
  var service = document.getElementById("requirement").value;
  //   var service = document.getElementById("service").value;

  var url =
    // "https://wa.me/9664263053?text=" +
    // https://api.whatsapp.com/send?phone=919828550720&text=Hello sir
    "https://api.whatsapp.com/send?phone=9828550720&text=" +
    "Name: " +
    name +
    "%0a" +
    "Phone: " +
    phone +
    "%0a" +
    "Service: " +
    service;

  window.open(url, "_blank").focus();
  //   alert("you sended ");
}
