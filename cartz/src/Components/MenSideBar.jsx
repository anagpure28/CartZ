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

export const MenSideBar = () => {
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
                value={"Roadster"}
                onChange={handleBrand}
                checked={brand.includes("Roadster")}
              />
              <label className="label">Roadster</label>
              <br />
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
                value={"H&M"}
                onChange={handleBrand}
                checked={brand.includes("H&M")}
              />
              <label>H&M</label>
              <br />
              <input
                type="checkbox"
                value={"Polo"}
                onChange={handleBrand}
                checked={brand.includes("Polo")}
              />
              <label>Polo</label>
              <br />
              <input
                type="checkbox"
                value={"HIGHLANDER"}
                onChange={handleBrand}
                checked={brand.includes("HIGHLANDER")}
              />
              <label>Highlander</label>
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
                value={"HIGHSTAR"}
                onChange={handleBrand}
                checked={brand.includes("HIGHSTAR")}
              />
              <label>High Star</label>
              <br />
              <input
                type="checkbox"
                value={"KETCH"}
                onChange={handleBrand}
                checked={brand.includes("KETCH")}
              />
              <label>Ketch</label>
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
                value={"ADIDAS"}
                onChange={handleBrand}
                checked={brand.includes("ADIDAS" || "Adidas")}
              />
              <label>Adidas</label>
              <br />
              <input
                type="checkbox"
                value={"Nike"}
                onChange={handleBrand}
                checked={brand.includes("Nike")}
              />
              <label>Nike</label>
              <br />
              <input
                type="checkbox"
                value={"GANT"}
                onChange={handleBrand}
                checked={brand.includes("GANT")}
              />
              <label>Gant</label>
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
                <Text fontWeight={"bold"} pl={"2"}>CATEGORY</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel pb={4} textAlign={"left"} fontWeight={100}>
            <Container>
              <input
                type="checkbox"
                value={"jackets"}
                onChange={handleCategory}
                checked={category.includes("jackets")}
              />
              <label>Jackets</label>
              <br />
              <input
                type="checkbox"
                value={"tshirts"}
                onChange={handleCategory}
                checked={category.includes("tshirts")}
              />
              <label>T-shirts</label>
              <br />
              <input
                type="checkbox"
                value={"shirts"}
                onChange={handleCategory}
                checked={category.includes("shirts")}
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                value={"sweatshirt"}
                onChange={handleCategory}
                checked={category.includes("sweatshirt")}
              />
              <label>SweatShirts</label>
              <br />
              <input
                type="checkbox"
                value={"sweaters"}
                onChange={handleCategory}
                checked={category.includes("sweaters")}
              />
              <label>Sweaters</label>
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
              <Text fontWeight={"bold"} pl={"2"}>
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
