import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux_selectors";
import { useEffect,useState } from "react";
import { clearHistory, clearOrders, getOrders } from "../slices/orderSlice";
import {Andriod,TabVertical} from '../Responsive'
const Container = styled.div`
  padding:2em 5em;
  ${TabVertical({padding:'2em 2em'})};
`;
const Title  = styled.h2`
 font-family:'Rajdhani',sans-serif;
`;
const Button = styled.button``;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
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
  font-family:'Poppins',sans-serif;
  ${Andriod({display:"none"})};
`;
const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
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
const Desc = styled.h5``
const Order = () => {
 const {user} = useAppSelector((state)=>state.Auth);
 const {orders} = useAppSelector((state)=>state.Order)
 const [mount,setMount] = useState(false);
 const dispatch = useAppDispatch();
 useEffect(()=>{
     dispatch(getOrders(user._id));
 },[])

 const handleClear = () =>{
     setMount(true)
     dispatch(clearHistory())

 }

 useEffect(()=>{
    if(mount){
     dispatch(clearOrders(user._id))
    }
 },[orders])
 console.log(orders)
  return <Container>
            <Title>Orders</Title>
            <Button onClick={handleClear}>Clear History</Button>
                <Table>
            <Thead>
                <Tr>
                <Th>
                    Number
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
                </Tr>
            </Thead>
            <Tbody>
               {orders && orders.map((order,index)=>{
                  return <Tr  key={order._id}>
                      <Td>{index +1 }</Td>
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
                  </Tr>
               })}
            </Tbody>
        </Table>
  </Container>
}

export default Order