declare module '*.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
} 

declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
  }
  declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
  }
  declare module 'react-markup';
  declare module '*.webp';
  declare module '*.png';
  declare module '*.jpg';
  declare module '*.jpeg';