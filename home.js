console.log(document.getElementById("header"));

document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const header = document.getElementById("header");
    if(window.scrollY > 200) {
        header.style = "box-shadow: 0px 1px 27px -3px rgb(0 0 0 / 20%);background-color:white"
    } else {
        header.style = "box-shadow: none;background-color:transparent"
    }
})