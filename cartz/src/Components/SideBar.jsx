import styled from "styled-components";

export const SideBar = () => {
  return (
    <DIV>
      <div className="brand">
        <div className="filter">
          <p>Brand</p>
        </div>
        <div className="input">
          <div>
            <input type="checkbox" name="" />
            <label>Allen Solly</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>RoadStar</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>Parx</label>
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="filter">
          <p>Category</p>
        </div>
        <div className="input">
          <div>
            <input type="checkbox" name="" />
            <label>Allen Solly</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>RoadStar</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>Parx</label>
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="filter">
          <p>Color</p>
        </div>
        <div className="input">
          <div>
            <input className="ch" type="checkbox" name="" />
            <label>Allen Solly</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>RoadStar</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label>Parx</label>
          </div>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* border: 1px solid black; */
  .brand {
    width: 90%;
    text-align: left;
    border: 1px solid black;
    padding-left: 10px;
    margin: 20px 0;
  }
  .filter{
    font-size: 18px;
    font-weight: 700;
  }
  .input > div > label{
    padding: 5px;
  }
  .input > div > input{
    
  }
`;
