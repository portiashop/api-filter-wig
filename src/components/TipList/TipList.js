import styles from "./_tipList.module.scss";
import TipCard from "../TipCard/TipCard";

const TipList = ({ tips }) => {
    return (
        <div className={styles.list}>
            {tips.map((t) => (
                <TipCard key={t.id} tip={t.tip} />
            ))}
        </div>
    );
};

export default TipList;
