import styles from './SectionLayout.module.scss';

const SectionLayout = ({ header, iconSrc, children, iconAltText }) => {
    return (
        <div className={styles.SectionLayout}>
            <h2 className={styles.sectionLayoutHeader}>{header}</h2>
            <img src={iconSrc} className={styles.sectionLayoutIcon} alt={iconAltText} />
            <div className={styles.sectionLayoutText}>
                <div className={styles.sectionLayoutContent}>{children}</div>
            </div>
        </div>
    );
}

export default SectionLayout;
