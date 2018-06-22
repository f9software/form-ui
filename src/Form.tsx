import * as React from 'react';
import { Field, FieldProps } from './Field';

export interface FormProps {
    id: string;
    action: string;
    method: string;
    title: string;
    description: string;
    fields: FieldProps[];
    data?: {[key: string]: any};
    onSubmit: (e: React.FormEvent) => void;
    // onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Form extends React.Component<FormProps> {
    constructor(props: FormProps) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    private onSubmit(e: React.FormEvent) {
        e.preventDefault();
        this.props.onSubmit(e);
    }

    render() {
        const props = this.props;
        const fields = props.fields;
        const data = props.data;

        return (
            <form action={props.action} method={props.method} onSubmit={this.onSubmit}>
                <input type="hidden" name="formId" value={props.id} />

                <h2 className="mb-5">{props.title}</h2>
                {props.description ? <p className="my-5">{props.description}</p> : null}
                {fields.map(field => <Field {...field} value={data ? data[field.name] : undefined} />)}
                
                <div className="mt-5">
                    <button type="submit" className="btn btn-success">Salveaza</button>
                    {/* <button className="btn btn-secondary" onClick={props.onCancel}>Cancel</button> */}
                    <button type="reset" className="btn btn-link ml-3">Sterge</button>
                </div>
            </form>
        );
    }
}
