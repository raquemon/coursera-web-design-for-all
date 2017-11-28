/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image   */
       
       var previewContainerNode = document.getElementById("image");
       previewContainerNode.style.backgroundImage = "url(" + previewPic.src + ")";
       
       /* 2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image        
       */
        
       var div1 = "<p>" + previewPic.alt + "</p>";
       previewContainerNode.innerHTML = div1;
      
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was*/
       var previewContainerNode = document.getElementById("image");
       previewContainerNode.style.backgroundImage = null;
       
       /*2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
      previewContainerNode.innerHTML = "Hover over an image below to display here.";
      
       }