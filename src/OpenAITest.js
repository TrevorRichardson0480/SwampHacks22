const OpenAI = require('openai-api');

export async function summarizeText(prompt, articleContent) {

    // Load your key from an environment variable or secret management service
    // (do not include your key directly in your code)
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const openai = new OpenAI(OPENAI_API_KEY);

    console.log("Running gpt-3...");

    let gptResponse = "";

    console.log("Before await");
    gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: `${prompt} ${articleContent} Let me summarize: `,
        maxTokens: 50,
        temperature: 0.2,
        topP: 1,
        presencePenalty: 2.0,
        frequencyPenalty: 2.0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n']
    });

    console.log("After await");
    console.log(gptResponse.data);
    console.log(gptResponse.data["choices"][0]["text"]);

    return gptResponse.data["choices"][0]["text"];

    // return gptResponse;
}
