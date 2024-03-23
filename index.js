const chalk = require("chalk");
const dayjs = require("dayjs");

module.exports = class Logger {

    constructor(content) {
        this.content = content;
    }

    write(tag, error = false) {
        const timestamp = `[${dayjs().format('DD/MM - HH:mm:ss')}]`;
        const logTag = `[${tag}]`;
        const stream = error ? process.stderr : process.stdout;
        const format = "{tstamp} {tag} {text}\n";
        const item = format
            .replace("{tstamp}", chalk.gray(timestamp))
            .replace("{tag}", chalk.gray(logTag))
            .replace("{text}", chalk.white(this.content));
        stream.write(item);
    }

    error() {
        this.write('ERROR', true);
    }

    warn() {
        this.write('WARN', false);
    }

    typo() {
        this.write('TYPO', true);
    }

    command() {
        this.write('COMMAND', false);
    }

    buttons() {
        this.write('BUTTON', false);
    }

    event() {
        this.write('EVENT', false);
    }

    interaction() {
        this.write('INTERACTION', false);
    }

    client() {
        this.write('CLIENT', false);
    }

    task() {
        this.write('TASK', false);
    }

}