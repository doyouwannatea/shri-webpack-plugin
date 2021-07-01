# ШРИ.WebpackPlugin

Исходники плагина в папке **/webpack-plugin**

## Плагин

```ts
new SHRIWebpackPlugin({
    outputFile: string,
    src: string,
    exclude?: Array<string>,
    include?: RegExp | string
})
```

`outputFile` - В какой файл вывести статистику.  
`src` - В какой директории начинаются файлы проекта.  
`exclude` - Какие файлы не добавлять в статистику.  
`include` - Какие файлы добавить в статистику.

## src

В качестве теста взял свой репозиторий с проектом на React  

## Запуск

`git clone https://github.com/doyouwannatea/shri-webpack-plugin`  
`npm i`  
`npm run build`  

## Node version

v14.17.1
