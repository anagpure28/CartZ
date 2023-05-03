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
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGender = searchParams.getAll("brand");
  const [gender, setGender] = useState(initialGender || []);
  const initialBrand = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrand || []);
  const initialCategory = searchParams.getAll("brand");
  const [category, setCategory] = useState(initialCategory || []);

  useEffect(() => {
    let params = {
      gender,
      brand,
      category,
    };
    setSearchParams(params);
  }, [gender, brand, category]);

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el != value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el != value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el != value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  return (
    <DIV>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem
          bg={"blackAlpha.200"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"}>
            <Container>
              <input
                type="checkbox"
                value={"men"}
                onChange={handleGender}
                checked={gender.includes("men")}
              />
              <label>Men</label>
              <br />
              <input
                type="checkbox"
                value={"women"}
                onChange={handleGender}
                checked={gender.includes("women")}
              />
              <label>Women</label>
              <br />
              <input
                type="checkbox"
                value={"boys"}
                onChange={handleGender}
                checked={gender.includes("boys")}
              />
              <label>Boys</label>
              <br />
              <input
                type="checkbox"
                value={"girls"}
                onChange={handleGender}
                checked={gender.includes("girls")}
              />
              <label>Girls</label>
              <br />
              <br />
            </Container>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          bg={"blackAlpha.200"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
        >
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
        <AccordionItem
          bg={"blackAlpha.200"}
          borderRadius={"5px"}
          color={"black"}
          mb={3}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"}>
            <Container>
              <input
                type="checkbox"
                value={"Men's Footwear"}
                onChange={handleCategory}
                checked={category.includes("Men's Footwear")}
              />
              <label>Men's Footwear</label>
              <br />
              <input
                type="checkbox"
                value={"Men's Clothing"}
                onChange={handleCategory}
                checked={category.includes("Men's Clothing")}
              />
              <label>Men's Clothing</label>
              <br />
              <input
                type="checkbox"
                value={"t-shirt"}
                onChange={handleCategory}
                checked={category.includes("t-shirt")}
              />
              <label>T-shirts</label>
              <br />
              <input
                type="checkbox"
                value={"shirt"}
                onChange={handleCategory}
                checked={category.includes("shirt")}
              />
              <label>Shirt</label>
              <br />
              <input
                type="checkbox"
                value={"Girls Clothing"}
                onChange={handleCategory}
                checked={category.includes("Girls Clothing")}
              />
              <label>Girl's Clothing</label>
              <br />
              <input
                type="checkbox"
                value={"Women Clothing"}
                onChange={handleCategory}
                checked={category.includes("Women Clothing")}
              />
              <label>Women Clothing</label>
              <br />
              <input
                type="checkbox"
                value={"Women Footwear"}
                onChange={handleCategory}
                checked={category.includes("Women Footwear")}
              />
              <label>Women Footwear</label>
              <br />
              <input
                type="checkbox"
                value={"sweat-shirt"}
                onChange={handleCategory}
                checked={category.includes("sweat-shirt")}
              />
              <label>Sweat Shirt</label>
              <br />
              <input
                type="checkbox"
                value={"kurta"}
                onChange={handleCategory}
                checked={category.includes("kurta")}
              />
              <label>Kurta</label>
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
                value={"dresses"}
                onChange={handleCategory}
                checked={category.includes("dresses")}
              />
              <label>Dresses</label>
              <br />
              <input
                type="checkbox"
                value={"beautycare"}
                onChange={handleCategory}
                checked={category.includes("beautycare")}
              />
              <label>Beauty Care</label>
              <br />
              <input
                type="checkbox"
                value={"shoes"}
                onChange={handleCategory}
                checked={category.includes("shoes")}
              />
              <label>Shoes</label>
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
