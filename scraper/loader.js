import readline from 'readline'

function hideCursor() {
    // Create a readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Hide the cursor
    rl.output.write('\u001B[?25l');

    // Return the readline interface
    return rl;
}

function loader() {
    // const frames = ['-', '\\', '|', '/']; // Frames for the loader animation
    const frames = ['loading', 'loading.', 'loading..', 'loading...', 'loading....']; // Frames for the loader animation

    // Hide the cursor
    const rl = hideCursor();

    let i = 0;
    return setInterval(() => {
        const frame = frames[i++ % frames.length];
        // console.log(frame)
        process.stdout.write('\r' + frame); // Overwrite the last output
        process.stdout.write(' '.repeat(frame.length)); // Clear the line by writing spaces equal to the length of the frame
        // process.stdout.cursorTo(100); // Move the cursor to the beginning of the line

    }, 200); // Change the delay time to control the speed of the loader
}

// Start the loader
const loadingInterval = loader();



function startLoader(result) {
    clearInterval(loadingInterval); // Stop the loader
    // process.stdout.write('\n'); // Move to the next line
    process.stdout.clearLine() // Clearing the line from previous loading text
    process.stdout.cursorTo(0) // Moving the cursor to the starting point
    process.stdout.write('\u001B[?25h'); // Show the cursor
    console.log("Loading complete!!!!");
    console.log(result); 
    process.exit()
}

export { startLoader }