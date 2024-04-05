- Create vanilla JS app with vite: `npm create vite@latest <project-name>`
- Install dependencies
  - three.js: `npm install three`
- Server website locally: `npm run dev`

# Three.js setup

- 1.scene (container holds objects, camera and lights)
- 2.camera (helps to look inside a scene) common-persepctive camera
  - First arg is field of view based on full 360
  - Aspect ratio based users browser window, calc windows inner width by inner height
  - View frustrum to control which objects are visible relative to camera itself
- 3.renderer- render the graphics to the scene
  - Search dom element to use canvas with id of background
  - Pixel ratio
