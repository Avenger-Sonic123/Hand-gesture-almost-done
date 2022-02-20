var prediction1="";
var prediction2="";

Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3U2pQKsQw/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!");
}

function speak()
{
    var synth=window.speechSynthesis;
    var speak_data1="Prediction 1 is "+prediction1;
    var speak_data2="Prediction 2 is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterthis);
}