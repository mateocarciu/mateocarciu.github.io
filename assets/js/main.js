// Fonction pour créer un cookie
function createCookie(name, value, days) {
    let expires;
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  // Fonction pour lire la valeur d'un cookie
  function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1,c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }
  
  // Fonction pour supprimer un cookie
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }
  
  // Fonction pour vérifier si un cookie existe déjà
  function checkCookie(name) {
    let cookieValue = readCookie(name);
    if (cookieValue != null && cookieValue != "") {
      return true;
    } else {
      return false;
    }
  }
  
  // Fonction pour afficher la popup et gérer les cookies
  function manageCookies() {
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0px -1px 5px rgba(0,0,0,0.2)';
    popup.innerHTML = '<p>Notre site utilise des cookies pour améliorer votre expérience de navigation. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.</p><button id="accept" class="cookie-button accept-button">Accepter</button><button id="decline" class="cookie-button decline-button">Refuser</button>';
    document.body.appendChild(popup);
  
  
    // Si le cookie "accepted_cookies" existe, masquer la popup
    if (checkCookie('accepted_cookies')) {
      popup.style.display = 'none';
    }
  
    // Gérer l'acceptation des cookies
    let acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', function() {
      createCookie('accepted_cookies', 'true', 30);
      popup.style.display = 'none';
    });
  
    // Gérer le refus des cookies
    let declineBtn = document.getElementById('decline');
    declineBtn.addEventListener('click', function() {
      eraseCookie('accepted_cookies');
      popup.style.display = 'none';
    });
  }
  
  // Appeler la fonction pour afficher la popup
  manageCookies();
  
// function checkform(theform){
//     var why = "";
    
//     if(theform.CaptchaInput.value == ""){
//     why += " Veuillez entrer le numéro ! \n";
//     }
//     if(theform.CaptchaInput.value != ""){
//     if(ValidCaptcha(theform.CaptchaInput.value) == false){
//     why += " Numéro pas bon !  \n";
//     }
//     }
//     if(why != ""){
//     alert(why);
//     return false;
//     }
//     }
    
//     var a = Math.ceil(Math.random() * 9)+ '';
//     var b = Math.ceil(Math.random() * 9)+ '';
//     var c = Math.ceil(Math.random() * 9)+ '';
//     var d = Math.ceil(Math.random() * 9)+ '';
//     var e = Math.ceil(Math.random() * 9)+ '';
    
//     var code = a + b + c + d + e;
//     document.getElementById("txtCaptcha").value = code;
//     document.getElementById("CaptchaDiv").innerHTML = code;
    
//     // Validate input against the generated number
//     function ValidCaptcha(){
//     var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
//     var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
//     if (str1 == str2){
//     return true;
//     }else{
//     return false;
//     }
//     }
    
//     // Remove the spaces from the entered and generated code
//     function removeSpaces(string){
//     return string.split(' ').join('');
//     }
    
(function($){
    
    "use strict";
    

    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
;
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });    
    
    
    
}(jQuery));