
// Récupérer la liste des urls à lire (trouver un moyen de les récupérer dynamiquement)
let listeUrls = [
    'https://server11.mp3quran.net/a_jbr/001.mp3',
    'https://server11.mp3quran.net/a_jbr/112.mp3',
    'https://server11.mp3quran.net/a_jbr/113.mp3',
    'https://server11.mp3quran.net/a_jbr/114.mp3'
]

// Création d'un fichier audio à partir d'une URL donnée
function createAudio(url){
    let audio = document.createElement('source');
    audio.setAttribute('src', url);
    return audio;
}

// Création d'une liste d'audio à partir de la liste d'URL donnée
function createAudioList(listeUrls){
    return listeUrls.map((url) => createAudio(url));
}