import React from 'react'
import "/src/styles.css";
import HistoryList from '../component/HistoryList';

const History = () => {
  return (
    <section className="history">
      <div className="content">
        <h1 className="header-text">Your History of Practice</h1>
        <div className="core-content">
          <HistoryList />
        </div>
      </div>
    </section>
  )
}

export default History