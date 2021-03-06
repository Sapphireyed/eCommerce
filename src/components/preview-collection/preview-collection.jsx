import React from 'react'
import CollectionItem from '../collection-item/collection-item.jsx'
import './preview-collection.scss'

const PreviewCollection = ({ title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...collectionItemProps}) => (
                    <CollectionItem key={id}{...collectionItemProps} />
            ))}
        </div>
    </div>
);

export default PreviewCollection