window.addEventListener("keydown", maFonction, false);


let margin_lateral = 0;
let margin_horizontal = 0;
function maFonction(key){
        
    if(key.keyCode == "39"){
        margin_lateral += 5;   
        if(margin_lateral<755)
            document.getElementById('case_a_deplacer').style.marginLeft = margin_lateral+"px";/*interval 0 à 750*/  
        else
            margin_lateral = 750;
            document.getElementById('case_a_deplacer').style.marginLeft = margin_lateral+"px";
        console.log(margin_lateral); 
    }

    
    if(key.keyCode == "37"){
        margin_lateral -= 5;
        if(margin_lateral>0)
           document.getElementById('case_a_deplacer').style.marginLeft = margin_lateral+"px";  
        else if(margin_lateral <= 0){
            margin_lateral = 0;
           document.getElementById('case_a_deplacer').style.marginLeft = margin_lateral+"px";
        }
        console.log(margin_lateral);
    }

    if(key.keyCode == "40"){
        margin_horizontal += 5;
        if (margin_horizontal < 432) {
          document.getElementById('case_a_deplacer').style.marginTop = margin_horizontal+"px";  
        }else{
          margin_horizontal = 432;
          document.getElementById('case_a_deplacer').style.marginTop = margin_horizontal+"px";
        }
        console.log(margin_horizontal);
    }

    if(key.keyCode == "38"){
        margin_horizontal -= 5;
        if (margin_horizontal > -18) {
          document.getElementById('case_a_deplacer').style.marginTop = margin_horizontal+"px";  
        }else{
          margin_horizontal = -18;
          document.getElementById('case_a_deplacer').style.marginTop = margin_horizontal+"px";
        }
        console.log(margin_horizontal);
    }
}

/*document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            document.getElementById('small_case').style.width = "10px";
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};*/
