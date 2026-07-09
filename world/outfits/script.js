/* ==========================================================
   LI YAN ARCHIVE
   Outfit Gallery Lightbox
========================================================== */


const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeButton = document.querySelector(".lightbox-close");

const prevButton = document.querySelector(".lightbox-prev");

const nextButton = document.querySelector(".lightbox-next");

const currentText = document.getElementById("current-image");

const totalText = document.getElementById("total-images");


let currentIndex = 0;



/* =========================
   显示图片
========================= */


function showImage(index){


    currentIndex = index;


    const img = galleryItems[index].querySelector("img");


    if(img){

        lightboxImg.src = img.src;

    }


    if(currentText){

        currentText.textContent = index + 1;

    }


    if(totalText){

        totalText.textContent = galleryItems.length;

    }


}





/* =========================
   打开 Lightbox
========================= */


function openLightbox(index){


    showImage(index);


    lightbox.classList.add("active");


}






/* =========================
   主逻辑
========================= */


if(lightbox && lightboxImg){



    // 点击缩略图打开


    galleryItems.forEach((item,index)=>{


        item.addEventListener("click",function(e){


            e.preventDefault();


            openLightbox(index);


        });


    });







    // 关闭按钮


    if(closeButton){


        closeButton.addEventListener("click",function(){


            lightbox.classList.remove("active");


        });


    }








    // 上一张


    if(prevButton){


        prevButton.addEventListener("click",function(e){


            e.stopPropagation();



            let index = currentIndex - 1;



            if(index < 0){


                index = galleryItems.length - 1;


            }



            showImage(index);



        });


    }








    // 下一张


    if(nextButton){


        nextButton.addEventListener("click",function(e){


            e.stopPropagation();



            let index = currentIndex + 1;



            if(index >= galleryItems.length){


                index = 0;


            }



            showImage(index);



        });


    }








    // 点击背景关闭


    lightbox.addEventListener("click",function(e){


        if(e.target === lightbox){


            lightbox.classList.remove("active");


        }


    });








    // 键盘控制


    document.addEventListener("keydown",function(e){



        if(!lightbox.classList.contains("active")) return;





        // ESC关闭


        if(e.key === "Escape"){


            lightbox.classList.remove("active");


        }





        // 左箭头


        if(e.key === "ArrowLeft" && prevButton){


            prevButton.click();


        }





        // 右箭头


        if(e.key === "ArrowRight" && nextButton){


            nextButton.click();


        }



    });




}
