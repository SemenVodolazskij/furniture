import { useEffect, useRef, useState } from "react";
import styles from "./ScrollVideo.module.scss";
import video from "../../assets/Banner Video/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4";

export const ScrollVideo = () => {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const handleScrollOrVisibility = () => {
      if (isHovering && document.visibilityState === "visible") {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => {
      setIsHovering(false);
      video.pause();
    };

    window.addEventListener("scroll", handleScrollOrVisibility);
    document.addEventListener("visibilitychange", handleScrollOrVisibility);
    wrapper.addEventListener("mouseenter", handleEnter);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("scroll", handleScrollOrVisibility);
      document.removeEventListener(
        "visibilitychange",
        handleScrollOrVisibility
      );
      wrapper.removeEventListener("mouseenter", handleEnter);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, [isHovering]);

  return (
    <>
      <div ref={wrapperRef} className={styles.video__wrapper}>
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          className={styles.video}
          width={"100%"}
        />
      </div>
    </>
  );
};
