export async function fetchData() {
    // Имитация запроса к API
    const time = new Date().toLocaleTimeString();
    const value = Math.floor(Math.random() * 200); // Генерация случайного значения

    return { time, value };
}
