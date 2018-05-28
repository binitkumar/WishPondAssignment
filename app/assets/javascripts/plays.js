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
  number_counter += 1
  image_counter += 1

  number_counter = number_counter % 10;
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
}
setInterval(incrementSeconds, 1000);
