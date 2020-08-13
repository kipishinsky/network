import React, { Component } from 'react'
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
}

export default class ProfileStatus extends Component <PropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span onClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>
                :
                <div>
                    <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.props.status} />
                </div>
                }
            </div>

        )
    }
}
