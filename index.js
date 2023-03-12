let closeImg = document.getElementById('close');
let displayImg = document.getElementById('display');

let rightIndex=-1;
let leftIndex =1

function openImage(e){
    console.log(e.src)
    document.getElementById('image').src=e.src;
    displayImg.style.display = "flex";
}

function closeImage(){
    displayImg.style.display = 'none';
}

function leftImg(){
    leftIndex--;
    let arr = document.getElementsByClassName('imgs');
    document.getElementById('image').src=arr[leftIndex].src;
    if(leftIndex<=0){
        leftIndex=arr.length;
    }
}
function rightImg(){
    rightIndex++;
    let arr = document.getElementsByClassName('imgs');
    document.getElementById('image').src=arr[rightIndex].src;
    
    if(rightIndex>=arr.length-1)
    {
        rightIndex=-1;
    }
}
