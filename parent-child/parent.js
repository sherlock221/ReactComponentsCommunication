/**
 * Created by jiaaobo on 16/2/7.
 */
//父
var ParentComponent = React.createClass({

    getInitialState: function () {
        return {
            checked: true
        };
    },

    _onChange : function(ck){
        this.setState({
            checked : !this.state.checked
        });
    },
    render: function() {
        return (
            <ToggleButton text="点击我" checked={this.state.checked}    callbackParent={this._onChange}/>
        );
    }

});

// 子
var ToggleButton = React.createClass({

    render : function(){
        return (
            <label>
            {this.props.text}:
                <input type="checkbox" checked={this.props.checked}  name="ck"  onChange={this.props.callbackParent}/>
            </label>
        );

    }

});


React.render(
<ParentComponent/>,
document.getElementById('container')
);