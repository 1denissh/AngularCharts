# AngularCharts

Ангуляр приложение с графиком Chart.js

## Сборка

После клонирования перейти в папку с проектом и в терминале выполнить команду `npm install`

## Запуск

После того как подтянутся все зависимости проекта его можно запустить командой `npm start` или `ng serve`. Затем перейти в браузере по адресу `http://localhost:4200/`

## Процесс получения данных из `source`

interface Source {
    measures: string[],
    annotations: Annotation,
    name: string,
    substitutions: any[]
}

interface Annotation {
    [key: string]: string
}