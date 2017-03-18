const inputs = document.querySelectorAll(".controls input");
inputs.forEach(function (elem) {
    elem.addEventListener("change", handleUpdate);
    elem.addEventListener("mousemove", handleUpdate);
});
function handleUpdate() {
    console.log(this.value);

    const sufix = this.dataset.sizing || "";
    const value = this.value+sufix;
    document.documentElement.style.setProperty(`--${this.name}`, value);

}