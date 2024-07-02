# Memory Game

A fun and engaging memory game built with React. Test your memory skills by matching pairs of blocks with the same icons. The game includes a timer and keeps track of your attempts.

Start Playing: [here](reactjs-vite-memorygame.netlify.app)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Gameplay](#gameplay)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Interactive Gameplay**: Flip blocks to find matching pairs.

- **Timer**: A countdown timer adds a challenge to the game.

- **Audio Feedback**: Enjoy sound effects for correct and wrong matches.

- **Wrong Tries**: show number of wrong tries.

- **Winning Screen**: Celebrate your victory with a winning screen and confetti.

- **Responsive Design**: Play the game on any device.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Khalil-Elemam/react-memory-game.git
   cd react-memory-game
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App:**:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to play the game.

## Usage

1. **Start the Game**:

   - The game board will display all blocks with their icons for 3 seconds.
   - After 3 seconds, the blocks will flip back to their hidden state.

2. **Flip Blocks**:

   - Click on a block to reveal its icon. Try to find the matching pair.

3. **Match Blocks**:

   - If the icons match, the blocks will remain visible. If not, they will flip back after a short delay.

4. **Win the Game**:
   - Match all pairs before the timer runs out to win the game. A winning screen will appear, celebrating your success.

## Gameplay

- **Initial State**: All blocks are revealed for 3 seconds at the start of the game, then they flip back to their hidden state.

- **Flipping Blocks**: Click to flip blocks and reveal their icons.

- **Matching Logic**: If two flipped blocks have the same icon, they remain visible. If not, they flip back.

- **Timer**: The game includes a timer. Complete the game before the timer runs out.

- **End of Game**: The game ends when all pairs are matched or the timer finishes.

## Technologies Used

- React.js
- HTML
- CSS
- VITE

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## Acknowledgements

- Special thanks to the contributors of this project.

- Audio assets from [Freesound](https://freesound.org/), which provided the sound effects for correct and wrong matches.

- Confetti effect by [react-confetti](https://github.com/alampros/react-confetti), used for the winning screen celebration.

- Icons from [FontAwesome](https://fontawesome.com/) for the game blocks.

- Inspiration and guidance from the React community and various online tutorials.

## Credits

This project was created by [Khalil Elemam].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
