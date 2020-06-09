import React from 'react'
import Menu from 'components/Menu'
import MaterialTable from 'material-table';

export default function UsersPage () {
  const tableRef = React.createRef();
  
  return (
    <Menu>
      <MaterialTable        
        title="Refresh Data Preview"
        tableRef={tableRef}
        columns={[
          {
            title: 'Avatar',
            field: 'avatar',
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: '50%' }}
                src={rowData.avatar}
              />
            ),
          },
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = 'https://reqres.in/api/users?'
            url += 'per_page=' + query.pageSize
            url += '&page=' + (query.page + 1)
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.data,
                  page: result.page - 1,
                  totalCount: result.total,
                })
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
      />
    </Menu>
  )
}
