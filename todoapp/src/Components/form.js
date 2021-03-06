import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import Card from "material-ui/Card";
import Divider from "material-ui/Divider";
import Switch from "material-ui/Switch";
import DeleteIcon from "material-ui-icons/Delete";
import EditIcon from "material-ui-icons/Edit";
import Tooltip from "material-ui/Tooltip";
import { FormGroup, FormControlLabel } from "material-ui/Form";
import styles from './styles';

import { addTodoListAction, deleteTodoListAction, updateAllItemactions, editTodoListAction, deleteAllTodoListAction } from '../Actions/index';
import Edit from 'material-ui-icons/Edit';


function Form() {


  const { list } = useSelector((state) => state.todoReducers);
  const itemFromLocalStorage = JSON.parse(localStorage.getItem("Item") || "[]");
  //const itemFromLocalStorage = JSON.parse(localStorage.getItem("Item") || "[]");
  // console.log('localItem', itemFromLocalStorage);

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log('list after refresh: ', list);


  useEffect(() => {
    if (itemFromLocalStorage && itemFromLocalStorage[0]) {
      console.log('in to')
      dispatch(updateAllItemactions(itemFromLocalStorage));
    }
  }, []);
  // useEffect(() => {
  //   if (list && list[0]) {
  //     localStorage.setItem("Item", JSON.stringify(list))
  //     console.log('itemfromlocal', list)
  //   }
  // }, [list])
  const hanldeChange = (event, itemId) => {
    const text = event.target.value;
    dispatch(editTodoListAction(itemId, text))
  }
  const handlLocalState = (list) => {
    if (list && list[0]) {
      localStorage.setItem("Item", JSON.stringify(list));
      alert("Your data is Submitted into local storage");
    }
    else {
      alert("List is Empty");
    }
  }
  const handleStoreSubmit = (value) => {
    if (value && value[0]) {
      dispatch(addTodoListAction(value));
      setValue(' ');
    } else {
      alert("Cannot Add empty itmes");
    }
  }
  const handleDelete = (id) => {
    dispatch(deleteTodoListAction(id));
    localStorage.setItem("Item", JSON.stringify(list));
    console.log("List items deleted", list);

  }
  const handleDeleteAll = () => {
    dispatch(deleteAllTodoListAction());
    localStorage.clear();
  }
  if (!list){
    console.log("Empty list") ;
  }
  return (
    <div id="main" style={styles.main}>
      <h1 style={styles.done}>Todo Application</h1>
      <header style={styles.header}>

        <form onSubmit={handleSubmit}>
          <div style={styles.todo}>
            <TextField
              style={styles.todoitems}
              type='text'
              placeholder='Insert Items'
              value={value}
              onChange={(event) => setValue(event.target.value)} />

            <Button style={styles.todoitems} variant="raised" color="primary" onClick={() => handleStoreSubmit(value)}>Add</Button>
          </div>
        </form>

      </header>
      <div>
        {

          list.map((elem) => {
            console.log(elem)
            return (
              <div>
                <Card style={styles.card}>
                  <div key={elem.id} style={styles.todo}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="primary"

                        />
                      }
                      label={
                        <TextField
                          type='text'
                          placeholder='Edit Item'
                          value={elem.data}
                          onChange={(event) => hanldeChange(event, elem.id)}
                        />
                      }

                    />
                    <Tooltip title="Edit task" placement="top">

                      <IconButton variant="raised" color="primary"
                        onClick={() => handlLocalState(list)}
                      >
                        <Edit /></IconButton>

                    </Tooltip>
                    <Tooltip title="Delete task" placement="top">
                      <IconButton variant="raised" color="primary" onClick={() => handleDelete(elem.id)}><DeleteIcon /></IconButton>
                    </Tooltip>

                  </div>
                </Card>

              </div>

            )
          })
        }
        <div style={styles.todo}>
          {
            (list && list[0]) ? <Button style={styles.todoitems} variant="raised" color="primary" onClick={() => handlLocalState(list)}>Submit</Button> : null

          }
          {
            (list && list[0]) ? <Button style={styles.todoitems} variant="raised" color="secondary" onClick={() => handleDeleteAll()}>Remove All</Button> : null
          }

        </div>

      </div >
    </div>
  )
}
export default Form;