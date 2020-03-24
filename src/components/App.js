import React from 'react'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Row, Col, Card} from 'antd';


const App = () => (
  <div>      
  <div className="site-card-border-less-wrapper">
    <Card title="TODOS List" bordered={false} >
    <Row>
         <Col span={4} offset={2}>
                <AddTodo />  
          </Col>
          <Col span={8} offset={2} >
          <Filters />
          </Col>        
        </Row>                             
        <Row>
          
      <Col  span={8} offset={8}>
        <VisibleTodoList />
      </Col>
    </Row>        
    </Card>
  </div>                  
  </div>
)

export default App