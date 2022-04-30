
var ul = document.querySelector('ul'); // grabbing the ul from the html
imgArray = ["pink", "purple", "red", "white", "yellow"]; // list of images
//corresponding fig caption for the images
figCaption=[   
	"Market in Münster, North Rhine-Westphalia, Germany By Dietmar Rabich",
    "Sentmaring Park, Münster, North Rhine-Westphalia, Germany By Dietmar Rabich",
    "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich",
    "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany By Dietmar Rabich",
    "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany By Dietmar Rabich"
]

// 1. Dynamically build the <ul> thumbnail list from an array of images so that the image 
// gallery can handle any number of thumbnail images (rather than the five provided).
for(var i in imgArray)
{
    var li = document.createElement('li');
    li.innerHTML = `<img src="images/flowers-` + imgArray[i] + `-small.jpg" alt="" width="240" height="160" />`;
    console.log(li); 
    ul.appendChild(li);
    
}
//capturing all the img tags in the page
var imgs = document.body.getElementsByTagName('img');
var caption = document.querySelector('figcaption');
var focusImg = imgs[1]; //focus image is the image with is focused on click


//looping throught the images in the icon
for(let i = 1; i < imgs.length; i++){
    //code wich executes on clicking on the image
    imgs[i].addEventListener('click',e =>{
        //getting the name clicked image
        var imgSrc = imgs[i].getAttribute("src");
        //converting the small image into large image
        var bigSrc = imgSrc.replace("small","large");
        //replacing the image inside the frame
        imgs[0].src = bigSrc;
        //assiging the clicked image ti focus image so that it can be highlighted
        focusImg = imgs[i];      
        for(let i = 1; i < imgs.length; i++){
            if(imgs[i] !== focusImg)
                imgs[i].style.filter= 'grayscale(60%)';
            focusImg.style.filter= 'grayscale(0%)'; 
        }
        // 2. Capture some interesting information about each image, and output the text to the 
        // <figcaption> element.
        caption.textContent = figCaption[i-1]; //displaying the corresponding caption
    });
}

