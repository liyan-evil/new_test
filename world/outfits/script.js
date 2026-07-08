/* ==========================================================
   LI YAN ARCHIVE
   Outfit Gallery Lightbox
========================================================== */



const galleryItems = document.querySelectorAll(".gallery-item");


const lightbox = document.getElementById("lightbox");


const lightboxImg = document.getElementById("lightbox-img");


const closeButton = document.querySelector(".lightbox-close");





if(lightbox && lightboxImg){



    galleryItems.forEach(item => {



        item.addEventListener("click", function(e){


            e.preventDefault();



            const img = item.querySelector("img");



            if(img){


                lightboxImg.src = img.src;


                lightbox.classList.add("active");


            }



        });



    });






    // 点击 × 关闭

    if(closeButton){


        closeButton.addEventListener("click", function(){


            lightbox.classList.remove("active");


        });


    }






    // 点击背景关闭

    lightbox.addEventListener("click", function(e){


        if(e.target === lightbox){


            lightbox.classList.remove("active");


        }


    });






    // ESC关闭

    document.addEventListener("keydown", function(e){


        if(e.key === "Escape"){


            lightbox.classList.remove("active");


        }


    });



}
