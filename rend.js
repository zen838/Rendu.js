fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       let acceuil = document.getElementById("acceuil");
       let prod = document.getElementById("produits");
       let client = document.getElementById("foot");
// acceuil 
       let h1 = document.createElement("h1");
       h1.textContent = data.nomEntreprise;
       let p = document.createElement("p");
       p.textContent = data.slogan;
       let btnA = document.createElement("button");
       btnA.textContent = data.bouton;
       let ul = document.createElement("ul");
       acceuil.appendChild(h1);
       acceuil.appendChild(p);
       acceuil.appendChild(btnA);
       acceuil.appendChild(ul);

       data.listeBeneficesClients.forEach(element => {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = element;

       });
// fin acceuil 
// Produits
       let h2P  = document.createElement("h2");
       h2P.textContent = "Produits";
       let btnP1 = document.createElement("button");
       btnP1.textContent = "Afficher"
       let btnP2 = document.createElement("button");
       btnP2.textContent = "Masquer";
       prod.appendChild(h2P);
       prod.appendChild(btnP1);
       prod.appendChild(btnP2);

       btnP1.addEventListener("click", function() {

        let divprod = document.createElement("div");
        divprod.setAttribute("Class","divprod");
        prod.appendChild(divprod);

        data.produits.forEach(element => {
                
            let div = document.createElement("div");
            divprod.appendChild(div);
            let div2 = document.createElement("div");
            div2.setAttribute("Class","produits")
            div.appendChild(div2)
            let h3 = document.createElement("h3");
            h3.textContent = element.titre;
            console.log(data.produits.titre);
            div2.appendChild(h3);

            let p = document.createElement("p");
             p.textContent = element.presentation;
             div2.appendChild(p);

            let img = document.createElement("img");
            img.src = element["image-url"];
            div.appendChild(img);
            });
       });
       btnP2.addEventListener('click', function(){
           let divprod = document.querySelector(".divprod");
        if (divprod){
            divprod.remove();
        }
    });
// fin Produits
       let commentaire = document.createElement("h2");
       commentaire.textContent = "Avis Clients";
       client.appendChild(commentaire);

       let clientcontainer = document.createElement("div");
       clientcontainer.setAttribute("class","client");
       client.appendChild(clientcontainer);

       data.clients.forEach(element=> {
        let div = document.createElement("div");
        clientcontainer.appendChild(div);
        let h3 = document.createElement("h3");
        h3.textContent = element.nom;
        div.appendChild(h3);
        let p = document.createElement("p");
        p.textContent = element.typePrestation;
        let p1 = document.createElement("p");
        p1.textContent = element.commentaire;
        let p2 = document.createElement("p");
        p2.textContent = element.note+" étoiles";
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);

       })


    })
    .catch(error => console.error('Error:', error));
