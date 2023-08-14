function togglemode(){
    const body = document.body

    // if (body.classList.contains('light')){
    //    body.classList.remove('light')  

    // } 
    // else{
    //     body.classList.add('light')
    // }
    // essa logica acima funciona muito bem e pode ser sustituida pela funçao toggle
    body.classList.toggle('light')  // o toggle faz a exata logica acima com 1 linha mt brabo

    const img = document.querySelector("#profile img")
    const pname = document.querySelector("#profile p")

    if (body.classList.contains('light')){
       
        img.setAttribute('src','./assets/avatar-light.png')
        pname.innerHTML = ("Miles Morales")

    } 
    else{
        img.setAttribute('src','./assets/avatar-dark.png')
        pname.innerHTML = ("Spider-Man")

    }

    // o if else acima verifica de o dark mode ta ativo
    // e troca a foto e o nome pelas funçoes setAttribute e innerHTML
    // Obs é nescessario definir as const antes para pegar os elementos que vou mexer em js
    

}   