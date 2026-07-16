/* ==========================================================
   ARCHIVE LOCK
   Password Protection

   Features:
   - One-time password unlock
   - LocalStorage remember
   - Press Enter to unlock
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const PASSWORD = "red0222";

    const lock = document.getElementById("archive-lock");
    const content = document.getElementById("archive-content");
    const button = document.getElementById("archive-button");
    const input = document.getElementById("archive-password");
    const error = document.getElementById("archive-error");

    // 如果当前页面没有密码组件，则直接结束
    if (!lock || !content || !button || !input || !error) {
        return;
    }

    /* =========================
       解锁函数
    ========================= */

    function unlock() {

        lock.style.display = "none";
        content.style.display = "block";

    }

    /* =========================
       已验证过
    ========================= */

    if (localStorage.getItem("archiveUnlocked") === "true") {

        unlock();

        return;

    }

    /* =========================
       点击按钮
    ========================= */

    button.addEventListener("click", () => {

        if (input.value === PASSWORD) {

            localStorage.setItem(
                "archiveUnlocked",
                "true"
            );

            unlock();

        }

        else {

            error.style.display = "block";

            input.value = "";

            input.focus();

        }

    });

    /* =========================
       Enter
    ========================= */

    input.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            button.click();

        }

    });

});