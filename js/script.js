window.addEventListener('DOMContentLoaded', () => {
    var header = document.getElementById("header")
    header.innerHTML = '<h1>Calentask</h1>    \
                        <nav>        \
                            <a href="Accueil.html"><h3>Accueil</h3></a>    \
                            <a href="Mon_agenda.html"><h3>Mon agenda</h3></a>\
                            <a href="Ajouter.html"><h3>Ajouter</h3></a>     \
                            <a href="A_propos.html"><h3>À propos</h3></a> \
                        </nav>      \
                        <button id="button2">Dark Mode</button>'
    console.log("La page est chargée")
    var button2 = document.getElementById("button2");

    var footer = document.getElementById("footer")
    footer.innerHTML = '<div class="reseau">    \
                        <a href="https://fr-fr.facebook.com" target="_blank"> \
                            <img src="../images/logo_facebook.jpg" alt=""> \
                            <span>Facebook</span>    \
                        </a>    \
                        <a href="https://www.instagram.com" target="_blank"> \
                            <img src="../images/logo_inta.webp" alt=""> \
                            <span>Instagram</span>    \
                        </a>   \
                        <a href="https://www.linkedin.com" target="_blank"> \
                            <img src="../images/logo_linkedln.png" alt="">  \
                            <span>Linkedln</span>   \
                        </a>    \
                        <a href="https://twitter.com/?lang=fr" target="_blank">  \
                            <img src="../images/logo_twitter.png" alt=""> \
                            <span>Twitter</span> \
                        </a> \
                    </div>'


    button2.addEventListener('click', () => {
        document.body.classList.toggle("dark_theme")
        if (button2.innerHTML == 'Dark Mode') {
            button2.innerHTML = 'Light Mode'
            document.getElementById("ht").style.backgroundColor = "black"  
        } else {
            button2.innerHTML = 'Dark Mode'
            document.getElementById("ht").style.backgroundColor = "white"
        }
    })
})

