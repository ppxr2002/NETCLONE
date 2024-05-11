window.onload = ()=>{
    changeLangue();
    darkMode();
    light.click(lightMode);
    dark.click(darkMode);
    menu_hover();

    if(width < 600){
        $("#parametre").css("display", "none");
        $("#menu").css("display", "none");
        $("#menu_icon").css("display", "block");

    }
}

width = $(window).width();
light = $("#light");
dark = $("#dark");
body = $("body");
paragraphe = $("*p");
titre = $("#titre");
down = $("*.down");
inputSearch = $("*#inputSearch");
menu_1 = $("#menu_1");
deroulante_1 = $("#deroulante_1");
menu_2 = $("#menu_2");
deroulante_2 = $("#deroulante_2");
deroulante = $("*.deroulante");
items = $("*.item");

function changeLangue(){
    document.getElementById("langue").addEventListener('change', ()=>{
        langue = $("#langue option:selected").val();

        if(langue === "fr"){
            $("*.fr").css("display", "block");
            $("*.en").css("display", "none");
        }
        else{
            $("*.en").css("display", "block");
            $("*.fr").css("display", "none");
        }
    })
}
function darkMode(){
    dark.css("display", "none");
    light.css("display", "block");
    body.css({
        "background-color": "#1D1D1D",
        "color": "#FFFFFF"
    });
    items.css("color", "#FFFFFF");
    paragraphe.css("color", "#FFFFFF");
    titre.css("color", "#45ADFF");
    down.attr("src", "./img/downDark.svg");
    $("#boxSearch").css("border", "1px #FFFFFF solid");
    $("#langue").css("color", "#FFFFFF");
    $("#langue").focus(()=>{
        $("*option").css("background-color", "#1D1D1D");
    });
    $("#deconnecter").attr("src", "./img/logoutDark.svg");
    $("#imgSearch").attr("src", "./img/searchDark.svg");
    deroulante.css("background-color", "#1D1D1D");
} 
function lightMode(){
    dark.css("display", "block");
    light.css("display", "none");
    body.css({
        "background-color": "#E2E2E2",
        "color": "#000000"
    });
    items.css("color", "#000000");
    inputSearch.css("color", "#000000");
    paragraphe.css("color", "#000000");
    titre.css("color", "#008FFF");
    down.attr("src", "./img/downLight.svg");
    deroulante.css("background-color", "#E2E2E2");
    $("#boxSearch").css("border", "1px #000000 solid");
    $("#langue").css("color", "#000000");
    $("#langue").focus(()=>{
        $("*option").css("background-color", "#E2E2E2");
    });
    $("#deconnecter").attr("src", "./img/logoutLight.svg");
    $("#imgSearch").attr("src", "./img/searchLight.svg");
}

function menu_hover(){
    menu_1.hover(()=>{
        deroulante_1.css("display", "flex");
    }, ()=>{
        deroulante_1.hover(()=>{
            deroulante_1.css("display", "flex");
        }, ()=>{
            deroulante_1.css("display", "none");
        })
    })
    
    menu_2.hover(()=>{
        deroulante_2.css("display", "flex");
    }, ()=>{
        deroulante_2.hover(()=>{
            deroulante_2.css("display", "flex");
        }, ()=>{
            deroulante_2.css("display", "none");
        })
    })
}