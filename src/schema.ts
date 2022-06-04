import type { Image, LifeProgressBar } from './types';

const Image: Image = {
	imageUrl: {
		label: 'URL',
		placeholder: 'http://placekitten.com/800/1000',
		type: 'url'
	},
	altText: {
		label: 'Alt Text',
		placeholder: 'AltText',
		type: 'text'
	}
};

const LifeProgressBar: LifeProgressBar = {
	birth: {
		label: 'When is your birthday?',
		type: 'date'
	},
	death: {
		label: 'When do you plan to die?',
		type: 'date'
	},
	progressBarColor: {
		label: 'Color of Progress Bar',
		placeholder: '#000',
		type: 'color'
	}
};

export default {
	Image,
    LifeProgressBar
};
