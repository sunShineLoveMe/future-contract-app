/**
 * 
 * 这段代码在react中使用的一个模块声明，它用于声明对css文件的导入和使用
 * 允许typescript中导入和访问css文件中定义的类名和样式.
 * 总之这段代码就是提供了一种在react中使用css模块化的方法通过模块声明允许
 * 在ts中导入和使用css文件，并且提供了类型安全性和编码辅助
 */
declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
}

