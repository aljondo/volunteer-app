import React, { Component } from 'react';
import FullHeaderContainer from '../../containers/Header/FullHeaderContainer'
import FooterContainer from '../../containers/FooterContainer'
import Faq from '../../components/Faq/Faq'

class FaqView extends Component {
    render() {
        return (
            <div>
                <FullHeaderContainer />
                <Faq />
                <FooterContainer />
            </div>
        );
    }
}

export default FaqView
