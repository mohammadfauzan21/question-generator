import React from 'react'
import "/src/styles.css";

const Question = () => {
    return (
        <div className="box-question">
            <div className="question-section">
                <p className="text">
                    Q1 Which of the following sentences contains a subject-verb agreement error?
                </p>
            </div>
            <div className="option-section">
                <table>
                    <tbody>
                        <tr className='option-row'>
                            <th>
                                <button>
                                    <div className='option'>A</div>
                                    <p>
                                        This book i lent you is on the table
                                    </p>
                                </button>
                            </th>
                            <th>
                                <button>
                                    <div className='option'>B</div>
                                    <p>
                                        This book i lent you is on the table
                                    </p>
                                </button>
                            </th>
                        </tr>
                        <tr className='option-row'>
                            <th>
                                <button>
                                    <div className='option'>C</div>
                                    <p>
                                        the team of players are working hard to win the championship
                                    </p>
                                </button>
                            </th>
                            <th>
                                <button>
                                    <div className='option'>D</div>
                                    <p>
                                        the team of players are working hard to win the championship
                                    </p>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Question