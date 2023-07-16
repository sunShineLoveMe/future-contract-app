import React, { useEffect, useRef, useState, useContext } from "react";
import * as echarts from 'echarts/core';
import axios from "axios";
import { Image } from "antd";
import styles from './Metal3DBar.module.css'
import { Metal3DBarOptions } from '../../configs/echarts/Metal3DBarConfig'
import { Grid3DBarOptions } from "../../configs/echarts/Grid3DConfig";
import { ValueContext } from "../../context/ValueContext";
import { handleResContractData } from '../../configs/calculate'
import { ECBasicOption } from "echarts/types/dist/shared";
import girlImage  from "../../asserts/images/girl.png";

export const Metal3DBar: React.FC = () => {

    const chartRef = useRef<HTMLDivElement>(document.createElement('div'));
    const [option, setOption] = useState<ECBasicOption>({});
    const [responseData, setResponseData] = useState(null);
    const { value } = useContext(ValueContext);
    console.log('菜单选型的值: value', value)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (value && value !== '') {
                    const response = await axios.get(`http://localhost:3000/detail/${value}`);
                    setResponseData(handleResContractData(response.data.data));
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [value])

    useEffect(() => {
        if (responseData) {
            setOption(Metal3DBarOptions(responseData));
        }
    }, [responseData])

    useEffect(() => {
        const metal3DBarEchart = echarts.init(
            chartRef.current as unknown as HTMLDivElement, undefined, {
            width: 1000,
            height: 700,
        }
        );
        if (option && typeof option === 'object') {
            metal3DBarEchart.setOption(option);
        }
        window.addEventListener('resize', () => metal3DBarEchart.resize());
        return () => window.removeEventListener('resize', () => metal3DBarEchart.resize());
    }, [option])
    return (
        value === "" ? 
            <div className={styles.images}><Image width={600} height={700} src={girlImage} /></div> 
            : 
            <div className={styles.charts} ref={chartRef} />
        // <div className={styles.charts} ref={chartRef} />
    )
}