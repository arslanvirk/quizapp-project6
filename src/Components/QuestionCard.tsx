import React, { useState } from 'react';
import "../App.css";

export const QuestionCard: React.FC<QuestionPropType> = ({ question, options, callBackSubmitFunc }) => {

    const [selectedAns, setSelectedAns] = useState("");
    const onSelectionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAns(e.target.value);
    }

    return (
        <div className="Card">
            <div className="Parag">
                <p dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <form onSubmit={(e) => callBackSubmitFunc(e, selectedAns)}>
                {
                    options.map((option: string, index: number) => {
                        return (
                            <div key={index}>
                                <label className="radio">
                                    <input value={option} name="option" type="radio"
                                        onChange={onSelectionHandler}
                                        checked={selectedAns === option}
                                        required
                                    />
                                    <span dangerouslySetInnerHTML={{ __html: option }} />
                                </label>
                            </div>);
                    })
                }
                <br />
                <br />
                <div className="sub-main">
                    <button
                        className="button-two"
                    >
                        <span>Submit</span>
                    </button>
                </div>
            </form>

        </div>
    );
}
