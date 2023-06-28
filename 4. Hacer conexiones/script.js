function editProfile () {
    var newName = prompt("Enter new name");
    var name = document.querySelector(".name");

    if (name) {
        name.textContent = newName;
    }
}

function acceptRequest() {
    var accept = document.querySelector(".userRequest");
    accept.remove();
    var numberReq = document.querySelector(".bubbleNumber1");
    var addNumberReq = parseInt(numberReq.textContent);
    addNumberReq -= 1;
    numberReq.textContent = addNumberReq;
    var numberConec = document.querySelector(".bubbleNumber2");
    var addNumberConec = parseInt(numberConec.textContent);
    addNumberConec += 1;
    numberConec.textContent = addNumberConec;
}

function denyRequest() {
    var deny = document.querySelector(".userRequest");
    deny.remove();
    var numberReq = document.querySelector(".bubbleNumber1");
    var addNumberReq = parseInt(numberReq.textContent);
    addNumberReq -= 1;
    numberReq.textContent = addNumberReq;
    var numberConec = document.querySelector(".bubbleNumber2");
    var addNumberConec = parseInt(numberConec.textContent);
    addNumberConec -= 1;
    numberConec.textContent = addNumberConec;
}
