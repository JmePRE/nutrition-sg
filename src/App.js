import React, { Component } from 'react'
import './App.scss'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import AddScreen from './screens/Add'
import HistoryScreen from './screens/History'
import UserScreen from './screens/User'
import InsightsScreen from './screens/Insights'

const { Header, Content, Sider } = Layout

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <h1 style={{ color: 'white' }}>NutriSG</h1>
            <Menu theme="dark" mode="horizontal"></Menu>
          </Header>
          <Layout>
            <Sider
              width={256}
              style={{ position: 'fixed', zIndex: 1, height: '100%' }}
            >
              <div className="logo" />
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
              >
                <Menu.Item key="user">
                  <Link key="user" to="/user">
                    User
                  </Link>
                </Menu.Item>
                <Menu.Item key="history">
                  <Link key="history" to="/history">
                    Food Log
                  </Link>
                </Menu.Item>
                <Menu.Item key="insights">
                  <Link key="insights" to="/insights">
                    Health Insights
                  </Link>
                </Menu.Item>
                <Menu.Item key="add">
                  <Link key="add" to="/add">
                    Add new entry
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '24px 24px 24px 280px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Navigate replace to="/history" />}
                  ></Route>
                  <Route path="/add" element={<AddScreen />}></Route>
                  <Route path="/user" element={<UserScreen />}></Route>
                  <Route path="/history" element={<HistoryScreen />}></Route>
                  <Route path="/insights" element={<InsightsScreen />}></Route>
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </header>
    </div>
  )
}

export default App
