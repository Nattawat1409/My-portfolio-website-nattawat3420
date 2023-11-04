window.onscroll = function() {
    var nav = document.querySelector("nav");
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled"); // เมื่อ scroll ลง 1 พิกเซล
    } else {
        nav.classList.remove("scrolled"); // เมื่อ scroll อยู่ที่ด้านบน
    }
};
