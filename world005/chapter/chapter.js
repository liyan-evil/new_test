/* ======================================================
   Subscribe Popup
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("subscribe-overlay");
    const defaultPanel = document.getElementById("subscribe-default");
    const successPanel = document.getElementById("subscribe-success");

    const subscribeBtn = document.getElementById("subscribe-confirm");
    const continueBtn = document.getElementById("subscribe-continue");
    const closeBtn = document.getElementById("subscribe-close");

    // 最后一段（会以最后一个 p 作为触发点）
    const trigger =
        document.querySelector(".chapter-body p:last-of-type");

    if (!trigger) return;

    let opened = false;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !opened) {

                opened = true;

                setTimeout(() => {

                    overlay.classList.add("show");

                }, 600);

            }

        });

    }, {

        threshold:0.95

    });

    observer.observe(trigger);



    /* =========================
       Subscribe
    ========================= */

    subscribeBtn.addEventListener("click", () => {

        defaultPanel.classList.add("fade-out");

        setTimeout(() => {

            defaultPanel.style.display = "none";

            successPanel.classList.add("fade-in");

        },250);

    });



    /* =========================
       Continue
    ========================= */

    continueBtn.addEventListener("click", closePopup);



    /* =========================
       Close
    ========================= */

    closeBtn.addEventListener("click", closePopup);



    /* =========================
       Close Function
    ========================= */

    function closePopup(){

        overlay.classList.add("hide");

        setTimeout(()=>{

            overlay.classList.remove("show");
            overlay.classList.remove("hide");

        },250);

    }

});