import React, { Component, useState, useEffect } from 'react'
import { Input, message as Message, Table, Button } from 'antd'
import ApiManager from './../../api/ApiManager'

const { Search } = Input

function AddScreen(props) {
  const [food, setFood] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSearch = async (value) => {
    console.log(value)
    setLoading(true)
    await ApiManager.getFoodList(value)
      .then((res) => {
        setFood(res)
        console.log(res)
      })
      .catch((err) => Message.error(err))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <h2>Add a new entry</h2>
      <div class="top-bar">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: '100%' }}
          addonBefore="Search Food"
          loading={loading}
        />
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
                render: () => <Button>Add to Log</Button>,
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
