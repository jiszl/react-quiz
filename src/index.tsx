import React from 'react';
import ReactDOM from 'react-dom/client';
import { boxersList } from "./boxers";
import './css/boxers.css';

const selectedItems: string[] = []

const handleCardSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: any) => {

    const index = selectedItems.indexOf(item.boxer.name)
    if(index === -1) {
        selectedItems.push(item.boxer.name);
        event.currentTarget.className += ' selected'
    } else {
        selectedItems.splice(index, 1);
        event.currentTarget.className = 'card';
    }

    let selectedBoxerNames = ""
    for (let name of selectedItems) {
        selectedBoxerNames += "<span>" + name + "</span>"
    }

    let infoDiv = document.getElementById('info')
    if (infoDiv) {
        infoDiv.innerHTML = selectedBoxerNames
    }
}

const App = ({ boxers }: { boxers: Record<string, string | number>[] }) => {
    return (
        <>      
            <h1>Boxers</h1>
            <div id='info'></div>
            <div id='cards'>
                {boxers.map((boxer) => <div key={boxer.name} className='card' onClick={(e) => {handleCardSelect(e, {boxer})}}>
                    <h2>{boxer.name}</h2>
                    <div className='header'>Division: {boxer.division}</div>
                    <div className='row'>
                        <div className='col header'>Fights:</div>
                        <div className='col'>{boxer.fights}</div>
                        <div className='col header'>Kos:</div>
                        <div className='col'>{boxer.kos}</div>
                    </div>
                    <div className='row'>
                        <div className='col header'>Win:</div>
                        <div className='col'>{boxer.win}</div>
                        <div className='col header'>Loss:</div>
                        <div className='col'>{boxer.loss}</div>
                    </div>
                </div>)}
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App boxers={boxersList} />
    </React.StrictMode>
);
