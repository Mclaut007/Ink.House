git init - инициализация git-репозитория

Команды:

npm i - чтобы установить gulp локально и все другие зависимости, указанные в package.json

1. gulp - запустить сборку gulp. Файлы сайта окажутся в папке build. Эти файлы будут открыты в браузере во время разработки. Работать будем с файлами, которые в папке src.

2. npm run watch - запустить tailwind (в другом терминале)
   Будет происходить автоматическое добавление tailwind-классов в css-файл(src/css/style.css) при добавлении их в html.

3. gulp docs - запустить сборку на продакшен (финальная версия файлов, с минификацией, группировкой медиазапросов и т.д., то, что будет размещено в Интернете). Файлы сайта окажутся в папке docs.

====================================================

Gulp умееть только создавать и организовывать задачи:

gulp.task() - определить задачу
gulp.src() - взять исходные файлы
pipe() - "закинуть в трубу", внутри которой применить плагин для обработки файлов
gulp.dest() - получить сохранившийся результат
gulp.parallel() - запустить несколько задач параллельно (одновременно)
gulp.series() - запустить несколько задач последовательно
gulp.watch() - следить за файлами

Пакеты:

gulp - собственно Gulp
gulp-sass - Сборка SASS / SCSS
sass - Необходим для сборки SASS / SCSS
gulp-file-include - Подключение файлов друг в друга. HTML include
gulp-clean - Удаление файлов
gulp-server-livereload - Сервер с автообновлением страницы
gulp-sourcemaps - Исходные карты для CSS
gulp-plumber - Фикс ошибок при сборке
gulp-notify - Нотификации
gulp-group-css-media-queries - Группировка CSS-медиазапросов
