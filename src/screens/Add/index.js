import React, { Component } from 'react'
import { Input, message as Message } from 'antd'
import ApiManager from './../../api/ApiManager'

const { Search } = Input

function AddScreen(props) {
  const onSearch = async value => {
    console.log(value)
    await ApiManager.getFoodList(value)
      .then(res => {
        //setOrder(res.data)
        /*
          form.setFieldsValue({
            qty: res.data.qty,
            status: res.data.status,
            nama: res.data.shipping_address.name,
            telepon: res.data.shipping_address.phone_number.slice(3),
            alamat: res.data.shipping_address.address,
            provinsi: res.data.shipping_address.province,
            kota: res.data.shipping_address.city,
            kecamatan: res.data.shipping_address.district,
            zip: res.data.shipping_address.postal_code,
            catatan: res.data.remarks,
          })*/
        console.log(res)
      })
      .catch(err => Message.error(err))
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
      </div>
    </div>
  )
}

export default AddScreen
