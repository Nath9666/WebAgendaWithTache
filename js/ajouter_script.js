var bouttonEnregistrer = document.getElementById("enregistrer")

bouttonEnregistrer.addEventListener('click', () => {
    const tableau = document.getElementById("EntreeTbody")
    
    // Création des éléments du tableau
    const nouvelleLigne = document.createElement('tr')
    const check = document.createElement('td')
    const nom = document.createElement('td')
    const type = document.createElement('td')
    const debut = document.createElement('td')
    const fin = document.createElement('td')
    const categorie = document.createElement('td')

    // Récupération des informations à mettre dans les cases
    nom.textContent = document.getElementById("nomEntree").value
    if(nom.textContent){
        typeCheck = document.getElementById("evenement")
        if(typeCheck.checked){
            type.textContent = "Événement"
        }
        else{
            typeCheck = document.getElementById("tache")
            check.innerHTML = "<input type=checkbox>"
            type.textContent = "Tâche"
        }
        debut.textContent = document.getElementById("dateDebut").value
        fin.textContent = document.getElementById("dateFin").value
        categorie.textContent = document.getElementById("categorie").value
        
        nouvelleLigne.append(check, nom, type, debut, fin, categorie)
        tableau.appendChild(nouvelleLigne)
    }
    
    // On vide les entrées du formulaire
    document.getElementById("nomEntree").value = ""
    document.getElementById("evenement").checked = true
    document.getElementById("dateDebut").value = ""
    document.getElementById("dateFin").value = ""
    document.getElementById("categorie").value = "Maison"
    
})
