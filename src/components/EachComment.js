import React, {Component} from 'react';
import CommentEdit from './comment_edit'

class EachComment extends Component {
  constructor(props){
    super(props);
    this.state={isEditingComment:false};
  }
  onEditCommentClick = () => {
    this.setState({
      isEditingComment:!this.state.isEditingComment
    })
  }

  render () {
     return (
      <div>
        <div className="" style={{'margin':'1px'}}> 
          <h5 className="">
            {this.props.comment.authorID}
          </h5>
          <div className="card-body clearfix" style={{'padding':'1px'}}>
            {!this.state.isEditingComment? 
              (<p className="postContent">{this.props.comment.content}</p>) :
              (<CommentEdit commentID={this.props.comment._id} initContent={this.props.comment.content} toggleEdit={this.onEditCommentClick}/>)
            }
            <div className='btn-group float-right'>
              <button type="button" onClick={this.props.onDeleteClick(this.props.comment._id)} className='btn btn-danger'>Delete</button>
              <button type="button" onClick={this.onEditCommentClick} className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default EachComment;