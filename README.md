## aTextGPT
This super simple JS script copies your clipboard and uses it as a prompt for OpenAI's chat completion API.

Using [aText](https://www.trankynam.com/atext/), we can return and paste the output directly, but the script will also attempt to copy it to your clipboard. 

This is purely for quick questions or boilerplate code generation.

---

## Installation
We will simply add it as a new aText snippet with the steps below.

1. Make sure you are using the latest premium version of [aText](https://www.trankynam.com/atext/) as well as [Node.js](https://nodejs.org/en/download). 
2. Clone this repository to a good permanent directory: `git clone git@github.com:NotGeri/aTextGPT.git` (or just download it as a ZIP)
3. Install the dependencies with `npm i`
4. Copy the `.env.dist` file to `.env`
5. Add your OpenAI API token after the`API_KEY=` entry (You can get this here: https://platform.openai.com/account/api-keys)
6. Open aText and create a new snippet. 
7. Select 'Script' instead of 'Plain text'
8. Click 'Custom' at the very end of the list.
9. There, set the extension to anything like `gpt`.
10. Copy the absolute path to the directory you saved the project at, such as `C:\Users\Geri\Desktop\aTextGPT`. Do the same with your Node.js installation.
11. Set the `Host` field to be your Node.js install's executable and the project's folder, such as: `"C:\Program Files\nodejs\node.exe" "C:\Users\Geri\Desktop\aTextGPT"`
12. Give it an abbreviation, and you are good to go!

----

## Usage
To give it a prompt, select the text and copy it to your clipboard. Just like other aText snippets, you can use this by typing the abbreviation.

An example:
![example gif](https://i.geri.dev/5vRfxE1WKIJT.gif)