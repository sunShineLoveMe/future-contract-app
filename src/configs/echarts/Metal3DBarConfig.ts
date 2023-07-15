import { handleContractData, handleMetal3DBarDataXDate } from "../calculate"
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import { TooltipComponent, TitleComponent } from 'echarts/components';

echarts.use([TitleComponent, TooltipComponent, Grid3DComponent, Bar3DChart, CanvasRenderer]);

export const Metal3DBarOptions = (contractData) => {
    return {
        title: {
            text: '广州期货交易所-GFEX',
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
            },
            formatter: function (params: any) {
                let obj = params.data;
                return `交易日期：${obj[0]}<br/>
                        合约价格：${obj[1]}<br/>
                        合约交易量：${obj[2]}<br/>`
            }
        },
        xAxis3D: {
            name: '合约交易日期',
            type: 'category',
            data: handleMetal3DBarDataXDate(contractData),
            // data: contractData.map(item => item[0]),
            nameTextStyle: {
                color: '#999',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        yAxis3D: {
            name: '合约价格(元/手)',
            type: 'value',
            nameTextStyle: {
                color: '#999',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        zAxis3D: {
            name: '合约交易量(元)',
            type: 'value',
            nameTextStyle: {
                color: '#999',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        grid3D: {
            environment: '#000',
            // environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0, color: '#00aaff' // 天空颜色
            //   }, {
            //     offset: 0.7, color: '#998866' // 地面颜色
            //   }, {
            //     offset: 1, color: '#998866' // 地面颜色
            //   }], false),
            // axisPointer: {
            //     show: false
            // },
            // viewControl用于鼠标的旋转，缩放等视角控制
            // autoRotateSpeed 旋转速度
            viewControl: {
                autoRotate: false,
                autoRotateSpeed: 4
            },
            // postEffect: 后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
            // SSAO: 是否开启环境光遮蔽
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 5
                },
                // 景深效果
                depthOfField: {
                    enable: false
                }
            },
            light: {
                main: {
                    intensity: 3,
                    shadow: true,
                    shadowQuality: 'high',
                },
                // 使用纹理作为环境光的光源，会为物体提供漫反射和高光反射
                ambientCubemap: {
                    texture: '../../assets/images/data-gl/asset/pisa.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 0.5
                }
            }
        },
        series: [
            {
                type: 'bar3D',
                data: contractData,
                barSize: 4,
                bevelSize: 0.4,
                bevelSmoothness: 4,
                shading: 'realistic',
                realisticMaterial: {
                    roughness: 0.86,
                    metalness: 0.95
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
}