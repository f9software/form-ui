import * as React from 'react';
import { Field, FieldProps } from './Field';

export interface FormProps {
    action: string;
    method: string;
    title: string;
    description: string;
    fields: FieldProps[];
    data: {[key: string]: any};
}

export class Form extends React.Component<FormProps> {
    render() {
        const props = this.props;
        const fields = props.fields;
        const data = props.data;

        return (
            <form action={props.action} method={props.method}>
                <h2>{props.title}</h2>
                {props.description ? <p>{props.description}</p> : null}
                {fields.map(field => <Field {...field} value={data[field.name]} />)}
                
                <div>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </form>
        );
    }
}
