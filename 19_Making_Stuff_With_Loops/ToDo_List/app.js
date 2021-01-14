let list = {
    count: 0,
    tasks: ["Workout", "Cook Chicken"]
}

let inputValue = prompt('What would you like to do');

while (inputValue !== 'quit' && inputValue !== 'q') {
    if (inputValue === 'new') {
        let newTask = prompt('Enter your New Task');
        list.count = list.tasks.shift(newTask);
        console.log(`${list.tasks[list.count-1]}`);
    } else if (inputValue === 'list') {
        console.log('***********');
        for (const task of list.tasks) {
            console.log(`${list.tasks.indexOf(task)}: ${task.toUpperCase()}`);
        }
        console.log('***********');

    } else if (inputValue === 'delete') {
        console.log('delete');

    } else {
        console.log(inputValue);
        inputValue = prompt("Invalid input\nPlease Enter A Valid input");
        continue;
    }
    inputValue = prompt("What would you like to do");
}
list.tasks[0].charAt(0) + list.tasks[0].slice(1, -2)