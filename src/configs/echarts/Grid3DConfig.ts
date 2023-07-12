import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import { generateGrid3DData } from '../calculate';
import { TooltipComponent, TitleComponent } from 'echarts/components';

echarts.use([TitleComponent, TooltipComponent, Grid3DComponent, Bar3DChart, CanvasRenderer]);

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
            barSize: 5,
            bevelSize: 0.2,
            bevelSmoothness: 10,
            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.86,
                metalness: 0.99
            },
            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            itemStyle: {
                color: '#ccc'
            },
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
    title: {
        text:'广州期货交易所-GFEX',
        subtext: 'SI-工业硅',
        textStyle: {
            color: '#999',
            fontSize: 14
        },
        subtextStyle: { 
            color: '#999',
            fontSize: 16,
            fontWeight: 'bold'
        },
        right: 'center',
        top: 20
    },
    tooltip: {
        backgroundColor: '#001529',
        borderColor: '#001529',
        textStyle: {
            color: '#fff',
            fontWeight: 'bold',
        }
    },
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
        top: -40,
        environment: '#000',
        axisPointer: {
            show: false
        },
        // viewControl用于鼠标的旋转，缩放等视角控制
        // autoRotateSpeed 旋转速度
        viewControl: {
            autoRotate: false,
            autoRotateSpeed: 6
        },
        // postEffect: 后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
        // SSAO: 是否开启环境光遮蔽
        postEffect: {
            enable: true,
            SSAO: {
                enable: true,
                radius: 5
            }
        },
        light: {
            main: {
                intensity: 6
            },
            // 使用纹理作为环境光的光源，会为物体提供漫反射和高光反射
            ambientCubemap: {
                texture: '../../assets/images/data-gl/asset/pisa.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 2
            }
        }
    },
    series: seriesDataFc()
}