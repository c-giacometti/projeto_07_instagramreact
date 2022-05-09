export default function Posts(){

  const postsArray = [
    {
      imgUser:'assets/img/meowed.svg', 
      user:'meowed', 
      postImg:'assets/img/gato-telefone.svg', 
      userLikeImg:'assets/img/respondeai.svg', 
      userLike:'respondeai', 
      likeQnt:'101.523'
    },
    {
      imgUser:'assets/img/barked.svg', 
      user:'barked', 
      postImg:'assets/img/dog.svg', 
      userLikeImg:'assets/img/adorable_animals.svg', 
      userLike:'adorable_animals', 
      likeQnt:'99.159'
    }
  ];

  return (
    <div class="posts">
      {postsArray.map(render => (
        <Post
        imgUser={render.imgUser}
        user={render.user}
        postImg={render.postImg}
        userLikeImg={render.userLikeImg}
        userLike={render.userLike}
        likeQnt={render.likeQnt}
        />
      ))}
    </div>
  );

}

function Post(props){

  return (
    <div class="post">
      <PostTop imgUser={props.imgUser} user={props.user} />
      <PostContent postImg={props.postImg} />
      <div class="fundo">
        <PostActions />
        <PostLikes userLikeImg={props.userLikeImg} userLike={props.userLike} likeQnt={props.likeQnt} />
      </div>
    </div>
  );

}

function PostTop(props){

  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.imgUser}/>
        {props.user} 
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );

}

function PostContent(props){

  return (
    <div class="conteudo">
      <img src={props.postImg} />
    </div>
  );

}

function PostActions(){

  return (
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );

}

function PostLikes(props){

  return (
    <div class="curtidas">
      <img src={props.userLikeImg} />
      <div class="texto">
        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.likeQnt} pessoas</strong>
      </div>
    </div>
  );
  
}