const dogImage = document.getElementById('dogImage');

// Виклик функції fetch() для отримання випадкового зображення пса
fetch('https://random.dog/woof.json')
    .then(response => {
        // Перевірка на успішний статус відповіді
        if (!response.ok) {
            throw new Error('Помилка отримання даних з API');
        }
        // Повернення JSON-об'єкта для наступного обробника
        return response.json();
    })
    .then(data => {
        // Встановлення зображення на сторінці
        dogImage.src = data.url;
    })
    .catch(error => {
        // Обробка помилок
        console.error(error.message);
    });

