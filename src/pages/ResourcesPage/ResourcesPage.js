import React, { useState, useEffect } from "react";
import Menu from "components/Menu";
import MaterialTable from "material-table";
import { app } from "app/app";
import Alert from "@material-ui/lab/Alert";

export default function ResourcesPage() {
  const tableRef = React.createRef();
  const [alert, setAlert] = useState(false);

  return (
    <Menu>
      {alert ? (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          style={{ marginBottom: "15px" }}
          variant="outlined"
          severity="error"
        >
          {" "}
          {
            "Cannot modify email or password if user does not have email provider."
          }{" "}
        </Alert>
      ) : null}
      <MaterialTable
        title="Videos Management"
        tableRef={tableRef}
        options={{
          sorting: false,
        }}
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
          { title: "Id", field: "video_id", editable: "never" },
          { title: "Video name", field: "title" },
          { title: "Description", field: "description" },
          { title: "Location", field: "location" },
          { title: "Is private", field: "is_private", type: "boolean" },
        ]}
        data={(query) =>
          new Promise((resolve, reject) => {
            let promise = app
              .apiClient()
              .videos(
                {
                  per_page: query.pageSize,
                  page: query.page + 1,
                  search: query.search,
                },
                (response) => response.content()
              );
            promise.then((response) => {
              resolve({
                data: response.videos,
                page: response.page - 1,
                totalCount: response.total,
              });
            });
          })
        }
        actions={[
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => {
              tableRef.current && tableRef.current.onQueryChange();
              setAlert(false);
            },
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              let promise = app
                .apiClient()
                .modifyVideo(
                  {
                    title: newData.title,
                    location: newData.location,
                    is_private: newData.is_private,
                    description: newData.description,
                  },
                  (response) => response.content(),
                  oldData.video_id
                );
              promise
                .then((response) => {
                  if ("message" in response) {
                    setAlert(true);
                  } else {
                    setAlert(false);
                  }
                  resolve();
                })
                .catch((error) => {
                  console.log(error);
                  reject();
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              let promise = app
                .apiClient()
                .deleteVideo((response) => null, oldData.video_id);
              promise
                .then((response) => {
                  setAlert(false);
                  resolve();
                })
                .catch((error) => {
                  console.log(error);
                  reject();
                });
            }),
        }}
      />
    </Menu>
  );
}
