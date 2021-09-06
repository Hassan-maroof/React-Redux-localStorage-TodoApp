const initialState = {
  list: []
}

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "Add": {
      const { id, data } = action.payload;

      return {
        ...state,
        list: [

          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      }
    }

    case "AddAll": {
      const { data } = action.payload;

      return {
        ...state,
        list: data,
      }
    }
    case "Delete": {
      const newList = state.list.filter((elem) => elem.id != action.payload.id)
      console.log(action.payload.id)
      console.log(newList)
      return {
        ...state, list: newList
      }


    }

    case "Edit": {
      const { id, data } = action.payload;
      console.log('payload : ',action.payload)
      const newList = [...state.list]// state.list.filter((elem) => elem.id != action.payload.id)
      const objToUpdate = newList.findIndex((item) => item.id === id);
      newList[objToUpdate] = { id, data };
      console.log('new list : ',newList[objToUpdate])
      return {
        ...state,
        list: newList
      }
    }

    case "Delete All": {
      const newList = []// state.list.filter((elem) => elem.id != action.payload.id)
      return {
        ...state,
        list: newList
      }
    }

    default: return state;

  }
}

export default todoReducers