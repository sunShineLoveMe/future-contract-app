import React, { useState } from "react";
import { CodeSandboxOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { futureExchangeProducts, futureExchanges } from "../../mockData/mockData";

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
                // 同品种不同合约  豆一：0001-豆一主力合约 0002-豆一次主力合约    
                let exchangeProductsSubMenuItems: any[] = [];
                if(product && product.subItems && product.subItems.length > 0) {
                    exchangeProductsSubMenuItems = product.subItems.map((subItem: any) => {
                        return getItem(`${subItem.name}`, subItem.code)
                    })
                    return getItem(`${product.code}-${product.name}`, 
                                    product.code, 
                                    null, 
                                    exchangeProductsSubMenuItems);
                } else {
                    return getItem(`${product.code}-${product.name}`, product.code);
                }
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