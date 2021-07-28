import React from 'react'
import ReactDOM from 'react-dom'
require
(
'./feedback.css'
);


/* 
  受控组件示例
*/

class App extends React.Component {
  state = {
    genre: '问题',    
    subject: '',
    message: '',
    yourname: '',
    email: ''
  }

  handleForm = e => {
    // 获取当前DOM对象
    const target = e.target

    // 根据类型获取值
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value

    // 获取name
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <body>
        <h2>给予反馈</h2>

        <input type="hidden" name="" value=""/>
        {/* <div class="form-group"> */}
            <div class="alert-warning">
                <em class="fa fa-times hide-item pull-right"></em>
                注意：&nbsp;当您给我们反馈时，我们的系统会记录您正在查看的页面细节，这样我们就可以对您的反馈有所反应并查找您可能遇到的任何问题。我们将仅使用这些细节用于此目的。
            </div>
        {/* </div> */}
        
        <div class="form-group">
          <label for="genre">反馈类型</label>
          <br/>
          <label class="select">
            <select name="genre" id="genre" value={this.state.genre} onChange={this.handleForm}>
                <option value="support:question">问题</option>
                <option value="support:bug">缺陷</option>
                <option value="feedback:request">功能要求</option>
                <option value="feedback:compliment">赞誉</option>
                <option value="feedback:general">一般反馈</option>
            </select>
            <i></i>
          </label>
          <br/>

          <label for="subject">学科 <strong class="col-sec">*</strong></label>
          <br/>
          <label class="input">
            <input name="subject" type="text" id="subject" class="full" value={this.state.subject} onChange={this.handleForm} required/>
          </label>
          <br/>

          <label for="message">消息 <strong class="col-sec">*</strong></label>
          <br/>
          <label class="textarea">
            <textarea name="message" id="message" class="full" type="text" value={this.state.message} onChange={this.handleForm} required></textarea>
          </label>
          <br/>

          <label for="yourname">您的姓名 <strong class="col-sec">*</strong></label>
          <br/>
          <label class="input">
            <input name="yourname" id="yourname" type="text" class="full" value={this.state.yourname} onChange={this.handleForm} required/>
          </label>
          <br/>

          <label for="email">您的电子邮件地址 <strong class="col-sec">*</strong></label>
          <br/>
          <label class="input">
            <input name="email" type="text" id="email" class="full" value={this.state.email} onChange={this.handleForm} required/>
          </label>
        </div>
        <br/>
        <button type="submit" id="submit" class="btn btn-pri" >发送</button>
        {/* onclick="window.location.href = 'https://www.lens.org/lens/feedback-submitted'" */}
        <script>
          {/* var btn = document.getElementById('submit');
          btn.onclick = function() {
            window.location.href="https://www.lens.org/lens/feedback-submitted"
          } */}
        </script>

      </body>
    )
  }
}

var genre = document.getElementById('genre')
console.log(genre);


// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))



import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

ReactDOM.render(<FormSizeDemo />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import { 
  Select,
  Input
 } from 'antd';
require
(
'./feedback.css'
);



ReactDOM.render(<Input placeholder="Basic usage" />, document.getElementById('root'));

/* 
  受控组件
*/
const { Option } = Select;
const tempdata=[{"name":"问题",value:"support:question"},{"name":"缺陷",value:"support:bug"},{"name":"功能要求",value:"feedback:request"},{"name":"赞誉",value:"feedback:compliment"},{"name":"一般反馈",value:"feedback:general"}]
class App extends React.Component {
  state = {
    genre: '问题',    
    subject: '',
    message: '',
    yourname: '',
    email: ''
  }
   handleChange=(value)=> {
    console.log(`selected ${value}`);
  }
  handleForm = (e,k) => {
    // 获取当前DOM对象
    const target = e.target

    console.log("=============>",e,k)
    // 根据类型获取值
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value

    // 获取name
    const name = target.name

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <form>
        <h2>给予反馈</h2>

        <input type="hidden" name="" value=""/>
        {/* <div class="form-group"> */}
            <div className="alert-warning">
                <em className="fa-times"></em>
                注意：&nbsp;当您给我们反馈时，我们的系统会记录您正在查看的页面细节，这样我们就可以对您的反馈有所反应并查找您可能遇到的任何问题。我们将仅使用这些细节用于此目的。
            </div>
        {/* </div> */}
        
        <div className="form-group">
          <label htmlFor="genre">反馈类型</label>
          { <br/>
          /*<label className="select">
            <select name="genre" id="genre" value={this.state.genre} onChange={this.handleForm}>
                <option value="support:question">问题</option>
                <option value="support:bug">缺陷</option>
                <option value="feedback:request">功能要求</option>
                <option value="feedback:compliment">赞誉</option>
                <option value="feedback:general">一般反馈</option>
                
            </select>
            <i></i>
          </label> */}
          <Select defaultValue="问题" style={{ width: 500 }} onChange={this.handleChange}>
               {tempdata.map(item=>{
                 return  <Option value={item.value}>{item.name}</Option>
               })}
          </Select>
          <br/>

          <Input placeholder="Basic usage" />
          <br/>

          <label htmlFor="subject">学科 <strong className="col-sec">*</strong></label>
          <br/>
          <label className="input">
            <input name="subject" type="text" id="subject" className="full" value={this.state.subject} onChange={this.handleForm} required/>
          </label>
          <br/>

          <label htmlFor="message">消息 <strong className="col-sec">*</strong></label>
          <br/>
          <label className="textarea">
            <textarea name="message" id="message" className="full" type="text" value={this.state.message} onChange={this.handleForm} required></textarea>
          </label>
          <br/>

          <label htmlFor="yourname">您的姓名 <strong className="col-sec">*</strong></label>
          <br/>
          <label className="input">
            <input name="yourname" id="yourname" type="text" className="full" value={this.state.yourname} onChange={this.handleForm} required/>
          </label>
          <br/>

          <label htmlFor="email">您的电子邮件地址 <strong className="col-sec">*</strong></label>
          <br/>
          <label className="input">
            <input name="email" type="text" id="email" className="full" value={this.state.email} onChange={this.handleForm} required/>
          </label>
        </div>
        <br/>
        <button type="submit" id="submit" className="btn btn-pri" >发送</button>
        {/* onclick="window.location.href = 'https://www.lens.org/lens/feedback-submitted'" */}
        <script>
        </script>

      </form>
    )
  }
}

          /* var btn = document.getElementById('submit');
          btn.onclick = function() {
            window.location.href="https://www.lens.org/lens/feedback-submitted"
          } */


// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))
