function ragaca (){
    //1.vnaxot ra weria switch divshi
    //2.magis mixedvit shevcvalot cssis rootis cvladebis mnishvnelobebi
    let icon = document.getElementById("switch").innerHTML;
    console.log(icon);

    if(icon == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';document.documentElement.style.setProperty('--white', '#000000');
        document.documentElement.style.setProperty('--black', '#ffffff');
        document.documentElement.style.setProperty('--image', 'url(../img/images.jpg)');
        
    }
    else{
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';document.documentElement.style.setProperty('--white', '#ffffff');
        document.documentElement.style.setProperty('--black', '#000000');
        document.documentElement.style.setProperty('--image', 'url(../img/wyali.jpg)');
    }
}