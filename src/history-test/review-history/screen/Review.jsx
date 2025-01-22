import React from 'react'
import "/src/styles.css";
import QuestionList from '/src/practice-test/component/QuestionList';

const Review = () => {
  return (
    <section className="review">
      <div className="content">
        <h1 className="header-text">Your Result</h1>
        <div className="core-content">
          <div className="description">
            <div className="title">
              <p>Judul</p>
            </div>
            <div className="score">
              <div className="box-score">
                  <p>
                      5/10
                  </p>
              </div>
            </div>
          </div>
          <QuestionList />
        </div>
      </div>
    </section>
  )
}

export default Review