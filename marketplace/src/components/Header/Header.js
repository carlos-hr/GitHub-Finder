import React from 'react';
import { Head } from './styled';

export default class Header extends React.Component {

    render() {

        return (
            <Head>
                <p onClick={this.props.onClickHome}>Header</p>
            </Head>
        )
    }
}