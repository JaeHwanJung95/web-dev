const items = document.querySelectorAll("li");

for(let item of items) {
    item.addEventListener("click", function() {
        this.parentNode.removeChild(this);
    });
}