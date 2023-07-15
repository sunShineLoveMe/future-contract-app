import React, { useEffect, useRef, useState, useContext } from "react";
import * as echarts from 'echarts/core';
import axios from "axios";
import styles from './Metal3DBar.module.css'
import { Metal3DBarOptions } from '../../configs/echarts/Metal3DBarConfig'
import { Grid3DBarOptions } from "../../configs/echarts/Grid3DConfig";
import { ValueContext } from "../../context/ValueContext";
import { handleResContractData } from '../../configs/calculate'


export const Metal3DBar: React.FC = () => {

    const chartRef = useRef(null);
    const [option, setOption] = useState(Metal3DBarOptions([]));
    // const [option, setOption] = useState();
    const [responseData, setResponseData] = useState(null);
    const { value } = useContext(ValueContext);
    console.log('菜单选型的值: value', value)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/detail/${value}`);
                setResponseData(handleResContractData(response.data.data));
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

        if(option && typeof option === 'object'){
            metal3DBarEchart.setOption(option);
        }
        window.onresize = () => {
            metal3DBarEchart.resize();
        }
    }, [option])
    return (
        <div className={styles.charts} ref={chartRef} />
    )
}