import { ROOT_PATH, generateData } from "../calculate"
import * as echarts from 'echarts/core'
import { TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';

echarts.use([TooltipComponent, Grid3DComponent, Bar3DChart, CanvasRenderer]);

export const Metal3DBarOptions = {
    tooltip: {},
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value',
        max: 10,
        min: 0
    },
    grid3D: {
        environment: '#000',
        axisPointer: {
            show: false
        },
        postEffect: {
            enable: true,
            SSAO: {
                enable: true,
                radius: 5
            }
        },
        light: {
            main: {
                intensity: 3
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
    series: [
        {
            type: 'bar3D',
            data: generateData(2, -5, 5),
            barSize: 4,
            bevelSize: 0.4,
            bevelSmoothness: 4,
            shading: 'realistic',
            realisticMaterial: {
                roughness: 0.3,
                metalness: 1
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
        }
    ]
}