let a = document.body.firstElementChild;
a.style.border = "2px solid red"
a.style.width = "90%"
a.style.padding = "90px"

let d = a.querySelector('tbody')
d.style.border = "2px solid red"


let e = d.children
e[0].style.backgroundColor= 'gray'
e[0].style.backgroundColor= 'gray'
e[0].style.fontSize= '20px'
e[0].style.fontWeight= 'bold'


for (let i = 1; i < e.length; i++) {
    if(i%2===0){
        let dat = e[i].children
        dat[0].style.backgroundColor= 'red'
        dat[1].style.backgroundColor= 'yellow'
        dat[2].style.backgroundColor= 'blue'
        dat[3].style.backgroundColor= 'wheat'
        
    }else{
        let dat = e[i].children
    
        dat[0].style.backgroundColor = '#FF6666E6'; // Light Red with 90% opacity
        dat[1].style.backgroundColor = '#FFFF99E6'; // Light Yellow with 90% opacity
        dat[2].style.backgroundColor = '#6666FFE6'; // Light Blue with 90% opacity
        dat[3].style.backgroundColor = '#FFF5E6E6'; // Light Wheat with 90% opacity
         if(dat[3].innerHTML <20){
            dat[0].style.backgroundColor = 'pink'; // Light Red with 90% opacity
            dat[1].style.backgroundColor = 'pink'; // Light Yellow with 90% opacity
            dat[2].style.backgroundColor = 'pink'; // Light Blue with 90% opacity
            dat[3].style.backgroundColor = 'pink'; // Light Wheat with 90% opacity
            
         }else{
        dat[3].style.backgroundColor = '#FFF5E6E6'; // Light Wheat with 90% opacity

         }
    }
    
}

