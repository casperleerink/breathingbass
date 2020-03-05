import React from 'react'
import { IndexTemplate } from '../../templates/index-page'

const Preview = ({ widgetFor }) => {
    return (
        <IndexTemplate
            content={widgetFor('body')}
        />
    )
}


export default Preview