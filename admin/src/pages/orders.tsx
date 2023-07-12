import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import { allOrders } from '../slices/orderSlice';
import styled from 'styled-components';
import { Andriod, TabVertical } from '../Responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`

  width:100%;
  ${TabVertical({padding:'2em 2em'})};
`;
const Title  = styled.h2`
 font-family:'Rajdhani',sans-serif;
`;
const Button = styled.button``;
const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  margin-top:1em;
`;
const Thead = styled.thead``;
const Tr = styled.tr`
&:hover {
  background-color: #f5f5f5;
}
${Andriod({display:"block",width:'100%'})};

`;
const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
  font-family:'Rajdhani',sans-serif;
  ${Andriod({display:"none"})};
  font-size:0.9rem;
`;
const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /* background-color: #f7f7f7; */
  font-family:'Poppins',sans-serif;
  ${Andriod({display:"block",width:'100%'})};
`;
const Tbody = styled.tbody`
  font-family:'Poppins',sans-serif;
`;
const Flex = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:5px;

`
const Row = styled.div`
  display:flex;
  gap:10px;
`
const Image = styled.img`
 width:40px ;
 height:40px;
`
const Desc = styled.p``

const Orders = () => {
    const dispatch = useAppDispatch();
    const { orders } = useAppSelector((state) => state.Order)
    console.log(orders);
    useEffect(() => {
        const token = localStorage.getItem('adminToken') 
        dispatch(allOrders(token as string))
    }, [])
  return (
    <Container>
             <Table>
            <Thead>
                <Tr>
                <Th>
                    User Id
                    </Th> 
                    <Th>
                        Ordered Items
                    </Th>
                    <Th>
                        Price
                    </Th>
                    <Th>
                        Paid
                    </Th>
                    <Th>Recipt</Th>
                </Tr>
            </Thead>
            <Tbody>
               {orders && orders.map((order,index)=>{
                  return <Tr  key={order._id}>
                      <Td>{order.userId }</Td>
                      <Td>
                        <Row>
                        {order.products.map((product:any,index:number)=>{
                            return <Flex key={index} >
                                   <Image src={product.img} alt={product.name} />
                                   <Desc> x {  product.amount }</Desc>
                                   </Flex>
                        })}
                        </Row>
                      </Td>
                      <Td>RS : {order.total.toLocaleString()}</Td>
                      <Td>Yes</Td>
                      <Td><Link title="View Recipt" target="_blank" to={order.recipt}>View</Link></Td>
                  </Tr>
               })}
            </Tbody>
        </Table>
    </Container>
  )
}

export default Orders