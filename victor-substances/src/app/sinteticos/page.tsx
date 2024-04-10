import Link from "next/link";
import styles from "../substances.module.css";

export default function Page() {
    return (
        <div className={styles.substancesContainer}>
            <div className={styles.substancesDescription}>
                <img src="sinteticos-image.jpg" alt="sinteticos image" />
                <div className={styles.descriptionText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper ultricies nisl et convallis. Donec lobortis, lorem id auctor ultricies, purus enim consectetur elit, ac auctor sapien neque ut metus. Donec mollis ipsum eu lorem tempor, et condimentum odio dapibus. Donec consectetur, est a rutrum lacinia, felis nulla sodales turpis, vel rhoncus elit sem eu erat. Praesent ut velit et urna accumsan volutpat quis quis erat. Aenean tempus, nisi ac posuere sagittis, ligula erat efficitur sapien, id volutpat nisl massa et quam. Proin at felis et ex dapibus consequat.
                        Morbi at varius lorem. Ut eget leo libero. Nulla pharetra egestas massa, in maximus justo molestie vestibulum. Aliquam quis ipsum in urna hendrerit feugiat. Ut sit amet ante et tellus aliquam faucibus. Nunc commodo viverra erat, nec luctus felis dictum et. Curabitur luctus nulla quis dolor porta, quis consequat tellus ornare. Aliquam pretium ipsum sollicitudin ullamcorper volutpat. Vivamus congue, ipsum in auctor accumsan, nunc sem sagittis mauris, id mattis nulla metus tempor ligula. Vivamus id mauris sodales, pulvinar libero ac, finibus magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ut tempus justo. Integer volutpat vulputate dui, ac posuere quam pretium a.
                        Phasellus sollicitudin dui nec porttitor volutpat. Nam consectetur nunc eget nibh tristique, in scelerisque magna mollis. Aenean id vulputate diam. Vivamus eget felis non sem feugiat ullamcorper vel eget urna. Suspendisse at mi metus. Aenean sit amet leo nec lectus viverra convallis ut et risus. Integer lacinia tristique enim ac rutrum. Cras placerat erat vitae tellus convallis pulvinar. Praesent mauris urna, hendrerit ac accumsan maximus, cursus nec tortor. Nullam nec eleifend ligula. Quisque id lectus in felis congue maximus vel at velit.
                    </p>
                </div>

            </div>
            <Link href="/">Voltar</Link>
        </div>
    );
}