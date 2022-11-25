export const SelectBox = ({ id, select, chengedOption }) => {

    return (
        <>
            <div className="select">
                <select id={id} onChange={select} value={chengedOption}>
                    <option value={1}>O'zbekcha</option>
                    <option value={2}>Ruscha</option>
                    <option value={3}>Inglizcha</option>
                </select>
            </div>
        </>
    );
};