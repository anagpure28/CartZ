import styled from "styled-components";
import { SideBar } from "../../Components/SideBar";
import { AllProductList } from "../ProductList/AllProductList";

export const AllProducts = () => {
    return(
        <DIV>
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="allProductList">
                <AllProductList />
            </div>
        </DIV>
    )
}

const DIV = styled.div`
    width: 98%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    .sidebar{
        width: 20%;
        margin-top: 40px;
        padding-right: 12px;
        border-right: 1px solid black;
    }
    .allProductList{
        width: 78%;
        margin-top: 40px;
        /* border: 1px solid black; */
    }
`