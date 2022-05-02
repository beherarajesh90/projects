const checkBoxes = $('input[type="checkbox"]');
function datePickerSetup() {
  $(function () {
    $('#datepicker').datepicker({ dateFormat: 'dd/mm/yy' });
  });
}
function deleteTasksOnDelete() {
  $('input[type="checkbox"]').click(function () {
    const tasksToBeDeleted = [];
    // const tasksToBeUpdated = [];
    for (let task of $('input[type="checkbox"]:checked')) {
      tasksToBeDeleted.push(task.id);
    }
    let taskToBeUpdated = {
      id: $(this)[0].id,
      isDone: $(this)[0].dataset.isdone,
    };
    $.ajax({
      type: 'get',
      url: `http://localhost:8000/todo/update-todo/?task=${taskToBeUpdated.id},${taskToBeUpdated.isDone}`,
      success: function (response) {
        console.log('updated');
      },
    });
    $('.delete').attr('href', `/todo/delete-todo/?arr=${tasksToBeDeleted}`);
    console.log(tasksToBeDeleted);
  });
}
//checkboxes based on their status(isDone)
function checkboxStatus() {
  for (task of checkBoxes) {
    if (task.dataset.isdone === 'true') {
      task.setAttribute('checked', 'checked');
    } else {
      task.removeAttribute('checked');
    }
  }
}

function addClassAccordingToTaskCategory() {
  for (task of $('.category')) {
    if (task.innerText === 'personal') {
      $(task).addClass('personal');
    } else if (task.innerText === 'school') {
      $(task).addClass('school');
    } else if (task.innerText === 'work') {
      $(task).addClass('work');
    } else {
      $(task).addClass('others');
    }
  }
}
function start() {
  datePickerSetup();
  deleteTasksOnDelete();
  checkboxStatus();
  addClassAccordingToTaskCategory();
}
start();
