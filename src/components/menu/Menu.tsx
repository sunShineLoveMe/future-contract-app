import React, { useState } from "react";
import styles from './Menu.module.css'
import { CodeSandboxOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { futureExchangeProducts, futureExchangesCode, futureExchanges } from "../../mockData/mockData";
import { configConsumerProps } from "antd/es/config-provider";

// 这段代码主要是标识menuProps对象中items属性的值的类型，即数组中任意元素的类型
type MenuItem = Required<MenuProps>['items'][number];
// console.log(futureExchangesCode);

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

const handleMenuOptions = (futureExchangeProducts: any) => {
    const menuItems: any[] = [];
    futureExchanges.forEach((item: any) => {
        const exchangeProducts = 
            futureExchangeProducts.filter((product: any) => product.exchange === item.code);
        menuItems.push(
            getItem(`${item.name}--${item.code}`, 
            item.code, 
            <CodeSandboxOutlined />, 
            exchangeProducts.map((product: any) => {
                return getItem(`${product.code}-${product.name}`, product.code);
        }))); 
    })
    return menuItems;
}

export const Menu: React.FC = () => {
    const [items, setItems] = useState(handleMenuOptions(futureExchangeProducts))
    const onClick: MenuProps['onClick'] = e => {
        console.log('click', e);
    }
    return (
        <AntdMenu
            mode="inline"
            style={{ width: 256 }}
            defaultOpenKeys={['sub1']}
            onClick={onClick}
            items={items}
            theme="dark"
        />
    )
}