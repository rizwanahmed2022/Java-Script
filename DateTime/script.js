


let i = 0;
setInterval(() => {
    let a = new Date();
    let h = document.getElementsByClassName("time")[0];
    let m = document.getElementsByClassName("time")[1];
    let s = document.getElementsByClassName("time")[2];
    let ampm = document.getElementsByClassName("time")[3]; // Add this element in your HTML
    
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    
    // Add leading zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    h.innerHTML = `${hours}:`;
    m.innerHTML = `${minutes}:`;
    s.innerHTML = `${seconds}  `;
    ampm.innerHTML = ` ${period}`; // Display AM/PM
    
}, 900);
