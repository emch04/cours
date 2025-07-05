// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Cibler le bouton de connexion
    const loginBtn = document.querySelector('input[type="button"]');

    // Ajouter un écouteur d'événement au clic sur le bouton
    loginBtn.addEventListener("click", function () {
        // Récupérer les valeurs des champs
        const nom = document.querySelector('input[placeholder="Nom"]').value;
        const prenom = document.querySelector('input[placeholder="Prénom"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const motDePasse = document.querySelector('input[placeholder="Mot de passe"]').value;

        // Vérification simple (par exemple, vérifier si tous les champs sont remplis)
        if (!nom || !prenom || !email || !motDePasse) {
            alert("Merci de remplir tous les champs !");
            return;
        }

        // Afficher les données dans la console (à des fins de test)
        console.log("Nom:", nom);
        console.log("Prénom:", prenom);
        console.log("Email:", email);
        console.log("Mot de passe:", motDePasse); // Ne jamais afficher un mot de passe en production !

        // Tu pourrais aussi ici envoyer les données vers un serveur avec fetch()
        // Exemple fictif :
        /*
        fetch("/connexion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nom, prenom, email, motDePasse })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Réponse du serveur:", data);
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
        */
    });
});
