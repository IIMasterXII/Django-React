import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';
import AccountInfo from './AccountInfo';

export default function Dashboard() {
    return (
        <div className="container position-relative" style={{ top: '50px' }}>
            <Fragment>
                <AccountInfo />
                <Form />
                <Leads />
            </Fragment>
        </div>
    )
}
