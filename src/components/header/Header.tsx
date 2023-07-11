import React from "react";
import { Typography } from "antd";
import styles from './Header.module.css'

// 期货品种3D可视化动态模型曲线
export const Header: React.FC = () => {
    return (
        <Typography.Title level={3} className={styles.title}>
            期货品种3D可视化动态模型曲线
        </Typography.Title>
    )
}