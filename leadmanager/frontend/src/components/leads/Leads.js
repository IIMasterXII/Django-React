import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads'

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Bets</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.amount}</td>
                                <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leadsReducer.leads
});

const mapDispatchToProps = dispatch => {
    return {
        getLeads: () => dispatch(getLeads()),
        deleteLead: () => dispatch(deleteLead())
    }
}

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
