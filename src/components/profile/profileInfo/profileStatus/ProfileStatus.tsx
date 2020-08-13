import React, { Component } from 'react'
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string,
    updateStatus: () => void
}

export default class ProfileStatus extends Component <PropsType> {
    state = {
        editMode: false,
        status: this.props.status
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
        // @ts-ignore
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: any) => {

        this.setState({status: e.target.value})
    }

    render() {

        return (
            <div>
                {!this.state.editMode ?
                <div>
                    <span onClick={this.activateEditMode}>
                        {this.props.status || 'напиши'}
                    </span>
                </div>
                :
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status} />
                </div>
                }
            </div>

        )
    }
}
