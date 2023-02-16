
// Récupérer la liste des fichiers audio à lire (trouver un moyen de les récupérer dynamiquement)
let audioFiles = [
    {url: 'https://server11.mp3quran.net/a_jbr/001.mp3', title:'Al Fatihah', size: '4 MB'},
    {url: 'https://server11.mp3quran.net/a_jbr/112.mp3', title: 'Al ikhlass', size: '2 MB'},
    {url: 'https://server11.mp3quran.net/a_jbr/113.mp3', title: 'Al Falaq', size: '2 MB'},
    {url: 'https://server11.mp3quran.net/a_jbr/114.mp3', title: 'An Nass', size: '2 MB'}
]

// Création d'un bloc audio (contenant le fichier audio, le bouton, le titre et la taille) à partir d'une URL donnée
function createAudio(audioFile){
    let div = document.createElement('div');
    div.setAttribute('class', 'bloc');
    let audio = document.createElement('audio');
    audio.setAttribute('src', audioFile.url);
    let btn = document.createElement('button');
    btn.addEventListener('click', (event) =>{
        console.log(`${event}`);
    })
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn btn-primary');
    let title = document.createElement('span');
    title.innerText = audioFile.title;
    let size = document.createElement('span');
    size.innerText = audioFile.size;
    // audio.setAttribute('controls', true);
    div.appendChild(audio);
    div.appendChild(btn);
    div.appendChild(title);
    div.appendChild(size);
    return div;
}

// Création d'une liste d'audio à partir de la liste d'URL donnée
function createAudioList(audioFiles){
    return audioFiles.map((audio) => createAudio(audio));
}

// Alimenter le lecteur audio à partir de la liste audios
function populatePlayer(listeAudios){
    let lecteur = document.querySelector('div');
    for(const audio of listeAudios) {
        lecteur.appendChild(audio);
    }
}

// Boocler sur un audio
function loopAudio(audio){
    audio.setAttribute('loop', true);
}

// Annuler boucle sur audio
function unloopAudio(audio){
    audio.setAttribute('loop', false);
}

// Démarrer la liste des audios
function startPlayer(){
    const listAudios = document.querySelectorAll('audio');
    for(const audio of listAudios) {
        // do {
        //     audio.play();
        // }
        // while(audio.currentTime != 0)
    }
}

// Bloc exécution programme
window.onload = (event) => {
    let listeAudios = createAudioList(audioFiles);
    console.log(listeAudios);
    populatePlayer(listeAudios);
    startPlayer();
};
