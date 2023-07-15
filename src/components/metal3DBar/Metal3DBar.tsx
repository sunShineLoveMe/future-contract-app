import React, { useEffect, useRef, useState, useContext } from "react";
import * as echarts from 'echarts/core';
import styles from './Metal3DBar.module.css'
import { Metal3DBarOptions } from '../../configs/echarts/Metal3DBarConfig'
import { Grid3DBarOptions } from "../../configs/echarts/Grid3DConfig";
import { ValueContext } from "../../context/ValueContext";

export const Metal3DBar: React.FC = () => {

    const chartRef = useRef(null);
    const [option, setOption] = useState(Metal3DBarOptions());
    // const [option, setOption] = useState();
    const { value } = useContext(ValueContext);
    console.log('菜单选型的值：value', value)

    useEffect(() => {
        const metal3DBarEchart = echarts.init(
            chartRef.current as unknown as HTMLDivElement, undefined, {
                width: 1000,
                height: 700,
            }
        );

        if(option && typeof option === 'object'){
            metal3DBarEchart.setOption(option)
        }
        window.onresize = () => {
            metal3DBarEchart.resize();
        }
    }, [option])
    return (
        <div className={styles.charts} ref={chartRef} />
    )
}