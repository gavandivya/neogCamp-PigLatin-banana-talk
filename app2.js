var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var clearBtn = document.querySelector('#btn-clear')
var URL = "	https://api.funtranslations.com/translate/pig-latin.json";

btnTranslate.addEventListener("click", clickHandler);
clearBtn.addEventListener("click", clearClickHandler);


function getTranslationURL(input) {
    return URL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var inputTextArea = textInput.value; 
    if(inputTextArea){
        fetch(getTranslationURL(inputTextArea))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
    }
    else{
        alert("Please enter some text");
    }

};


function clearClickHandler() {
    textInput.value = "";
    outputDiv.innerHTML = "";
}


