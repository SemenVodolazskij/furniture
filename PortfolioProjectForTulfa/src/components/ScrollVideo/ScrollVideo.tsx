import styles from "./ScrollVideo.module.scss";
import video from "../../assets/Banner Video/aerial-compressed.mp4";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section) return;

      const distance = window.scrollY - section.offsetTop;
      const total = section.clientHeight - window.innerHeight;

      let percentage = distance / total;
      percentage = Math.max(0, Math.min(percentage, 1));

      if (video.duration > 0) {
        video.currentTime = video.duration * percentage;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.vid} ref={sectionRef} data-aos="zoom-out">
      <div className={styles.holder}>
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          className={styles.video}
        />
      </div>
    </section>
  );
};
