import React from 'react';
import './Options.css';

interface Props {
    title: string;
}

const Options: React.FC<Props> = function ({title}: Props) {


    return <>
        <div className="OptionsContainer">{title} Page</div>
    </>;
};

export default Options;
