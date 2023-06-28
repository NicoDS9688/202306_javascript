function logOut() {
    var button = document.querySelector("#loginBtn");
    if (button.innerHTML === "Login") {
    button.innerHTML = "Logout";
    } else {
        button.innerHTML = "Login"
    }
}

function removeAddDefBtn() {
    var button = document.querySelector(".addDefinitionBtn");
    button.remove();
}

function likesClick() {
    alert("Ninja was liked")
}