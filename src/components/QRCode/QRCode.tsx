import { FC } from "react";
import QRCodeImage from '../../assets/images/image-qr-code.png'

import styles from './QRCode.module.scss'

const QRCode: FC<QRCodeProps> = (props) => {

    return (
        <div className={styles.container}>
            <img src={QRCodeImage} loading={"lazy"} alt={"QRCode"} className={styles.image}/>

            <h3 className={styles.heading}>Improve your front-end skills by building projects</h3>

            <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

interface QRCodeProps {
    [key: string]: any
}

export default QRCode