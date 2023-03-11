const text = document.querySelector( '.tasks__input');
const tasksList  = document.querySelector( '.tasks__list');
const btn = document.querySelector('.tasks__add');
const taskRemove = document.querySelector('.task__remove');

function addTaskByClick() {
    btn.addEventListener('click', (e) => {
        const str = text.value; // для обхода ввода пустой строки и пробелов пользователем
        if (str.trim() != '') {            
            // добавит
            tasksList.innerHTML +=` 
            <div class="task">
                        <div class="task__title">
                        ${str}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                        </div>
            `;
            text.value = '';
            e.preventDefault();
        }
        
    });
};

function addTaskByEnter() {
    text.addEventListener('keypress', (e) => {
        const str = text.value; // для обхода ввода пустой строки и пробелов пользователем
        if (e.key == 'Enter' && str.trim() != '') {            
            addTaskByClick();
        }    
});
};

function removeTask() {
    document.addEventListener('click', (e) => 
    {if (e.target.classList.contains("task__remove")) {
        e.target.parentNode.remove()};
    });
};

addTaskByClick();
addTaskByEnter();
removeTask();
