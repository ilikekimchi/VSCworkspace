function postInfo() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/');
    xhr.send();    


    document.querySelector('.post-detail').classList.remove('hidden');
    
}

function modalClose() {
    document.querySelector('.post-detail').classList.add('hidden');
}