import * as dotenv from 'dotenv';
import clipboardy from 'clipboardy';
import {Configuration, OpenAIApi} from 'openai';
import path from 'path';
import {fileURLToPath} from 'url';

// Change to script's directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.chdir(path.join(__dirname));

// Load the .env config
dotenv.config();

try {
	// Connect to the OpenAI API
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.API_KEY
    }));

	// Read the clipboard for the prompt
    const prompt = clipboardy.readSync();

	// Send chat completion request
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo-0301',
        messages: [{role: 'user', content: prompt}],
        temperature: 0.6,
        max_tokens: 2048
    });

	// Get the response text
    const response = completion?.data?.choices[0]?.message?.content;
    if (!response) {
        console.log('No data recieved from OpenAI API.');
        process.exit(0);
    }

	// Output to clipboard and log so aText can grab it
    clipboardy.writeSync(response);
    console.log(response);

} catch (e) {
    console.log(e.message ?? e);
}