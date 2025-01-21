import React from 'react'
import Question from './Question'
import "/src/styles.css";

const QuestionList = ({questions}) => {
  return (
    <div className="content-question">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        {/* {questions.map((question) => (
          <Option key={question.id} option={question.option} nameIcon={question.nameIcon} path={question.navigate} />
        ))} */}
    </div>
  )
}

export default QuestionList

