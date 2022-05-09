export default function Sidebar(){

  const arrayUser = [
    {
      userImg: 'assets/img/catanacomics.svg',
      userName: 'catanacomics',
      userDescription: 'catana',
      altText: 'usuario'
    }
  ];

  return (
    <div class="sidebar">
      {arrayUser.map(user => (
        <User 
        userImg={user.userImg}
        altText={user.altText}
        userName={user.userName}
        userDescription={user.userDescription}
        />
      ))}
      <Sugestions />
      <Links />
      <Copyright />
    </div>
  );

}

function User(props){
  
  return (
    <div class="usuario">
      <img src={props.userImg} alt={props.altText}/>
      <div class="texto">
        <strong>{props.userName}</strong>
        {props.userDescription}
      </div>
    </div>
  );

}

function Sugestions(){

  const arraySugestions = [
    {sugestionImg: 'assets/img/bad.vibes.memes.svg', followUser: 'bad.vibes.memes', follow: true},
    {sugestionImg: 'assets/img/chibirdart.svg', followUser: 'chibirdart', follow: true},
    {sugestionImg: 'assets/img/razoesparaacreditar.svg', followUser: 'razoesparaacreditar', follow: false},
    {sugestionImg: 'assets/img/adorable_animals.svg', followUser: 'adorable_animals', follow: true},
    {sugestionImg: 'assets/img/smallcutecats.svg', followUser: 'smallcutecats', follow: true}
  ];

  return(
    <div class="sugestoes">
      <SugestionsTitle />
      {arraySugestions.map(FollowSugestions)}
    </div>
  );
  
}

function SugestionsTitle(){

  return (
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );

}

function FollowSugestions(object){

  return(
    <div class="sugestao">
       {object.follow ? <RenderUsers Img={object.sugestionImg} Username={object.followUser} Follow={"Segue você"} /> : <RenderUsers Img={object.sugestionImg} Username={object.followUser} Follow={"Novo no Instagram"} /> }
       <div class="seguir">Seguir</div>
    </div>
  );

}

function RenderUsers(props){

  return (
    <div class="usuario">
      <img src={props.Img} />
      <div class="texto">
        <div class="nome">{props.Username}</div>
        <div class="razao">{props.Follow}</div>
      </div>
    </div>
  );

}

function Links(){

  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );

}

function Copyright(){

  return (
    <div class="copyright">
      © 2021 INSTAGRAM DO FACEBOOK
    </div>
  );

}