$.ajax({
    url : 'services.json',
    type : 'GET',
    success : function(json) {
    clearInterval();
    services=json.servicios;
    for(var i=0;i<services.length;i++){
        vControler(services[i]);
    }
    },
    error : function(xhr, textStatus, errorThrown ) {

        setInterval(function(){
            $.ajax(this);
            return;
            
        }, 5000);  
    }
});
var last1;
var last2;
var last3;
setInterval(function(){
$.ajax({
    url : 'testimonio.json',
    type : 'GET',
    success : function(json) {
        $("#test").empty();
        testimonio=json.testimonios;
        let uno; let dos; let tres;
        while(uno== last1 || uno== last2 || uno== last3 || uno== dos || uno== tres){
         uno=Math.floor(Math.random() * testimonio.length);
        }
        while(dos== last1 || dos== last2 || dos== last3 || dos== uno || dos== tres){
         dos=Math.floor(Math.random() * testimonio.length);
        }
        while(tres== last1 || tres== last2 || tres== last3 || tres== dos|| tres== uno || tres== undefined){
         tres=Math.floor(Math.random() * testimonio.length);
        }
        last1=uno;
        last2=dos;
        last3=tres;
        for(var i=0;i<testimonio.length;i++){
            if(i==uno || i==dos || i==tres)
            vControlerTest(testimonio[i]);
        }
         
    },
    error : function(xhr, textStatus, errorThrown ) {

        setInterval(function(){
            $.ajax(this);
            return;
            
        }, 5000);  
    }
});}, 10000); 
/******************************************************************************* */
    function pintarServicio(serv){
        let div=$("<div></div>").addClass("containerI round mAll-20 d-flex centrar");
        let divMiddle=$("<div></div>").addClass("middleI round");
        let divText=$("<div></div>").addClass("textI round");
        let img = $("<img></img>").attr("src",serv.imagen);
        img.addClass("p-20 imagen round");
        divText.append(serv.nombre);
        div.append(img);
        div.append(divMiddle);
        divMiddle.append(divText);
        $("#serv").append(div);
    }
    function pintarTestimonio(test){
        
        let divG=$("<div></div>");
        let div1=$("<div></div>");
        let div2=$("<div></div>");
        let div3=$("<div></div>");
        let img=$("<img></img>").attr("src",test.img);
        img.addClass("w-50 circle");
        div1.append(img);
        div1.append(test.name);
        div1.addClass("d-flex divBo");
        div1.css("justify-content","space-around");
        div2.append(test.text);
        div2.addClass("w-20pc");
        div2.css("text-align","center");
        div3.css("text-align","center");
        div3.addClass("divBo");
        divG.css("text-align","center");
        div3.append(test.fecha);
        divG.append(div1);
        divG.append(div2);
        divG.append(div3);
        divG.addClass("p-20 w-20pc m-auto transitionDivG");
        $("#test").append(divG);
        $("#test div").css("opacity",1);
    }
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#myBtn").css("display","block");
  } else {
    $("#myBtn").css("display","none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
$('input[name^="company"]').prop( "disabled", true );
$('input[name^="tlf"]').prop( "disabled", true );
$('input[name^=creator]').keyup(function () {
    if(this.value!=""){
        if(!this.value.includes("  ") && this.value!=(" ")){
            this.setCustomValidity("");
            $('input[name^="company"]').prop( "disabled", false );

        }else{
            this.setCustomValidity("El nombre debe no incluir doble espacios o estar vacío");
            $('input[name^="company"]').prop( "disabled", true );
        }
    }else{
        this.setCustomValidity("El nombre debe no incluir doble espacios o estar vacío");
        $('input[name^="company"]').prop( "disabled", true );
    }
});
$('input[name^=company]').keyup(function () {
    if(this.value!=""){
        if(!this.value.includes("  ") && this.value!=(" ")){
            this.setCustomValidity("");
            $('input[name^="tlf"]').prop( "disabled", false );

        }else{
            this.setCustomValidity("El nombre debe no incluir doble espacios o estar vacío");
            $('input[name^="tlf"]').prop( "disabled", true );
        }
    }else{
        this.setCustomValidity("El nombre debe no incluir doble espacios o estar vacío");
        $('input[name^="tlf"]').prop( "disabled", true );
    }
});
$('input[name^=tlf]').keyup(function () {
    if(this.value!=""){
        if(this.value.match(/[0-9]{3}-[0-9]{3}-[0-9]{3}/g)){
            this.setCustomValidity("");

        }else{
            this.setCustomValidity("El numero debe ser válido");
        }
    }else{
        this.setCustomValidity("El numero debe ser válido");
    }
});
/******************************************************************************* */
function vControler(serv){
    pintarServicio(serv);
}
function vControlerTest(test){
    pintarTestimonio(test);
}
