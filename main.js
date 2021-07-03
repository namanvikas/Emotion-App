predction_1="";
predction_2="";
Webcam.set({
    height:350,
    width:300,
    image_format: 'png',
    png_quality:90,
})
;
camera=document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:',ml5.version);

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dYPhF3T1Q/model.json",modelloaded)

    function modelloaded(){
        console.log("modelloaded")
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_data_1="The First speak predcition is"+ predction_1;
        speak_data_1="The Second speak predction is"+ predction_2;
        var utterthis= new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
        synth.speak(utterthis)


    }
    function check(){
        img=document.getElementById('captured_image');
        classifier.classify(img, gotresult);
    }
    function gotresult(error, results){
        if(error){
        console.log(error);
        }else{
            console.log(results);
document.getElementById("result_EMOTION_name1").innerHTML=results[0].label;
document.getElementById("result_EMOTION_name2").innerHTML=results[1].label;
predction_1=results[0].label;
predction_2=results[1].label;
speak();
if(results[0].label == 'happy'){
    document.getElementById("Emoji_update1").innerHTML= "&#128522"
}
if(results[0].label == 'sad'){
    document.getElementById("Emoji_update1").innerHTML= "&#128532"
}
if(results[0].label == 'angry'){
    document.getElementById("Emoji_update1").innerHTML= "&#128548"
}

if(results[1].label == 'happy'){
    document.getElementById("Emoji_update2").innerHTML= "&#128522"
}
if(results[1].label == 'sad'){
    document.getElementById("Emoji_update2").innerHTML= "&#128532"
}
if(results[1].label == 'angry'){
    document.getElementById("Emoji_update2").innerHTML= "&#128548"
}




            }
        


    }
