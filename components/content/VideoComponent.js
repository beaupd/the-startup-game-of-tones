import styles from "../../styles/VideosPage.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const VideoComponent = ({ videos }) => {
    const router = useRouter();
    const videoRef = useRef();
    const titleRef = useRef();
    const [isPlaying, setPlaying] = useState(false);
    const [videoIndex, setVideoIndex] = useState(0);
    const { path } = router.query;
    let type = "blue";
    if (path[3]) {
        switch (path[3]) {
            case "theory":
                type = "blue";
                break;
            case "practice":
                type = "green";
                break;
            case "action":
                type = "yellow";
                break;
            case "exercise":
                type = "orange";
                break;
        }
    }

    const color = {
        bgColor: {
            blue: "border-blue",
            green: "border-green",
            yellow: "border-yellow",
            orange: "border-orange",
        }[type],
    };

    function playAndPause() {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    }

    function replay() {
        const video = videoRef.current;
        video.currentTime = 0;
        video.play();
        setPlaying(true);
    }
    function shuffle() {
        let same = true;
        while (same) {
            let randomIdx = Math.floor(Math.random() * videos.length);
            if (randomIdx != videoIndex) {
                setVideoIndex(randomIdx);
                same = false;
            }
        }

        let newSource = videos[randomIdx];
        videoRef.current.querySelector("source").src = newSource;
        // console.log(videoRef.current.querySelector("source"));
        titleRef.current.innerHTML = `Example ${randomIdx + 1}`;
        replay();
    }

    if (!videos) {
        return <>No video sources added</>;
    }

    return (
        <section className={styles.videoExampleSection}>
            <h3
                className={styles.videoExampleTitle}
                id="exampleHeader"
                ref={titleRef}
            >
                Example 1
            </h3>
            <div className={styles.videoControlContainer}>
                <div
                    className={styles.videoControl}
                    id="playbtn"
                    onClick={playAndPause}
                >
                    <img
                        className={styles.videoControlIcon}
                        id="controlIcon"
                        src={
                            isPlaying
                                ? "/icons/play-button-icon.svg"
                                : "/icons/pause-icon.svg"
                        }
                        alt="play button"
                    ></img>
                </div>
                <div
                    className={styles.videoControl}
                    id="replaybtn"
                    onClick={replay}
                >
                    <img
                        className={styles.videoControlIcon}
                        src={"/icons/reload-icon.svg"}
                        alt="play button"
                    ></img>
                </div>
                <div
                    className={styles.videoControl}
                    id="shufflebtn"
                    onClick={shuffle}
                >
                    <img
                        className={styles.videoControlIcon}
                        src={"/icons/shuffle-icon.svg"}
                        alt="play button"
                    ></img>
                </div>
            </div>
            <video
                className={`border-solid border-2 ${color.bgColor} ${styles.videoExample}`}
                id="exampleVideo"
                ref={videoRef}
            >
                <source src="/Contour1.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default VideoComponent;
