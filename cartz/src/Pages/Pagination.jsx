import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

export const Pagination = ({page,setPage,end}) => {

  // useEffect(()=> {
  //   window.scrollTo(0, 0);
  // },[page])

  return (
    <DIV>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: "20px",
        }}
      >
        <button id="btn" onClick={() => setPage(page - 1)} disabled={page <= 1}>
          Prev
        </button>
        <button id="btn1">{page}</button>
        <button
          id="btn2"
          onClick={() => setPage(page + 1)}
          disabled={page === end}
        >
          Next
        </button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  margin: 25px 0;
  font-size: 20px;
  #btn1{
    margin: 0 5px;
  }
  #btn,#btn2{
    padding: 5px;
    border-bottom: 3px solid black;
  }
  #btn:hover{
    border-bottom: 5px solid gray;
    border-radius: 5px;
  }
  #btn2:hover{
    border-bottom: 5px solid #0ed346;
    border-radius: 5px;
  }
`