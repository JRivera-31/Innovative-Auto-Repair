import styles from "./about.module.css";
import Link from "next/link"

export default function About() {
    return (
        <div className={styles.aboutBody}>
            <div className={styles.heading}>
                <h1 >About</h1>
                <hr className={styles.aboutHr}/>
            </div>
            <div className={styles.container}>
                <div className={styles.text}>
                    <p>
                        Innovation Auto Hail Repair works to restore your vehicle to its pre-storm condition. We work to bring back the value to your car. With experienced technicians working on your vehicle we can guarantee your vehicle is in good hands.
                    </p>
                    <br/>
                    <p>
                        <span className={styles.boldText}>Don’t have insurance? No problem!</span> We give special discounts for those paying out of pocket.
                    </p>
                    <br/>
                    <p>
                        Have a non-hail related dent? We fix those too!
                    </p>
                    <br/>
                    <p className={styles.boldText}>
                        Please contact us with any questions or concerns.
                    </p>
                </div>
                <Link href="/ContactForm/contact"><a>Contact Us</a></Link>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src='/images/car.jpg' />  
                </div>
            </div>
        </div>
    )
}