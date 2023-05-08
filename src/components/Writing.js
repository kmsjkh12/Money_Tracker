import React from "react";
import styled from "styled-components";
import { DatePicker, Form,Input ,Modal} from 'antd';

const Writing = ({isModalOpen, handleOk, handleCancel}) =>{
    return(
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form.Item name="date-picker" label="날짜" >
                <DatePicker />
            </Form.Item>
            <Form.Item name="title" label="제목" >
                <Input />
            </Form.Item>
            <Form.Item name="money" label="금액" >
                <Input />
            </Form.Item>
        </Modal>
    )
}
export default Writing;
