import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Input } from 'native-base';

class TextInput extends Component {
    render(){
        return (
            <Input 
                placeholder = { this.props.placeholder }
            />
        )
    }
}

export default connect()(TextInput);
