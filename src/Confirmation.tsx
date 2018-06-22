import * as React from 'react';

export interface Props {
    message: string;
}

export class Confirmation extends React.Component<Props> {
    render() {
        return (
            <div>Saved succesfully. Thank you!</div>
        );
    }
}
