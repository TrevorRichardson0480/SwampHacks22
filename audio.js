 /** Starts the audio recording*/
 export function startAudioRecording() {
    console.log('okay now we are starting')

    // get access first and create a stream 
    navigator.mediaDevices.getUserMedia({
            audio: true
        })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start(100);

            // we will need to store the audio continuously 
            const userQuestion = [];
            // when data is available, lets add it to chunks
            mediaRecorder.addEventListener("dataavailable", event => {
                userQuestion.push(event.data);
            });

            // after we stop lets store the chunks in a blob
            // create a url out of the blob 
            // play it back to the user 
            mediaRecorder.addEventListener("stop", () => {
                const blob = new Blob(userQuestion);
                const audioUrl = URL.createObjectURL(blob);
                const audio = new Audio(audioUrl);
                audio.play();

            });
            // use setTimeout to stop the recording after specified time 
            setTimeout(() => {
                console.log("3 seconds have passed")
                mediaRecorder.stop();
            }, 12000);

        });
}

// next task is to figure out when to start and stop recording
// be able to store the recording as it happens and finish storing whenever we .stop()
// .requestData
// we also need to not start recording as soon as we enter the site 1n3g