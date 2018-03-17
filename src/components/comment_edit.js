import React, {Component} from 'react';
import {editComment } from "../actions";
import { connect } from "react-redux";

class CommentEdit extends Component {
  constructor(props){
    super(props);
    this.state={editComment:this.props.initContent};
  }
  onEditCommentChange = (event) => {
  	this.setState({
   		editComment:event.target.value
  	});
  }
  onSaveEditClick = () => {
    
    if(this.state.editComment){
      this.props.editComment(this.props.commentID, this.state.editComment);
      this.setState({
   	  	editComment:''
  	  });
  	  this.props.toggleEdit();
    }
    
  }
  render () {
     return (
      <div>
        <input required 
               onChange={this.onEditCommentChange} 
               value={this.state.editComment} 
               type="text" 
               className="form-control" 
               placeholder={this.props.initContent}>
         </input>
         <button type="button" onClick={this.onSaveEditClick} className='btn btn-success mt-2'>Save</button>
       </div>
    ) 
  }
}
export default connect(null, {editComment })(CommentEdit);