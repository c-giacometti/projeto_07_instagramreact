export default function Stories(){

    const storyArray = [
        {img: 'assets/img/9gag.svg', alt: 'Story', user: '9gag'},
        {img: 'assets/img/meowed.svg', alt: 'Story', user: 'meowed'},
        {img: 'assets/img/barked.svg', alt: 'Story', user:'barked'},
        {img: 'assets/img/nathanwpylestrangeplanet.svg', alt: 'Story', user:'nathanwpylestrangeplanet'},
        {img: 'assets/img/wawawicomics.svg', alt: 'Story', user:'wawawicomics'},
        {img: 'assets/img/respondeai.svg', alt: 'Story', user:'respondeai'},
        {img: 'assets/img/filomoderna.svg', alt: 'Story', user:'filomoderna'},
        {img: 'assets/img/memeriagourmet.svg', alt: 'Story', user:'memeria gourmet'}
    ];

    return (
        <div class="stories">
            {storyArray.map(story => (
                <Story 
                img={story.img} 
                alt={story.alt} 
                user={story.user}
                />
                ))
            }
            <Arrow />
        </div>
    );

}

function Story(props){

    return (
        <div class="story">
            <div class="imagem"><img src={props.img} alt={props.alt} /></div>
            <div class="usuario">{props.user}</div>
        </div>
    );

}

function Arrow(){

    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );

}