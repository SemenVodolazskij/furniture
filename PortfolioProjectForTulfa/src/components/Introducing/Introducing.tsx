import introducing from '../../assets/Banner Video/introducing.png';
import styles from './Introducing.module.scss';

export const Introducing = () => {
    return (
        <section>
            <img src={introducing} alt='introducing' className={styles.img}/>
        </section>
    )
}