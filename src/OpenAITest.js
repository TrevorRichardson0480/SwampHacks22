
export function summarizeText(prompt, articleContent) {
    const OpenAI = require('openai-api');

    // Load your key from an environment variable or secret management service
    // (do not include your key directly in your code)
    const OPENAI_API_KEY = "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";

    const openai = new OpenAI(OPENAI_API_KEY);

    (async () => {
        const gptResponse = await openai.complete({
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

        console.log(gptResponse.data);
    })();

    return gptResponse;
}
