LoadCount()
var count = 0
var audio = new Audio("click.wav")
arr = new Array(20)
for (let i = 0; i < arr.length;i++){
    arr[i] = i + 1
}
document.getElementById().src
shuffle(arr)
function Hamood(){
    if (document.getElementById("test").innerHTML == "Hamood")
        document.getElementById("test").innerHTML = "Habibi"
    else{
        document.getElementById("test").innerHTML = "Hamood"
    }
}
function Count(){
    count++
    document.getElementById("counter").innerHTML = "counter : " + count
}
function PlayAudio(){
    audio.play()
}
function Visualize(arr){
    let txt = ""
    for (let i = 20; i != 0; i--){
        for (let j = 0; j < arr.length;j++){
            if (arr[j] >= i)
                txt += "▒&#160;"
            else txt += "&#160;&#160;"
        }
        document.getElementById(i).innerHTML = txt
    }
}
function CountArr(arr){
    var count = 0
    for (var i in arr){
        count++
    }
    return count
}
function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
function Bubblesort(arr){
    let temp = 0
    for (let i = arr.length - 1; i != 0; i--)
        {
            for (let j = 0; j < i; j++)
            {
                Visualize(arr);
                sleep(0.1)
                if (arr[j] > arr[j + 1])
                {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
}
function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}
function CountStore(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1
    } 
    else {
        localStorage.clickcount = 0
    }
    document.getElementById("count store").innerHTML = localStorage.clickcount
}
function ResetCount(){
    localStorage.clickcount = 0
    document.getElementById("count store").innerHTML = localStorage.clickcount
}
function LoadCount(){
    document.getElementById("count store").innerHTML = localStorage.clickcount
}
function previewFile() {
    var preview = document.getElementById("help me please")
    var file    = document.querySelector('input[type=file]').files[0]
    var reader  = new FileReader()
  
    reader.onloadend = function () {
      preview.src = reader.result
    }
  
    if (file) {
      reader.readAsDataURL(file)
    } else {
      preview.src = ""
    }
  }