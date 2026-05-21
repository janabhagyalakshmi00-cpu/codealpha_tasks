let images=document.querySelectorAll(".gallery img");
images.forEach(function(image){
    image.addEventListener("click",function(){
        let popup=document.createElement("div");
        popup.classList.add("popup");
        let popupimage=document.createElement("img");
        popupimage.src=image.src;
        popup.appendChild(popupimage);
        document.body.appendChild(popup);
        popup.addEventListener("click",function(){
            popup.remove();
        })
    });
});