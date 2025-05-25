import React from 'react'
import { useState, useEffect } from 'react'
import { UserTransactionsGet } from '../../Api/CoreApi'
import { useParams, Link } from 'react-router-dom'
import { Form, Input, Button, Table } from "antd";



function User_Transaction() {
    const [data, setData] = useState([])
    console.log(data, '***** v ******')

    const get = async () => {
        const response = await UserTransactionsGet()
        setData(response)
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <div>
            <Table
                columns={[
                    { title: "id", dataIndex: "id", key: "id" },
                    { title: "User_id", dataIndex: "User_id", key: "User_id" },
                    { title: "amount", dataIndex: "amount", key: "amount" },
                    { title: "date", dataIndex: "date", key: "date" },
                    { title: "type", dataIndex: "type", key: "type" },
                    { title: "status", dataIndex: "status", key: "status" }
                ]}
                dataSource={data}
                rowKey="id"
                bordered
                scroll={{ x: true }} // Makes it responsive
            />
        </div>
    )
}

export default User_Transaction