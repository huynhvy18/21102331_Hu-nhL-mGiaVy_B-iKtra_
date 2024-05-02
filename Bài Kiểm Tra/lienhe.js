function bai() {
  const hoten = document.getElementById("bai-name").value;
  const email = document.getElementById("bai-email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("bai-message").value;

  const confirm = confirm(
    " Họ và tên: " + hoten + "\n Email: " + email + "\n Số điện thoại: " + phone + "\n Nội dung góp ý: " + message
  );
}
