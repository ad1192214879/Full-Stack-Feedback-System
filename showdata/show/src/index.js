import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button, Space } from 'antd';
import showdata from './feedback.json';

class App extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setNameSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'yourname',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'yourname',
        key: 'yourname',
        filters: [
          { text: 'Bob', value: 'Bob' },
          { text: 'Tom', value: 'Tom' },
        ],
        filteredValue: filteredInfo.yourname || null,
        onFilter: (value, record) => record.yourname.includes(value),
        sorter: (a, b) => a.yourname - b.yourname,
        sortOrder: sortedInfo.columnKey === 'yourname' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email - b.email,
        sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Genre',
        dataIndex: 'genre',
        key: 'genre',
        filters: [
          { text: 'support:question', value: 'support:question' },
          { text: 'feedback:request', value: 'feedback:request' },
        ],
        filteredValue: filteredInfo.genre || null,
        onFilter: (value, record) => record.genre.includes(value),
        sorter: (a, b) => a.genre - b.genre,
        sortOrder: sortedInfo.columnKey === 'genre' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Subject',
        dataIndex: 'subject',
        // key: 'subject',
      },
      {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
      },

      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a href="/#">Delete</a>
          </Space>
        ),
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setNameSort}>Sort name</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={showdata} onChange={this.handleChange} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Table,  Space } from 'antd'; 
// import showdata from './feedback.json';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'yourname',
//     key: 'yourname',
//     render: text => <a href="/#">{text}</a>,
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//     // key: 'email',
//     sorter: {
//       compare: (a, b) => a.email - b.email,
//       multiple: 1,
//     },
//   },
//   {
//     title: 'Genre',
//     dataIndex: 'genre',
//     // key: 'genre',
//     sorter: {
//       compare: (a, b) => a.genre - b.genre,
//       multiple: 3,
//     },
//     filters: [
//       { text: 'Male', value: 'male' },
//       { text: 'Female', value: 'female' },
//     ],
//   },
//   {
//     title: 'Subject',
//     dataIndex: 'subject',
//     // key: 'subject',
//     sorter: {
//       compare: (a, b) => a.subject - b.subject,
//       multiple: 2,
//     },
//   },
//   {
//     title: 'Message',
//     dataIndex: 'message',
//     key: 'message',
//   },

//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <a href="/#">Delete</a>
//       </Space>
//     ),
//   },
// ];



// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }


// ReactDOM.render(<Table columns={columns} dataSource={showdata} onChange={onChange} />, document.getElementById('container')); //data
