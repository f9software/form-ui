import * as React from 'react';
import { Form, FormProps } from './Form';
import { Confirmation } from './Confirmation';

export interface Props {
    successMessage: string;
    submit: boolean;
    form: FormProps;
}

export class App extends React.Component<Props> {
    render() {
        const props = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.submit ? <Confirmation message={props.successMessage} /> : null}
                        {!props.submit ? <Form {...props.form} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
