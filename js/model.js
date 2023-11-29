
        const modelViewer = document.querySelector("model-viewer");
      
        window.switchSrc = (element, name) => {
      const base = "../assets/" + name;
      console.log(base);
      modelViewer.src = base + '.glb';
      modelViewer.poster = base + '.webp';

      const slides = document.querySelectorAll(".slide");
      

      // Remueve la clase "selected" de todas las imágenes
      slides.forEach((img) => {
        img.classList.remove("selected");
      });

      // Agrega la clase "selected" a la imagen seleccionada
      
      element.nextElementSibling.classList.add("selected");
    };
      
        // document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
        //   // Keep slider interactions from affecting the XR scene.
        //   ev.preventDefault();
        // });
      