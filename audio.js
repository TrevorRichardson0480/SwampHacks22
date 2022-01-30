 /** Starts the audio recording*/
let globalMediaRecorder;
export function startAudioRecording() {

    // get access first and create a stream 
    navigator.mediaDevices.getUserMedia({
            audio: true
        })
        // resolve by passing a stream into mediarecorder object
        .then(stream => {
            globalMediaRecorder = new MediaRecorder(stream);
            globalMediaRecorder.start(100)
            // return mediarecorder so that we can access in stopaudiorecording function


             // we will need to store the audio continuously 
             const userQuestion = [];
             // when data is available, lets add it to chunks
             globalMediaRecorder.addEventListener("dataavailable", event => {
                 userQuestion.push(event.data);
             });
         
             // after we stop lets store the chunks in a blob
             // create a url out of the blob 
             // play it back to the user 
             globalMediaRecorder.addEventListener("stop", () => {
                 const blob = new Blob(userQuestion);
                 const audioUrl = URL.createObjectURL(blob);
                 const audio = new Audio(audioUrl);
                 audio.play();
                 // yo javier 

             });       
        })    
    }
export function stopAudioRecording(){
    globalMediaRecorder.stop();
}