// Imports the Google Cloud client library
// const speech = require("@google-cloud/speech");
// const fs = require("fs");

// // Creates a client
// const client = new speech.SpeechClient();

// Convert speech to text
export async function convertSpeechToText(audio_) {
  // The path to the remote LINEAR16 file
  const audioData = audio_;

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const request = {
    audio: {
      content: fs.readFileSync(audioData).toString("base64"),
    },
    config: {
      encoding: "LINEAR16",
      sampleRateHertz: 44100,
      languageCode: "en-US",
    },
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");

  console.log(`Transcription: ${transcription}`);

  // Return transcription
  return transcription;
}

//convertSpeechToText("audio.wav");
