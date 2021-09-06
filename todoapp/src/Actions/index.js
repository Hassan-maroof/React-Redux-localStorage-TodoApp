export const addTodoListAction = (value) => {
    console.log('value : ', value)
    return {
        type: 'Add',
        payload: {
            id: Math.floor( Math.random() * 100),
            data : value
        }
    }
}

export const updateAllItemactions = (value) => {
    console.log('value : ', value)
    return {
        type: 'AddAll',
        payload: {
            data: value,
        }
    }
}

export const deleteTodoListAction = (id) => {
    return {
        type: 'Delete',
        payload: {
            id : id
        }
    }
}

export const editTodoListAction = (id , value) => {
    console.log(id,value)
    return {
        type: 'Edit',
        payload: {
            id : id,
            data: value
        }
    }
}

export const deleteAllTodoListAction = () => {
    return {
        type: 'Delete All',
    }
}