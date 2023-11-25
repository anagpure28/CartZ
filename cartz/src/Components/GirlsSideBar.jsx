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

export const GirlsSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  
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
                value={"pspeaches"}
                onChange={handleBrand}
                checked={brand.includes("pspeaches")}
              />
              <label className="label">pspeaches</label>
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
                value={"Pantaloons Baby"}
                onChange={handleBrand}
                checked={brand.includes("Pantaloons Baby")}
              />
              <label>Pantaloons Baby</label>
              <br />
              <input
                type="checkbox"
                value={"YK"}
                onChange={handleBrand}
                checked={brand.includes("YK Disney")}
              />
              <label>YK Disney</label>
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
                value={"Stylo Bug"}
                onChange={handleBrand}
                checked={brand.includes("Stylo Bug")}
              />
              <label>Stylo Bug</label>
              <br />
              <input
                type="checkbox"
                value={"Aarika"}
                onChange={handleBrand}
                checked={brand.includes("Aarika")}
              />
              <label>Aarika</label>
              <br />
              <input
                type="checkbox"
                value={"mothercare"}
                onChange={handleBrand}
                checked={brand.includes("mothercare")}
              />
              <label>mothercare</label>
              <br />
              <input
                type="checkbox"
                value={"Nauti Nati"}
                onChange={handleBrand}
                checked={brand.includes("Nauti Nati")}
              />
              <label>Nauti Nati</label>
            </Container>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={useColorModeValue('#a8a8a8')}
          borderRadius={"5px"}
          color={"black"}
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
