/* ==========================================================
   LI YAN ARCHIVE
   WORLD 002
   Somnia in Cinerem
========================================================== */


document.addEventListener("DOMContentLoaded",()=>{



/* ======================================================
   Lightbox
====================================================== */


const lightbox =
document.getElementById("lightbox");


const lightboxImg =
document.getElementById("lightbox-img");


const closeBtn =
document.querySelector(".lightbox-close");


const recordImages =
document.querySelectorAll(".record-image");



let scale = 1;


let isDragging = false;


let hasMoved = false;


let startX = 0;

let startY = 0;


let translateX = 0;

let translateY = 0;





function resetZoom(){


    scale = 1;


    translateX = 0;

    translateY = 0;



    lightboxImg.style.transform =

    `
    translate(0px,0px)
    scale(1)
    `;



    lightboxImg.style.cursor =
    "zoom-in";


}





function closeLightbox(){


    lightbox.classList.remove("active");


    resetZoom();



}







if(
    lightbox &&
    lightboxImg &&
    closeBtn &&
    recordImages.length > 0
){





    /*
        打开图片
    */


    recordImages.forEach(item=>{


        item.addEventListener(
        "click",
        (e)=>{


            e.preventDefault();



            lightboxImg.src =
            item.href;



            lightboxImg.alt =
            item.querySelector("img").alt;



            resetZoom();



            lightbox.classList.add("active");



        });



    });









    /*
        单击缩放
    */


    lightboxImg.addEventListener(
    "click",
    ()=>{


        /*
            如果刚刚发生拖动
            禁止触发缩放
        */

        if(hasMoved){


            hasMoved = false;


            return;


        }





        if(scale===1){


            scale = 2;



            lightboxImg.style.cursor =
            "grab";



        }
        else{


            resetZoom();



        }





        lightboxImg.style.transform =

        `
        translate(${translateX}px,${translateY}px)
        scale(${scale})
        `;



    });









    /*
        开始拖动
    */


    lightboxImg.addEventListener(
    "mousedown",
    (e)=>{


        if(scale===1)
        return;



        e.preventDefault();



        isDragging = true;


        hasMoved = false;



        lightboxImg.style.cursor =
        "grabbing";



        startX =
        e.clientX - translateX;



        startY =
        e.clientY - translateY;



    });









    /*
        移动图片
    */


    document.addEventListener(
    "mousemove",
    (e)=>{


        if(!isDragging)
        return;



        hasMoved = true;



        translateX =
        e.clientX - startX;



        translateY =
        e.clientY - startY;



        lightboxImg.style.transform =

        `
        translate(${translateX}px,${translateY}px)
        scale(${scale})
        `;



    });









    /*
        松开鼠标
    */


    document.addEventListener(
    "mouseup",
    ()=>{


        if(!isDragging)
        return;



        isDragging = false;



        lightboxImg.style.cursor =
        "grab";



    });








    /*
        防止拖动卡死
    */


    lightboxImg.addEventListener(
    "mouseleave",
    ()=>{


        if(isDragging){


            isDragging = false;



            lightboxImg.style.cursor =
            "grab";



        }



    });









    /*
        X关闭
    */


    closeBtn.addEventListener(
    "click",
    closeLightbox
    );









    /*
        点击背景关闭
    */


    lightbox.addEventListener(
    "click",
    (e)=>{


        if(e.target===lightbox){


            closeLightbox();



        }



    });









    /*
        ESC关闭
    */


    document.addEventListener(
    "keydown",
    (e)=>{


        if(
            e.key==="Escape" &&
            lightbox.classList.contains("active")
        ){


            closeLightbox();



        }



    });



}









/* ======================================================
   Confidential File
====================================================== */


const openButton =
document.getElementById("openArchive");


const closeButton =
document.getElementById("closeArchive");


const archive =
document.getElementById("archiveContent");







if(openButton && archive){


    openButton.addEventListener(
    "click",
    ()=>{


        archive.classList.add("active");


        openButton.style.display =
        "none";



        archive.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });



    });



}







if(closeButton && archive){


    closeButton.addEventListener(
    "click",
    ()=>{


        archive.classList.remove("active");



        openButton.style.display =
        "block";



        document.querySelector(
        ".confidential-section"
        )
        .scrollIntoView({

            behavior:"smooth",

            block:"start"

        });



    });



}



});