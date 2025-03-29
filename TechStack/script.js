let a = document.getElementsByTagName('nav')[0]
let b = document.getElementById("box")





window.addEventListener('scroll',()=>{
    if(window.scrollY === 0){
        a.style.height = '0'

    }else{

        a.style.height = '80px'
    }
})
var i = 0;
var obj = [
    'https://wallpapers.com/images/hd/3840x2160-uhd-4k-desktop-z7g53ku4ein7vaiq.jpg',
    'https://cdn.pixabay.com/photo/2024/06/12/06/03/robot-8824470_1280.jpg',
    'https://wallpapercave.com/wp/wp13766555.jpg',
    'https://cdn.pixabay.com/photo/2024/06/09/10/00/ai-generated-8818465_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/09/05/10/38/ai-generated-9024538_1280.jpg'

];

setInterval(() => {
    let x = document.getElementById('homepic');
    x.style.opacity = 0;

    setTimeout(() => {
        x.src = obj[i];
        x.style.opacity = 1; // Fade in the new image
        i++;

        if (i >= obj.length) {
            i = 0;
        }
    }, 800); // Match this timeout with the CSS transition duration (1s)
}, 2000); // Change the image every 3 seconds



window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY; // Get the vertical scroll position
    const rotationAngle = scrollValue / 10; // Divide scroll value for smoother rotation

    b.style.transform = `rotate(${rotationAngle}deg)`; // Apply rotation based on scroll value
});




function toggle(){
    let t =document.getElementsByClassName("tog")[0]
    let tt =document.getElementsByClassName("tog")[1]
    
    let navsied = document.getElementsByClassName("navside")[0]
    navsied.classList.toggle('navside2')

    t.classList.toggle('cross')
    tt.classList.toggle('cross')
}

function corssfunc(){
    let tt =document.getElementsByClassName("tog")[1]
    tt.classList.toggle('tog2')
}





















