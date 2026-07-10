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


    if(!lightboxImg)
    return;


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


    if(lightbox){

        lightbox.classList.remove("active");

    }


    resetZoom();


}






if(
    lightbox &&
    lightboxImg &&
    closeBtn &&
    recordImages.length > 0
){



    recordImages.forEach(item=>{


        item.addEventListener(
        "click",
        (e)=>{


            e.preventDefault();



            lightboxImg.src =
            item.href;



            const img =
            item.querySelector("img");


            if(img){

                lightboxImg.alt =
                img.alt;

            }



            resetZoom();



            lightbox.classList.add("active");


        });


    });






    lightboxImg.addEventListener(
    "click",
    ()=>{


        if(hasMoved){

            hasMoved=false;

            return;

        }




        if(scale===1){


            scale=2;


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








    lightboxImg.addEventListener(
    "mousedown",
    (e)=>{


        if(scale===1)
        return;



        e.preventDefault();



        isDragging=true;

        hasMoved=false;



        lightboxImg.style.cursor =
        "grabbing";



        startX =
        e.clientX - translateX;



        startY =
        e.clientY - translateY;



    });








    document.addEventListener(
    "mousemove",
    (e)=>{


        if(!isDragging)
        return;



        hasMoved=true;



        translateX =
        e.clientX-startX;



        translateY =
        e.clientY-startY;



        lightboxImg.style.transform =

        `
        translate(${translateX}px,${translateY}px)
        scale(${scale})
        `;



    });








    document.addEventListener(
    "mouseup",
    ()=>{


        if(!isDragging)
        return;



        isDragging=false;



        lightboxImg.style.cursor =
        "grab";


    });








    closeBtn.addEventListener(
    "click",
    closeLightbox
    );








    lightbox.addEventListener(
    "click",
    (e)=>{


        if(e.target===lightbox){

            closeLightbox();

        }


    });








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
   Ritual Burning Effect
   召唤与现身
====================================================== */


const ritualSection =
document.querySelector(".ritual-section");



if(ritualSection){


    const burnTexts =
    ritualSection.querySelectorAll(".burn-text");



    const ending =
    ritualSection.querySelector(".burn-ending");



    let burned=false;



    const ritualObserver =
    new IntersectionObserver(

        entries=>{


            entries.forEach(entry=>{


                if(
                    entry.isIntersecting &&
                    !burned
                ){


                    burned=true;



                    setTimeout(()=>{


                        burnTexts.forEach(
                        (text,index)=>{


                            setTimeout(()=>{


                                text.classList.add(
                                "burning"
                                );


                            },index*800);



                        });



                    },5000);






                    if(ending){


                        setTimeout(()=>{


                            ending.classList.add(
                            "burning"
                            );


                        },9000);


                    }



                }



            });



        },

        {
            threshold:0.45
        }



    );



    ritualObserver.observe(
    ritualSection
    );


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


        archive.classList.add(
        "active"
        );



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


        archive.classList.remove(
        "active"
        );



        if(openButton){


            openButton.style.display =
            "block";


        }



        const section =
        document.querySelector(
        ".confidential-section"
        );



        if(section){


            section.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });


        }



    });



}



});