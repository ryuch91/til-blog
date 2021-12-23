import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [headerHeight, setHeaderHeight] = useState(384);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    function handleResize() {
      const tempHeaderHeight = Math.max(384, window.innerHeight);
      setHeaderHeight(tempHeaderHeight);
      setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div className="container">
          <div
            className={styles.heroBannerText}
            style={{ minHeight: bannerHeight }}
          >
            <p>
              <b>Hi, my name is</b>
            </p>
            <h1>
              <span className="colorPrimary"> Chungkwon Ryu.</span>
            </h1>
            <p>{siteConfig.tagline}</p>
            <SocialLinks />
            <nav className={clsx("pagination-nav", styles.heroBannerButton)}>
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("/about")}>
                  <div className="pagination-nav__sublabel">Read my</div>
                  <div className="pagination-nav__label">Introduction</div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main id="main">
      </main>
    </Layout>
  );
}

export default Home;