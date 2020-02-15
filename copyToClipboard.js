function copyToClipboard() {
  const body = document.getElementsByTagName("body")[0];

  //get the content you want to copy
  const textualcontent = document.getElementById("content_text").value;
  //create an input element
  const inputElement = document.createElement("input");
  //add the input element to the body tag
  body.appendChild(inputElement);
  //set the value of the input to the text content
  inputElement.setAttribute("value", textualcontent);
  //call the select method
  inputElement.select();
  //execute the copy command
  document.execCommand("copy");
  //remove the inout from the dom
  body.removeChild(inputElement);
}
