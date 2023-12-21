function question(linhaselec){
    var answer = document.getElementById("hideLine" + linhaselec)
    var img = document.getElementById("lineImg" + linhaselec)
    valid = window.getComputedStyle(answer).display
    if (valid === 'none'){
        answer.style.display = 'flex'
        img.src = "/assets/images/icon-minus.svg"
    }else if(valid === 'flex'){
        answer.style.display = 'none'
        img.src = "/assets/images/icon-plus.svg"
    }
}