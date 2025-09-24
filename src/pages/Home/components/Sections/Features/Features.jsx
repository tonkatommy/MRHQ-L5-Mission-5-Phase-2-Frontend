// Import CSS modules
import styles from "./Features.module.css";
// Import other components
import FeatureCard from "./components/FeatureCard";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Make the most of Z</h2>
        <div className={styles.featureCards}>
          <FeatureCard
            subTitle="For business"
            title="Your business our business"
            description="With our fuel, size, distribution network and Kiwi can-do attitude, we'll help get your business to where you want it to be"
          ></FeatureCard>
          <FeatureCard
            subTitle="Rewards and promotions"
            title="Z Rewards"
            description="Save 6c per litre every time you fill up to 100 litres, plus get points on almost everything you buy and use them for treats"
          ></FeatureCard>
          <FeatureCard
            subTitle="Z App"
            title="Z in the palm of your hand"
            description="Z App lets you experience Z your way, Pay for fuel, pre-buy with Sharetank, pre-order drinks and more"
          ></FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default Features;
