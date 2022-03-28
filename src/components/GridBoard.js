import React from 'react'
import GridSquare from './GridSquare'

// Represents a 10 x 18 grid of gridsquares

export default function GridBaord(props) {
    let rowCount = 18;
    let colCount = 10;

    // generates an array of rowCount rows, each containing colCount GridSquares

    const grid = [];
    for( let row = 0; row < rowCount; row++ ){
        grid.push([])
        for ( let col = 0; col < colCount; col++ ) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="0" />);
        }
    }

    // The components generated in makeGrid are rendered in div.grid-board
    
    return(
        <div className="grid-board">
            {grid}
        </div>
    )
}