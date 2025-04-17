import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Admin Panel",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        Powerful admin dashboard to manage products, categories, orders,
        vendors, and customers from a central location with comprehensive
        controls.
      </>
    ),
    link: "/docs/admin-panel/intro",
  },
  {
    title: "Website",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        A responsive and user-friendly website to showcase your products and
        allow customers to shop online from desktop or mobile browsers.
      </>
    ),
    link: "/docs/website/intro",
  },

  {
    title: "Flutter Customer App",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        Cross-platform mobile application for customers to browse products,
        place orders, track deliveries, and manage their account from iOS and
        Android devices.
      </>
    ),
    link: "/docs/flutter-app/intro",
  },
  {
    title: "Flutter Partner App",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        Dedicated app for vendors and delivery partners to manage product
        listings, process orders, track deliveries, and handle store operations.
      </>
    ),
    link: "/docs/flutter-partner-app/intro",
  },
  {
    title: "Features",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        Explore the comprehensive feature set available across all eGrocer
        components, from multi-vendor support to payment integrations and more.
      </>
    ),
    link: "/docs/features/intro",
  },
  {
    title: "Changelog",
    Svg: require("@site/static/img/app_icon.webp").default,
    description: (
      <>
        Stay updated with the latest improvements, bug fixes, and feature
        additions to ensure you're making the most of your eGrocer platform.
      </>
    ),
    link: "/docs/changelog/intro",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className="text--center">
            <img className={styles.featureSvg} src={Svg} alt={title} />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
