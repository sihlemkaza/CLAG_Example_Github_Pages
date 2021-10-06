function sendMessage() {
  var value = document.getElementById("message-input").value;
  if(value){
    var para = document.createElement("P");                       // Create a <p> node
    var text = document.createTextNode(value);      // Create a text node
    para.appendChild(text);                                         // Append the text to <p>
    document.getElementById("message-area").appendChild(para);   
    document.getElementById("message-input").value=''; //remove message value in input
  }
}