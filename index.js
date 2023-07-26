var id;
var id2;

function select() {
  
 
  if (document.getElementById("custom-select").value == "japan") {
    id = 35.652832;
    id2 = 139.839478;

    const data = null;

    const xhr =/* The `new XMLHttpRequest()` creates a new instance of the XMLHttpRequest object, which
    is used to make HTTP requests from the browser. It allows you to send and receive
    data from a server without having to refresh the entire page. */
     new XMLHttpRequest();
    /* The `xhr.withCredentials` property is used to indicate whether or not cross-site Access-Control
    requests should be made using credentials such as cookies, authorization headers, or TLS client
    certificates. When set to `true`, it allows the request to include credentials. */
    xhr.withCredentials = true;

    xhr.open(
      "GET",
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + id + "%," + id2
    );
    /* `xhr.setRequestHeader` is a method used to set the value of an HTTP request header before
    sending the request. In this code, it is used to set the necessary headers for making a request
    to the Weather API. The headers being set are "X-RapidAPI-Key" and "X-RapidAPI-Host". These
    headers are required by the Weather API to authenticate and identify the source of the request. */
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "388a414891msh7dd8d3f383c98f8p141f7djsn1ed05f8dbbc9"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.send(data);
    let onhtml = "";
 /* The `xhr.addEventListener("readystatechange", function ()` is adding an event listener to the
 XMLHttpRequest object (`xhr`). It listens for changes in the readyState property of the
 XMLHttpRequest object. When the readyState changes, the function specified as the second argument
 is executed. In this case, the function is responsible for handling the response from the server
 and updating the HTML elements with the relevant weather information. */
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let onhtml = "";
        const objects = JSON.parse(this.responseText);
        console.log(this.responseText);

        onhtml += objects["name"];
        document.getElementById("temc").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_c + " องศา ";
          document.getElementById("temf").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_f + " ฟาเรนไฮต์ ";
        document.getElementById("city").innerHTML =
          "Results from  " + objects.location.country;
		    document.getElementById("locationtime").innerHTML ="Date time in japan = " + objects.location.localtime;
        document.getElementById("wind").innerHTML = "ความเร็วลม คือ " + objects.current.wind_mph + " MPh" ;
      }
    });
  }
  if (document.getElementById("custom-select").value == "thailand") {
    id = 15.8700;
    id2 = 100.9925;

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open(
      "GET",
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + id + "%," + id2
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "388a414891msh7dd8d3f383c98f8p141f7djsn1ed05f8dbbc9"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.send(data);
    let onhtml = "";
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let onhtml = "";
        const objects = JSON.parse(this.responseText);
        console.log(this.responseText);
        onhtml += objects["name"];
        document.getElementById("temc").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_c + " องศา ";
          document.getElementById("temf").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_f + " ฟาเรนไฮต์ ";
        document.getElementById("city").innerHTML =
          "Results from   " + objects.location.country;
		    document.getElementById("locationtime").innerHTML =" time  = " + objects.location.localtime;
        document.getElementById("wind").innerHTML = "ความเร็วลม คือ " + objects.current.wind_mph + " MPh" ;
      }
    });
  }
  if (document.getElementById("custom-select").value == "eng") {
    id = 52.3555;
    id2 = 1.1743;

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open(
      "GET",
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + id + "%," + id2
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "388a414891msh7dd8d3f383c98f8p141f7djsn1ed05f8dbbc9"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
    xhr.send(data);
    let onhtml = "";
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let onhtml = "";
        const objects = JSON.parse(this.responseText);
        console.log(this.responseText);
        onhtml += objects["name"];
        document.getElementById("temc").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_c + " องศา ";
          document.getElementById("temf").innerHTML =
          "อุณหภูมิ ปัจจุบัน : " + objects.current.temp_f + " ฟาเรนไฮต์ ";
        document.getElementById("city").innerHTML =
          "Results from   " + objects.location.country;
		    document.getElementById("locationtime").innerHTML =" time  = " + objects.location.localtime;
        document.getElementById("wind").innerHTML = "ความเร็วลม คือ " + objects.current.wind_mph + " MPh" ;
      }
    });
  }
}

