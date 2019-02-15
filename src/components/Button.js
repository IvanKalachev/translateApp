import React from 'react';
import LangugaeContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Изпрати'
    }


    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LangugaeContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
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