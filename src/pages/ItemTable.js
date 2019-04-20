
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import { incrementTotal, decrementTotal} from '../actions';
import { Table, Divider, Tag, Button } from 'antd';
import { fetchItem } from '../actions';


// const dataSource = [{
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street'
//   }, {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street'
//   }];
  
  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: 'description',
    dataIndex: 'description',
    key: 'age',
  }, {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  }];


  
class App extends Component {
    componentDidMount() {
        this.props.fetchItem();
    }
    render(){   
        return ( 
            <div>
                <Button type="primary" shape="round" icon="plus" size='large'> Insert item</Button>
                <Table dataSource={this.props.itemTable} columns={columns} />
            </div>
        );
    }
}

const mapStateToProps = function(state) {
   return {
       itemTable:state.itemTable || []
    //    counter: state.counters || 0,
    //    totalClick: state.totalClick || {},
   };
};

const AppWithConnect = connect(
   mapStateToProps,
   { fetchItem }
)(App);

export default AppWithConnect;
