import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    state = {
        name: '',
        amount: 1
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired,
        loadAccount: PropTypes.func.isRequired
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        const { name, amount } = this.state;
        const lead = { name, amount };
        this.props.addLead(lead);
        this.setState({
            name: "",
            amount: 1
        });
    }

    render() {
        const { name, amount } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Place a Bet</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input
                            type="number"
                            name="amount"
                            className="form-control"
                            onChange={this.onChange}
                            value={amount}
                            min="1"
                            max="1000"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);
