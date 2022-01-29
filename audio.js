const audio = document.getElementById('audio')
const stream = navigator.mediaDevices.getUserMedia({audio : true})

function microphoneAccess() {
    // give some contraints: {audio:true}
    navigator.mediaDevices.getUserMedia ({
        audio : true,
        video: false
        // when we accept, get a stream back
        }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorder.start()
            // find the audio element
            audio.srcObject = stream;
        }).catch(console.error)
}

function micStart() {
 audio.start();
}

window.addEventListener('load', microphoneAccess, false)
