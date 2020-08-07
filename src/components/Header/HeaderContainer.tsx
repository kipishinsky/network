import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getMyAccountPageThunkCreator, setAuthUserData} from '../../redux/auth_reducer'

class HeaderContainer extends React.Component {

    componentDidMount() {
        // @ts-ignore
        this.props.getMyAccountPageThunkCreator()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, getMyAccountPageThunkCreator})(HeaderContainer)
