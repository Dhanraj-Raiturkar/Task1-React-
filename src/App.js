import './App.css';
import Card from './UI/Card';
import classes from './UI/Card.module.css'
import Title from './UI//Title'
import InputForm from './UI/InputForm';
import React, {useState} from 'react'
import List from './UI/List';
import Menu from './UI/Menu';
import {useEffect} from 'react'

function App() {

  const [list, setList] = useState(JSON.parse(sessionStorage.getItem("list")) || []);
  const [deletedList, setDeletedList] = useState(JSON.parse(sessionStorage.getItem("deletedList")) || []);
  const[dispDeletedList, setDispDeletedList] = useState(true);

  const checkListItem = item => {
    list.map((i) => {
      if(i.id === item.id){
        if(i.checked){
          setList((prevList)=> {
            let newList = [{id:item.id, text:item.text, checked:false, deleted:false}, ...prevList.filter(element => element.id!==item.id)]
            return newList;
          })
        }else if(!i.checked){
          setList((prevList)=> {
            return prevList.filter(element => element.id!==item.id).concat({id:item.id, text:item.text, checked:true, deleted:false})
          })
        }
      }
    })
  }

  const deleteListItem = (item) => {
    setList((prevList) => {
      return prevList.filter(element => element.id!==item.id)
    })
    setDeletedList((prevList) => {
      return prevList.concat({...item, deleted:true});
    })
  }

  const addInput = (input) => {
    console.log(input);
    setList((prev) => {
      return [{id:Math.random().toString(), text:input, checked:false, deleted:false}, ...prev];
    })
  }

  const clearGroceryList = () => {
    setList([]);
  }

  const displayDeletedItems = () => {
    if(dispDeletedList){
      setDispDeletedList(false);
    }else if(!dispDeletedList){
      setDispDeletedList(true);
    }
  }

  const undoListItem = (item) => {

    setDeletedList((prevList) => {
      return prevList.filter(element => element.id!==item.id)
    })

    if(item.checked){
      setList((prevList)=> {
        return prevList.filter(element => element.id!==item.id).concat({...item, deleted:false})
      })
    }else if(!item.checked){
      setList((prevList)=> {
        let newList = [{...item, deleted:false}, ...prevList.filter(element => element.id!==item.id)]
        return newList;
      })
    }
  }

  useEffect( () => {
    sessionStorage.setItem("list",JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    sessionStorage.setItem("deletedList",JSON.stringify(deletedList));
  }, [deletedList]);

  return (
    <Card className={classes.card}>
      <Title text="Grocery Bud"/>
      <InputForm fetchInput={addInput} />
      <List items={list} check={checkListItem} delete={deleteListItem} deletedList='false' />
      <Menu clearList={clearGroceryList} deletedList={displayDeletedItems}/>
      {!dispDeletedList && <List items={deletedList} undo={undoListItem}/>}
    </Card>
  );
}


export default App;
