const actions = [
  '', '-hover', '-focus-within', '-active', '-valid', '-invalid'
] 

const sides = [
  '', '-top', '-right', '-bottom', '-left',
]

const css = String.raw; export default css`
* {
  margin: 0;
  box-sizing: border-box;
}

html {
  /* COLORS (RGB) */

  --primary-rgb: 0, 0, 255; /* blue */
  --secondary-rgb: 255, 165, 0; /* orange */
  --success-rgb: 0, 255, 0; /* green */
  --danger-rgb: 255, 0, 0; /* red */
  --warning-rgb: 255, 255, 0; /* yellow */
  --info-rgb: 0, 255, 255; /* cyan */
  --dark-rgb: 0, 0, 0; /* black */
  --muted-rgb: 128, 128, 128; /* gray */
  --light-rgb: 211, 211, 211; /*lightgray */

  --primary: rgb(var(--primary-rgb));
  --secondary: rgb(var(--secondary-rgb));
  --success: rgb(var(--success-rgb));
  --danger: rgb(var(--danger-rgb));
  --warning: rgb(var(--warning-rgb));
  --info: rgb(var(--info-rgb));
  --dark: rgb(var(--dark-rgb));
  --muted: rgb(var(--muted-rgb));
  --light: rgb(var(--light-rgb));

  /* TYPOGRAPHY */

  --font-size-step: 0.25rem;
  --line-height-step: 0.5;
  --word-spacing-step: 0.1rem;
  --letter-spacing-step: 0.05rem;

  /* SPACING */

  --margin-step: 4px;
  --padding-step: 4px;
  --height-step: 16px;
  --width-step: 16px;

  /* LAYOUT */

  --column-step: 240px;

}

/* COLORS */

${actions.map(action => css`
[style*='--color${action}:']${action.replace('-', ':')} {
  color: var(--color${action});
}
`.trim()).join('\n')}

${actions.map(action => css`
[style*='--background${action}:']${action.replace('-', ':')} {
  background: var(--background${action});
}
`.trim()).join('\n')}

/* TYPOGRAPHY */

[style*='--font-size:'] {
  font-size: calc(var(--font-size-step) * var(--font-size));
}
[style*='--line-height:'] {
  font-size: calc(var(--line-height-step) * var(--line-height));
}
[style*='--word-spacing:'] {
  font-size: calc(var(--word-spacing-step) * var(--word-spacing));
}
[style*='--letter-spacing:'] {
  font-size: calc(var(--letter-spacing-step) * var(--letter-spacing));
}

/* SPACING */

${sides.map(side => css`
[style*='--margin${side}:'] {
  margin${side}: calc(var(--margin-step) * var(--margin${side}));
}
`.trim()).join('\n')}
[style*='--margin-horizontal:'] {
  margin-left: calc(var(--margin-step) * var(--margin-horizontal));
  margin-right: calc(var(--margin-step) * var(--margin-horizontal));
}
[style*='--margin-vertical:'] {
  margin-top: calc(var(--margin-step) * var(--margin-vertical));
  margin-bottom: calc(var(--margin-step) * var(--margin-vertical));
}

${sides.map(side => css`
[style*='--padding${side}:'] {
  padding${side}: calc(var(--padding-step) * var(--padding${side}));
}
`.trim()).join('\n')}
[style*='--padding-horizontal:'] {
  padding-left: calc(var(--padding-step) * var(--padding-horizontal));
  padding-right: calc(var(--padding-step) * var(--padding-horizontal));
}
[style*='--padding-vertical:'] {
  padding-top: calc(var(--padding-step) * var(--padding-vertical));
  padding-bottom: calc(var(--padding-step) * var(--padding-vertical));
}

/* LAYOUT */

[style*='--display:'] {
  display: var(--display);
}
[style*='--child-display:'] > *:last-child {
  display: var(--child-display);
}
[style*='--adjacent-display:'] + * {
  display: var(--adjacent-display);
}

[style*='--columns:'] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(
    min(100%, max(var(--column-step), 100%/var(--columns))), 1fr));
}

[style*='--width:'] {
  width: calc(var(--width-step) * var(--width));
}
[style*='--max-width:'] {
  max-width: calc(var(--width-step) * var(--max-width));
}
[style*='--min-width:'] {
  min-width: calc(var(--width-step) * var(--min-width));
}

[style*='--height:'] {
  height: calc(var(--height-step) * var(--height));
}
[style*='--max-height:'] {
  max-height: calc(var(--height-step) * var(--max-height));
}
[style*='--min-height:'] {
  min-height: calc(var(--height-step) * var(--min-height));
}


/*


[style*='--margin:'] {
  margin: calc(4px * var(--margin));
}
*/


`
