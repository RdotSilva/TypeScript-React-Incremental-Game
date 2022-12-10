# TypeScript React Incremental Game

**Work In Progress**

Play at your own risk!

Incremental game built using React and TypeScript. This is rough first version that will most likely change in time.

I'll be slowly adding features until it is a fully playable game.

---

# Game Rules

1. Click the icons to increase your total score.

   Once you score reaches a certain threshold a button will appear that will allow you to upgrade that particular icon.

   - x2 score per click (double current score for every click)
   - Auto click (auto click every icon and generate score)

2. Click special power ups to temporarily grant rewards.

   - Increase score by x2 for all icons
   - Instantly double your score

3. Prestige and earn special permanent rewards
   - Once you have enough points the `Prestige` button will appear
   - Every prestige will grant you more points
   - Spend your points on special permanent power ups in the Prestige Menu

---

# Game Config
You can play the game using the base game configuration or edit these values to create your own incremental game rules!

1. `src/config/config.ts`

     - Controls various configurations for game timers, general power ups and upgrade/tier levels.

2. `src/config/prestige.ts` 

   - Controls various configurations for prestige, and prestige menu.

## Installation

1. Install dependencies in main project folder.

```
npm install
```

Run the client

```
npm start
```

---

## Built With

- TypeScript
- React (React hooks)
- Material UI
- Styled Components
- VSCode

---

## Screenshots

![Game Overview](https://tinyurl.com/2lbfoskf "Game Overview")

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
