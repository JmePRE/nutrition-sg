import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Descriptions, Card, Tag } from 'antd'

function InsightsScreen(props) {
  return (
    <div>
      My Health Insights
      <img
        style={{ width: '100%' }}
        src="https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg"
      ></img>
      <br></br>
      <Card
        title="Calorie intake for this week"
        bordered={false}
        style={{ width: 600 }}
      >
        <p>Card content</p>
      </Card>
      <Card
        title="Total Weekly Calorie Intake"
        bordered={false}
        style={{ width: 300 }}
      >
        <p>25640</p>
        <p>kcal</p>
        <Tag color="magenta">High</Tag>
      </Card>
      <Card
        title="Average Daily Calorie Intake"
        bordered={false}
        style={{ width: 300 }}
      >
        <p>2480</p>
        <p>kcal</p>
        <Tag color="magenta">High</Tag>
      </Card>
    </div>
  )
}

export default InsightsScreen
