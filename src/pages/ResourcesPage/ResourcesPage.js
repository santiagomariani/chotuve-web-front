import React, { useEffect } from 'react'
import Menu from 'components/Menu'
import {app} from "app/app";

export default function ResourcesPage () {

  useEffect(() => {
    app.apiClient().modifyUser({'display_name': 'Santi'}, (response) => {console.log(response.content())}, 31)
  }, [])

  return (
    <Menu>
      <h1>Resources</h1>
    </Menu>
  )
}
