import React from 'react'
import "/src/styles.css";
import HistoryTest from '../component/HistoryTest';

const HistoryList = () => {
    return (
        <div className="content-history">
            <HistoryTest />
            <HistoryTest />
            <HistoryTest />
            <HistoryTest />
            <HistoryTest />
            <HistoryTest />
            <HistoryTest />
            {/* {questions.map((question) => (
            <Option key={question.id} option={question.option} nameIcon={question.nameIcon} path={question.navigate} />
            ))} */}
        </div>
    )
}

export default HistoryList