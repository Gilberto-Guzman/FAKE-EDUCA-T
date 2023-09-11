$(document).ready(function(){

    $("p.header,p.content,p.reference,p.glossary,.list li").css({"margin":"0 0 15px","line-height":"170%"});
    $("div.no-overflow").css({"overflow-x":"hidden"});
    $("table.generaltable").parent("div.no-overflow").css({"overflow-x":"scroll","overflow-y":"visible"});
    $(".panel>ul.list-group").css({"padding-left":"0","margin-left":"0"});    
   
    var contenido_nuevo = '<div id="menu" style="display:none;z-index:10;background:white;width:250px;position:absolute;border:1px solid black;-moz-box-shadow:0 0 5px #888;-webkit-box-shadow:0 0 5px#888;box-shadow:0 0 5px #888"> <ul id="paginaexterna" style="list-style:none;list-style-type:none;list-style-position:outside"><li id="linkext" style="line-height:30px;font-size:16px;list-style-image:url(http://www.criptahost.com/images/doc.png);cursor:pointer">Abrir en ventana externa</li></ul></div>';
                $("body").append(contenido_nuevo);

                $("#menu").hide();

    $("a.ar-video").on("contextmenu", function(e){
               // console.log("left: " + e.pageX + "top: " + e.pageY);    
               

               $("#menu").css({'display':'block', 'left':e.pageX, 'top':e.pageY}); 
                return false;
            });  



         //controlamos los botones del menú
        $("#menu").click(function(e){
            
             var rel_video = $("a.ar-video").attr("href");
             var hrefvideo = /youtube/.test(rel_video);
             var extension = /.mp4/.test(rel_video);

            // El switch utiliza los IDs de los <li> del menú
            switch(e.target.id){
                case "linkext":
                   // alert(rel_video);

                    if(rel_video.indexOf("facebook") > -1){               
                    window.open(rel_video, '_blank');
                    }else {

                    if(hrefvideo === true){
                            window.open(rel_video, '_blank');
                    }else{
                        if(extension === false){
                            window.open(rel_video + '.mp4', '_blank');
                        }else{
                            window.open(rel_video, '_blank');
                        }
                    }
                }  // fin else facebook  
                    
                    break;  
                
            }
            
        });




    //cuando hagamos click, el menú desaparecerá
        $(document).click(function(e){
            if(e.button == 0){
                $("#menu").css("display", "none");
            }
        });
        
        //si pulsamos escape, el menú desaparecerá
        $(document).keydown(function(e){
            if(e.keyCode == 27){
                $("#menu").css("display", "none");
            }
        });


   $("a.ar-video").on("click",function(f){
        // console.log("Inicio del evento");
       f.preventDefault();        

        var c = "";
        var b = "";
        var urlVideo = 'https://videos.cv.unach.mx/suv_videoclases/';
     //   if (d.length) {
    //        d.click(function(a) {
                // b = $("span.lk-video").parent("a");
                b = $(this);
         //     console.log(b.attr("href"));
       console.log($(this).attr("data"));
       var rel_video = b.attr("href");
       var hrefvideo = /youtube/.test(rel_video);
       var extension = /.mp4/.test(rel_video);
       var dispositivo = /ip(hone|od|ad)/.test(navigator.userAgent);

                if (dispositivo === true) {                      
        //            if (b.attr("data") === "youtube_genero") { // Si el atributo data contiene la palabra youtube_genero se abre un iframe con el video y la extension mp4 en moviles
                        b.attr("target", "_blank");

                        if (hrefvideo === true) {
                            b.attr("href", rel_video + "?rel=0");
                        } else {

                            if (extension === false) {
                                b.attr("href", rel_video + ".mp4?rel=0");
                            } else {
                                b.attr("href", rel_video + "?rel=0");
                            }

                        }  // Fin else hrefvideo -------------------------------------

                        
                        
                         
       /*             } else {  // Fin if e inicio else  b.attr("data") == youtube_genero -----------------------------------------
                        if (b.attr("data") === "youtube") {
                            
                            b.attr("target", "_blank");
                            b.attr("href", "https://www.youtube.com/embed/" + rel_video + "?rel=0");
                        } else {
                            b.attr("target", "_blank");
                            b.attr("href", rel_video + ".mp4");
                        }
                    } // Fin else b.attr("data") == youtube -------------------------------------------------
      */
                } else {
         if (dispositivo === false) {                
         //       a.preventDefault();   
            console.log("Dispositivo: " + dispositivo);
             console.log("Url video: " + hrefvideo);
             console.log("Extesion mp4: " + hrefvideo);
            

          //   if (b.attr("data") === "youtube_genero") {   // Si el atributo data contiene la palabra youtube_genero se abre un iframe con el video y la extension mp4                 

             if(b.attr("href").indexOf("facebook") > -1){
                console.log(b.attr("href"));
                    c= '<iframe src="https://www.facebook.com/plugins/video.php?href='+ b.attr("href") + '&width=500&show_text=false&height=281&appId" width="500" height="" style="border:none;overflow:hidden;width:100%;max-height:480px;height:450px" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';
                }
                else {

                if (hrefvideo === true) {
                     c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;' src='" + b.attr("href") + "?rel=0' allowfullscreen></iframe>"
                 }
                 else {
                     if (extension === false) {
                         c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;border:0'  src='" + b.attr("href") + ".mp4?rel=0\' allowfullscreen border='0'></iframe>";
                     }
                     else {
                         c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;border:0'  src='" + b.attr("href") + "?rel=0\' allowfullscreen border='0'></iframe>";
                     } // Fin else extension ---------------------------------
                 } // Fin if hrefvideo -----------------------------------------------------------------

                }  // Fin  else video facebook
                
        //     } // Fin b.attr("data") == youtube_genero ---------------------------------------------------
                
       /*           else {

                 if (b.attr("data") === "youtube") {
                     
                        c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;' src='" + b.attr("href") + "?rel=0' allowfullscreen></iframe>"
                 } // Fin b.attr("data") == youtube ---------------------------------------------------
                 else {                
                        c = '<video controls preload style="position:absolute;width:95%;height:95%;max-width:95%;""><source src="' +  b.attr("href") + '.mp4" type="video/mp4" /></video>';
                 } // Fin else sin data ---------------------------------------------------

                       //    console.log(c);
                 }     // Fin else sin data href ------------------------------------
        */        

                arLoadModal({
                    button: true,
                    title: b.attr("title"),
                    rel: b.attr("rel"),
                    text: c
                            });
                    } // ---- if false dispositivo
                } // Fin else dispositivo true
        //    }); // Fin evento d.click -----------------------------------------
     //  } // fin if d.lenght
   });


	arloadurl();	

	function arloadurl(g){
		if ($('div.arblock').length) {
            $('div.arblock').each(function() {
                var b = $(this).find('div.block-heading i');
                var c = $(this).find('div.block-body');
                b.click(function(a) {
                    if (c.hasClass("dis-block")) {
                        c.removeClass("dis-block");
                        $(this, 'div.block-heading i').css({
                            "color": "#ccc"
                        })
                    } else {
                        $(this, 'div.block-heading i').css({
                            "color": "#3b3b3b"
                        });
                        c.addClass("dis-block")
                    }
                })
            })
        }
        if ($('div.flexslider').length) {
            $('div.flexslider').flexslider({
                animation: "fade",
                directionNav: false
            })
        }
        if ($('.ar-popover ').length) {
            $('.ar-popover').popover();
        }
	}




function arLoadModal(z) {
        var c = '';
        if (z.rel) {
            c = z.rel
        } else {
            c = ''
        }
    var b = '<div class="modal fade bs-example-modal-lg in" id="ar-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow:hidden;background-color:">';
        b += '<div class="modal-dialog modal-lg" role="document">';
        b += '<div class="modal-content" style="border:1px solid #d9d6e1 !important">';
    b += '<div class="card-header" style="max-height:80px;height:auto;display:flex;align-items: flex-start;justify-content:space-between;">';
        b += '<h5 class="modal-titulos" id="myModalLabel" style="font-size:1rem;">' + z.title + '</h5>';
        if (z.button) {
            b += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
        }
        b += '<div class="modal-body" style="height:400px;overflow:hidden;">' + z.text + '</div> <div class="modal-footer"><h4 class="modal-titulos-footer">' + c + '</h4></div>';
        b += '</div></div></div>';
        $('body').append(b).find('#ar-modal').modal({
            show: true,
            backdrop: 'static'
        }).on('hidden.bs.modal', function(e) {
            $('#ar-modal').remove()
        })
    }


    /*
     function arToolVideo(f) {     
        f.preventDefault();   
        var d = '';
        if ($("a.ar-video").length) {
            d = $("a.ar-video");
       }
        var c = "";
        var b = "";
        var urlVideo = 'https://videos.cv.unach.mx/suv_videoclases/';
     //   if (d.length) {
    //        d.click(function(a) {
                // b = $("span.lk-video").parent("a");
                b = d;
              console.log(f);
              var rel_video = b.attr("href");
              var dispositivo = /ip(hone|od|ad)/.test(navigator.userAgent);
                if (dispositivo === true) {
                    if (b.attr("data") == "youtube_genero") {
                        b.attr("target", "_blank");
                        b.attr("href", rel_video + "?rel=0");
                    } else {
                        if (b.attr("data") == "youtube") {
                            b.attr("target", "_blank");
                            b.attr("href", "https://www.youtube.com/embed/" + rel_video + "?rel=0");
                        } else {
                            b.attr("target", "_blank");
                            b.attr("href", urlVideo + rel_video + ".mp4");
                        }
                    }
                } else {
         if (dispositivo === false) {                
         //       a.preventDefault();   

                if (b.attr("data") == "youtube_genero") {   
                c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;border:0'  src='" + b.attr("href") + "?rel=0\' allowfullscreen border='0'></iframe>";
                }
                
                  else {
                            if (b.attr("data") == "youtube") {
                        c = "<iframe  style='position:absolute;width:95%;height:95%;max-width:95%;' src='https://www.youtube.com/embed/'" + b.attr("href") + "?rel=0' allowfullscreen></iframe>"
                    } else {                
                        c = '<video controls preload><source src="' + urlVideo + b.attr("href") + '.mp4" type="video/mp4" /></video>';
                           }
                 }     
                

                arLoadModal({
                    button: true,
                    title: b.attr("title"),
                    rel: b.attr("rel"),
                    text: c
                            });
                    } // ---- if false dispositivo
                } // Fin else dispositivo true
        //    }); // Fin evento d.click -----------------------------------------
     //  } // fin if d.lenght
    }
    */


}) // ___---------------Fin codigo ready --------------------