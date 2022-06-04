type Label = string;
type Placeholder = string;
type Type = 'url' | 'text' | 'color' | 'number' | 'date' | 'datetime-local' | 'range' | 'email' | 'tel' | 'time' | 'week';

type Input = {
    label: Label;
    placeholder: Placeholder;
    type: Type;
};

export interface Image {
    imageUrl: Input;
    altText: Input;
};

export interface LifeProgressBar {
    birth: Omit<Input, 'placeholder'>;
    death: Omit<Input, 'placeholder'>;
    progressBarColor: Input;
};