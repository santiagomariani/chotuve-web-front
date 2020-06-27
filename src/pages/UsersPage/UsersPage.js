import React, { useState, useEffect } from 'react'
import Menu from 'components/Menu'
import MaterialTable from 'material-table';
import {app} from "app/app";

export default function UsersPage () {
  const tableRef = React.createRef();

  return (
    <Menu>
      <MaterialTable        
        title="Refresh Data Preview"
        tableRef={tableRef}
        columns={[
          /*
          {
            title: 'Avatar',
            field: 'image_location',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.image_location}
              />
            ),
          },*/
          { title: 'Id', field: 'id', editable: 'never' },
          { title: 'Display Name', field: 'display_name'},
          { title: 'Email', field: 'email', editable: 'onAdd'},
          { title: 'Phone number', field: 'phone_number'},
          { title: 'Password', field: 'password', emptyValue: '************'}
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let promise = app.apiClient().users({per_page: query.pageSize,
                                                page: query.page + 1,
                                                email: query.search,
                                                name: query.search,
                                                phone: query.search
                                                },
                                                (response) => response.content());
            promise.then((response) => {
              resolve({data: response.users, 
                    page: response.page - 1,
                    totalCount: response.total })
              })
          })
        }
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          }
        ]}
        editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            let promise = app.apiClient().addUser({'password': newData.password,
                                                  'email': newData.email,
                                                  'display_name': newData.display_name,
                                                  'phone_number': newData.phone_number},
                                                  (response) => response.content())                             
            promise.then((response) => {
              resolve();
            }).catch((error) => {
              console.log(error)
              reject();})
          }),
        onRowUpdate: (newData, oldData) => 
          new Promise((resolve, reject) => {
            let promise = app.apiClient().modifyUser({'display_name': newData.display_name,
                                                      'phone_number': newData.phone_number},
                                                      (response) => response.content(), oldData.id)
            promise.then((response) => {
              resolve();
            }).catch((error) => {
              console.log(error)
              reject();})
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            let promise = app.apiClient().deleteUser((response) => null, oldData.id)
            promise.then((response) => {
              resolve();
            }).catch((error) => {
              console.log(error)
              reject();})
          })
      }}
      />
    </Menu>
  )
}
