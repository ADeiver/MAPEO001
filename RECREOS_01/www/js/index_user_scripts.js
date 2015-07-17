(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    $("body").append('<a id="idrecreos" href="#idPageR"  class="style-31"></a>');
     $("body").append('<a id="idmenu" href="#idPageWal"  class="style-31"></a>');
     $("body").append('<a id="idmenu" href="#idPagePo"  class="style-31"></a>');
     $("body").append('<a id="idmenu" href="#idPageP"  class="style-31"></a>');
     $("body").append('<a id="idmenu" href="#idPageChaw"  class="style-31"></a>');
     
     $("body").append('<a id="idwal" href="#idPageUbi1"  class="style-31"></a>');
     $("body").append('<a id="idpo" href="#idPageUbi2"  class="style-31"></a>');
     $("body").append('<a id="idp" href="#idPageUbi3"  class="style-31"></a>');
     $("body").append('<a id="idchaw" href="#idPageUbi4"  class="style-31"></a>');
     /* button  #idLogin */
    $(document).on("click", "#idLogin", function(evt)
    {
        /* your code goes here */ 
        //console.log("TODO OK");
        var usuario=$("#idUsuario").val();
        var contrasenia=$("#idContrasenia").val();
        
        
        	var param={};
        param.usuario=usuario;
        param.contrasenia=contrasenia;
        
        $.ajax({
            type:"POST",
            url:"http://192.168.21.1:9095/getLogin",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                console.log(data.status);
                
                if(data.status===1){
                     $("#idrecreos").click();
                         navigator.notification.alert(
                        '',  // message 
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ACCCESO DENEGADO',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
                //console.log(data.data[0].usuario);
                //console.log(data);  
                
                /*
                for(var i=0;i<data.data.length;i++){
                    
                    $("#lista").append("<li><a>"+data.data[i].usuario+"</a></li>");
                }
                */
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });

        
        
    });
    
    
        /* button  PONCECA */
    $(document).on("click", ".uib_w_16", function(evt)
    {
        $("#idmenu").click();
    });
    
        /* button  PUMA DE PIEDRA */
    $(document).on("click", ".uib_w_17", function(evt)
    {
        $("#idmenu").click(); 
    });
    
        /* button  CHALLWA */
    $(document).on("click", ".uib_w_18", function(evt)
    {
        $("#idmenu").click(); 
    });
    
        /* button  WALLPAR */
    $(document).on("click", ".uib_w_19", function(evt)
    {
        $("#idmenu").click(); 
    });
    
   
    
        /* button  VER UBICACION DEL RECREO */
    $(document).on("click", ".uib_w_21", function(evt)
    {
        /* your code goes here */ 
        $("#idp").click(); 
    });
    
        /* button  VER UBICACION DEL RECREO */
    $(document).on("click", ".uib_w_20", function(evt)
    {
        /* your code goes here */
        $("#idp").click(); 
    });
    
        /* button  VER UBICACION DEL RECREO */
    $(document).on("click", ".uib_w_22", function(evt)
    {
        /* your code goes here */
        $("#idp").click(); 
    });
    
        /* button  VER UBICACION DEL RECREO */
    $(document).on("click", ".uib_w_23", function(evt)
    {
         
        $("#idwal").click(); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
