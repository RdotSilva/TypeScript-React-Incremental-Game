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

# Features Status

## Complete

- [x] Resources added and able to be clicked to increase score
- [x] Resource upgrades added for each resource based individual resource score
- [x] Randomized power-ups rewards added
- [x] Initial prestige system added

## In Progress

## Partially Complete

- [x] Prestige system

## Future

- [] Add new prestige upgrades
- [] Add new resources upgrades
- [] Add new power-up rewards
- [] Add the ability to save/load game data

## TODO

- [] Fix bug around double xp power up display after activating prestige #3

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

## Tests

E2E tests built using Playwright

Run the client to start localhost (tests will use this host)

```
npm start
```

Run the tests

```
npx playwright test
```

## Built With

- TypeScript
- React
- Material UI
- Styled Components
- VSCode
- Playwright

---

## Screenshots

![Game Overview](https://tinyurl.com/2lbfoskf "Game Overview")

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
