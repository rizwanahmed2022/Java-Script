
let city = document.getElementById("city")
let citytemp = document.getElementById("citytemp")
let wind = document.getElementById("wind")
let des = document.getElementById("des")
let cantainer = document.getElementById("cantainer")
let fetching = document.getElementById("fetching")
async function weather() {
        let userinput = document.getElementById("userinput")
        let p = fetch(`https://goweather.xyz/weather/${userinput.value}`);
        console.log("Fetching Data...")
        fetching.style.display = 'flex'
        cantainer.style.display = 'none'
        p.then((value) => {
                if (!value.ok) {
                        throw new Error(`${userinput.value} Not Found :`);
                } else {
                        return value.json()
                }
                // return value.text()
        }).then((value) => {
                fetching.style.display = 'none'
                cantainer.style.display = 'flex'

                city.innerHTML = userinput.value
                citytemp.innerHTML = value.temperature
                wind.innerHTML = value.wind
                des.innerHTML = value.description
                console.log(value.temperature)
                console.log(value.wind)
                console.log(value.description)
        }).catch((error) => {


                console.log("Error occure:");
                fetching.style.display = 'flex'
                cantainer.style.display = 'none'
                fetching.innerHTML = error

        });


        // let data = await p.json();
        // temperature1 = data.temperature

        // temperature = temperature1.substring(1)

        // console.log(temperature);


}