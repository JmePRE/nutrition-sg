import React, { Component, useState, useEffect } from 'react'
import { Table, Button, message as Message, Alert } from 'antd'

function HistoryScreen(props) {
  const [message, setMessage] = useState({
    message: 'Warning: Daily calorie intake exceeded',
    description:
      'Your daily energy intake has exceeded the recommended for the average human. You are advised to watch your remaining calorie intake for the day.',
  })
  /*
  const [userHistory, setUserHistory] = useState([
    {
      name: 'Brown rice laksa noodles, cooked',
      energy: '107 kcal',
      time_added: 1645932161,
    },
    {
      name: 'Brown rice laksa noodles, cooked',
      energy: '107 kcal',
      time_added: 1645932161,
    },
    {
      name: 'Brown rice laksa noodles, cooked',
      energy: '107 kcal',
      time_added: 1645932161,
    },
  ]) */

  return (
    <div>
      <h1>My Food Log</h1>
      {message ? (
        <Alert
          message={message.message}
          description={message.description}
          type="error"
          showIcon
        />
      ) : null}
      <Table
        title={() => <h3>Deal Information</h3>}
        columns={[
          {
            title: 'Name of Food',
            dataIndex: 'name',
            key: 'energy',
          },
          {
            title: 'Energy (Kcal)',
            dataIndex: 'energy',
            key: 'energy',
          },
          {
            title: 'Time Added',
            dataIndex: 'time_added',
            key: 'time_added',
            render: (text, record) => (
              <div className="dates">
                <p>{new Date(record.time_added * 1000)}</p>
              </div>
            ),
          },
          {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            render: () => <Button>Edit</Button>,
          },
        ]}
        dataSource={userHistory}
        pagination={false}
      />
    </div>
  )
}

export default HistoryScreen
