Vue.component('todo', {
    template: '#todo-template',
    props: ['todos']
});


new Vue({
    el: '#app',
    data: {
        todos: [
            { title: 'Complete todo list', completed: false },
            { title: 'Order window cloths', completed: false },
            { title: 'Chage smart watch :)', completed: true },
            { title: 'Go to supershop to by things.', completed: false },
            { title: 'Wake up early in the morning!', completed: false }
        ]
    }
});
