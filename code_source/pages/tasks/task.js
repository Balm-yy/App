const addTaskButton = document.getElementById('add-project');
const taskSectionContainer = document.querySelector('.task-section-container')
const taskOpenClose = document.querySelectorAll('.tasks');
const chevrons = document.querySelectorAll('.chevron');






//document.querySelectorAll('.chevron').forEach( chevron => {
    //chevron.addEventListener('click', function openTask(){

        //const taskContent = this.closest('.tasks');
    
    
        //taskContent.classList.toggle('hidden');
        //taskContent.classList.toggle('hidden');
        //taskContent.classList.toggle('open');
    
   // })
//});


chevrons.forEach( chevron => {
    chevron.addEventListener('click', function(){
        const taskContent = this.closest('.task-container').querySelector('.tasks');

        taskContent.classList.toggle('open');
        chevron.classList.toggle('fa-chevron-up')
    })
})


function createNewTask() {

    const newTaskSection = `
        <div id="task-section" class="container-fluid mt-2">
        <div class="row">
            <div class="task-container">
                <div class="task-header d-flex columns mt-3 mb-3">
                    <div class="task-title second-title col-8 fw-bold"></div>
                    <div class="task-number col-2 text-end fw-bold"><span id="task-finished"></span><span id="all-task"></span></div>
                    <i class="fa-solid fa-chevron-down fw-bol mt-1 offset-1 chevron"></i>
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <div id="tasks" class="tasks mt-1 hidden mb-2">
                        <div class="task mt-2 d-flex columns align-items-center">
                            <input type="checkbox" class="custom-checkbox ms-2">
                            <div class="task-text ps-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Add new task in the container
    taskSectionContainer.insertAdjacentHTML('beforeend', newTaskSection);

    // Add Events to new chevrons
    const newChevron = taskSectionContainer.lastElementChild.querySelector('.chevron');

    newChevron.addEventListener('click', function() {
        const taskElement = this.closest('.task-container').querySelector('.tasks');
        taskElement.classList.toggle('open');
        newChevron.classList.toggle('fa-chevron-up');
    })

}



addTaskButton.addEventListener('click', createNewTask);



