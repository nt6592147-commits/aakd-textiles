function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}

// WhatsApp order
function sendWhatsApp(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let order = document.getElementById("order").value;
    let message = document.getElementById("message").value;

    let phone = "2348035781673";

    let url = `https://wa.me/${2348035781673}?text=
Name: ${name}%0A
Order: ${order}%0A
Details: ${message}`;

    window.open(url, "_blank");
}

// scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});