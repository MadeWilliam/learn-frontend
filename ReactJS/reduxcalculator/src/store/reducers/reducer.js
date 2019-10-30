const initialState = {
    submit: false,
    hasil: 0,
    angka1: 0,
    angka2: 0,
    operator: ""
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ChangeHandler":
            const nama = action.name;
            const isi = action.value;
            return { ...state, [nama]: isi };
        case "SubmitHandler":
            const angka1 = parseInt(state.angka1);
            const angka2 = parseInt(state.angka2);
            const operator = state.operator;
            let hasil = 0;
            switch (operator) {
                case "+":
                    hasil = angka1 + angka2;
                    break;
                case "-":
                    hasil = angka1 - angka2;
                    break;
                case "/":
                    hasil = angka1 / angka2;
                    break;
                default:
                    hasil = angka1 * angka2;
                    break;
            }
            return { ...state, hasil: hasil, submit: true };
        case "BackHandler":
            return { ...state, submit: false };
        default:
            return state;
    }
}
export default reducer;