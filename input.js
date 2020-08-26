var prompt =  require('prompt');

prompt.start();
prompt.get(["Hello, what is your name?", "What is your favorite color?"], function(result,error) {

    if (error) {
        console.log(error);
    }
    console.log("Hello, " + result)
    console.log(result + " is a pretty color!")
});
