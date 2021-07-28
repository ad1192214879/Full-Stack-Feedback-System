import React from 'react'
import ReactDOM from 'react-dom'
import { 
  Select,
  Input
 } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import './feedback.css'
// const { Option } = Select;
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import { Button} from 'react-bootstrap';
// require
// (
// './feedback.css'
// );

/* 
  受控组件
*/
const { Option } = Select;
const tempdata=[{
  "name":"问题",value:"support:question"
},{
  "name":"缺陷",value:"support:bug"
},{
  "name":"功能要求",value:"feedback:request"
},{
  "name":"赞誉",value:"feedback:compliment"
},{
  "name":"一般反馈",value:"feedback:general"
}]

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

    // console.log(target);
    const value = target.value
    console.log(value);

    // 获取name
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleGenre = e => {

    console.log(`selected ${e}`);
    this.setState({
      genre : e
    })

  }

  render() {
    return (
      <form method="POST"> 
        <h2>给予反馈</h2>

        <input type="hidden" name="" value=""/>
        {/* <div class="form-group"> */}
            <div className="alert-warning" style={{ width: 500 }}>
                <em className="fa-times"></em>
                注意：&nbsp;当您给我们反馈时，我们的系统会记录您正在查看的页面细节，这样我们就可以对您的反馈有所反应并查找您可能遇到的任何问题。我们将仅使用这些细节用于此目的。
            </div>
        {/* </div> */}
        
        <div className="form-group">
          <label>反馈类型</label>
          <br />
          <Select name="genre" id="genre" style={{ width: 500 }} value={this.state.genre} onChange={this.handleGenre} >   # 
               {tempdata.map(item=>{
                 return  <Option value={item.value} key={item.id}>{item.name}</Option>
               })}
                {/* <Option value="support:question">问题</Option>
                <Option value="support:bug">缺陷</Option>
                <Option value="feedback:request">功能要求</Option>
                <Option value="feedback:compliment">赞誉</Option>
                <Option value="feedback:general">一般反馈</Option> */}
          </Select>



          <br/>

          <label>学科 <strong className="col-sec">*</strong></label>
          <br/>
          <Input value={this.state.subject} name="subject" style={{ width: 500 }} onChange={this.handleForm}/>
          <br/>

          <label>消息 <strong className="col-sec">*</strong></label>
          <br/>
          <TextArea value={this.state.message} name="message" style={{ width: 500,height:140 }} onChange={this.handleForm} />
          <br/>


          <label>您的姓名 <strong className="col-sec">*</strong></label>
          <br/>
          <Input  value={this.state.yourname} name="yourname" style={{ width: 500 }} onChange={this.handleForm} />
          <br/>

          <label>您的电子邮件地址 <strong className="col-sec">*</strong></label>
          <br/>
          <Input value={this.state.email} name="email" style={{ width: 500 }} onChange={this.handleForm} />
          <br/>

        </div>
        <br/>
        <button type="submit" id="submit" className="btn_pri" >发送</button>
        <script>
        </script>

      </form>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))
