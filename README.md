# npo_front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### ---

По дефолту используется имитация API, для работы с бекендом, необходимо заменить импорт в файле
src/App.vue  с 
```
import { fetchData } from '@/api/loadDataLocal';
```

на 
```
import { fetchData } from '@/api/loadData';
```

а также указать свой актуальный endpoint бекенда в файле src/api/loadData.js
```
const API_URL = 'http://127.0.0.1:5000/api/data';

```
Бекенд для тестов можно поднять на python отсюда https://github.com/makedevpro/npo_back

- Светлая тема

![Image alt](https://github.com/makedevpro/npo_front/blob/main/src/assets/light.jpeg)

- Темная тема

![Image alt](https://github.com/makedevpro/npo_front/blob/main/src/assets/dark.jpeg)
