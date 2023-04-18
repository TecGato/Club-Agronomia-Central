import React from 'react';

export const PreviewItem = ({name, date, hourBegin}) => {
    return (
        <div className="grid grid-cols-3">
            <p className="text-sm text-neutral-800 truncate">{name}</p>
            <p className="text-sm text-neutral-800 truncate">{date}</p>
            <p className="text-sm text-neutral-800 truncate">{hourBegin}</p>
        </div>
    );
};
