import React, { Component, useState, useEffect } from 'react'
import { Table, Button, message as Message, Alert } from 'antd'

function HistoryScreen(props) {
  const [message, setMessage] = useState({
    message: 'Warning: Daily calorie intake exceeded',
    description:
      'Your daily energy intake has exceeded the recommended for the average human. You are advised to watch your remaining calorie intake for the day.',
  })
  
  const [userHistory, setUserHistory] = useState([
    {
      name: 'Brown rice laksa noodles, cooked',
      energy: '107 kcal',
      time_added: 1645933438208,
    },
    {
      name: 'Burger, double whopper with cheese, Burger King',
      energy: '266 kcal',
      time_added: 1645933468208,
    },
  ])

  return (
    <div>
      <h2>My Food Log</h2>
      {message ? (
        <Alert
          message={message.message}
          description={message.description}
          type="error"
          showIcon
        />
      ) : null} 
      <Table
        title={() => <h3>Total Intake: <strong>{ userHistory.map(u => parseFloat(u.energy.split(' ')[0])).reduce((a, b) => a + b, 0) }</strong> kcal</h3>}
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
              <span>{new Date(record.time_added).toLocaleString()}</span>
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
