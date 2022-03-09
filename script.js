// TIC TAC TOE
// --- a module that contains all objects, and logic
//     for a game of tic-tac-toe
const game = (() => {
    // Game Variables
    // --- settings, elements, state
    let gameContainer   = document.getElementById('gameContainer')

    // Game Board
    const gameBoard = (() => {
        let _matrix     = new Array(9)
        const getField  = (num) => _matrix[num]

        const setField = (num, player) => {

        }

        /* get empty fields in matrix */

        /* clear the matrix board values */

        return {
            getField,
            setField
        }
    })()
    
    // Player
    // --- a factory to create player objects
    const Player = (icon) => {
        let _icon = icon
        // - returns the current icon for the player
        const getIcon = () => _icon
        // - sets the current icon for the player
        const setIcon = (icon, active) => {
            _icon = icon
            const btn = document.querySelector(`.btn.${icon.toLowerCase()}`)

            if (active) {
                btn.classList.add('selected')
                btn.classList.remove('not-selected')
            } else {
                btn.classList.remove('selected')
                btn.classList.add('not-selected')
            }
        }
        return {
            getIcon,
            setIcon
        }
    }

    // Game Controller
    // --- encapsulates the players, their symbols,
    //     checking for winner logic, players moves,
    //     etc...
    const gameCntrl = (() => {
        const _user = Player('x')
        const _comp = Player('o')

        // - returns the user and the computer players
        const getUser = () => _user
        const getComp = () => _comp

        const _checkRows = (matrix) => {
            for (let r = 0; r < 3; r++) {
                let row = []
                for (let i = r * 3; r < i * 3 + 3; i++) {
                    row.push(matrix.getField(i))
                }

                if (row.every(field => field == 'x') || row.every(field => field == 'o')) {
                    return true
                }
            }
            return false
        }

        const _checkColumns = (matrix) => {
            for (let c = 0; c < 3; c++) {
                let column = []
                for (let i = 0; i < 3; i++) {
                    column.push(matrix.getField(c + 3 * i))
                }

                if (column.every(field => field == 'x') || column.every(field => field == 'o')) {
                    return true
                }
            }
            return false
        }

        const _checkDiagonals = (matrix) => {
            diagonal1 = [matrix.getField(0), matrix.getField(4), matrix.getField(8)]
            diagonal2 = [matrix.getField(6), matrix.getField(4), matrix.getField(2)]
            if (diagonal1.every(field => field == 'x') || diagonal1.every(field => field == 'o')) {
                return true                
            } else if (diagonal2.every(field => field == 'x') || diagonal2.every(field => field == 'o')) {
                return true                
            }
        }

        const checkWin = (matrix) => {
            if (_checkRows(matrix) || _checkColumns(matrix) || _checkDiagonals(matrix)) {
                return true
            }
            return false
        }

        const checkDraw = (matrix) => {
            if (checkWin(matrix)) {
                return false
            }
            for (let i = 0; i < 9; i++) {
                const field = matrix.getField(i)
                if (field == undefined) {
                    return false
                }
            }
            return true
        }

        const changeIcon = (icon) => {
            if (icon == 'x') {
                _user.setIcon('x', true)
                _comp.setIcon('o')
            } else if (icon == 'o') {
                _user.setIcon('o', true)
                _comp.setIcon('x')
            }
            else throw 'Incorrect sign'
        }

        const playerTurn = (num) => {
            const field = gameBoard.getField(num)
            if (field == undefined) {
                gameBoard.setField(num, _user)
                if (checkWin(gameBoard)) {
                    (async () => {
                        await _sleep(500 + (Math.random() * 500))
                        endGame(_user.getIcon())
                    })()
                } else if (checkDraw(gameBoard)) {
                    (async () => {
                        await _sleep(500 + (Math.random() * 500))
                        endGame('Draw')
                    })()
                } else {
                    displayCntrl.deactivate()
                    (async () => {
                        await _sleep(250 + (Math.random() * 300))
                        // --- comp step
                        if (!checkWin(gameBoard)) {
                            displayCntrl.active()
                        }
                    })()
                }
            } else {
                console.log('Already Filled')
            }
        }

        const endGame = function(res) {
            const card = document.querySelector('.card')
            card.classList.remove('state1')
            card.classList.add('state2')

            // @@@ LEFT OFF HERE    
            // if (res == 'Draw' {

            // })
        }
    })

    const _init = (() => {

    })()

    return {
        playGame: function() {
            

        }
    }
})()

game.playGame()