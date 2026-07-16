document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        const galleryImages =
        document.querySelectorAll(
            ".gallery-card img"
        );


        const cards =
        document.querySelectorAll(
            ".gallery-card"
        );


        const lightbox =
        document.getElementById(
            "gallery-lightbox"
        );


        const lightboxImage =
        document.getElementById(
            "gallery-image"
        );


        const closeButton =
        document.getElementById(
            "gallery-close"
        );



        /* =========================
           Lightbox 状态
        ========================= */


        let scale = 1;


        let translateX = 0;

        let translateY = 0;



        let dragging = false;


        let startX = 0;

        let startY = 0;



        const MIN_SCALE = 0.25;

        const MAX_SCALE = 5;





        function updateImage(){


            lightboxImage.style.transform =
            `
            translate(
                ${translateX}px,
                ${translateY}px
            )
            scale(
                ${scale}
            )
            `;


        }





        function resetImage(){


            scale = 1;

            translateX = 0;

            translateY = 0;


            updateImage();


        }






        /* =========================
           打开图片
        ========================= */


        galleryImages.forEach(
            (img)=>{


                img.addEventListener(
                    "click",
                    ()=>{


                        lightboxImage.src =
                        img.src;


                        resetImage();


                        lightbox.classList.add(
                            "active"
                        );


                    }
                );


            }
        );






        /* =========================
           关闭
        ========================= */


        closeButton.addEventListener(
            "click",
            ()=>{


                lightbox.classList.remove(
                    "active"
                );


            }
        );





        lightbox.addEventListener(
            "click",
            (e)=>{


                if(
                    e.target === lightbox
                ){

                    lightbox.classList.remove(
                        "active"
                    );

                }


            }
        );





        document.addEventListener(
            "keydown",
            (e)=>{


                if(
                    e.key === "Escape"
                ){

                    lightbox.classList.remove(
                        "active"
                    );

                }


            }
        );






        /* =========================
           滚轮缩放
        ========================= */


        lightboxImage.addEventListener(
            "wheel",
            (e)=>{


                e.preventDefault();



                if(
                    e.deltaY < 0
                ){

                    scale +=0.15;

                }
                else{

                    scale -=0.15;

                }



                scale = Math.min(
                    Math.max(
                        scale,
                        MIN_SCALE
                    ),
                    MAX_SCALE
                );



                updateImage();


            },
            {
                passive:false
            }
        );







        /* =========================
           拖动
        ========================= */


        lightboxImage.addEventListener(
            "mousedown",
            (e)=>{


                if(scale<=1){

                    return;

                }


                dragging=true;



                startX =
                e.clientX-translateX;


                startY =
                e.clientY-translateY;



                lightboxImage.classList.add(
                    "dragging"
                );


            }
        );





        document.addEventListener(
            "mousemove",
            (e)=>{


                if(!dragging){

                    return;

                }



                translateX =
                e.clientX-startX;


                translateY =
                e.clientY-startY;



                updateImage();


            }
        );





        document.addEventListener(
            "mouseup",
            ()=>{


                dragging=false;


                lightboxImage.classList.remove(
                    "dragging"
                );


            }
        );






        /* =========================
           双击恢复
        ========================= */


        lightboxImage.addEventListener(
            "dblclick",
            ()=>{


                resetImage();


            }
        );






        /* =========================
           Scroll Reveal
        ========================= */


        const observer =
new IntersectionObserver(
    (entries)=>{


        entries.forEach(
            entry=>{


                if(
                    entry.isIntersecting
                ){

                    entry.target.classList.add(
                        "show"
                    );


                }
                else{


                    entry.target.classList.remove(
                        "show"
                    );


                }


            }
        );


    },
    {
        threshold:.15
    }
);





        cards.forEach(
            card=>{


                card.classList.add(
                    "hidden"
                );


                observer.observe(
                    card
                );


            }
        );



    }
);
