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

export const WomenSideBar = () => {
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
              <Text fontWeight={"bold"} color={"white"} pl={"2"}>
                BRAND
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"Athena"}
                onChange={handleBrand}
                checked={brand.includes("Athena")}
              />
              <label>Athena</label>
              <br />
              <input
                type="checkbox"
                value={"Antheaa"}
                onChange={handleBrand}
                checked={brand.includes("Antheaa")}
              />
              <label>Antheaa</label>
              <br />
              <input
                type="checkbox"
                value={"Roadster"}
                onChange={handleBrand}
                checked={brand.includes("Roadster")}
              />
              <label>Roadster</label>
              <br />
              <input
                type="checkbox"
                value={"DILLINGER"}
                onChange={handleBrand}
                checked={brand.includes("DILLINGER" || "Dillinger")}
              />
              <label>Dillinger</label>
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
                value={"HERE&NOW"}
                onChange={handleBrand}
                checked={brand.includes("HERE&NOW")}
              />
              <label>HERE&NOW</label>
              <br />
              <input
                type="checkbox"
                value={"Vishudh"}
                onChange={handleBrand}
                checked={brand.includes("Vishudh")}
              />
              <label>Vishudh</label>
              <br />
              <input
                type="checkbox"
                value={"Sangria"}
                onChange={handleBrand}
                checked={brand.includes("Sangria")}
              />
              <label>Sangria</label>
              <br />
              <input
                type="checkbox"
                value={"Libas"}
                onChange={handleBrand}
                checked={brand.includes("Libas")}
              />
              <label>Libas</label>
              <br />
              <input
                type="checkbox"
                value={"Nike"}
                onChange={handleBrand}
                checked={brand.includes("Nike")}
              />
              <label>Nike</label>
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
                CATEGORY
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"ethenic"}
                onChange={handleCategory}
                checked={category.includes("ethenic")}
              />
              <label>Ethenic Wear</label>
              <br />
              <input
                type="checkbox"
                value={"lehenga"}
                onChange={handleCategory}
                checked={category.includes("lehenga")}
              />
              <label>Lehenga</label>
              <br />
              <input
                type="checkbox"
                value={"tops"}
                onChange={handleCategory}
                checked={category.includes("tops")}
              />
              <label>Tops</label>
              <br />
              <input
                type="checkbox"
                value={"tshirts"}
                onChange={handleCategory}
                checked={category.includes("tshirts")}
              />
              <label>T-Shirts</label>
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
