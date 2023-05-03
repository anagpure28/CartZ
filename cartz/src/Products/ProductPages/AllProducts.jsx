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
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    .sidebar{
        width: 20%;
        margin-top: 40px;
    }
    .allProductList{
        width: 75%;
        margin-top: 40px;
        /* border: 1px solid black; */
    }
`