import React from 'react'
import { useSelector } from 'react-redux'
import GridSquare from './GridSquare'
import { shapes } from '../utils'

// Represents a 10 x 18 grid of gridsquares

export default function GridBoard(props) {
    const game = useSelector((state) => state.game )
    const { grid, shape, rotation, x, y, isRunning, speed } = game
    const block = shapes[shape][rotation]
    const blockColor = shape
    

    // map rows
    const gridSquares = grid.map((rowArray, row) => {
        // map columns
        return rowArray.map((square, col) => {
            // Find the block x and y on the shape grid
            // by subtracting the x and y from the col and the 
            // row we get the position of the upper left corner of the 
            // block array as if it was superimposed over the main grid
            const blockX = col - x
            const blockY = row - y
            let color = square
            // map current falling block to grid
            // For any squares that fall on the grid we need to look
            // at the block array and see if there is a 1 in this case
            // we use the block color
            if ( blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length )
            {
                color = block[blockY][blockX] === 0 ? color : blockColor
            }
            // Generate a unique key for every block
            const k = row * grid[0].length + col;
            // Generate a grid square
            return <GridSquare key={k} color={color} />
        })
    })
    // generates an array of rowCount rows, each containing colCount GridSquares

    /*
    let rowCount = 18;
    let colCount = 10;
    const grid = [];

    for( let row = 0; row < rowCount; row++ ){
        grid.push([])
        for ( let col = 0; col < colCount; col++ ) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="0" />);
        }
    }
    */
    
    // The components generated in makeGrid are rendered in div.grid-board
    
    return(
        <div className="grid-board">
            {gridSquares}
        </div>
    )
}