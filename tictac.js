import React,{useState} from 'react'
import'./App.css';
const App=()=>{
    const[board, setBoard]= useState(Array(9),fill(null));
    const[isXNext,setIsXNext]=useState(true);
    
    const handleClick=(index)=>{const newBoard=[...board];
        if(newBoard[index] II calculateWinner(newBoard)) return;
        newBoard[index]= isXNext?'X':'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);


    };
    const renderSqaure=index
}