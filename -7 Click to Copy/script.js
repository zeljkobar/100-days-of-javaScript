let btn = document.querySelector('.btn');
let coupon = document.querySelector('.coupon');



const copyText = (e) => {
  e.preventDefault();

  // coupon.select();
  // coupon.setSelectionRange(0, 9999999);  execCommand se vise ne koristi
  // document.execCommand("copy");      nego umjesto nje koristimo clipboard API

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.textContent = "Copied!!!";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 3000);
  });


};



btn.addEventListener('click', copyText);