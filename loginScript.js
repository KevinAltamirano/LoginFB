function showReg() {
    document.getElementById("login").style.display = "block";
    logFB();
}

function logFB() {
    window.fbAsyncInit = function() {
            FB.init({
                appId      : '382680545445284',
                cookie     : true,  // enable cookies to allow the server to access 
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
                });

            };
        
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            testAPI();
}


function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);

            document.getElementById("userR").value=response.name;
            document.getElementById("nameR").value=response.name;
        });
}