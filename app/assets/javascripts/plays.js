var number_counter = -1;
var image_counter = -1;
function getCSRFToken() { 
   var metas = document.getElementsByTagName('meta'); 

   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == "csrf-token") { 
         return metas[i].getAttribute("content"); 
      } 
   } 
    return "";
} 

function incrementSeconds(){
  if( number_counter == 9){
    number_counter = -1;
    image_counter = -1;
  }
  number_counter += 1
  image_counter += 1

  image_counter = image_counter % image_collection.length;

  document.getElementById("coundown-timer").innerHTML = 10 - number_counter;
  document.getElementById("image_section").setAttribute( "src", image_collection[image_counter])
}

function captureData(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/plays", true);
  xhttp.setRequestHeader("X-CSRF-Token", getCSRFToken() );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("number="+ (10 - number_counter) +"&image_url=" + image_collection[image_counter]);
  
  row = document.createElement("tr");
  col1= document.createElement("td");
  col1.innerHTML = 10 - number_counter;
  row.appendChild(col1);

  col2= document.createElement("td");
  col2.innerHTML = "<img src="+ image_collection[image_counter]+" style='width:200px;height:200px'>";
  row.appendChild(col2);
  
  document.getElementById("plays-listing").appendChild( row );
}
setInterval(incrementSeconds, 1000);
