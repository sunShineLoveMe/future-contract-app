import React from 'react';
import { Layout } from 'antd';
import styles from "./App.module.css"
import { Menu, Header, Footer, Metal3DBar } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Layout className={styles["global-layout"]}>
        <Layout.Sider className={styles["global-sider"]} width={256}>
          <Menu />
        </Layout.Sider> 
        <Layout className={styles["content-layout"]}>
          <Layout.Header className={styles["layout-header"]}>
            <Header />
          </Layout.Header>
          <Layout.Content className={styles["layout-content"]}>
            <Metal3DBar/>
          </Layout.Content>
          <Layout.Footer className={styles["layout-footer"]}>
            <Footer/>
          </Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
