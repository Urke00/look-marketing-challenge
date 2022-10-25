function getDate(w,d,s,l,i)
{
    w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}

getDate(window,document,'script','dataLayer','GTM-WPN2CD2');

try{
    if(LUI.getURLParameter("aff_id")=="23454")
    {
     var img = document.createElement("IMG");
     img.src = "//rtb.mfadsrvr.com/pixel?id=592315&type=img";
     document.head.appendChild(img);
  }
}catch(e){};

new UPManager("PDE/lead3",
{
    "host":"stream_container",
    "autoplay":true,"playback_rate":1.1,
    "timers":{"1":[{"checkcookie":{"cookie":"return_visit","show":"#btn-cta","start_vsltimer":[],"start_reel":[],"start_ordbtn":[]}}],"2499":[{"show":"#btn-cta"},{"start_reel":[]},{"video_end_pixel":[]},{"start_vsltimer":[]},{"start_ordbtn":[]}]},
    "caption":".\/statics\/captions\/caption1.srt"
});

function start_ordbtn()
{
    return LUI.start_ordbtn("#ordbtn_host");
}
function start_vsltimer()
{
    return LUI.start_vsltimer("#vsltimer_host");
}
function start_reel()
{
    return LUI.start_reel("#reel_host");
}

var mysrc = "https://tracking.buygoods.com/track/?a=7086&firstcookie=0&referrer="+encodeURIComponent(document.referrer)+"&product=1,2,3&sessid2="+ReadCookie('sessid2');

var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.async = true;
newScript.src = mysrc;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(newScript, s);
function ReadCookie(name){name += '='; var parts = document.cookie.split(/;\s*/);for (var i = 0; i < parts.length; i++) {var part = parts[i]; if (part.indexOf(name) == 0) return part.substring(name.length)} return '';}

LUI.tracking = "lander";

try {
    if (LUI.getURLParameter("aff_id") == "167146") {
    
        var elm = document.querySelectorAll(".pricebox A");
        
        for(var i in elm)
        {
            elm[i].addEventListener("click",function(){
                var img = document.createElement("IMG");
                img.src = "https://trk.healthy-tracker.com/conversion.gif?txid=add_to_cart&et=cart";
                document.head.appendChild(img);
            });
        }
    }
}
catch (e) {};

try {
    if (LUI.getURLParameter("aff_id") == "167146") {
    
        var triggered = false;
                function video_end_pixel(){
                    if (!triggered){
                var img = document.createElement("IMG");
                img.src = "https://trk.healthy-tracker.com/conversion.gif?txid=video_end&et=video_end";
                document.head.appendChild(img);
                triggered = true;
                }
        }
    }
}
catch (e) {};