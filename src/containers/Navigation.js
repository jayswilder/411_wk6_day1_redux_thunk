import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Navigation);