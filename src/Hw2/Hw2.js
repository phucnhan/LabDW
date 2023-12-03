import React from 'react';
import './Hw2.css';

const WhiteKey = ({ note }) => {
    return <div className={`white-key ${note}`}></div>;
};

const BlackKey = ({ note }) => {
    return <div className={`black-key ${note}`}></div>;
};

const Piano = () => {
    const isBlackKey = (index) => {
        const blackKeyIndices = [1, 3, 6, 8, 10];
        return blackKeyIndices.includes(index % 12);
    };

    const renderKeys = () => {
        const keys = [];
        for (let octave = 1; octave <= 7; octave++) {
            for (let keyIndex = 1; keyIndex <= 12; keyIndex++) {
                const note = `C${octave}_${keyIndex}`;
                if (isBlackKey(keyIndex)) {
                    keys.push(<BlackKey key={note} note={note} />);
                } else {
                    keys.push(<WhiteKey key={note} note={note} />);
                }
            }
        }
        return keys;
    };

    return <div className="piano">{renderKeys()}</div>;
};

export default Piano;
