function addLike(username) {
    var likeElement = document.querySelector("#" + username + " .likesNumber");
    var like = parseInt(likeElement.textContent);
    like++;
    likeElement.textContent = like;
}

