import React from 'react';

const Form = () => {
    const [value, setValue] = React.useState({ radio: true, comment: "" });

    const submit = () => {
        const { radio, comment } = value;
        // fetch(...);
    }

    return (
        <form>
            <label>
                One Star
                <input type="radio" id="one-star" value="1" checked />
            </label>

            <label>
                Two Star
                <input type="radio" id="two-star" value="2" />
            </label>

            <input type="text" value={value.comment} />
        </form>
    );
}
