import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Currency from '../../../images/currency.svg'

export class AccountInfo extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    render() {
        const { account } = this.props.auth;
        return (
            <div className="card">
                <div className="card-header">
                    My Currency
                </div>
                <div className="card-body">
                    <div className="d-flex mb-3">
                        <img src={Currency} width='50' height='50' />
                        <h1 className="ml-3 font-weight-bold">{account ? `${account.currency}` : ""}</h1>
                    </div>
                    <h5 className="card-text font-weight-normal">You currently have some points to place a bet!</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(AccountInfo)
