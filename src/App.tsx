import React from 'react';
import { Layout } from 'antd';
import styles from "./App.module.css"
import { Menu } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Layout className={styles["global-layout"]}>
        <Layout.Sider className={styles["global-sider"]} width={256}>
          <Menu />
        </Layout.Sider>
        <Layout className={styles["content-layout"]}>
          <Layout.Header className={styles["layout-header"]}>头部</Layout.Header>
          <Layout.Content className={styles["layout-content"]}>内容</Layout.Content>
          <Layout.Footer className={styles["layout-footer"]}>底部</Layout.Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
