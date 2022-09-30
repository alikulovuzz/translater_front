export const SelectBox = ({ id, select }) => {

    return (
        <>
            <div className="select">
                <select id={id} onChange={select}>
                    <option value="">Tilni tanlang</option>
                    <option value="1">O'zbekcha</option>
                    <option value="2">Ruscha</option>
                    <option value="3">Inglizcha</option>
                </select>
            </div>
        </>
    );
};