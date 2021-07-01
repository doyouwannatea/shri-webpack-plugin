# ШРИ.WebpackPlugin

Исходники плагина в папке **/webpack-plugin**

## Плагин

```js
new SHRIWebpackPlugin({
    outputFile: '',
    src: '',
    exclude: []
})
```

`outputFile` - В какой файл вывести статистику.  
`src` - В какой директории начинаются файлы проекта.  
`exclude` - Какие файлы не добавлять в статистику.  

Плагин настроен на файлы .js, .jsx, .ts, .tsx.  

## src

В качестве теста взял свой репозиторий с проектом на React  

## Запуск

`git clone https://github.com/doyouwannatea/shri-webpack-plugin`  
`npm i`  
`npm run build`  
