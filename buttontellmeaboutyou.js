const button = document.getElementById("tellMeAboutYou")
const myInfo = document.querySelector('.Mysocialmedia')


button.addEventListener('click', () => {

    if (myInfo.style.display === "none") {
        return myInfo.style.display = 'block ';
} else {
    return myInfo.style.display = "none"
}
}); 