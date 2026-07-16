document.addEventListener(
    "DOMContentLoaded",
    ()=>{

        const audio =
        document.getElementById(
            "bgm"
        );

        const playBtn =
        document.getElementById(
            "play-btn"
        );

        const progress =
        document.getElementById(
            "progress"
        );

        const currentTime =
        document.getElementById(
            "current-time"
        );



        if(
            !audio ||
            !playBtn ||
            !progress ||
            !currentTime
        ){

            return;

        }



        let playing = false;



        /* =========================
           播放 / 暂停
        ========================= */

        playBtn.addEventListener(
            "click",
            ()=>{

                if(playing){

                    audio.pause();

                }else{

                    audio.play();

                }

            }
        );



        /* =========================
           播放状态
        ========================= */

        audio.addEventListener(
            "play",
            ()=>{

                playing = true;

                playBtn.textContent = "❚❚";

            }
        );



        audio.addEventListener(
            "pause",
            ()=>{

                playing = false;

                playBtn.textContent = "▶";

            }
        );



        /* =========================
           音乐加载完成
        ========================= */

        audio.addEventListener(
            "loadedmetadata",
            ()=>{

                progress.max =
                Math.floor(
                    audio.duration
                );

            }
        );



        /* =========================
           时间更新
        ========================= */

        audio.addEventListener(
            "timeupdate",
            ()=>{

                progress.value =
                Math.floor(
                    audio.currentTime
                );



                currentTime.textContent =
                formatTime(
                    audio.currentTime
                );

            }
        );



        /* =========================
           拖动进度条
        ========================= */

        progress.addEventListener(
            "input",
            ()=>{

                audio.currentTime =
                progress.value;

            }
        );



        /* =========================
           播放结束
        ========================= */

        audio.addEventListener(
            "ended",
            ()=>{

                playing = false;

                playBtn.textContent = "▶";

                progress.value = 0;

                currentTime.textContent = "0:00";

            }
        );



        /* =========================
           时间格式
        ========================= */

        function formatTime(seconds){

            const minute =
            Math.floor(
                seconds / 60
            );

            const second =
            Math.floor(
                seconds % 60
            );

            return `${minute}:${second
                .toString()
                .padStart(
                    2,
                    "0"
                )}`;

        }

    }
);