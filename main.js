Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("webcam-view");
Webcam.attach( '#webcam-view' );

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log("ML5 version: "+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MtYG_Y7qR', modelLoaded);

function modelLoaded(){
    console.log("Model Initialised!")
}

