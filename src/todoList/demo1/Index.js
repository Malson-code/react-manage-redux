import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { Button } from 'antd';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() { }
    addNum = ()=>{
      this.props.addNum(4);
    }
    reduceNum = ()=>{
      this.props.reduceNum();
    }
    render() {
        let data = this.props.data;
        return (
            <div>
                {data.baseNum}
                <Button onClick={this.addNum}>+</Button>
                <Button onClick={this.reduceNum}>-</Button>
            </div>
        )
    }
}
const mapStateToProps = state => ({ data: state.demo1State });
const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Index);