import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts/core';
import styles from './Metal3DBar.module.css'
import { Metal3DBarOptions } from '../../configs/echarts/Metal3DBarConfig'

export const Metal3DBar: React.FC = () => {

    const chartRef: React.MutableRefObject<null> = useRef(null);

    useEffect(() => {
        const metal3DBarEchart = echarts.init(
            chartRef.current as unknown as HTMLDivElement, 
            undefined, 
            {
                renderer: 'canvas',
                useDirtyRect: false
        });

        if(Metal3DBarOptions && typeof Metal3DBarOptions === 'object'){
            metal3DBarEchart.setOption(Metal3DBarOptions)
        }
        window.onresize = () => {
            metal3DBarEchart.resize();
        }
    }, [])

    return (
        <div className={styles.charts} ref={chartRef} />
    )
}