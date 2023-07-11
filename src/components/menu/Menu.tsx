import React, { useState } from "react";
import styles from './Menu.module.css'
import { CodeSandboxOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";

// 这段代码主要是标识menuProps对象中items属性的值的类型，即数组中任意元素的类型
type MenuItem = Required<MenuProps>['items'][number];

/**
 * 
 * @param label 菜单项标题
 * @param key item的唯一标识
 * @param icon 菜单项图标
 * @param children 菜单项的子菜单项
 * @param type 菜单项类型
 * @returns 
 */
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        label,
        icon,
        children,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', <CodeSandboxOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Navigation Three', 'sub4', <CodeSandboxOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const Menu: React.FC = () => {

    // 当前展开的subMenu菜单项 key 数组 string[]
    const [openKeys, setOpenKeys] = useState(['sub1']);

    // subMenu展开或关闭的回调
    // 表示将onOpenChange定义为一个函数类型，它接受一个字符串数组类型的参数
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <AntdMenu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
            theme="dark"
        />
    )
}