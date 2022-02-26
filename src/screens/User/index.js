import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Descriptions } from 'antd'

function UserScreen(props) {
  return (
    <div>
      <h1>User Profile</h1>
      <img src="https://pyxis.nymag.com/v1/imgs/420/315/3b6ae6ef32e3236001593863a78399b0d3-queen-elizabeth.rsquare.w330.jpg"></img>

      <br></br>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Date of Birth">01/01/1922</Descriptions.Item>
        <Descriptions.Item label="Age">100</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <br></br>
      <Descriptions title="Health Information" bordered>
        <Descriptions.Item label="Chronic Conditions" span={3}>
          Diabetes Mellitus, Hypertension
        </Descriptions.Item>
        <Descriptions.Item label="Medications" span={3}>
          Salbultamol, Valsartan
        </Descriptions.Item>
        <Descriptions.Item label="Remarks" span={3}>
          Broke many bones
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default UserScreen
