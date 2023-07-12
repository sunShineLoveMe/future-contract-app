import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import { generateGrid3DData } from '../calculate';

echarts.use([Grid3DComponent, Bar3DChart, CanvasRenderer]);

/**
 * @returns 
 * stack: 柱状图堆叠，
 */
const seriesDataFc = () => {
    let seriesData: any[] = [];
    for (let i = 0; i < 10; i++) {
        seriesData.push({
            type: 'bar3D',
            stackStrategy: 'all',
            data: generateGrid3DData(),
            stack: 'stack',
            shading: 'realistic',
            emphasis: {
                label: {
                    show: false
                }
            }
        })
    }
    return seriesData;
}

export const Grid3DBarOptions = {
    // type:  数值轴，适用于连续数据
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        // viewControl用于鼠标的旋转，缩放等视角控制
        // autoRotateSpeed 旋转速度
        viewControl: {
            autoRotate: false,
            autoRotateSpeed: 6
        },
        light: {
            main: {
                shadow: true,
                quality: 'ultra',
                intensity: 1.5
            }
        }
    },
    series: seriesDataFc()
}