import React from 'react';
import LangugaeContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LangugaeContext;

    render() {
        return (
            <div>
                Select a language:
                    <i className="flag gb" onClick={() => this.context.onLanguageChnage('english')} />
                <i className="flag bg" onClick={() => this.context.onLanguageChnage('bulgarian')} />
            </div>
        );
    }
}

export default LanguageSelector;