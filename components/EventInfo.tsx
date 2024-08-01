import styles from './eventInfo.module.css';

export default function EventInfo() {
    return (
        <section className={styles.eventInfo}>
            {/* Primera fila: Información del Evento */}
            <div className={styles.container}>
                <div className={styles.textColumn}>
                    <h2 className={styles.title}>¡Por fin llega el GDG DevFest a Sevilla!</h2>
                    <p className={styles.description}>
                        Os traemos un evento de la comunidad y para la comunidad, el evento más grande de Google en Sevilla, en el que numerosos expertos del sector, principalmente de manos de Google, darán conferencias sobre todas las temáticas que podáis imaginar: Machine Learning, Ciberseguridad, Android, Cloud...
                    </p>
                    <p className={styles.description}>
                        Dicho evento se realiza también en muchos lugares del mundo, donde la gente disfruta aprendiendo sobre la tecnología y descubriendo la comunidad GDG. ¡Podéis verlos aquí! <strong><a href="https://developers.google.com/community/devfest?hl=es-419#devfest-map" target="_blank" rel="noopener noreferrer">Google Developers</a></strong>.
                    </p>
                </div>
                <div className={styles.imageColumn}>
                    <img
                        src="https://a.storyblok.com/f/296391/1391x927/9ea45b2791/lanyards.jpg"
                        alt="Evento Anterior"
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <img
                        src="https://a.storyblok.com/f/296391/1024x688/67c2427fae/metropol-parasol-seville-1024x688.jpg"
                        alt="Metropol Parasol, Sevilla"
                        className={styles.image}
                    />
                </div>
                <div className={styles.textColumnVenue}>
                    <h3 className={styles.subtitle}>Lugar del Evento</h3>
                    <p className={styles.venue}>
                        Para el evento contamos con una localización más que idónea, <strong>Metropol Parasol</strong>, diseñado para ofrecerte el lugar más cómodo posible durante las conferencias, disfrutando a la vez de un entorno realmente inspirador y novedoso.
                    </p>
                </div>
            </div>
        </section>
    );
}