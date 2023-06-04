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
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);
  const initialCategory = searchParams.getAll("brand");
  const [category, setCategory] = useState(initialCategory || []);

  useEffect(() => {
    let params = {
      brand,
      category,
    };
    setSearchParams(params);
  }, [brand, category]);

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

  return (
    <DIV>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={"#f1f4f6"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
        >
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontWeight={"bold"} pl={"2"}>Brand</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"Allen Solly"}
                onChange={handleBrand}
                checked={brand.includes("Allen Solly")}
              />
              <label>Allen Solly</label>
              <br />
              <input
                type="checkbox"
                value={"Clovia"}
                onChange={handleBrand}
                checked={brand.includes("Clovia")}
              />
              <label>Colvia</label>
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
                value={"HRX"}
                onChange={handleBrand}
                checked={brand.includes("HRX")}
              />
              <label>HRX</label>
              <br />
              <input
                type="checkbox"
                value={"Pantaloons"}
                onChange={handleBrand}
                checked={brand.includes("Pantaloons")}
              />
              <label>Pantaloons</label>
              <br />
              <input
                type="checkbox"
                value={"Puma"}
                onChange={handleBrand}
                checked={brand.includes("Puma")}
              />
              <label>Puma</label>
              <br />
              <input
                type="checkbox"
                value={"Roadster"}
                onChange={handleBrand}
                checked={brand.includes("Roadster")}
              />
              <label>RoadStar</label>
              <br />
              <input
                type="checkbox"
                value={"Parx"}
                onChange={handleBrand}
                checked={brand.includes("Parx")}
              />
              <label>Parx</label>
              <br />
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
