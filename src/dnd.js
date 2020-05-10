/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */

function getRandomInteger(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
}

function createDiv() {

    let result = document.createElement('div');
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    result.className = 'draggable-div';
    result.style.position = 'absolute';
    result.style.width = getRandomInteger(5, 100) + 'px';
    result.style.height = getRandomInteger(5, 100) + 'px';
    result.style.left = getRandomInteger() + 'px';
    result.style.top = getRandomInteger() + 'px',
    result.style.background = randomColor;
    result.style.draggable = true;

    return result;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    let coordX;
    let coordY;

    function handleStart(event) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('Text', 'dragstart');  
        coordX = event.offsetX;
        coordY = event.offsetY;
    } 

    function handleEnd(event) {
        target.style.top = (event.pageY - coordY) + 'px';
        target.style.left = (event.pageX - coordX) + 'px';
    }

    target.addEventListener('dragstart', handleStart);  
    target.addEventListener('dragend', handleEnd);
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
