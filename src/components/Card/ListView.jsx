import { useContext } from 'react'
import { ToolContext } from '../../App'
import '../../styles/ListView.css'
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'

const ListView = () => {
  const {
    filteredProducts,
    category,
    handelBookmarkAdd,
    bookmarkfilteredProducts,
    deleteres,
  } = useContext(ToolContext)
  return (
    <Accordion allowToggle className="list">
      {filteredProducts.map((product, index) => {
        return category === 'all' || category === product.category ? (
          <AccordionItem
            borderRadius={'8px'}
            boxShadow={'8px 8px 2px 0px #373530'}
            border={'1px solid #373530'}
            key={index}
            className="accordion_item"
          >
            <AccordionButton>
              <Box padding={1} py={'3px'} flex="1" className="image">
                <img className="card-img" src={product.image} alt="" />
                <div className="accordion_btn">
                  <h3 className="card-title">{product.productName}</h3>
                  <div className="btn-cont">
                    <a target="_blank" href={product.link}>
                      <button className="visit">
                        <font color="white" size="3">
                          Visit
                        </font>
                      </button>
                    </a>
                    {bookmarkfilteredProducts.some(
                      (obj) => obj['productName'] === product.productName
                    ) ? (
                      <button onClick={() => deleteres(product)}>
                        <a href="#">
                          Delete<i className="ri-bookmark-fill"></i>
                        </a>
                      </button>
                    ) : (
                      <a href="#">
                        <button
                          className="bookmark"
                          onClick={() => handelBookmarkAdd(product)}
                        >
                          <font color="white" size="3">
                            Bookmark
                          </font>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </Box>
              <AccordionIcon as={BsChevronDown} size={5} fontWeight={'bold'} />
            </AccordionButton>
            <AccordionPanel py={2} pt={0}>
              <div className="text">
                <div className="accordion_panel">
                  <p>{product.description}</p>
                  <div className="btn-cont ">
                    <a target="_blank" href={product.link}>
                      <button className="visit">
                        <font color="white" size="3">
                          Visit
                        </font>
                      </button>
                    </a>
                    {bookmarkfilteredProducts.some(
                      (obj) => obj['productName'] === product.productName
                    ) ? (
                      <button onClick={() => deleteres(product)}>
                        <a href="#">
                          Delete<i className="ri-bookmark-fill"></i>
                        </a>
                      </button>
                    ) : (
                      <a href="#">
                        <button
                          className="bookmark"
                          onClick={() => handelBookmarkAdd(product)}
                        >
                          <font color="white" size="3">
                            Bookmark
                          </font>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        ) : null
      })}
    </Accordion>
  )
}

export default ListView
