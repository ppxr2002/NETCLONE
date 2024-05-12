window.onload = ()=>{
    changeLangue();
    darkMode();
    light.click(lightMode);
    dark.click(darkMode);
    light_icon.click(lightMode);
    dark_icon.click(darkMode);
    menu_hover();

    if(width < 600){
        $("#parametre").css("display", "none");
        $("#menu").css("display", "none");
        $("#img_menu_icon").css("display", "block");

    }

    exit_menu.click(()=>{
        menu_icon.css("display", "none")
    });
    img_menu_icon.click(()=>{
        menu_icon.css("display", "flex")
    });

    menu_icon_1.click(()=>{
        deroulante_icon_1.toggleClass("active")
    })
    menu_icon_2.click(()=>{
        deroulante_icon_2.toggleClass("active")
    })
}

width = $(window).width();
light = $("#light");
dark = $("#dark");
light_icon = $("#light_icon");
dark_icon = $("#dark_icon");
body = $("body");
paragraphe = $("*p");
titre = $("#titre");
img_menu_icon = $("#img_menu_icon");
down = $("*.down");
inputSearch = $("*#inputSearch");
menu_1 = $("#menu_1");
deroulante_1 = $("#deroulante_1");
menu_2 = $("#menu_2");
deroulante_2 = $("#deroulante_2");
deroulante = $("*.deroulante");
menu_icon_1 = $("#menu_icon_1");
deroulante_icon_1 = $("#deroulante_icon_1");
menu_icon_2 = $("#menu_icon_2");
deroulante_icon_2 = $("#deroulante_icon_2");
items = $("*.item");
exit_menu = $("#exit");
menu_icon = $("#menu_icon")

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
    
    document.getElementById("langue_icon").addEventListener('change', ()=>{
        langue = $("#langue_icon option:selected").val();

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
    dark_icon.css("display", "none");
    light_icon.css("display", "block");
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
    $("#langue_icon").css("color", "#FFFFFF");
    $("#langue_icon").focus(()=>{
        $("*option").css("background-color", "#1D1D1D");
    });
    $("#deconnecter").attr("src", "./img/logoutDark.svg");
    $("#deconnecter_icon").attr("src", "./img/logoutDark.svg");
    $("#imgSearch").attr("src", "./img/searchDark.svg");
    $("#img_quitter").attr("src", "./img/quitterDark.svg");
    deroulante.css("background-color", "#1D1D1D");
    menu_icon.css({
        "background-color": "#1D1D1D",
        "border": "1px #E2E2E2 solid"
    });
} 
function lightMode(){
    dark.css("display", "block");
    light.css("display", "none");
    dark_icon.css("display", "block");
    light_icon.css("display", "none");
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
    $("#langue_icon").css("color", "#000000");
    $("#langue_icon").focus(()=>{
        $("*option").css("background-color", "#E2E2E2");
    });
    $("#deconnecter_icon").attr("src", "./img/logoutLight.svg");
    $("#imgSearch").attr("src", "./img/searchLight.svg");
    $("#img_quitter").attr("src", "./img/quitterLight.svg");
    menu_icon.css({
        "background-color": "#E2E2E2",
        "border": "1px #1D1D1D solid"
    })
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