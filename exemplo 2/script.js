
var arrayQuadrado =[];
var arrayTriangulo =[];

function allowDrop(event) {

	if (event.target.getAttribute("droppable") == "false"){
                    event.dataTransfer.dropEffect = "none"; // dropping is not allowed
                                      event.preventDefault();
                }
    else{
        event.dataTransfer.dropEffect = "all"; // drop it like it's hot
                          event.preventDefault();
    }

  	event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  var id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  if (event.currentTarget.id == 'dropBox1') {
      arrayQuadrado.push(id);
  }

  if(event.currentTarget.id == 'dropBox2'){
    arrayTriangulo.push(id);

  }

  
}

function noAllowDrop(ev) {
        ev.stopPropagation();
    }

function check(){
  for (var i = 0; i <= 4; i++) {
    if(arrayQuadrado[i] == 'triangulo1' || arrayQuadrado[i] == 'triangulo2'){
      console.log("caixa quadrado possui elemento errado");
      break;
    }
    if(arrayTriangulo[i] == 'quadrado1' || arrayTriangulo[i] == 'quadrado2'){
      console.log("caixa triangulo possui elemento errado");
      break;
    }
    
    
  }
  console.log(arrayQuadrado);
  console.log(arrayTriangulo);
}