import React from 'react';

export const PreviewItem = ({columnOne, columnTwo, columnThree}) => {
    return (
        <div className="grid grid-cols-3">
            <p className="text-sm text-neutral-800 truncate">{columnOne}</p>
            <p className="text-sm text-neutral-800 truncate">{columnTwo}</p>
            <p className="text-sm text-neutral-800 truncate">{columnThree}</p>
        </div>
    );
};
