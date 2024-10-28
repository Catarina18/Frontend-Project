let slideIndex2 = 1; // novo índice para o segundo slideshow
showSlides(slideIndex2);

function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  // Ajustar o slideIndex
  if (n > slides.length) { slideIndex2 = 1; }    
  if (n < 1) { slideIndex2 = slides.length; }

  // Esconder todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Mostrar o slide atual
  slides[slideIndex2 - 1].style.display = "flex";  
}

// Adicionando hover para as imagens
const images = document.querySelectorAll(".mySlides .custom-slide-caption img");

images.forEach((img) => {
  img.addEventListener("mouseenter", function() {
    // Cria um novo div para o hover
    const hoverDiv = document.createElement("div");
    hoverDiv.className = "hover-text"; // Classe para estilizar o hover
    hoverDiv.innerText = this.alt; // Usa o texto alternativo da imagem

    // Estilo do hoverDiv para ocupar toda a imagem
    hoverDiv.style.position = "absolute";
    hoverDiv.style.top = "0";
    hoverDiv.style.left = "0";
    hoverDiv.style.right = "0";
    hoverDiv.style.bottom = "0";
    hoverDiv.style.display = "flex";
    hoverDiv.style.alignItems = "center";
    hoverDiv.style.justifyContent = "center";
    hoverDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Fundo escuro translúcido
    hoverDiv.style.color = "white"; // Cor do texto
    hoverDiv.style.fontSize = "2rem"; // Tamanho do texto
    hoverDiv.style.zIndex = "10"; // Certifique-se de que está acima da imagem
    hoverDiv.style.width = "300px";
    hoverDiv.style.height = "250px";

    // Adiciona o texto hover à imagem
    this.parentElement.style.position = "relative"; // Define o pai como relativo para que o hover funcione corretamente
    this.parentElement.appendChild(hoverDiv); // Adiciona ao elemento pai da imagem
  });

  img.addEventListener("mouseleave", function() {
    const hoverText = this.parentElement.querySelector(".hover-text");
    if (hoverText) {
      this.parentElement.removeChild(hoverText); // Remove apenas o hover da imagem correspondente
    }
  });
});


