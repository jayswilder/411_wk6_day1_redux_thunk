import { connect } from 'react-redux';
import Login from '../components/Login';
import { updateUserInfo } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateUserInfo: () => dispatch(updateUserInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);