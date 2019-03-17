import React from "react";

var TypeNew = React.createClass({
	addContent: function(e){
		e.preventDefault();
		var tet = this.refs.content.value.trim();
		if(tet!=''){
			this.props.todo.push(tet);
			this.props.add(this.props.todo);
		}
		this.refs.content.value='';
	},

	render: function(){
		return(
			<form onSubmit={this.addContent} className="form">
				<input type="text" ref="content" placeHolder="请输入您的todolist" className="input" />
				<input type="submit" value="添加" className="add" />
			</form>
		);	
	}
});