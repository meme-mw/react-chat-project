function Comments(props) {
   let dir=props.cmntId==props.uId?'chat chat-start ':'chat chat-end'
   let img=props.uId===1?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyl8LaVifCaOVhxheBx_WngRqVN7aEkGqLgQ&s" :'https://cdn.vectorstock.com/i/500p/97/32/man-silhouette-profile-picture-vector-2139732.jpg'

    return (
        <div className="chat-header">
          
        <div className={dir} >
          {props.name}
        <div className="chat-image avatar" >
          <div className="w-7 rounded-full" >
            <img
              alt="Tailwind CSS chat bubble component"
              src={img} />
          </div>
        </div>
        <div className="chat-bubble p-1 text-center "  style={{minHeight:"2rem !important"}}>{props.comment}</div>
        
      </div>
      </div>
    )
}

export default Comments