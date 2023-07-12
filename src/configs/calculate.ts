import { createNoise2D } from "simplex-noise";
const noise2D = createNoise2D();

export const ROOT_PATH = 'https://echarts.apache.org/examples';

var valMin = Infinity;
var valMax = -Infinity;

export const generateData = (theta: any, min: any, max: any) => {
    var data: any[] = [];
    for (var i = 0; i <= 20; i++) {
      for (var j = 0; j <= 20; j++) {
        var value = noise2D(i / 20, j / 20);
        valMax = Math.max(valMax, value);
        valMin = Math.min(valMin, value);
        data.push([i, j, value * 2 + 4]);
      }
    }
    return data;
}

export const generateGrid3DData = () => {
    var data: any[] = [];
    for (var i = 0; i <= 10; i++) {
      for (var j = 0; j <= 10; j++) {
        var value = noise2D(i / 5, j / 5);
        data.push([i, j, value * 2 + 4]);
      }
    }
    return data;
}