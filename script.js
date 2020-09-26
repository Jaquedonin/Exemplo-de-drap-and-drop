function onDragStart(event) {
	event
		.dataTransfer
		.setData('text/plain', event.target.id);
	//mudando a cor do alov permanemtemente
	event
		.currentTarget
		.style
		.backgroundColor = 'yellow';
	//mudando opacidade de acordo com o id do alvo arrastavel
	
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
	const id = event
		.dataTransfer
		.getData('text');
	const draggableElement = document.getElementById(id);
	const dropzone = event.target;
	//Anexe nosso draggableelemento ao dropzone
	dropzone.appendChild(draggableElement);
	if (event.target.id == 'example-dropzone') {
		switch (id) {
		  	case 'draggable-1':
		  		event.target
					.style
					.backgroundColor = 'green';
		    	break;
		  	case 'draggable-2':
		  		event.target
					.style
					.backgroundColor = 'green';
		  		break;
		  	case 'draggable-3':
		  		event.target
					.style
					.backgroundColor = 'red';

		    	break;
		    case 'draggable-4':
		    	event.target
					.style
					.backgroundColor = 'red';
		    	break;
		  	default:
		}
	}

	if(event.target.id == 'example-dropzone2'){
		switch (id) {
		  	case 'draggable-1':
		  		event.target
					.style
					.backgroundColor = 'red';
		    	break;
		  	case 'draggable-2':
		  		event.target
					.style
					.backgroundColor = 'red';
		  		break;
		  	case 'draggable-3':
		  		event.target
					.style
					.backgroundColor = 'green';

		    	break;
		    case 'draggable-4':
		    	event.target
					.style
					.backgroundColor = 'green';
		    	break;
		  	default:
		}
	}
	//Reinicie nosso dataTransferobjeto
	event
		.dataTransfer
		.clearData();
}

function onDragEnd(event) {
 	event
		.currentTarget
		.style
		.backgroundColor = '#4AAE9B';

}