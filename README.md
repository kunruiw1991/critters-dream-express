# Critter Dream Express 🚂🌙

A little railway puzzle made for touch screens and young builders.

**[Play the game](https://kunruiw1991.github.io/critters-dream-express/)**

## How to play

1. Choose a straight or curved track, then tap an empty square. You can also drag tracks onto the board.
2. Tap a placed track to rotate it. Rotate the selected toolbox track with the rotate button or R.
3. Press **Let’s ride!** to test your route.
4. Pick up every waiting friend and reach the picnic to complete the puzzle.

Three puzzles feature LunaBat, SunnyFox, and PoppyDash. No timer or penalties; hints, undo, reset, optional synthesized sounds, and browser-local completion badges are included.

## Run

Serve this folder with any static HTTP server, then open index.html. There is no build step, backend, account requirement, or package installation.

Optional Google Fonts have local font fallbacks. All character illustrations and railway scenery are inline SVG; no external image assets are needed.

## Verify

```sh
node check.mjs
```

Checks all three complete solutions and every intended missing or incorrectly rotated track case. Desktop and phone layouts and all three train journeys were also checked in a browser.

## Files

- index.html — game interface
- style.css — responsive layout
- app.mjs — SVG artwork, interactions, animation, audio, local saves
- engine.mjs — puzzle data and route validation
- check.mjs — route checks

This is a small playable prototype. The artwork is a stylized interpretation of the family critter characters.
