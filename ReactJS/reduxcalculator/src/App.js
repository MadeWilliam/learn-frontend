import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { backHandler, changeHandler, submitHandler } from "./store/actions/action";

const mapStateToProps = bar => ({
    submit: bar.submit,
    hasil: bar.hasil,
    angka1: bar.angka1,
    angka2: bar.angka2,
    operator: bar.operator
});

const mapDispatchToProps = foo => ({
    changeHandler: (name, value) => foo(changeHandler(name, value)),
    backHandler: () => foo(backHandler()),
    submitHandler: () => foo(submitHandler())
});

class App extends Component {
    render() {
        const { hasil, angka1, angka2, operator, submit, changeHandler, submitHandler, backHandler
        } = this.props;
        return (
            <div>
                <center>
                    {!submit ? (
                        <div>
                            <input type="number" name="angka1" placeholder="Angka 1"
                                onChange={event => { changeHandler(
                                        event.target.name,
                                        event.target.value
                                    );
                                }}
                            />
                            <br />
                            <br />
                            <select
                                name="operator"
                                onChange={event => {
                                    changeHandler(
                                        event.target.name,
                                        event.target.value
                                    );
                                }}
                            >
                                <option value="">=Pilih Operator=</option>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                                <option value="/">/</option>
                            </select>
                            <br />
                            <br />

                            <input type="number" name="angka2" placeholder="Angka 2"
                                onChange={event => {
                                    changeHandler(
                                        event.target.name,
                                        event.target.value
                                    );
                                }}
                                />
                            <br />
                            <br />
                                <input type="submit" onClick={submitHandler} value="Hasil"/>
                        </div>
                    ) : (
                        <div>
                            <h1>
                                Hasil {angka1} {operator} {angka2} adalah{" "}
                                {hasil}
                            </h1>
                            <button onClick={backHandler}>Back to Home</button>
                        </div>
                    )}
                </center>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
