// Import fontawesome-subset
import { fontawesomeSubset } from 'fontawesome-subset';
import { writeFileSync } from 'fs';
// Create or append a task to be ran with your configuration

(async () => {
	const solid = ['envelope', 'image', 'download', 'house'];
	const brands = ['discord', 'twitter', 'linkedin', 'github'];
	await fontawesomeSubset(
		{
			solid,
			brands
		},
		'static/webfonts'
	);
	writeFileSync(
		'src/scss/_icons.scss',
		`
$subset: (
	${solid.map((i) => `${i}: $fa-var-${i},`).join('\n')}
);
@each $name, $icon in $subset {
  .#{$fa-css-prefix}-#{$name}::before { content: unquote("\\"#{ $icon }\\""); }
}`
	);
	writeFileSync(
		'src/scss/brands.scss',
		`
@import 'functions';
@import 'variables';

:root, :host {
  --#{$fa-css-prefix}-style-family-brands: 'Font Awesome 6 Brands';
  --#{$fa-css-prefix}-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';
}

@font-face {
  font-family: 'Font Awesome 6 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: $fa-font-display;
  src: url('#{$fa-font-path}/fa-brands-400.woff2') format('woff2'),
    url('#{$fa-font-path}/fa-brands-400.ttf') format('truetype');
}

.fab,
.#{$fa-css-prefix}-brands {
  font-weight: 400;
}
$subset-brand: (
	${brands.map((i) => `${i}: $fa-var-${i},`).join('\n')}
);
@each $name, $icon in $subset-brand {
  .#{$fa-css-prefix}-#{$name}:before { content: unquote("\\"#{ $icon }\\""); }
}`
	);
})();
