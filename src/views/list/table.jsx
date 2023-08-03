import Layout from "../../common/Layout";
import { Table, Space, Input, Button } from 'antd';
import  { useState } from 'react';

const initialData = [
  {
    id: 1,
    name: 'John Brown',
    email: 'john@example.com',
    password: 'password123',
  },

];

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const [editingKey, setEditingKey] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAdd = () => {
    setData([...data, { key: data.length + 1, name: newName, email: newEmail, password: newPassword}]);
    setNewName(''),setNewEmail(''),setNewPassword('');
  };

  const handleEdit = (key) => {
    setEditingKey(key);
  };

  const handleSave = (key) => {
    const updatedData = [...data];
    updatedData[key - 1].name = newName;
    updatedData[key - 1].email = newEmail;
    updatedData[key - 1].password = newPassword;
    
    setData(updatedData);
    setEditingKey(null);
    setNewName('');
    setNewEmail('');
    setNewPassword('');
  };

  const handleDelete = (key) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        editingKey === record.key ? (
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, record) => (
        editingKey === record.key ? (
          <Input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
      render: (text, record) => (
        editingKey === record.key ? (
          <Input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {editingKey === record.key ? (
            <>
              <a onClick={() => handleSave(record.key)}>Save</a>
              <a onClick={() => setEditingKey(null)}>Cancel</a>
            </>
          ) : (
            <>
              <a onClick={() => handleEdit(record.key)}>Edit</a>
              <a onClick={() => handleDelete(record.key)}>Delete</a>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Layout views={
      <>
        <Input placeholder="New Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <Input placeholder="New Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <Input placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <Button onClick={handleAdd}>Add</Button>
        <Table columns={columns} dataSource={data} />
      </>
    } />
  );
}

export default TableComponent;