import 'navigation.js';
import 'hovereffect.js';

import AnchorJS from 'anchor-js';

import Reveal from 'reveal.js';
import Highlight from 'reveal.js/dist/plugin/highlight.esm.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';
import MathJax from 'reveal.js/dist/plugin/math.esm.js';


// Set up link anchors
const anchors = new AnchorJS();
anchors.options = { placement: 'left', icon: '#' };
anchors.add( '.article>h2, .article>h3, .article>h4' );


// Set up the homepage demo deck
Array.from( document.querySelectorAll( '.reveal-demo .reveal' ) ).forEach( deckElement => {

	let deck = new Reveal( deckElement, {
		embedded: true,
		hash: true,
		margin: 0.1,
		plugins: [ Markdown, Highlight ]
	});
	deck.initialize();

} );


// Set up inline example decks in the documentation
Array.from( document.querySelectorAll( '.reveal-example' ) ).forEach( deckElement => {

	// If this deck is paired with an input code block,
	// wrap them both in a shared container
	let code = deckElement.previousSibling;
	if( code.matches( 'pre' ) ) {
		let wrapper = document.createElement( 'div' );
		wrapper.className = 'reveal-example-wrapper';
		code.parentNode.insertBefore( wrapper, code );
		wrapper.appendChild( code );
		wrapper.appendChild( deckElement );
	}

	let deck = new Reveal( deckElement, {
		width: 900,
		height: 500,
		embedded: true,
		keyboard: false,
		progress: false,
		controlsTutorial: false,
		math: {
		  config: 'TeX-AMS_HTML-full'
		},
		plugins: [ Markdown, Highlight, MathJax ]
	} );
	deck.initialize();

} );