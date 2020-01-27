import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() {
    return (
        <div className="container position-relative" style={{ top: '50px' }}>
            <Fragment>
                <Form />
                <Leads />
            </Fragment>
        </div>
    )
}
