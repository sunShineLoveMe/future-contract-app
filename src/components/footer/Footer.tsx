import React from "react";
import { Typography } from "antd";
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
    return (
        <Typography.Title level={5} className={styles.title}>
            @CopyRight 版权归俞朝龙所有！任何人不得擅自使用！违者必究！
        </Typography.Title>
    )
}