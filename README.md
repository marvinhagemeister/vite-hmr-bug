# Vite hmr hot accept bug

Steps to reproduce:

1. Run `yarn install`
2. Run `yarn start`
3. Open `foo.js` & hit save

The console will only print `"B"` instead of the expected `"A"` and `"B"`.
