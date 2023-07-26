import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import { CgTrash } from "react-icons/cg";


const text = 'Are you sure to delete this Product?';
const description = 'Delete the Product';


const confirm = () => {
    console.log(message)
    message.success(`Product Removed`);
};

const Remove = () => {
//   <>  
    return <div >
        <Popconfirm
            placement="bottomRight"
            title={text}
            description={description}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            <Button style={{border:"0px",backgroundColor:"transparent"}}><CgTrash style={{fontSize:"20px",color:"red"}}/></Button>
        </Popconfirm>
    </div>
//   </>
};

export default Remove;