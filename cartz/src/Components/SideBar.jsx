import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";

export const SideBar = () => {
  return (
    // <DIV>
    //   <div className="brand">
    //     <div className="filter">
    //       <p>Brand</p>
    //     </div>
    //     <div className="input">
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Allen Solly</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Colvia</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>H&M</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>HRX</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Pantaloons</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Pantaloons</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>RoadStar</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Parx</label>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="brand">
    //     <div className="filter">
    //       <p>Category</p>
    //     </div>
    //     <div className="input">
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Allen Solly</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>RoadStar</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Parx</label>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="brand">
    //     <div className="filter">
    //       <p>Color</p>
    //     </div>
    //     <div className="input">
    //       <div>
    //         <input className="ch" type="checkbox" name="" />
    //         <label>Allen Solly</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>RoadStar</label>
    //       </div>
    //       <div>
    //         <input type="checkbox" name="" />
    //         <label>Parx</label>
    //       </div>
    //     </div>
    //   </div>
    // </DIV>
    <DIV>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem bg={"blackAlpha.200"} borderRadius={"5px"} color={"black"} mb={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"}>
            <Container>
              <input type="checkbox" name="" />
              <label>Allen Solly</label>
              <br />
              <input type="checkbox" name="" />
              <label>Colvia</label>
              <br />
              <input type="checkbox" name="" />
              <label>H&M</label>
              <br />
              <input type="checkbox" name="" />
              <label>HRX</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>RoadStar</label>
              <br />
              <input type="checkbox" name="" />
              <label>Parx</label>
              <br />
            </Container>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg={"blackAlpha.200"} borderRadius={"5px"} color={"black"} mb={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"}>
            <Container>
              <input type="checkbox" name="" />
              <label>Allen Solly</label>
              <br />
              <input type="checkbox" name="" />
              <label>Colvia</label>
              <br />
              <input type="checkbox" name="" />
              <label>H&M</label>
              <br />
              <input type="checkbox" name="" />
              <label>HRX</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>RoadStar</label>
              <br />
              <input type="checkbox" name="" />
              <label>Parx</label>
              <br />
            </Container>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem bg={"blackAlpha.200"} borderRadius={"5px"} color={"black"} mb={3}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"}>
            <Container>
              <input type="checkbox" name="" />
              <label>Allen Solly</label>
              <br />
              <input type="checkbox" name="" />
              <label>Colvia</label>
              <br />
              <input type="checkbox" name="" />
              <label>H&M</label>
              <br />
              <input type="checkbox" name="" />
              <label>HRX</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>Pantaloons</label>
              <br />
              <input type="checkbox" name="" />
              <label>RoadStar</label>
              <br />
              <input type="checkbox" name="" />
              <label>Parx</label>
              <br />
            </Container>
          </AccordionPanel>
        </AccordionItem>

        
      </Accordion>
    </DIV>
  );
};

// const DIV = styled.div`
//   /* border: 1px solid black; */
//   .brand {
//     width: 90%;
//     text-align: left;
//     border: 1px solid black;
//     padding-left: 10px;
//     margin: 20px 0;
//   }
//   .filter{
//     font-size: 18px;
//     font-weight: 700;
//   }
//   .input > div > label{
//     padding: 5px;
//   }
//   .input > div > input{

//   }
// `;

const DIV = styled.div`
  label {
    margin-left: 6px;
  }
`;
