window.addEventListener('DOMContentLoaded',()=>{
    var head = document.getElementById("header")
    head.innerHTML='<h1>Calentask</h1>    <nav>        <a href="Accueil.html"><h3>Accueil</h3></a>        <a href="Mon_agenda.html"><h3>Mon agenda</h3></a>        <a href="Ajouter.html"><h3>Ajouter</h3></a>        <a href="A_propos.html"><h3>À propos</h3></a>    </nav>    <button id="button2">Dark Mode</button>'
    console.log("La page est chargée")
    var button2 = document.getElementById("button2");

    button2.addEventListener('click',()=>{
        document.body.classList.toggle("dark_theme")
        if (button2.innerHTML=='Dark Mode'){
            button2.innerHTML='Light Mode'
            document.getElementById("ht").style.backgroundColor="black"
        }else{
            button2.innerHTML='Dark Mode'
            document.getElementById("ht").style.backgroundColor="white"
        }
    })
    
    var foot =document.getElementById("footer")
    foot.innerHTML='<div class="reseau"><a href="https://fr-fr.facebook.com" target="_blank">        <img src="../images/logo_facebook.jpg" alt="">        <span>Facebook</span>    </a>    <a href="https://www.instagram.com" target="_blank">        <img src="../images/logo_inta.webp" alt="">        <span>Instagram</span>    </a>    <a href="https://www.linkedin.com" target="_blank">        <img src="../images/logo_linkedln.png" alt="">        <span>Linkedln</span>    </a>    <a href="https://twitter.com/?lang=fr" target="_blank">        <img src="../images/logo_twitter.png" alt="">        <span>Twitter</span>    </a></div>  '  
    console.log(document.cookie)
    const event = new Date(1993, 6, 28, 14, 39, 7);
    var DateDebut= new Date(2022,05,18,17,00,3)

    console.log(event.toString());
    // expected output: Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)

    console.log(event.toDateString());
    // expected output: Wed Jul 28 1993
})










