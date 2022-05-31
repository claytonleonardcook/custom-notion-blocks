export const Image = {
	url: {
		label: 'Image URL',
		type: 'url',
		placeholder: 'http://placekitten.com/200/300'
	},
	alt: {
		label: 'Alt Text',
		type: 'text',
		placeholder: 'Placeholder Alt Text'
	}
};

export const LifeProgressBar = {
	birthday: {
		label: 'When is your birthday?',
		type: 'date',
		placeholder: 'mm/dd/yyyy'
	},
	deathYear: {
		label: 'What year do you expect to live until?',
		type: 'number',
		placeholder: 2100
	},
	progressBarColor: {
		label: 'Progress Bar Color',
		type: 'color',
		placeholder: '#000'
	}
};

export const Other = {
	backgroundColor: {
		label: 'Background Color',
		type: 'color',
		placeholder: '#000'
	}
};

export default {
	Image,
    LifeProgressBar,
	Other
};
