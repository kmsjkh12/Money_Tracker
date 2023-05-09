import React ,{useCallback, useState, useRef} from "react";
import styled from "styled-components";
import { useDispatch ,useSelector} from "react-redux";
import { DatePicker ,Button,Modal, Radio, Input, Form} from "antd";
import { INSERT } from "../reducer/tracker";
const Header = () =>{
    const member1 = {
        name: "test1",
    }
  const nextId = useRef(4);
  const dispatch = useDispatch(); 
  const {plus} = useSelector((state)=>state.tracker)
  const {minus} = useSelector((state)=>state.tracker)
  const [ date, setDate ] = useState(new Date());
  const onChangeDate = (date,dateString) => {
    setDate(dateString)
    };
  const dateFormat = "YYYY-MM-DD";

  const [title, setTitle] = useState("");
  const onChangeTitle = (e)=>{
    setTitle(e.target.value)
  }

  const [money,setMoney ] = useState(0);
  const onChangeMoney = (e)=>{
    setMoney(e.target.value)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch({
        type:INSERT,
        data:{
            id:nextId.current+=1,
            type:value,
            money:money,
            spend:title,
            date:date
        }
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState("수입");
  const onChange = (e) => {
    setValue(e.target.value);
  };

    return(
        <HeaderWrapper>
            <div className="header"></div>
            <Month>
                <div className="month_money">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;안녕하세요! {member1.name}</p>
                    <p>지난 1개월 간 사용한 돈</p>
                    <SepndMoney>₩{minus}</SepndMoney>
                </div>
            </Month>
            <Money>
                <Plus><p>들어온 돈</p>
                <p>+{plus}</p></Plus>
                <Vline></Vline>
                <Minus><p>나간 돈</p>
                <p>-{minus}</p></Minus>
            </Money>
            <Button type="primary" onClick={showModal}>
        추가하기
      </Button>
      <Modal title="내역 추가" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
      style={{
        maxWidth: 600,
      }}
    >
        <Form.Item
            name="date"
            label="날짜"
        >
        <DatePicker
          onChange={onChangeDate}
          format={dateFormat}
          style={{width:"420px"}}
        />        </Form.Item>
        <Form.Item name="title" label="제목">
        <Input placeholder="사용 내역을 입력하세요" value={title} onChange={onChangeTitle} />
        </Form.Item>
        <Form.Item name="money" label="금액">
        <Input placeholder="금액을 입력하세요" value={money} onChange={onChangeMoney}/>
        </Form.Item>
        <Form.Item>
        <Radio.Group onChange={onChange} value={value}>
      <Radio value={"수입"}>수입</Radio>
      <Radio value={"지출"}>지출</Radio>
    </Radio.Group>
        </Form.Item>
      </Form>
       
         
      </Modal>
              </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
    heigth:600px;
    font-family: Impact, Charcoal, san-serif;
` 
const Month = styled.div`
    width:150px;
    margin-left:110px;
`
const SepndMoney = styled.span`
    margin-left:40px;
`
const Money = styled.div`
    background: #f5f5f6;
    border:1px solid #c8c8c8;
    border-radius: 10px;
    margin-left:100px; 
    margin-top:20px;
    display:flex;
    text-align:center;
    `

const Plus = styled.div`
width:80px;
`
const Minus = styled.div`
width:80px;
`
const Vline =styled.div`
border-right : 1px solid #c8c8c8;
margin-top:15px;
    height : 60px;`
export default Header;