import React from 'react';
import LangugaeContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LangugaeContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Изпрати'}
                </LangugaeContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}

            </ColorContext.Consumer>
        );
    }
}

export default Button;