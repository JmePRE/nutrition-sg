import React, { Component, useState, useEffect } from 'react'
import { Input, message as Message, Table, Button } from 'antd'
import ApiManager from './../../api/ApiManager'

const { Search } = Input

function AddScreen(props) {
  const [food, setFood] = useState(null)
  const [message, setMessage] = useState(null)

  const onSearch = async (value) => {
    console.log(value)
    await ApiManager.getFoodList(value)
      .then((res) => {
        setFood(res.data)
        console.log(res.data)
      })
      .catch((err) => Message.error(err))
  }

  return (
    <div>
      <div class="top-bar">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: '100%' }}
          addonBefore="Search Food"
        />
        {message ? (
          <Alert message={message.message} type="success" closable />
        ) : null}
        {food ? (
          <Table
            title={() => <h3>Food Details</h3>}
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
                title: 'Add',
                dataIndex: 'add',
                key: 'add',
                render: () => (
                  <Button onClick={setMessage('Successfully added')}>
                    Add to Log
                  </Button>
                ),
              },
            ]}
            dataSource={food}
            pagination={false}
          />
        ) : null}
      </div>
    </div>
  )
}

export default AddScreen
