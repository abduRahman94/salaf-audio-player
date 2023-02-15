
// 
function getUrls(urlsList){
    console.log(urlsList)
}

// Création d'un fichier audio à partir d'une URL donnée
function createAudio(url){
    let audio = document.createElement('audio');
    audio.setAttribute('src', url);
    return audio;
}