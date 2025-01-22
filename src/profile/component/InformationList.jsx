import React from 'react'
import Information from './Information'

const InformationList = () => {
  return (
    <div className="box-content">
        <Information label="Nama" information="Adit" />
        <Information label="Email Akun" information="fauzan@gmail.com" />
        <Information label="Kota Asal" information="Bekasi" />
        <Information label="Gender" information="Laki-laki" />
        <Information label="Tanggal Lahir" information="3 Agustus 2003" />
    {/* {menus.map((menu) => (
        <Option key={menu.id} option={menu.option} nameIcon={menu.nameIcon} path={menu.navigate} />
    ))} */}
    </div>
  )
}

export default InformationList