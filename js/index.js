const typed = new Typed('#typed', {
    stringsElement: '#test',// ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 5, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  });
  			const section1 = document.querySelector('#section1');
			const section2 = document.querySelector('#section2');
			const section3 = document.querySelector('#section3');
			const section4 = document.querySelector('#section4');
			const section5 = document.querySelector('#section5');

  	const btn1 = document.getElementById("btn1");
	const btn2 = document.getElementById("btn2");
	const btn3 = document.getElementById("btn3");
	const btn4 = document.getElementById("btn4");

	btn1.addEventListener('click', () => {
		console.log('Apretaste el botón 1');
		const adjustedPosition = section1.offsetTop;

    // Llama a la función de desplazamiento suave con la posición ajustada
    	smoothScrollTo(adjustedPosition, 1300);
	});
	btn2.addEventListener('click', () => {
		const adjustedPosition = section2.offsetTop + 186;

    // Llama a la función de desplazamiento suave con la posición ajustada
    	smoothScrollTo(adjustedPosition, 1300);
	});
	btn3.addEventListener('click', () => {
		const adjustedPosition = section3.offsetTop + 186;

    // Llama a la función de desplazamiento suave con la posición ajustada
    	smoothScrollTo(adjustedPosition, 1300);
	});
	btn4.addEventListener('click', () => {
		const adjustedPosition = section4.offsetTop + 186;

    // Llama a la función de desplazamiento suave con la posición ajustada
    	smoothScrollTo(adjustedPosition, 1300);
	});
	btn5.addEventListener('click', () => {
		const adjustedPosition = section5.offsetTop + 186;

    // Llama a la función de desplazamiento suave con la posición ajustada
    	smoothScrollTo(adjustedPosition, 1300);
	});


	

	// Función para realizar el desplazamiento suave
	function smoothScrollTo(targetPosition, duration) {
		const start = window.scrollY || document.documentElement.scrollTop;
		const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
	
		function scroll(time) {
			const timeElapsed = time - startTime;
			const nextPosition = easeInOutCubic(timeElapsed, start, targetPosition - start, duration);
	
			window.scrollTo(0, nextPosition);
	
			if (timeElapsed < duration) {
				requestAnimationFrame(scroll);
			}
		}
	
		function easeInOutCubic(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t * t + b;
			t -= 2;
			return c / 2 * (t * t * t + 2) + b;
		}
	
		requestAnimationFrame(scroll);
	}


	// Obtén una referencia al elemento con el que quieres detectar la colisión
const elementoObjetivo = document.getElementById('miElemento');
const menulist = document.getElementById('menu__list');
const menuLine = document.getElementById('menu__line');
const div_vacio = document.getElementById('div_vacio');
// Agrega un listener al evento de desplazamiento
window.addEventListener('scroll', function() {
    // Obtiene la posición actual de desplazamiento

	window.requestAnimationFrame(function() {
        
		const scrollTop = window.scrollY || document.documentElement.scrollTop;

    
	// Comprueba la colisión
	function detectarColision(elemento2){
		const elementoRect = elemento2.getBoundingClientRect();
		const elementoTop = elementoRect.top + scrollTop;
		const elementoBottom = elementoRect.bottom + scrollTop;
		const colisiona = (scrollTop >= elementoTop && scrollTop <= elementoBottom);
		
		return colisiona;
	}
	//inicia la consulta section 1
	if (detectarColision(div_vacio)) {
		
		
		menuLine.style = 'transform: translate3d(0, 0, 0)';
		menuLine.style = '-webkit-transform: translate3d(0, 0, 0)';
		// -webkit-transform: translate3d(0, 0, 0);
		
	  }
	  else{
		
	  }
	//inicia la consulta section 2
	if (detectarColision(section2)) {
		
		
		menuLine.style = 'transform: translate3d(300%, 0, 0)';
		menuLine.style = '-webkit-transform: translate3d(300%, 0, 0)';
		
		
	  }
	  else{
		
	  }
	  //inicia la consulta section 3
	if (detectarColision(section3)) {
		
		
		menuLine.style = 'transform: translate3d(600%, 0, 0)';
		menuLine.style = '-webkit-transform: translate3d(600%, 0, 0)';
		
		
	  }
	  else{
		
	  }
	  //inicia la consulta section 2
	if (detectarColision(section4)) {
		
		
		menuLine.style = 'transform: translate3d(900%, 0, 0)';
		menuLine.style = '-webkit-transform: translate3d(900%, 0, 0)';
		
		
	  }
	  else{
		
	  }
	  //inicia la consulta section 2
	if (detectarColision(section5)) {
		
		
		menuLine.style = 'transform: translate3d(1200%, 0, 0)';
		menuLine.style = '-webkit-transform: translate3d(1200%, 0, 0)';
		
		
	  }
	  else{
		
	  }
    });
    
});
