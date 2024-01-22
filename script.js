const videoContainer document.getElementById('video-container");

// Funzione per aggiungere il video stream al contenitore

Comment Code

function addVideoStream(stream) {

const videoElement document.createElement('video');

videoElement.srcObject stream;

videoElement.autoplay videoElement.muted true;

= true;

videoContainer.appendChild(videoElement);

// Funzione per avviare la condivisione dello schermo

Comment Code

async function startScreenSharing() {

try {

const stream wait navigator.mediaDevices.getDisplayMedia({ video: true

addVideoStream(stream);

} catch (error) (

console.error("Errore nella condivisione dello schermo:', error);

}

// Avvia le condivisione dello schermo all'avvio del sito startScreenSharing();
