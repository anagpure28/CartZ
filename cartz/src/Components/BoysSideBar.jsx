import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Text,
  AccordionIcon,
  AccordionPanel,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Sidebar.css";

export const BoysSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

//     'Kanvin', 'Lux Cottswool', 'YK Disney', 'HRX by Hrithik Roshan', 'KUCHIPOO', 'HELLCAT', 'Technosport', 'Pantaloons Baby', 'SPUNKIES', 'BONKIDS', 'Calvin Klein', 'YK Justice League']

  useEffect(() => {
    let params = {
      brand,
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [brand, category, order]);

  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setOrder(value);
    // setOrder(e.target.value)
  };

  return (
    <DIV>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={useColorModeValue('#a8a8a8')}
          borderRadius={"5px"}
          mb={3}
        >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"} color={"white"} pl={"2"}>BRAND</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"Roadster"}
                onChange={handleBrand}
                checked={brand.includes("Roadster")}
              />
              <label className="label">Roadster</label>
              <br />
              <input
                type="checkbox"
                value={"A.T.U.N."}
                onChange={handleBrand}
                checked={brand.includes("A.T.U.N.")}
              />
              <label>A.T.U.N.</label>
              <br />
              <input
                type="checkbox"
                value={"H&M"}
                onChange={handleBrand}
                checked={brand.includes("H&M")}
              />
              <label>H&M</label>
              <br />
              <input
                type="checkbox"
                value={"YK"}
                onChange={handleBrand}
                checked={brand.includes("YK" || "YK Disney" || "YK Justice League")}
              />
              <label>YK</label>
              <br />
              <input
                type="checkbox"
                value={"max"}
                onChange={handleBrand}
                checked={brand.includes("max")}
              />
              <label>Max</label>
              <br />
              <input
                type="checkbox"
                value={"U.S. Polo Assn. Kids"}
                onChange={handleBrand}
                checked={brand.includes("U.S. Polo Assn. Kids")}
              />
              <label>U.S. Polo</label>
              <br />
              <input
                type="checkbox"
                value={"HERE&NOW"}
                onChange={handleBrand}
                checked={brand.includes("HERE&NOW")}
              />
              <label>Here&Now</label>
              <br />
              <input
                type="checkbox"
                value={"Marks & Spencer"}
                onChange={handleBrand}
                checked={brand.includes("Marks & Spencer")}
              />
              <label>Marks & Spencer</label>
              <br />
              <input
                type="checkbox"
                value={"Pantaloons Junior"}
                onChange={handleBrand}
                checked={brand.includes("Pantaloons Junior")}
              />
              <label>Pantaloons Junior</label>
              <br />
              <input
                type="checkbox"
                value={"CrayonFlakes"}
                onChange={handleBrand}
                checked={brand.includes("CrayonFlakes")}
              />
              <label>CrayonFlakes</label>
              <br />
              <input
                type="checkbox"
                value={"PLUM TREE"}
                onChange={handleBrand}
                checked={brand.includes("PLUM TREE")}
              />
              <label>PLUM TREE</label>
              <br />
              <input
                type="checkbox"
                value={"HRX by Hrithik Roshan"}
                onChange={handleBrand}
                checked={brand.includes("HRX by Hrithik Roshan")}
              />
              <label>HRX</label>
              <br />
              <input
                type="checkbox"
                value={"jockey"}
                onChange={handleBrand}
                checked={brand.includes("jockey")}
              />
              <label>Jockey</label>
              <br />
              <input
                type="checkbox"
                value={"Charm n Cherish"}
                onChange={handleBrand}
                checked={brand.includes("Charm n Cherish")}
              />
              <label>Charm n Cherish</label>
              <br />
              <input
                type="checkbox"
                value={"Kanvin"}
                onChange={handleBrand}
                checked={brand.includes("Kanvin")}
              />
              <label>Kanvin</label>
              <br />
              <input
                type="checkbox"
                value={"HELLCAT"}
                onChange={handleBrand}
                checked={brand.includes("HELLCAT")}
              />
              <label>HELLCAT</label>
              <br />
              <input
                type="checkbox"
                value={"Lux Cottswool"}
                onChange={handleBrand}
                checked={brand.includes("Lux Cottswool")}
              />
              <label>Lux Cottswool</label>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={useColorModeValue('#a8a8a8')}
          borderRadius={"5px"}
          mb={3}
        >
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight={"bold"} color={"white"} pl={"2"}>
                SORT
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <div onChange={handleSort}>
                <div>
                  <input
                    type="radio"
                    name="order"
                    value={"asc"}
                    defaultChecked={order === "asc"}
                  />
                  <label>Ascending</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="order"
                    value={"desc"}
                    defaultChecked={order === "desc"}
                  />
                  <label>Descending</label>
                </div>
              </div>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </DIV>
  );
};

const DIV = styled.div`
  label {
    margin-left: 6px;
    font-weight: 300;
  }
`;
