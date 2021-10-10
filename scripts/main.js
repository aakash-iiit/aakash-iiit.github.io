
function populate(a,b){
     var x=document.getElementsByClassName("under-content-area");
    Array.from(x).forEach((item) => {
        item.style.display="none";
    });
    var c=document.getElementById(a);
    c.style.display="block";
    var y=document.getElementsByClassName("navbar-list-item active");
    Array.from(y).forEach((item) => {
        item.classList.remove("active");
    });
    var e=document.getElementById(b);
    
    var f=document.getElementsByClassName("navbar-list");
    var g=document.getElementsByClassName("navbar-list-item");
    var h=document.getElementsByClassName("picture-theme-area");
    var i=document.getElementsByClassName("content-area");
    //var g=document.getElementsByClassName("univ");
    if( a == 'content-home' )
    {
        Array.from(g).forEach((item) => {
            item.style.color="white";
        });
        h[0].style.backgroundColor="";
        f[0].style.backgroundColor="";
        i[0].style.backgroundColor='';
        document.body.style.backgroundImage="url('assets/images/pineapple.jpg')";
    }
    else
    {
        Array.from(g).forEach((item) => {
            item.style.color="#ffd100";
        });
        f[0].style.backgroundColor="#333533";
        h[0].style.backgroundColor="#ffee32";
        i[0].style.backgroundColor='#d6d6d6';
        e.classList.add("active");
        document.body.style.backgroundImage="url()";
    }

}

function display_time(){
    dt2=new Date(Date.now());
    var a = document.getElementById("display-date");
    a.innerHTML="Time: "+dt2.toString().slice(0,25);
    console.log(dt2.toString());
}