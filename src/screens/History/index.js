import React, { Component } from 'react'
import { Table, Button } from 'antd'

function HistoryScreen(props) {
  const userHistory = [
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
  ]

  return (
    <div>
      <h1>My Food Log</h1>
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
            title: 'Add',
            dataIndex: 'add',
            key: 'add',
            render: () => <Button>Add to Log</Button>,
          },
        ]}
        dataSource={userHistory}
        pagination={false}
      />
    </div>
  )
}

export default HistoryScreen
