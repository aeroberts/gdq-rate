const Form = () => {
    // Value = { radio, comment }
    const [value, setValue] = React.useState("");

    function submit() => {
        const { radio, comment } = value;
        fetch(...);
    }

    return (
        <form onSubmit={}>
            <label for="one-star">
                One Star
                <input type="radio" id="one-star" value="1" checked>
            </label>

            <label for="two-star">
                Two Star
                <input type="radio" id="two-star" value="2">
            </label>

            <input type="text" value={value.comment} onChange={setValue} />
        </form>
    );
}
