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
        <img src="https://cdn.dribbble.com/users/52635/screenshots/2896524/media/80a12faf5b043fedcc53acc9dda915bc.png?compress=1&resize=400x300&vertical=top" />
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
