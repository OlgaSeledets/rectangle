'use strict'

const widthData = document.getElementById('width');
const heightData = document.getElementById('height');
const colorData = document.getElementById('color');

const buttonCreate = document.getElementById('create');
const buttonDelete = document.getElementById('delete');

const shapesElement = document.getElementById('shapes');

const shapes = [];

buttonCreate.addEventListener('click', () => {
    let Rectangle = {
        width: `${widthData.value}px`,
        height: `${heightData.value}px`,    
        color: `${colorData.value}`,     
    };

    if (Rectangle.width !== 'px' && Rectangle.height !== 'px' && Rectangle.color !== '') {
        const drawRect = document.createElement('div');
        shapesElement.appendChild(drawRect);
        drawRect.classList.add('myRectangle');
        
        shapes.push(drawRect);

        drawRect.style.width = Rectangle.width;
        drawRect.style.height = Rectangle.height;
        drawRect.style.backgroundColor = Rectangle.color;
        drawRect.style.margin = '30px auto';
    }
});

buttonDelete.addEventListener('click', () => {
    if (shapes.length > 0) {
        shapes.pop().remove();
    }
});







