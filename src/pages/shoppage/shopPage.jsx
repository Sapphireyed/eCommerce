import React from 'react'
import shopData from './shopData'
import PreviewCollection from '../../components/preview-collection/preview-collection.jsx'

class ShopPage extends React.Component {
    constructor() {
        super()

        this.state = {
            collections: shopData
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div>
                {
                  collections.map(({id, ...collectionProps}) => (
                      <PreviewCollection key={id} {...collectionProps} />
                  ))
                }
            </div>
            
        )
    }
}

export default ShopPage